// flow.js — small helper to nudge the animated flow overlay for a subtle parallax effect
// - listens to mousemove and scroll and updates CSS variables --flow-x and --flow-y
// - keeps updates throttled via requestAnimationFrame

(function(){
  if(!document.documentElement) return;
  const root = document.documentElement;
  let mouseX = 0.5, mouseY = 0.5;
  let scrollY = 0;
  let raf = null;

  function onMove(e){
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX || (w/2)) / w;
    const y = (e.clientY || (h/2)) / h;
    mouseX = x;
    mouseY = y;
    schedule();
  }

  function onScroll(){
    scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    schedule();
  }

  function schedule(){
    if(raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      // combine mouse and scroll for subtle movement
      const xPct = (mouseX * 60 + 50 * scrollY) / 110 * 100; // range approx 0-100
      const yPct = (mouseY * 60 + 20 * scrollY) / 80 * 100;
      root.style.setProperty('--flow-x', xPct + '%');
      root.style.setProperty('--flow-y', yPct + '%');
    });
  }

  // Throttle attaching on devices without pointer support
  const supportsPointer = 'onpointermove' in window || 'onmousemove' in window;
  if(supportsPointer){
    window.addEventListener('mousemove', onMove, { passive: true });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // initial values
  onScroll();
})();

(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menu && nav) {
    const small = matchMedia('(max-width: 760px)');
    const syncMenu = () => { menu.hidden = !small.matches; nav.classList.toggle('is-collapsed', small.matches); menu.setAttribute('aria-expanded', String(!small.matches)); };
    syncMenu(); small.addEventListener('change', syncMenu);
    menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-collapsed', open); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && small.matches && menu.getAttribute('aria-expanded') === 'true') { nav.classList.add('is-collapsed'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); } });
  }
  const theme = document.querySelector('.theme-toggle');
  if (theme) {
    theme.hidden = false;
    const label = () => { const dark = document.documentElement.dataset.theme === 'dark'; theme.textContent = dark ? 'Light' : 'Dark'; theme.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`); };
    label(); theme.addEventListener('click', () => { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; try { localStorage.setItem('editorial-theme', next); } catch (_) {} label(); });
  }
  const controls = document.querySelector('.library-controls');
  if (controls) {
    controls.hidden = false;
    const search = document.querySelector('#article-search');
    const buttons = [...document.querySelectorAll('[data-topic]')];
    const articles = [...document.querySelectorAll('[data-article]')];
    let topic = '';
    const normalize = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const render = (updateURL = true) => {
      const query = search.value.trim().toLowerCase(); let count = 0;
      articles.forEach(article => { const topics = JSON.parse(article.dataset.topics); const visible = (!topic || topics.some(item => normalize(item) === normalize(topic))) && article.textContent.toLowerCase().includes(query); article.hidden = !visible; if (visible) count++; });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(normalize(button.dataset.topic) === normalize(topic))));
      document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'article' : 'articles'}`;
      document.querySelector('#no-results').hidden = count !== 0;
      if (updateURL) { const url = new URL(location.href); topic ? url.searchParams.set('topic', topic) : url.searchParams.delete('topic'); query ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q'); history.replaceState(null, '', url); }
    };
    const restore = () => { const params = new URLSearchParams(location.search); const requested = params.get('topic') || ''; topic = buttons.find(button => normalize(button.dataset.topic) === normalize(requested))?.dataset.topic || ''; search.value = params.get('q') || ''; render(false); };
    buttons.forEach(button => button.addEventListener('click', () => { topic = button.dataset.topic; render(); }));
    search.addEventListener('input', () => render()); window.addEventListener('popstate', restore); restore();
  }
  const body = document.querySelector('#article-body');
  const toc = document.querySelector('.toc');
  if (body && toc) {
    const headings = [...body.querySelectorAll('h2')];
    if (headings.length > 1) {
      const list = document.querySelector('#toc-list');
      headings.forEach((heading, index) => { if (!heading.id) { let id = `article-section-${index + 1}`; while (document.getElementById(id)) id += '-section'; heading.id = id; } const item = document.createElement('li'); const link = document.createElement('a'); link.href = '#' + heading.id; link.textContent = heading.textContent; item.append(link); list.append(item); });
      toc.hidden = false; if (matchMedia('(max-width: 760px)').matches) toc.querySelector('details').open = false;
    }
  }
})();

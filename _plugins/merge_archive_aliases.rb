# Tags such as "AI" and "ai" share one archive URL. Keep all their posts
# on that URL instead of letting one generated page overwrite another.
module Jekyll
  class MergeArchiveAliases < Generator
    safe true
    priority :lowest

    def generate(site)
      archives = site.pages.select { |page| page.is_a?(Jekyll::Archives::Archive) }
      archives.group_by(&:url).each_value do |pages|
        next if pages.length < 2

        keeper = pages.first
        keeper.posts = pages.flat_map(&:posts).uniq.sort_by(&:date).reverse
        pages.drop(1).each do |duplicate|
          site.pages.delete(duplicate)
          site.config.fetch('archives', []).delete(duplicate)
        end
      end
    end
  end
end

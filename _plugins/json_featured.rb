require 'json'

module Jekyll

  class JSONFeaturedGenerator < Generator
    safe true

    def generate(site)

      output = []

      site.posts.docs.reverse[0..3].each do |post|
        output.append({
            "title": post.data["title"],
            "categories": post.data["categories"],
            "thumbnail": Jekyll.configuration({})['url'] || '' + Jekyll.configuration({})['baseurl'] || '' + post.data["thumbnail"] || ''
        })
      end

      path = 'featured.json'

      FileUtils.mkdir_p(File.dirname(path))
      json = output.to_json
      File.write(path, json) unless File.exist?(path) && File.read(path) == json
    end

  end

end

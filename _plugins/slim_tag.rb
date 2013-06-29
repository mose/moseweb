require 'rdiscount'
require 'awesome_print'

module Jekyll
  class SlimTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end
    def render(content)
      #context.environments[0].ai(html: true)
      
      Slim::Template.new(File.join(Dir.pwd, '_includes', @text)).render(content)
    end
  end
end
Liquid::Template.register_tag('slim', Jekyll::SlimTag)

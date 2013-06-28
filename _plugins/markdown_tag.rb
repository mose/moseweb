require 'rdiscount'

module Jekyll
  class MarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end
    def render(context)
      RDiscount.new(File.read(File.join(Dir.pwd, '_includes', @text))).to_html
    end
  end
end
Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)

require 'slim'

module Jekyll
  class SlimConverter < Converter
    priority :low

    def matches(ext)
      ext == '.slim'
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      Slim::Template.new({}) { content }.render
    end
  end
end
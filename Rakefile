require 'jekyll'
require 'tmpdir'

GITHUB_REPONAME = "mose/mose.github.com"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    oldir = Dir.pwd
    FileUtils.cp_r "_site/.", tmp
    Dir.chdir tmp
    system "git init"
    system "git add ."
    system "git commit -m'Site updated at #{Time.now.utc}'"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin master --force"
    Dir.chdir oldir
  end
end

desc "update mose.fr"
task :upload => [:generate] do
  system "rsync -av --stats --delete --exclude keybase.txt _site/ mose.com:web/mose.fr/cv"
end

task :default => "generate"

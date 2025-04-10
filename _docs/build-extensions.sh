#!/bin/bash
export repo_url="https://github.com/apache/ignite-extensions.git"
export branch="master"
export tmp_dir=tmp
export action=build


rm -rf $tmp_dir
mkdir $tmp_dir
git -C $tmp_dir clone --depth 1 --single-branch --branch $branch $repo_url extensions

rm -rf _docs _data _plugins _site _config.yml
cp -R $tmp_dir/extensions/docs/_docs _docs
cp -R $tmp_dir/extensions/docs/_data/ _data
cp -R $tmp_dir/extensions/docs/_plugins/ _plugins
cp $tmp_dir/extensions/docs/_config.yml _config.yml

sed -i '/^attrs: &asciidoc_attributes$/a\  section: extensions' _config.yml
sed -i 's/url: /url: \/extensions\//g' _data/toc.yaml

bundle install
bundle exec jekyll $action

cp -R _site/docs/. ../docs/extensions

# cleanup after the build
rm -rf  $tmp_dir _docs _data _plugins _site

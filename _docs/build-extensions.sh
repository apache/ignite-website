#!/bin/bash
export repo_url="https://github.com/apache/ignite-extensions.git"
export branch="master"
export tmp_dir=tmp
export action=build


rm -rf $tmp_dir
mkdir $tmp_dir
git -C $tmp_dir clone --depth 1 --single-branch --branch $branch $repo_url extensions

sed -i 's/url: /url: \/extensions\//g' $tmp_dir/extensions/docs/_data/toc.yaml

(cd $tmp_dir/extensions/docs; bundle install; bundle exec jekyll $action)

cp -R $tmp_dir/extensions/docs/_site/docs/. ../docs/extensions

# cleanup after the build
rm -rf  $tmp_dir

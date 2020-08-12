#!/bin/bash

export latest=no

export branch=master
export action=build

while [ "$#" -gt 0 ]; do
  case "$1" in
    --version=*)
        version="${1#*=}"
        ;;
     --latest=*)
        latest="${1#*=}"
        ;;
    --github-branch=*)
        branch="${1#*=}"
        ;;
    --serve)
      action=serve
      ;;
    *)
      printf "***********************************************************\n"
      printf "* Error: Invalid argument,  *\n"
      printf "***********************************************************\n"
      exit 1
  esac
  shift
done

if [ -z "$version" ]; then
  echo "specify the version: --version=1.0.0"
  exit 1
fi


export tmp_dir=tmp

rm -rf $tmp_dir
mkdir $tmp_dir

git -C $tmp_dir  clone --single-branch --branch $branch  https://github.com/apache/ignite.git docs_$version


rm -rf _docs _data
cp -r $tmp_dir/docs_$version/docs/_docs _docs
cp -r $tmp_dir/docs_$version/docs/_data/ _data


# if [ "$latest" = "yes" ]; then
# sed  "s/{version}/$version/g;s/{base_url}/\/docs\/latest/g"  config.template  > _config.yml
# else
sed  "s/{version}/$version/g;s/{base_url}/\/docs/g"  _config.template  > _config.yml
# fi

# cat $tmp_dir/docs_$version/docs.properties  | sed 's/=/: /;s/^ */    /' >> _config.yml

bundle exec jekyll $action  

if [ "$action" = "build" ]; then
  echo "ToDo: move the built docs to the right place\n"
fi

rm -r _config.yml
rm -rf _data
rm -rf _docs
rm -rf  $tmp_dir

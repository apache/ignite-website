#!/bin/bash

export latest=no
export branch=master
export action=build

export versions_filename="../docs/available-versions.txt"
export ignite3_versions_filename="../docs/ignite3/available-versions.txt"

# Usage example
# ./build.sh --repo='https://github.com/apache/ignite-3.git' --version=3.0.0-beta --github-branch=IGNITE-16942 --ignite3

while [ "$#" -gt 0 ]; do
  case "$1" in
    --version=*)
        version="${1#*=}"
        ;;
     --latest)
        latest="yes"
        ;;
    --github-branch=*)
        branch="${1#*=}"
        ;;
    --serve)
      action=serve
      ;;
    --ignite3)
      target=ignite3
      ;;
    --repo=*)
      repo="${1#*=}"
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

# There are different repos for version 2 and 3.
export repo_url="https://github.com/apache/ignite.git"
if [[ "${target}" == "ignite3" ]] ; then
  if [[ -z "${repo}" ]] ; then
    repo_url="https://github.com/apache/ignite-3.git"
  else
    repo_url="${repo}"
  fi
fi

# clone Ignite repo locally to copy only the content for docs. 
#   @todo: is there a way to avoid cloning the entire branch and bring only the docs/ dir?
export tmp_dir=tmp
rm -rf $tmp_dir
mkdir $tmp_dir
git -C $tmp_dir clone --depth 1 --single-branch --branch $branch $repo_url docs_$version
rm -rf _docs _data _plugins
cp -R $tmp_dir/docs_$version/docs/_docs _docs
cp -R $tmp_dir/docs_$version/docs/_data/ _data
cp -R $tmp_dir/docs_$version/docs/_plugins/ _plugins

# update contents for the jekyll config file
if [ "$target" = "ignite3" ]; then
  if [ "$latest" = "yes" ]; then
    sed "s/{major_version}/3/g;s/{version}/$version/g;s/{base_url}/\/docs\/ignite3\/latest/g" _config.template > _config.yml
  else
    sed "s/{major_version}/3/g;s/{version}/$version/g;s/{base_url}/\/docs\/ignite3\/$version/g" _config.template > _config.yml
  fi
else
  if [ "$latest" = "yes" ]; then
    sed "s/{major_version}/2/g;s/{version}/$version/g;s/{base_url}/\/docs\/ignite2\/latest/g" _config.template > _config.yml
  else
    sed "s/{major_version}/2/g;s/{version}/$version/g;s/{base_url}/\/docs\/ignite2\/$version/g" _config.template > _config.yml
  fi
fi


# replace docs repo URL in case Ignite 3 docs build in progress
# used for 'Edit' button on every page
if [[ "${target}" == "ignite3" ]] ; then
  sed -i "s#ignite/tree/IGNITE-7595#ignite-3/tree/main#g" _config.yml
fi

# build/serve
bundle install
bundle exec jekyll $action  

# move built files to /docs/ dir under website root dir.
if [ "$action" = "build" ]; then
  if [[ "${target}" == "ignite3" ]] ; then
    rm -rf ../docs/ignite3/$version
    cp -R _site/docs/$version ../docs/ignite3/$version
    cp -R _site/assets ../

    # if [ "$latest" = "yes" ]; then
      # rm ../docs/latest
      # ln -s ../docs/$version ../docs/latest
    # fi

    # add the version number to the .txt file used by the version selector dropdown on the UI
    if ! grep -Fxq "$version" "$ignite3_versions_filename"; then
      # adds the version to the top of the list if 'latest', otherwise to the bottom
      if [ "$latest" = "yes" ]; then
        cat <(echo "$version") "$ignite3_versions_filename" > ../docs/ignite3/available-versions.new
        mv ../docs/available-versions.new "$ignite3_versions_filename"
      else
        #just in case the file doesn't end with an EOL already
        if [ -z "$tail -c 1 <"$ignite3_versions_filename")" ]; then
          echo "" >> "$ignite3_versions_filename"
        fi

        echo "$version" >> "$ignite3_versions_filename"
      fi
    fi
  else
    rm -rf ../docs/ignite2/$version
    cp -R _site/docs/$version ../docs/ignite2/$version
    cp -R _site/assets ../

    # if [ "$latest" = "yes" ]; then
      # rm ../docs/latest
      # ln -s ../docs/$version ../docs/latest
    # fi

    # add the version number to the .txt file used by the version selector dropdown on the UI
    if ! grep -Fxq "$version" "$versions_filename"; then
      # adds the version to the top of the list if 'latest', otherwise to the bottom
      if [ "$latest" = "yes" ]; then
        cat <(echo "$version") "$versions_filename" > ../docs/available-versions.new
        mv ../docs/available-versions.new "$versions_filename"
      else
        #just in case the file doesn't end with an EOL already
        if [ -z "$tail -c 1 <"$versions_filename")" ]; then
          echo "" >> "$versions_filename"
        fi

        echo "$version" >> "$versions_filename"
      fi
    fi
  fi
fi

# clean up some stuff
rm -r _config.yml
rm -rf _data
rm -rf _docs
rm -rf _plugins
rm -rf  $tmp_dir

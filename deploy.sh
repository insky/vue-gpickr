#!/usr/bin/env sh

set -e
npm run _deploy

cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:insky/vue-gpickr.git master:gh-pages

cd -
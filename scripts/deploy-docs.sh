#!/usr/bin/env bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd docs

git init
git config user.name "Umidbek Karimov"
git config user.email "uma.karimov@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/umidbekkarimov/react-flag-kit.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
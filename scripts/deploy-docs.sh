#!/usr/bin/env bash

set -o errexit -o nounset

cd docs

git init
git config user.name "Umidbek Karimov"
git config user.email "uma.karimov@gmail.com"

git add .
git commit -m "Deploy Docs to GitHub Pages" > /dev/null

git push --force --quiet "https://$GH_TOKEN@github.com/umidbekkarimov/react-flag-kit.git" master:gh-pages

cd ..

#!/bin/bash

# Purpose: Release new docs version
# Input: New version number and name of haystack release branch

mkdir $1

echo $1 >> versions.txt
echo " " >> versions.txt
# Remove empty lines
tr -d '\n' < versions.txt > temp.txt && mv temp.txt versions.txt

npm run update_apidocs_dev $2
npm run update_tutorialsdocs_dev $2
npm run update_usagedocs_dev $2
npm run update_img_dev $2
npm run update_benchmarks_dev $2

cp -r site/en/menuStructure/ $1site/en/

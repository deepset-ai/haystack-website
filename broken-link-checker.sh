#!/bin/bash

start=$SECONDS

urls=$(curl http://haystackhub-website.s3-website.eu-central-1.amazonaws.com/sitemap.xml | sitemap-urls)

for url in $(echo $urls | tr " " "\n")
do
    url="${url/https:\/\/haystack.deepset.ai/http:\/\/haystackhub-website.s3-website.eu-central-1.amazonaws.com}"
    blc $url -ro --exclude https://www.linkedin.com/company/deepset-ai/ --exclude http://127.0.0.1:8000/docs --firlter-level 1
done

duration=$(( SECONDS - start ))

echo $duration
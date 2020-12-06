#!/bin/bash

urls=$(curl http://haystackhub-website.s3-website.eu-central-1.amazonaws.com/sitemap.xml  | tac | tac | sitemap-urls)

for url in $(echo $urls | tr " " "\n")
do
    if [ "$1" = "dev" ]; then
        url="${url/https:\/\/haystack.deepset.ai/http:\/\/haystackhub-website.s3-website.eu-central-1.amazonaws.com}"
    fi
    blc $url -ro --exclude https://www.linkedin.com/company/deepset-ai/ --exclude http://127.0.0.1:8000/docs --firlter-level 1
done

echo $duration
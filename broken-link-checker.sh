#!/bin/bash

if [ "$1" = "dev" ]; then
   urls=$(curl http://haystackhub-website.s3-website.eu-central-1.amazonaws.com/sitemap.xml | sitemap-urls)
else 
   urls=$(curl https://haystack.deepset.ai/sitemap.xml | sitemap-urls) 
fi

for url in $(echo $urls | tr " " "\n")
do
    if [ "$1" = "dev" ]; then
        url="${url/https:\/\/haystack.deepset.ai/http:\/\/haystackhub-website.s3-website.eu-central-1.amazonaws.com}"
    fi
    blc $url -o --exclude https://www.linkedin.com/company/deepset-ai/ \
    --exclude http://127.0.0.1:8000/docs \
    --exclude https://medium.com/deepset-ai/modern-question-answering-systems-explained-4d0913744097 \
    --exclude http://haystackhub-website.s3-website.eu-central-1.amazonaws.com/docs/v0.4.0/tutorial2md \
    --exclude https://haystack.deepset.ai/docs/v0.4.0/tutorial2md \
    --exclude https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/img/annotation_tool.png \
    --exclude http://haystackhub-website.s3-website.eu-central-1.amazonaws.com/docs/v0.4.0/tutorial6md \
    --exclude https://haystack.deepset.ai/docs/v0.4.0/tutorial6md \
    --exclude https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/img/colab_gpu_runtime.jpg \
    --exclude http://github.com/deepset-ai/haystack/ \
    --exclude http://github.com/deepset-ai/haystack/stargazers/ \
    --exclude https://twitter.com/deepset_ai/ \
    --exclude https://huggingface.co/illuin/camembert-large-fquad \
    --exclude https://deepset.ai/imprint \
    --filter-level 1 --host-requests 1 
    status=$?
    
    if [ "$status" != "0" ]; then
        exit 1
    fi
    sleep 1
done

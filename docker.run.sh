#!/bin/bash

docker run \
--rm \
-p 80:80 \
-v $(pwd):/usr/share/nginx/html \
nginx:alpine

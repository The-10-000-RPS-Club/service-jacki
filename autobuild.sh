#!/bin/bash

docker-compose up -d

docker image tag questions_service:latest jredmon1698/question-service

docker push jredmon1698/rei-review-service:latest

docker-compose down --rmi all

docker rmi jredmon1698/proxy-rei:latest

docker rm -f proxy-belesiu_proxy_1

docker volume prune

docker rmi $(docker images -f "dangling=true" -q)

echo  "Done - Now go to to instance on EC2 to pull new image - and do not forget to reseed database ;)"
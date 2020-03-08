docker build -t zeferinix/faker-rest:latest .
docker push zeferinix/faker-rest:latest
ssh root@66.42.56.111 "docker pull zeferinix/faker-rest:latest && docker tag zeferinix/faker-rest:latest dokku/faker-rest.zeferinix.com:latest && dokku tags:deploy faker-rest.zeferinix.com latest"

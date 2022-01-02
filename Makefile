.PHONY: build push pull run
build:
	docker build -t unity.servehttp.com:5000/zeus-service:master . --no-cache
push:
	docker push unity.servehttp.com:5000/zeus-service:master && docker push unity.servehttp.com:5000/zeus-service-database:master
pull:
	docker pull unity.servehttp.com:5000/zeus-service:master && docker pull unity.servehttp.com:5000/zeus-service-database:master
run:
	docker run --name zeus-service -p 3011:3001 unity.servehttp.com:5000/zeus-service:master



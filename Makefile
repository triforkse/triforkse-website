all: build

build:
	yarn run build

run:
	yarn run start

deploy: build
	s3cmd sync -rr --delete-removed build/ s3://www.trifork.se/

.PHONY: build

default: clean build

clean:
	@rm -rf out/*

build:
	@./make.sh < template/main.html

install: default
	@cp -r out/* ~/www/fussel.space/

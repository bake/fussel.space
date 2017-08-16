default:
	@./make.sh < template/main.html

install: build
	@cp -r out/* ~/www/fussel.space/

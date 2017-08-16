default:
	@./make.sh < template/main.html

install: default
	@cp -r out/* ~/www/fussel.space/

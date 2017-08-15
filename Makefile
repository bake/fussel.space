default:
	@./make.sh < template.html

install: build
	@cp -r out/* ~/www/fussel.space/

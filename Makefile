default: clean build

clean:
	@rm -rf out/*

html:
	@./compile.sh < template/main.html

css:
	@stylus assets/css/main.styl

assets: css
	@mkdir -p out/assets/{css,img}
	@cp -r assets/css/*.css out/assets/css/
	@cp -r assets/img/ out/assets/img/

build: assets html

install: default
	@cp -r out/* ~/www/fussel.space/

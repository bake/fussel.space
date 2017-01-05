#!/usr/bin/env bash

tpl=`cat -`
out="$(pwd)/out"
rm -rf "${out}"
mkdir -p "${out}"
cp -r "./assets" "${out}/assets"
cd "./pages/"
for page in $(find . -name "*.html"); do
	path="${out}/$(dirname $page)"
	name=`basename "$page"`
	mkdir -p "${path}"
	eval "echo \"${tpl}\"" > "$path/$name"
done

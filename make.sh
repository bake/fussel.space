#!/usr/bin/env bash

tpl=`cat -`
out="$(pwd)/out"
rm -rf "${out}"
if [ ! -d "${out}" ]; then
	mkdir -p "${out}"
fi
cp -r "./assets" "${out}/assets"
cd "./pages/"
for page in $(find . -name "*.html"); do
	path="${out}/$(dirname $page)"
	name=`basename "$page"`
	mkdir -p "${path}"
	eval "echo \"${tpl}\"" > "$path/$name"
done

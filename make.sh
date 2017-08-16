#!/usr/bin/env bash

function slug {
	basename "${1}" ".html"
}

function name {
	cat "${1}" | head -n 1 | sed -e 's/<[^>]*>//g'
}

tpl=`cat -`
out="$(pwd)/out"
if [ ! -d "${out}" ]; then
	mkdir -p "${out}"
fi
rm -rf "${out}/*"
cp -r "./assets" "${out}/assets"
cd "./pages"
pages=$(find . -name "*.html" | sort)
for page in $pages; do
	path="${out}/$(dirname ${page})"
	slug=`basename "${page}" ".html"`
	mkdir -p "${path}"
	eval "echo \"${tpl}\"" > "${path}/${slug}.html"
done

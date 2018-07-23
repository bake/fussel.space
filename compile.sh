#!/usr/bin/env bash

function meta {
	cat "${1}" | grep "${2}:" | sed -e "s/^$2: //"
}

function content {
	body=`cat ${1}`
	eval "echo \"${body#*---}\""
}

tpl=`cat -`
out="$(pwd)/out"
if [ ! -d "${out}" ]; then
	mkdir -p "${out}"
fi
cd "./pages"
pages=$(find . -name "*.html" | sort)
for page in $pages; do
	echo "$page"
	path="${out}/$(dirname ${page})"
	file=`basename "${page}"`
	mkdir -p "${path}"
	eval "echo \"${tpl}\"" > "${path}/${file}"
done

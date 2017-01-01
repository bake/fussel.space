'use strict'

let highlight_current = (path) => new Promise((resolve, reject) => {
	let nav = document.querySelector(`nav a[href="${path}"]`)

	if(nav) {
		nav.classList.add('active')
		localStorage.setItem(path, true)
	}

	resolve()
})

let highlight_read = () => new Promise((resolve, reject) => {
	for(let node of [...document.querySelectorAll('nav a[href^="/"]')]) {
		let path = node.getAttribute('href')

		if(!localStorage.getItem(path)) {
			node.classList.add('new')
		}
	}

	resolve()
})

highlight_current(window.location.pathname).then(highlight_read)

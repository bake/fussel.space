'use strict'

let highlight_current = (hash) => new Promise((resolve, reject) => {
	let nav = document.querySelector(`nav a[href="${hash}"]`)

	if(nav) {
		nav.classList.add('active')
		localStorage.setItem(hash, true)
	}

	resolve()
})

let highlight_read = () => new Promise((resolve, reject) => {
	for(let node of [...document.querySelectorAll('nav a[href^="/"]')]) {
		let hash = node.getAttribute('href')

		if(!localStorage.getItem(hash)) {
			node.classList.add('new')
		}
	}

	resolve()
})

highlight_current(window.location.pathname).then(highlight_read)

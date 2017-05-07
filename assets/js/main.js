'use strict'

const highlight_current = path =>
	new Promise((resolve, reject) => {
		const nav = document.querySelector(`nav a[href="${path}"]`)

		if (nav) {
			nav.classList.add('active')
			localStorage.setItem(path, true)
		}

		resolve()
	})

const highlight_read = () =>
	new Promise((resolve, reject) => {
		for (const node of [...document.querySelectorAll('nav a[href^="/"]')]) {
			const path = node.getAttribute('href')

			if (!localStorage.getItem(path)) {
				node.classList.add('new')
			}
		}

		resolve()
	})

highlight_current(window.location.pathname).then(highlight_read)

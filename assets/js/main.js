'use strict'

let highlight_current = (hash) => new Promise((resolve, reject) => {
	for(let node of [...document.querySelectorAll('nav a')]) {
		node.classList.remove('active')
	}

	let nav = document.querySelector(`nav a[href$="#${hash}"]`)

	if(nav) {
		document.querySelector(`nav a[href$="#${hash}"]`).classList.add('active')
	}

	resolve(hash)
})

let highlight_read = () => new Promise((resolve, reject) => {
	for(let node of [...document.querySelectorAll('nav a[href^="/#"]')]) {
		node.classList.remove('new')
	}

	for(let node of [...document.querySelectorAll('nav a[href^="/#"]')]) {
		let hash = node.getAttribute('href').substr(2)

		if(!localStorage.getItem(hash)) {
			node.classList.add('new')
		}
	}

	resolve()
})

let render = (hash, box) => new Promise((resolve, reject) => {
	hash = (/^[a-z\/]+$/.test(hash)) ? hash : 'home'
	let link = document.createElement('link')

	link.rel = 'import'
	link.href = `/pages/${hash}.html`

	box.innerHTML = ''

	link.onerror = (e) => {
		reject(hash)
		location.hash = '#error'
	}

	link.onload = () => {
		let nodes = link.import.cloneNode(true).querySelector('body')

		while(nodes.hasChildNodes()) {
			box.appendChild(nodes.removeChild(nodes.firstChild))
		}

		document.querySelector('head').removeChild(link)

		resolve(hash)
	}

	document.head.appendChild(link)
})

let onload = (hash) => new Promise((resolve, reject) => {
	highlight_current(hash)
	localStorage.setItem(hash, true)
	highlight_read(hash)

	let mate

	if((hash = hash.split('/')).length < 2) return reject('no second level')
	if (hash[0] != 'mate') return reject('not mate')
	if(!(mate = meta(hash[1]))) return reject('mate not known')

	if(mate.caffeine) {
		content.innerHTML += `<p><strong>Koffein:</strong> ${mate.caffeine}mg/100ml</p>`
	}

	if(mate.id.length) {
		content.innerHTML += `<p>${mate.name} auf <a href="https://matemonkey.com/map/dealer/?products=${mate.id.join(',')}">MateMonkey</a></p>`
	}

	resolve(hash)
})

let nav = document.querySelector('body > aside > nav')
let content = document.querySelector('body > section > article')

render('navigation', nav).then(highlight_current).then(highlight_read).catch(() => {})
render(location.hash.substring(1), content).then(onload).catch(() => {})
onhashchange = () => render(location.hash.substring(1), content).then(onload).catch(() => {})

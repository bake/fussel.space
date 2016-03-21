'use strict'

let delnodes = (nodes) => {
	for(let node of Array.from(nodes)) {
		node.parentNode.removeChild(node)
	}
}

let open = (hash) => {
	hash = (/^[a-z\/]+$/.test(hash)) ? hash : 'home'
	let box = document.querySelector('body > section')
	let link = document.createElement('link')

	link.rel = 'import'
	link.href = `/pages/${hash}.html`

	link.onerror = (e) => location.hash = '#error'
	link.onload = () => {
		delnodes(box.querySelectorAll('article'))
		box.appendChild(link.import.cloneNode(true).querySelector('article'))
	}

	delnodes(document.head.querySelectorAll('link[rel=import]'))
	document.head.appendChild(link)

	for(let node of Array.from(document.querySelectorAll('nav a'))) {
		node.classList.remove('active')
	}

	document.querySelector(`nav a[href$="#${hash}"]`).classList.add('active')
}

open(location.hash.substring(1))
onhashchange = () => open(location.hash.substring(1))

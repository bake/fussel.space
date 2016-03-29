'use strict'

let meta = (hash) => {
	let data = [
		{ caffeine: 25, id: [25, 40], hash: 'leet', name: '1337Mate' },
		{ caffeine: 20, id: [1], hash: 'club', name: 'Club Mate' },
		{ caffeine: 18, id: [24], hash: 'flora', name: 'Flora Power' },
		{ caffeine: 20, id: [31], hash: 'kolle', name: 'kolle-mate' },
		{ caffeine: 22, id: [32], hash: 'maetchen', name: 'berliner mätchen' },
		{ caffeine: 6.2, id: [17], hash: 'makava', name: 'MAKAvA' },
		{ caffeine: 6.5, id: [33, 34, 35, 36], hash: 'maki', name: 'Maki Mate' },
		{ caffeine: 0, id: [], hash: 'mari', name: 'Mari' },
		{ caffeine: 30, id: [37], hash: 'matemate', name: 'Mate Mate' },
		{ caffeine: '∞', id: [], hash: 'metamate', name: 'Meta Mate' },
		{ caffeine: 20, id: [12], hash: 'miomio', name: 'MioMioMate' },
		{ caffeine: 0, id: [], hash: 'mixery', name: 'Mixery Mate' },
		{ caffeine: 22, id: [18, 19, 20, 21, 22, 23], hash: 'top', name: 'Top Mate' },
		{ caffeine: '∞', id: [8], hash: 'tschunk', name: 'Tschunk' },
		{ caffeine: 21, id: [], hash: 'ulti', name: 'Ultichá Mate' },
		{ caffeine: 0, id: [], hash: 'voelkel', name: 'Voelkel' }
	]

	return data.filter((mate) => hash == mate.hash)[0] || null
}

#!/usr/bin/env node
function spin(s, i = 0) {
	process.stdout.write('\x1bc')
	console.log(s[i])
	setTimeout(() => spin(s, i == s.length - 1 ? 0 : i + 1), 100)
}

// spin('\\|/-')
spin('◴◷◶◵')

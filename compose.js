module.exports = (...functions) => accumulator => {
	let length = functions.length
	while (length > 0) {
		accumulator = functions[--length](accumulator)
	}
	return accumulator
}

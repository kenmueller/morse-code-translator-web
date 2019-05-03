document.addEventListener('DOMContentLoaded', () => {
	const findMorse = element => type =>
		morse.find(object => object[type] === element)[type ? 0 : 1]

	const morseChanged = () =>
		// TODO: Finish this function
		alert('do this')

	const textChanged = () =>
		document.querySelectorAll('.textarea.translate.text').forEach(element =>
			document.querySelectorAll('.textarea.translate.morse').forEach(morseTextArea =>
				morseTextArea.value = element.value.split('').reduce((acc, character) => acc.concat(findMorse(character)(0)), '')
			)
		)

	document.querySelectorAll('.textarea.translate.morse').forEach(element => element.addEventListener('input', morseChanged))
	document.querySelectorAll('.textarea.translate.text').forEach(element => element.addEventListener('input', textChanged))
})

const morse = [
	[' ', '/'],
	['0', '-----'],
	['1', '.----'],
	['2', '..---'],
	['3', '...--'],
	['4', '....-'],
	['5', '.....'],
	['6', '-....'],
	['7', '--...'],
	['8', '---..'],
	['9', '----.'],
	['a', '.-'],
	['b', '-...'],
	['c', '-.-.'],
	['d', '-..'],
	['e', '.'],
	['f', '..-.'],
	['g', '--.'],
	['h', '....'],
	['i', '..'],
	['j', '.---'],
	['k', '-.-'],
	['l', '.-..'],
	['m', '--'],
	['n', '-.'],
	['o', '---'],
	['p', '.--.'],
	['q', '--.-'],
	['r', '.-.'],
	['s', '...'],
	['t', '-'],
	['u', '..-'],
	['v', '...-'],
	['w', '.--'],
	['x', '-..-'],
	['y', '-.--'],
	['z', '--..'],
	['.', '.-.-.-'],
	[',', '--..--'],
	['?', '..--..'],
	['!', '-.-.--'],
	['-', '-....-'],
	['/', '-..-.'],
	['@', '.--.-.'],
	['(', '-.--.'],
	[')', '-.--.-']
]
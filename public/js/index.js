document.addEventListener('DOMContentLoaded', () => {
	const findMorse = element => type =>
		morse.find(object => object[type] === element)[type ? 0 : 1]
	
	const translateMorse = characters => type =>
		characters.reduce((acc, character) => acc.concat(findMorse(character)(type)), '')

	const morseChanged = () =>
		document.querySelectorAll('.textarea.translate.morse').forEach(element =>
			document.querySelectorAll('.textarea.translate.text').forEach(textTextArea =>
				textTextArea.value = translateMorse(element.value.trim().split(/\s+/g))(1)
			)
		)

	const textChanged = () =>
		document.querySelectorAll('.textarea.translate.text').forEach(element =>
			document.querySelectorAll('.textarea.translate.morse').forEach(morseTextArea =>
				morseTextArea.value = translateMorse(element.value.trim().split(''))(0).split('').join(' ')
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
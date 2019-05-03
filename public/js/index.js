document.addEventListener('DOMContentLoaded', () => {
	function translateMorse(morse) {

	}

	function translateText(text) {
		
	}

	function morseChanged() {
		document.querySelectorAll('.input.translate.morse').forEach(element =>
			document.querySelectorAll('.input.translate.text').forEach(textInput =>
				textInput.value = translateMorse(element.value)
			)
		)
	}

	function textChanged() {
		document.querySelectorAll('.input.translate.text').forEach(element =>
			document.querySelectorAll('.input.translate.morse').forEach(morseInput =>
				morseInput.value = translateText(element.value)
			)
		)
	}

	document.querySelectorAll('.input.translate.morse').forEach(element => element.addEventListener('input', morseChanged))
	document.querySelectorAll('.input.translate.text').forEach(element => element.addEventListener('input', textChanged))
})
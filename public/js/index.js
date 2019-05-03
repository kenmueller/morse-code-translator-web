document.addEventListener('DOMContentLoaded', () => {
	function translateMorse() {

	}

	function translateText() {

	}

	document.querySelectorAll('.input.translate.morse').forEach(element => element.addEventListener('input', translateMorse))
	document.querySelectorAll('.input.translate.text').forEach(element => element.addEventListener('input', translateText))
})
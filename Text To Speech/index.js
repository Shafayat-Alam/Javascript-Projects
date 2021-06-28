const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

const utterance = new SpeechSynthesisUtterance(text)

utterance.addEventListener('end', () => {
    textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})

playButton.addEventListener('click', () => {
    playText(textInput.value)
})

speedInput.addEventListener('click', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

pauseButton.addEventListener('click', pauseText)

stopButton.addEventListener('click', stopText)

function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}

function pauseText(){
    if(speechSynthesis.speaking) speechSynthesis.pause()
}

function playText(text){
    if(speechSynthesis.pause && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    } 
    if(speechSynthesis.speaking) return
    utterance.rate = speedInput.value || 1
    utterance.text = text
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}


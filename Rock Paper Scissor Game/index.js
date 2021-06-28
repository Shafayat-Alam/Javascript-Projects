const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const YourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [ 
    {
        name: "rock",
        emoji: '🗿',
        beats: 'scissors'
    },
    {
        name: "paper",
        emoji: '📄',
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: '✂',
        beats: "paper"
    }
]

selectionButtons.forEach( selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const selectionName = selectionButton.dataset.selection 
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function makeSelection(selection){
    const computerSlection = randomSelection()
    const YourWinner = isWinner(selection, computerSlection)
    const computerWinner = isWinner(computerSlection, selection)
    console.log(computerSlection)

    addSelectionResult(computerSlection, computerWinner)
    addSelectionResult(selection, YourWinner)

    if(YourWinner) incrementScore(YourScoreSpan)
    if(computerWinner) incrementScore(computerScoreSpan)
}

function randomSelection(){
    const randomIndex = Math.floor( Math.random() * SELECTIONS.length )
    return SELECTIONS[randomIndex]
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}
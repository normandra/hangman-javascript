const listOfWords = ["apple","tiger","fired"]

window.alert("lets play hangman")

// pick random word
const solution = listOfWords[Math.floor(Math.random() * listOfWords.length)]

const solutionArray = Array.from(solution)
const word = Array.from(solution)
// mask the word
for (let i = 0; i < word.length; i++) {
    word[i] = "_"
}

console.log(word.toString())
// set initial life
let life = 5
const guesses = []
while (life > 0 && solutionArray.toString() !== word.toString()) {

    const guess = window.prompt(`previous guess: ${guesses} \n guesses left: ${life} \n current word ${word} \n enter your guess (1 character)`)
    let match = 0
    for (let i = 0; i < word.length; i++) {
        if (solutionArray[i] === guess) {
            word[i] = guess
            match += 1
        }
    }

    if (match === 0) {
        life -= 1
        guesses.push(guess)
    }

}

if (life === 0) {
    window.alert(`Sorry you lost, word was ${solution}`)
} else {
    window.alert(`Conguratulation you won: ${solution}`)
}

//window.prompt("input", "default")

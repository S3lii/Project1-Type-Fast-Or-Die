/*-------------------------------- Constants --------------------------------*/

const paragraphs = [
  "Age has finally caught up with me after a grave blunder. Protect your master with your life, take this key to the hidden temple ahead, and never forget the Shinobi Code.",
  "Hesitation is defeat. Victory demands mastering deflections, reading enemy posture meters, and listening for clashing steel to parry decisive strikes.",
  "Brave Tarnished, seek the Elden Ring and become Elden Lord. Traverse the Lands Between, confront demigods in shattered realms, and let grace overcome punishing battles.",
  "The Sunken Valley presents relentless trials where swift grappling and total focus are essential to evade lethal perils and strike when openings appear.",
  "Rise, Tarnished, and let guidance lead you through Caelid and Mount Gelmir, whether wielding colossal greatswords, casting glintstone sorceries, or summoning spirit ashes.",

  "Social engineering easily bypasses technical firewalls by exploiting human trust, using deceptive phishing emails and pretexting to harvest sensitive credentials.",
  "Penetration testing simulates real-world cyberattacks through reconnaissance, port scanning, and controlled exploits to discover and patch vulnerabilities before hackers do.",
  "The CIA triad forms the core foundation of cybersecurity: Confidentiality protects private data, Integrity prevents unauthorized tampering, and Availability guarantees reliable system access.",
  "Network traffic analysis detects threats in real time by inspecting packet headers and anomalous payloads, allowing defenders to stop intrusions before full breaches occur.",

  "Debugging is like being a detective in a crime film where you are also the culprit, scouring execution logs and tracing variables only to find a single typo crashed the system.",
  "Any computer can execute code, but great developers write code humans can understand. Clean, modular architecture and clear naming save countless hours of maintenance.",
  "An algorithm provides a step-by-step procedure to solve complex problems, made significantly more efficient by pairing it with the right data structure, like hash maps or trees."
]


/*-------------------------------- Variables --------------------------------*/
let timeLeft = 60
let timer;

let mistake = true
let score = 0

let Number = Math.floor(Math.random() * paragraphs.length)
let currentP = paragraphs[Number]
let fullWords = currentP.split(/( )/)
let Paragraphwords = currentP.split("")

const punctuation = [' ', ',', '.', '!', '?']

/*------------------------ Cached Element References ------------------------*/

const startButton =document.querySelector('#startButton')
const scoreDisplay = document.querySelector('#score')
const wordDisplay = document.querySelector('#wordDisplay')
const userInput = document.querySelector('#userInput')
const letterDisplay = document.querySelector('#correctWords')
const resetButton = document.querySelector('#resetButton')

/*-------------------------------- Functions --------------------------------*/
function startTimer() {
  timeLeft = 60
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`

  timer = setInterval(() => {
    timeLeft--;
    
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`

    if (timeLeft <= 0) {
      clearInterval(timer)
      userInput.disabled = true
      wordDisplay.innerHTML = `💥 GAME OVER! 💥 The clock hit zero before you could finish. Final score: ${score}.  \n try again!`
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer)
}


function chooseParagraph() {
Number = Math.floor(Math.random() * paragraphs.length);
currentP = paragraphs[Number]
fullWords = currentP.split(/( )/)
Paragraphwords = currentP.split("")
checkScore = currentP.split(' ')
}

let colorIndex = 0
function changingColor() {
  
  if (userInput.value === Paragraphwords[colorIndex]){
        console.log("match! adding class")
    wordDisplay.classList.add("correct")
    colorIndex++
  }

}

function renderParagraph() {
  wordDisplay.innerHTML = Paragraphwords
    .map((char, i) => `<span id="char-${i}">${char}</span>`)
    .join("")
}


function startGame(){
    chooseParagraph()
    console.log(checkScore)
    startButton.disabled = true
    userInput.disabled = false
    userInput.focus()
    startTimer()
    winCondicion()

    console.log(Paragraphwords)
   renderParagraph()
    gamelogic()
}

function myFunction() {
input = userInput.value
}


let currentIndexforLetters = 0
let currentIndexforWords = 0
let word = ''



function gamelogic() {
  let currentLetter = Paragraphwords[currentIndexforLetters]
  let input = userInput.value
  let letter = userInput.value
  let lastLetter = input.at(-1)
  let wordNow = fullWords[currentIndexforWords]

  if (lastLetter === currentLetter) {
    const span = document.getElementById(`char-${currentIndexforLetters}`)
    if (span){
    span.classList.remove("incorrect")
    span.classList.add("correct") }

    currentIndexforLetters++
    scoreDisplay.innerText = `Score: ${score}`
    userInput.value = ''
    word += lastLetter
  } 
  else if (lastLetter !== currentLetter){
 const span = document.getElementById(`char-${currentIndexforLetters}`)
    if (span) span.classList.add("incorrect")
      userInput.value=''

  }

  if (wordNow === word){
     if (!punctuation.includes(wordNow)){
      score++
    }
    console.log('word complete')
    console.log(lastLetter)
    currentIndexforWords++
    letterDisplay.innerHTML  += word
    word =''
    console.log(wordNow)
    scoreDisplay.innerText = `Score: ${score}`
  }
  

}

function winCondicion () {
if (score === checkScore.length) {
  stopTimer()
  userInput.disabled = true
  console.log('You Win!')
wordDisplay.innerHTML = `🔥 YOUR KEYBOARD IS SMOKING! 🔥 You crushed it in ${60 - timeLeft}s with a massive score of ${score} ! \n Absolute typing master!`
}
}

function resetGame(){
  startButton.disabled = false
  stopTimer()
  userInput.disabled = true
  wordDisplay.innerHTML = 'Press start to begin'
  score = 0
  scoreDisplay.innerText = `Score: ${score}`
  letterDisplay.innerHTML = ''
  colorIndex = 0
  currentIndexforLetters = 0
  currentIndexforWords = 0
  word = ''
}




/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', startGame)
userInput.addEventListener('input', gamelogic)
userInput.addEventListener('input' , winCondicion)
resetButton.addEventListener('click', resetGame)
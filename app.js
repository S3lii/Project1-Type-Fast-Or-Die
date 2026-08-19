/*-------------------------------- Constants --------------------------------*/

const paragraphs = [
  "My years have caught up with me. Take this key to the hidden temple, protect your master with your life, and never forget the Shinobi Code.",
  "Hesitation is defeat. Master deflection, read posture meters, and parry decisive strikes to win.",
  "Tarnished, seek the Elden Ring and become Elden Lord by defeating demigods across the Lands Between.",
  "The Sunken Valley demands swift grappling and focus dodge lethal hazards and strike only when openings appear.",
  "Let grace guide you through Caelid and Mount Gelmir, whether wielding colossal swords, casting sorceries, or summoning spirits.",
  "Face me Sekiro! The sword must be drawn with absolute conviction when the fate of Ashina hangs upon a single decisive strike.",
  "Foul Tarnished, in search of the Elden Ring. Emboldened by the flame of ambition! Someone must extinguish thy meager flame. Put these foolish ambitions to rest.",

  "Social engineering bypasses firewalls by exploiting human error through phishing and pretexting.",
  "Penetration testing simulates cyberattacks via reconnaissance, port scanning, and controlled exploits to patch vulnerabilities first.",
  "The CIA triad anchors cybersecurity: Confidentiality protects data, Integrity prevents tampering, and Availability ensures access.",
  "Network traffic analysis intercepts intrusions in real time by inspecting packet headers, anomalous payloads, and firewall logs.",
  "Penetration testing is the deliberate art of ethical exploitation, uncovering insecure configurations and weak cryptography before malicious threat actors weaponize them.",

  "Debugging is investigating a crime where you are also the culprit, tracing execution logs and breakpoints to find a single typo.",
  "Write code for humans, not just computers. Clean, modular design and clear naming make maintenance effortless.",
  "An algorithm is a step by step problem solving procedure optimized by choosing the correct data structure." , 

  "Look at you. You all want to kill me. What are you waiting for? So who wants to be king? If you want to be king, you must kill me. Come on! Who want to be king?" , 
  "You know nothing Jon Snow. The true enemy won't wait out the storm, he brings the storm with him." , 
  "I am Daenerys Stormborn of House Targaryen, mother of dragons, Breaker of chains, and I will take what is mine with fire and blood." , 
  "Say my name. You know exactly who I am. Say it. You're Heisenberg. You're goddamn right." , 
  "I am not in danger Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!" , 
  "No matter what you hear scratching at the windows, never open the door after sundown. The talismans are the only things keeping them out." ,
  "Are you a one or a zero? That's the question you have to ask yourself. Are you a yes or a no? Are you going to act or just react?" , 
  "Que sera sera. Whatever will be will be. The future's not ours to see, que sera sera. When I was just a little girl, I asked my mother what will I be?"
]


/*-------------------------------- Variables --------------------------------*/
let timeLeft = 60
let timer;

let mistake = true
let score = 0
let mistakes = -1

let Number = Math.floor(Math.random() * paragraphs.length)
let currentP = paragraphs[Number]
let fullWords = currentP.split(/( )/)
let Paragraphwords = currentP.split("")
let correct = 0
const punctuation = [' ', ',', '.', '!', '?']

/*------------------------ Cached Element References ------------------------*/

const startButton =document.querySelector('#startButton')
const scoreDisplay = document.querySelector('#score')
const wordDisplay = document.querySelector('#wordDisplay')
const userInput = document.querySelector('#userInput')
const letterDisplay = document.querySelector('#correctWords')
const resetButton = document.querySelector('#resetButton')
const mistakesDisplay = document.querySelector('#mistakescount')

/*-------------------------------- Functions --------------------------------*/
function startTimer() {
  timeLeft = 60
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`

  timer = setInterval(() => {
    timeLeft--
    
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`

    if (timeLeft <= 0) {
      clearInterval(timer)
      userInput.disabled = true
      let accuracy = (correct / (correct + mistakes)) * 100
      let formattedAccuracy = accuracy.toFixed(2)
      wordDisplay.innerHTML = `💥 GAME OVER! 💥 The clock hit zero before you could finish. Final score: ${score} <br> with ${formattedAccuracy}% Accuracy  <br> <br> try again!`
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
    correct++
  } 
  else if (lastLetter !== currentLetter){
 const span = document.getElementById(`char-${currentIndexforLetters}`)

    if (span) span.classList.add("incorrect")
      userInput.value=''
 mistakes ++
 mistakesDisplay.innerText = `Mistakes: ${mistakes}`
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

  let accuracy = (correct / (correct + mistakes)) * 100
  let formattedAccuracy = accuracy.toFixed(2)
 
  wordDisplay.innerHTML = `🔥 YOUR KEYBOARD IS SMOKING! 🔥 You crushed it in ${60 - timeLeft}s with a massive score of ${score} <br> with ${formattedAccuracy}% Accuracy! <br> <br> Absolute typing master!  `
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
  mistakes = -1
  mistakesDisplay.innerText = `Mistakes: `
 correct = 0
}




/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', startGame)
userInput.addEventListener('input', gamelogic)
userInput.addEventListener('input' , winCondicion)
resetButton.addEventListener('click', resetGame)
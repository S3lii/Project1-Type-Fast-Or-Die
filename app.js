/*-------------------------------- Constants --------------------------------*/

const paragraphs = [
  "I am afraid I made a bit of a blunder. Perhaps the years have finally caught up with me. Protect your master with your life. Take this key, for the hidden temple is just ahead. Listen carefully and never forget the Shinobi Code.",
  "Hesitation is defeat. Victory requires mastering deflection, reading posture meters, and learning every telegraph. A shinobi must wait for the sound of clashing steel, parry the enemy's decisive strike.",
  "Brave Tarnished, seek the Elden Ring and become Elden Lord. Traverse the Lands Between, confront demigods in shattered realms, and harness grace to overcome brutal boss encounters that punish reckless aggressive.",
  "The Sunken Valley holds relentless trials, where every step requires swift grapple hooks and total focus. Face giant beasts, dodge lethal perils, and strike only when an opening reveals itself.",
  "Rise, Tarnished, and let grace guide your path through Caelid and Mount Gelmir. Whether wielding heavy colossal swords, casting glintstone sorceries, or summoning spirit ashes.",

  "Social engineering bypasses firewalls because humans are often the weakest link in security. Phishing emails and pretexting trick users into handing over credentials.",
  "Penetration testing involves simulating cyberattacks to discover security flaws before malicious hackers can exploit them. By conducting reconnaissance, scanning open ports, and executing controlled exploits.",
  "The CIA triad forms the foundation of cybersecurity: Confidentiality keeps data private, Integrity ensures it cannot be altered without authorization, and Availability guarantees systems remain accessible.",
  "Network traffic analysis is crucial for detecting suspicious behavior in real time. Inspecting packet headers, analyzing anomalous payloads, and configuring firewalls allow security defenders to intercept unauthorized intrusions before an incident turns into a full breach.",

  "Debugging is like being the detective in a crime movie where you are also the murderer. You read through execution logs, set breakpoints, and trace state variables until you discover that a missing bracket or simple typo caused the entire system to crash.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. Writing clean, modular code with clear naming conventions makes refactoring effortless and saves hours of maintenance in the long run.",
  "An algorithm is a step-by-step procedure designed to solve a specific problem. Choosing the right data structure—whether a hash map, binary tree."
]


/*-------------------------------- Variables --------------------------------*/
let timeLeft = 60;
let timer;

let mistake = true
let score = 0

let Number = Math.floor(Math.random() * paragraphs.length);
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

/*-------------------------------- Functions --------------------------------*/
function startTimer() {
  timeLeft = 60
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      userInput.disabled = true;
    }
  }, 1000);
}


function chooseParagraph() {
Number = Math.floor(Math.random() * paragraphs.length);
currentP = paragraphs[Number]
fullWords = currentP.split(/( )/)
Paragraphwords = currentP.split("")
}

let colorIndex =0
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
    startButton.disabled = true
    userInput.disabled =false
    startTimer()
   
    
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




/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', startGame)
userInput.addEventListener('input', gamelogic)


/*-------------------------------- Constants --------------------------------*/

const paragraphs = [
  "I am afraid I made a bit of a blunder. Perhaps the years have finally caught up with me. Protect your master with your life. Take this key, for the hidden temple is just ahead. Listen carefully and never forget the Shinobi Code. As your father, my word is absolute, and your master is a close second.",
  "Hesitation is defeat. Victory requires mastering deflection, reading posture meters, and learning every telegraph. A shinobi must wait for the sound of clashing steel, parry the enemy's decisive strike, and break their guard with absolute precision.",
  "Brave Tarnished, seek the Elden Ring and become Elden Lord. Traverse the Lands Between, confront demigods in shattered realms, and harness grace to overcome brutal boss encounters that punish reckless aggressive play with instant death.",
  "The Sunken Valley holds relentless trials, where every step requires swift grapple hooks and total focus. Face giant beasts, dodge lethal perils, and strike only when an opening reveals itself, for a single mistake means starting over at the nearest Idol.",
  "Rise, Tarnished, and let grace guide your path through Caelid and Mount Gelmir. Whether wielding heavy colossal swords, casting glintstone sorceries, or summoning spirit ashes, adaptability is key to surviving the wrath of Starscourge Radahn.",

  "Social engineering bypasses firewalls because humans are often the weakest link in security. Phishing emails and pretexting trick users into handing over credentials, proving that securing an organization requires educating people, not just deploying expensive security tools.",
  "Penetration testing involves simulating cyberattacks to discover security flaws before malicious hackers can exploit them. By conducting reconnaissance, scanning open ports, and executing controlled exploits, ethical hackers strengthen defenses and protect sensitive data.",
  "The CIA triad forms the foundation of cybersecurity: Confidentiality keeps data private, Integrity ensures it cannot be altered without authorization, and Availability guarantees systems remain accessible. Balancing all three is essential for maintaining a strong security posture.",
  "Network traffic analysis is crucial for detecting suspicious behavior in real time. Inspecting packet headers, analyzing anomalous payloads, and configuring firewalls allow security defenders to intercept unauthorized intrusions before an incident turns into a full breach.",

  "Debugging is like being the detective in a crime movie where you are also the murderer. You read through execution logs, set breakpoints, and trace state variables until you discover that a missing bracket or simple typo caused the entire system to crash.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. Writing clean, modular code with clear naming conventions makes refactoring effortless and saves hours of maintenance in the long run.",
  "An algorithm is a step-by-step procedure designed to solve a specific problem. Choosing the right data structure—whether a hash map, binary tree, or priority queue—can transform an impossibly slow operation into lightning-fast execution."
]


/*-------------------------------- Variables --------------------------------*/
let timeLeft = 60;
let timer;
let Number = Math.floor(Math.random() * paragraphs.length);

let currentP = paragraphs[Number]

let Paragrapwords = currentP.split(/( )/)

let mistake = false




/*------------------------ Cached Element References ------------------------*/

const startButton =document.querySelector('#startButton')




/*-------------------------------- Functions --------------------------------*/
function startTimer() {
  timeLeft = 60;
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

function startGame(){
    startButton.disabled = true
    userInput.disabled =false
    startTimer();
    console.log(Paragrapwords)
    wordDisplay.innerText = currentP
}

function myFunction() {
    console.log(userInput.value)
}


function gamelogic(){

}




/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', startGame)
userInput.addEventListener('input', myFunction)


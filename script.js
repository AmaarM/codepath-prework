//global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues 
const nextClueWaitTime = 1000; //how long to wait before playing sequence


//Global Variables
var randomPattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.4;
var guessCounter = 0;
var mistakes;

//Stores random numbers in array to generate a random pattern
function generateRandomPattern() {
    for (let i = 0; i < 8; i++) {
        randomPattern.push(Math.floor(Math.random() * 6) + 1);
    }
}

function startGame() {
    progress = 0;
    mistakes = 0;
    gamePlaying = true;
    generateRandomPattern();
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("endBtn").classList.remove("hidden");
    playClueSequence();
}

//Updates mistakes and displays on page
function updateMistakes(){
    mistakes++;
    document.getElementById("mistakes").innerHTML = mistakes;
}

function stopGame() {
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("endBtn").classList.add("hidden");
    document.getElementById("mistakes").innerHTML = " " + 0; //resetting mistake count to 0
}

//Lighting up and Clearing when clues are played
function lightButton(btn) {
    document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
    document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
    if (gamePlaying) {
        lightButton(btn);
        playTone(btn, clueHoldTime);
        setTimeout(clearButton, clueHoldTime, btn);
    }
}

function playClueSequence() {
    guessCounter = 0;
    let delay = nextClueWaitTime; //set delay to initial wait time
    for (let i = 0; i <= progress; i++) {
        console.log("play single clue: " + randomPattern[i] + " in " + delay + "ms");
        setTimeout(playSingleClue, delay, randomPattern[i]) // set a timeout to play that clue
        delay += clueHoldTime
        delay += cluePauseTime
    }
}

//Controls game flow/logic
function guess(btn) {
    console.log("user guessed: " + btn);
    if (!gamePlaying) {
        return;
    }

    if (randomPattern[guessCounter] == btn) {
        if (guessCounter == progress) {
            if (progress == randomPattern.length - 1) {
                winGame();
            } else {
                progress++;
                playClueSequence();
            }
        } else {
            guessCounter++;
        }
    }
    //Updates the mistakes and plays next clue sequence when mistake is made
    else{
        updateMistakes();
        progress++;
        playClueSequence();
    }
    //Additional condition to end game if 3 strikes were given.
    if(mistakes == 3){
        loseGame();
    }
   
    //Added to end game when times played > 8.
    if(progress >= 8){ 
        winGame();
    }
}

function winGame() {
    stopGame();
    alert("You Won!");
    window.location.reload(); 
}

function loseGame() {
    stopGame();
    alert("Game Over. You lost.");
    window.location.reload();
}


// Sound Synthesis Functions
const freqMap = {
    1: 261.6,
    2: 329.6,
    3: 392,
    4: 466.2,
    5: 540,
    6: 600
}
function playTone(btn, len) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function () {
        stopTone()
    }, len)
}
function startTone(btn) {
    if (!tonePlaying) {
        context.resume()
        o.frequency.value = freqMap[btn]
        g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
        context.resume()
        tonePlaying = true
    }
}
function stopTone() {
    g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)
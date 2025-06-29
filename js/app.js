 /*------------- Constants -------------- */
 const choice = ['rock', 'paper', 'scissors']

 /*------------- Variables -------------- */
 let msg
 let playerChoice
 let conputerChoice
  
 /*------------- 1.Cached Elements References -------------- */
 const rockBtnEl = document.querySelector
 ('#rock')
 const paperBtnEl = document.querySelector
 ('#paper')
 const scissorBtnEl = document.querySelector
 ('#scissors')
 const resultDisplayEl = document.querySelector
 ('#result-display')
 const restartGame = document.querySelector
 ('#reset')
 
  

 /*-------------3. Functions -------------- */

 function getComputerChoice() {
    // generate a random number 0-2
    //you can skip math.floor if you want it decimal
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select item from the array
    return choice[randomIndex]
    //computerChoice = choice[randomIndex]
 }
 

 // initialize game state
 function play(event) {
    computerChoice = getComputerChoice()
   playerChoice = event.target.id
   compare()
    


    // after updating state, render to html
    render()

 }
 

 // updated our UI/html directly
 function render() {
    resultDisplayEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${msg}`

 }

 function test() {
    console.log('you clicked me')
 }
 function compare(){
    // compare playerChoice to computerChoice
    // if playerChoice beats computerChoice
    // update msg to say "Player wins!"
    // else update msg to say "Computer wins"
    // else if tie, update message to say "Tie"
    if(playerChoice === "rock" && computerChoice === "rock"){
        msg = "You Tied!"
    }else if(playerChoice === "paper" && computerChoice === "paper"){
        msg = "You Tied!"
    }else if(playerChoice === "scissors" && computerChoice === "scissors"){
        msg = "You Tied!"
    }else if(playerChoice === "rock" && computerChoice === "scissors"){
        msg = "You Win!"
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        msg = "You Lose!"
    }else if(playerChoice === "scissors" && computerChoice === "rock"){
        msg = "You Lose!"
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        msg = "You Win!"
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        msg = "You Win!"
    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        msg = "You lose"
    }
}
function resetGame(){
    resultDisplayEl.textContent = "" 
    playerChoice = null
    computerChoice = null
}
 /*-------------2. Event Listeners -------------- */

 rockBtnEl.addEventListener('click', play)
 paperBtnEl.addEventListener('click', play)
 scissorBtnEl.addEventListener('click',play)
 restartGame.addEventListener('click',resetGame)
 
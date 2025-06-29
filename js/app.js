 /*------------- Constants -------------- */
 const choice = ['rock', 'paper', 'scissors']

 /*------------- Variables -------------- */
 let msg
 let playerChoice
 let conputerChoice
  
 /*------------- Cached Elements References -------------- */
 const rockBtnEl = document.querySelector
 ('#rock')
 const paperBtnEl = document.querySelector
 ('#paper')
 const scissorBtnEl = document.querySelector
 ('#scissors')
 

 /*------------- Functions -------------- */

 function getComputerChoice() {
    // generate a random number 0-2
    //you can skip math.floor if you want it decimal
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select item from the array
    return choice[randomIndex]
    //computerChoice = choice[randomIndex]
 }
 

 // initialize game state
 function play() {
    console.log('computerChoice',conputerChoice)
    computerChoice = getComputerChoice()
    console.log('computerChoice',computerChoice)
    


    // after updating state, render to html
    render()

 }
 play()

 // updated our UI/html directly
 function render() {

 }

 /*------------- Event Listeners -------------- */


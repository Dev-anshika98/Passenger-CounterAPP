// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked




function increment(){
    console.log("the button was clicked")
}


// Setting up the the race 🏎 🏎 🏎
function  countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    }

    countdown()
 
    // GO! 🏁
    // Players are running the race 🏎 💨
    // Race is finished! 🍾
    countdown()
    // Get ready for a new race 🏎 🏎 🏎
    
    // Create a function (you decide the name) that logs out the number 42 to the console
    // Call/invoke the function

    function myLogger(){
        console.log(42)
    }
    myLogger()



    let lap1 = 34
    let lap2 = 33
    let lap3 = 35
    function logLapTime(){
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
    }
    console.log(totalTime)
   
    logLapTime()


let lapsCompleted = 0


function increment(){
    lapsCompleted = lapsCompleted+1


}
increment()
increment()
increment()

console.log(lapsCompleted)



camelCase
let countEl1 = document.getElementById("count-el")


console.log(countEl1)

let count1 = 0
function increment(){
  
    count = count + 1
    countEl.innerText = count
    console.log(count1)

}

// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count 
    // set countEl's innerText to the count
}
function save(){
    console.log(count)
}
save() 


string
let username = "per!"
let message = "You have two new notificatons"
console.log(message + "," +username)


// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = "we have logged"
console.log(messageToUser)


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console


let Name = "Raj"
let greeting = "Hi, my name is "
console.log(greeting + Name)


let points = 4
let bonusPoints = "10"

let totalPoints = 4 + "10"

console.log(totalPoints)


console.log(4 + 5) //9
console.log("2" + "4") //"24"
console.log("5" + 1) //"51"
console.log(100 + "100") //"100100"


// Grab the welcome-el paragraph and store it in a variable called welcomeEl
  let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
let name = "Anshika"
let greeting1 = "Welcome Back "
// and the greeting we want to render on the page
  welcomeEl.innerText = greeting1 + name
  welcomeEl.innerText  += "👋"



// Render the welcome message using welcomeEl.innerText


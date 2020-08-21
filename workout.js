




 
let quotes = ['"The last three or four reps is what makes the muscle grow."- Arnold Schwarzenegger', '"All progress takes place outside the comfort zone."-Michael John Bobak', '"Success usually comes to those who are too busy to be looking for it."-Henry David Thoreau', '"If you think lifting is dangerous, try being weak. Being weak is dangerous."-Bret Contreras', '"The only place where success comes before work is in the dictionary."-Vidal Sassoon' ]


  const quoteGen = document.querySelector('#quote');
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#submit-btn');
  const restartBtn = document.querySelector('#restart-button');
  const reps = document.querySelector('#rep');
  const totalTime = document.querySelector('#total-time');
  const changed = document.querySelector('#changed');
  let timeLeft;
  let repCount = 0;
  let total = 0;
  
  


  function countDown() {
    this.disabled = true;
    document.getElementById('theme-style').href = 'green.css'
    let initalTimeLeft = timeLeft;
    
    quoteGenerator();
    if (timeLeft > 0) {
    repCount = repCount + 1;
    reps.innerHTML = repCount;
  } 

    let inteval = setInterval(() => {
      initalTimeLeft -= 1;
      timeLeftDisplay.innerHTML = initalTimeLeft;
      
      
    }, 1000)
    setTimeout(() => { 
      clearInterval(inteval); 
       //timeLeft = initalTimeLeft;
      document.getElementById('theme-style').href = 'workout.css'
      this.disabled = false;
    }, (initalTimeLeft * 1000));
  }

  startBtn.addEventListener('click', countDown);



function handleFireButton() {
  var guessInput = document.getElementById("rest-time");
  var guess = guessInput.value;
  timeLeft = guess;
  if (guess !== "") {
  changed.innerHTML = guess;
}
}


function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");

  // in IE9 and earlier, the event object doesn't get passed
  // to the event handler correctly, so we use window.event instead.
  e = e || window.event;

  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;

  var guessInput = document.getElementById("rest-time");
  guessInput.onkeypress = handleKeyPress;
}

function quoteGenerator() {
  let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return quoteGen.innerHTML = newQuote;
 }



document.addEventListener("DOMContentLoaded", () => {
    quoteGenerator();
  });

window.onload = init;


///////

//<input id="btnSubmit" type="submit" onclick="this.disabled = true">
//event.preventDefault(); startBtn.syle.pointer-events = 'none'; startBtn.syle.pointer-events = 'auto';

/*
  startBtn.onclick = function() {
    this.disabled = true;
    quoteGenerator();

    repCount = repCount + 1;
    reps.innerHTML = repCount;

    let inteval = setInterval(() => {
      timeLeft -= 1;
      timeLeftDisplay.innerHTML = timeLeft;
      
      
    }, 1000)
    setTimeout(() => { 
      clearInterval(inteval); 
      timeLeft = 5; 
      this.disabled = false;
    }, 5000);
    
  }
 
*/




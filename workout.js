/*
<body>
	<h3>Second left: <span id='time-left'>5</span></h3>
	<h3>Reps: <span id='rep'>0</span></h3>
	<button id='start-button'>Start</button>
	<button id='restart-button'>Restart</button>
	<script type="text/javascript" src="workout.js"></script>
</body>
*/
 
let quotes = ['"The last three or four reps is what makes the muscle grow."- Arnold Schwarzenegger', '"All progress takes place outside the comfort zone."-Michael John Bobak', '"Success usually comes to those who are too busy to be looking for it."-Henry David Thoreau', '"If you think lifting is dangerous, try being weak. Being weak is dangerous."-Bret Contreras', '"The only place where success comes before work is in the dictionary."-Vidal Sassoon' ]


  const quoteGen = document.querySelector('#quote');
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#submit-btn');
  const restartBtn = document.querySelector('#restart-button');
  const reps = document.querySelector('#rep');
  const totalTime = document.querySelector('#total-time');
  let timeLeft = 90;
  let repCount = 0;
  let total = 0;

  /*
  function countDown() {
  
  	quoteGenerator();

  	repCount = repCount + 1;
    reps.innerHTML = repCount;

  	let inteval = setInterval(() => {
  		timeLeftDisplay.innerHTML = timeLeft;
  		timeLeft -= 1;
  	}, 1000)
  	setTimeout(() => { 
  		clearInterval(inteval); 
  		timeLeft = 5; 
  	}, 6000);
  	

  
  }

  startBtn.addEventListener('click', countDown);

  */

   startBtn.addEventListener('click', function countDown() {
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
    }, 90000);
    

  
  });
 
 
 
 function quoteGenerator() {
 	let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
 	return quoteGen.innerHTML = newQuote;
 }

function initialQuote() {
	let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
 	return quoteGen.innerHTML = newQuote;
};



///////






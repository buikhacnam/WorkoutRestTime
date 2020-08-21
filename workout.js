
let quotes = ['"The last three or four reps is what makes the muscle grow." - Arnold Schwarzenegger', '"All progress takes place outside the comfort zone." - Michael John Bobak', '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau', '"If you think lifting is dangerous, try being weak. Being weak is dangerous." - Bret Contreras', '"The only place where success comes before work is in the dictionary." - Vidal Sassoon', '"All our dreams can come true, if we have the courage to pursue them."" - Walt Disney', '"The secret of getting ahead is getting started." - Mark Twain', '"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb', '"Only the paranoid survive." - Andy Grove', '"It is hard to beat a person who never gives up." - Babe Ruth', '"If people are doubting how far you can go, go so far that you cannot hear them anymore." - Michele Ruiz', '"Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE." - Joss Whedon', '"Do one thing every day that scares you." - Eleanor Roosevelt','"It is no use going back to yesterday, because I was a different person then." - Lewis Carroll','"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers." - Socrates','"Happiness is not something ready made. It comes from your own actions." - Dalai Lama XIV','"Whatever you are, be a good one." - Abraham Lincoln','"You can either experience the pain of discipline or the pain of regret. The choice is yours." - Unknown','"Impossible is just an opinion." - Paulo Coelho','"Your passion is waiting for your courage to catch up." -  Isabelle Lafleche','"Magic is believing in yourself. If you can make that happen, you can make anything happen." - Johann Wolfgang Von Goethe','"If something is important enough, even if the odds are stacked against you, you should still do it." - Elon Musk','"Do not be afraid to give up the good to go for the great." - John D. Rockefeller','"The difference between successful people and very successful people is that very successful people say no to almost everything." - Warren Buffett','"I hated every minute of training, but I said, ‘Do not quit. Suffer now and live the rest of your life as a champion." - Muhammad Ali','"I don not count my situps. I only start counting once it starts hurting." - Muhammad Ali','"Cancer can take away all my physical abilities. It cannot touch my mind, it cannot touch my heart and it cannot touch my soul. And those three things are going to carry on forever." - Jimmy Valvano','"I have failed over and over again in my life. And that is why I succeed." - Michael Jordan','"The only way to prove you are a good sport is to lose." - Ernie Banks','"There may be people that have more talent than you, but there is s no excuse for anyone to work harder than you do." - Derek Jeter','"If you fail to prepare, you are prepared to fail." - Mark Spitz','"The road to Easy Street goes through the sewer." - John Madden','"Stubbornness usually is considered a negative; but I think that trait has been a positive for me." - Cal Ripken, Jr.','"To uncover your true potential you must first find your own limits and then you have to have the courage to blow past them." - Picabo Street','"Do you know what my favorite part of the game is? The opportunity to play." - Mike Singletary','"Never let your head hang down. Never give up and sit down and grieve. Find another way." - Satchel Paige','"It is not the size of a man but the size of his heart that matters." - Evander Holyfield','"You miss 100 percent of the shots you do not take." - Wayne Gretzky','"Wisdom is always an overmatch for strength." - Phil Jackson','"It is not whether you get knocked down; it is  whether you get up." - Vince Lombardi','"Hard work beats talent when talent does not work hard." - Tim Notke','"Never say never because limits, like fears, are often just an illusion." - Michael Jordan','"Good is not good when better is expected." - Vin Scully','"Without self-discipline, success is impossible, period." - Lou Holtz','"It is not the will to win that matters - everyone has that. It is the will to prepare to win that matters." - Paul "Bear" Bryant','"A trophy carries dust. Memories last forever." - Mary Lou Retton','"Run when you can, walk if you have to, crawl if you must; just never give up." - Dean Karnazes','"What makes something special is not just what you have to gain, but what you feel there is to lose." - Andre Agassi','"You win a few, you lose a few. Some get rained out. But you got to dress for all of them." - Satchel Paige','"Never give up! Failure and rejection are only the first step to succeeding." - Jim Valvano']


//   '"" - ', 
  const quoteGen = document.querySelector('#quote');
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#submit-btn');
  const restartBtn = document.querySelector('#restart-button');
  const reps = document.querySelector('#rep');
  const totalTime = document.querySelector('#total-time');
  const changed = document.querySelector('#changed');
   let sound = document.getElementById("myAudio"); 
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
      sound.play();
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




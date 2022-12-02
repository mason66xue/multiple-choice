//documentory selector
var gameContainer= document.querySelector('.quiz-container');
var game = document.querySelector('#quiz');
var startButton = document.querySelector('.start-button');
var timerElement = document.querySelector('.timer-count');
var slides = document.querySelectorAll(".slide");
var choiceOne =document.querySelector('#a');
var choiceTwo=document.querySelector('#b');
var choiceThree=document.querySelector('#c');
var question=document.querySelector('#question');
var nextButton = document.querySelector(".next");
var slides=document.querySelector('.slide');

//global variable 
var currentSlide = 0;
var winCounter = 0;
var loseCounter= 0;
var isWin = false;
var timer;
var timerCount;
var currentSlide=0;


//questions array
var questions =[
{ question: 'How many colonies were there in the United States?',
a: 12,
b: 13,
c: 14,
    answer: 'b'
},
{question: 'During what period did the title of dictator originate?',
a:'Roman Republic',
b:"Napolenic Europe",
c: "Soviet Unite",
    answer: 'a'
},

{
    question: 'Which of the following was NOT Greek?',
    a:'Homer',
    b:'Herodotus',
    c:'Virgil',
    answer: 'c'
},
{
    question: 'Which conflict was the shortest?',
    a: 'WWII',
    b:'American War of Independence',
    c:'American Civil War',
    answer: 'a'
}]


// runs on page to load 
function init(){

}




//startGame function is called when click on the start button//
function startGame(){
    isWin= false;
    timerCount=80;
    //prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
    quizBox ()
}

// quizBox function to start the quiz 
function quizBox(){
    quiz.textContent= questions[0].question;
    choiceOne.textContent= questions[0].a;
    choiceTwo.textContent= questions[0].b;
    choiceThree.textContent= questions[0].c;
}

//next page for multiple choice 

function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
slides[n].classList.add('active-slide');
currentSlide=n;
if (currentSlide=== slides.length-1){
    nextButton.style.display='none';
   }

}

function showNextSlide(){
    showSlide(currentSlide - 1);
}














//the setTimer function starts and stops the time and trigers 'saves my initial and score'
function startTimer(){
    //set timer 
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        // win condition is met
        if(timerCount>=0){
            if(isWin && timerCount >0){
                //clear interval and stop timer 
                clearInterval(timer);
              }
             }
      //if time runs out 
      if(timerCount===0){
        //clear interval 
        clearInterval(timer);
    
      }
    },1000);
}

//count on wins/score and count to client storage
function setWins(){
    win.textContent = winCounter;
    localStorage.setItem('winCount',winCounter);
}


function setLosses(){
    //not very sure how to make it deduct from time
}



//even listener to start the button 
startButton.addEventListener("click",startGame);
nextButton.addEventListener('click',showNextSlide);
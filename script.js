//documentory selector
var gameContainer= document.querySelector('.quiz-container');
var game = document.querySelector('#quiz');
var startButton = document.querySelector('.start-button');
// var timerElement = document.querySelector('#timer');
var slides = document.querySelectorAll(".slide");
var choiceOne =document.querySelector('#a');
var choiceTwo=document.querySelector('#b');
var choiceThree=document.querySelector('#c');
var question=document.querySelector('#question');
var nextButton = document.querySelector(".next");
var correctAnswer= document.querySelector('.answers');



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
    
    //prevents start button from being clicked when round is in progress
    startButton.style.visibility = 'hidden';
    isWin=false;
    
    // startTimer()
    quizBox ();
   

    timer=setInterval(startTimer, 1000);
    
}



// quizBox function to start the quiz 
function quizBox(){
    quiz.textContent= questions[0].question;
    choiceOne.textContent= questions[0].a;
    choiceTwo.textContent= questions[0].b;
    choiceThree.textContent= questions[0].c;
}

//render following pages for multiple choice questions

function quizBoxTwo(){

    quiz.textContent= questions[1].question;
    choiceOne.textContent= questions[1].a;
    choiceTwo.textContent= questions[1].b;
    choiceThree.textContent= questions[1].c;
    
    nextButton.addEventListener('click',quizBoxThree);
}



function quizBoxThree(){
    quiz.textContent= questions[2].question;
    choiceOne.textContent= questions[2].a;
    choiceTwo.textContent= questions[2].b;
    choiceThree.textContent= questions[2].c;
    nextButton.addEventListener('click',quizBoxFour);

}


function quizBoxFour(){
    quiz.textContent= questions[3].question;
    choiceOne.textContent= questions[3].a;
    choiceTwo.textContent= questions[3].b;
    choiceThree.textContent= questions[3].c;

}

// function checkAnswer(){
//     if (answer.toLowerCase()=== 'correct answer'){
//         alert('Good Job!');
//     }else{
//         alert('WRONG!!');
//     }
    
// }













//the setTimer function starts and stops the time and trigers 'saves my initial and score'
const startMinutes =0.1;
let time = startMinutes * 60;
var timerElement = document.querySelector('#timer');

// setInterval(startTimer, 1000);
function startTimer(){
const minutes =Math.floor(time/60);
let seconds = time % 60;
timerElement.innerHTML = `${minutes}: ${seconds} mins left`;
time--
    
        // win condition is met
        // if(timerCount>=0){
        //     if(isWin && timerCount >0){
        //         //clear interval and stop timer 
        //         clearInterval(timer);
        //       }
                //  }
      //if time runs out 
      if(time <= -1){
        
        //clear interval 
        stopTimer();
        timerElement.innerHTML = 'time up!!!!'
       

    
      }
    
}

function stopTimer(){
    clearInterval(timer);
    
}


// //count on wins/score and count to client storage
// function setWins(){
//     win.textContent = winCounter;
//     localStorage.setItem('winCount',winCounter);
// }


// function setLosses(){
//     //not very sure how to make it deduct from time
// }



//even listener to start the button 
startButton.addEventListener("click",startGame);
nextButton.addEventListener('click',quizBoxTwo);
// document.addEventListener('click',checkAnswer);



let round = 0;

function challengeInstructions(string) {
    document.getElementById('challengeInstructions').innerHTML= string;}


function startTest() {
  startButton.style.display = "none";
  nextButton.style.display = "unset";
  nextQuestion();
}


const nextQuestion = () => {
  let randomQuestion;
  round++;
  if (round === 1) randomQuestion = question1();
  if (round === 2) randomQuestion = question2();
  if (round === 3) randomQuestion = question3();
  if (round === 4) randomQuestion = question4();
  if (round === 5) randomQuestion = question5();
  if (round === 6) randomQuestion = question6();
  if (round === 7) randomQuestion = question7();
  if (round === 8) {location.reload(); }



 challengeInstructions(randomQuestion);
 
}


const startButton = document.querySelector('#startButton')
const nextButton = document.querySelector('#nextButton')

startButton.addEventListener("click", startTest) 
nextButton.addEventListener("click", nextQuestion)





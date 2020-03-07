// https://www.youtube.com/watch?v=1za7xsjsUAA

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var nextButton = document.getElementById("nextButton");
var result = document.getElementById("result");
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");

// loads the first question
function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

loadQuestion(currentQuestion);

// loads the remainder of the questions
function loadNextQuestion(){ // alert if no answer is selected)
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.nodeValue // i'm trying to type selectedOption.Value but it keeps returning node.Value
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totQuestions){
        container.style.display = 'none';
        nextButton.style.display = 'none';
        result.style.display = '';
        result.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
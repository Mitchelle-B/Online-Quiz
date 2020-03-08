var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var timeLeft = 10;

var nextButton = document.getElementById("nextButton");
var result = document.getElementById("result");
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var timer = document.getElementById("startQuizButton");


timer.addEventListener("click", function(){
    var downloadTimer = setInterval(function function1(){
        document.getElementById("countdown").innerHTML= timeLeft + "&nbsp"+"seconds remaining";
        
        timeLeft -=1;
        if(timeLeft <= 0){
            clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Times Up"
                container.style.display = 'none';
                nextButton.style.display = 'none';
                result.style.display = '';
                result.textContent = 'Your Score: ' + score;
                return;
            }
        },1000);
})

// loads the first question
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

//timer.addEventListener("click", loadQuestion, true);

// loads the remainder of the questions

function loadNextQuestion(){ // alert if no answer is selected)
    var selectedOption = document.querySelector('input[type=radio]:checked'); //document.queryselector
    //$("question").hide().fade(400);
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value; 
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


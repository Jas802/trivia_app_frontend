const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const submitAnswers = document.getElementById('submitAnswers')
submitAnswers.style.display = "none";
const restartButton = document.getElementById('restartQuiz');
restartButton.style.display = "none";
const commentButton = document.getElementById('postComment');

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0; //sets a variable for correct answers
    allQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const radios = document.getElementsByName(questionNumber +1);
        var userAnswerIndex = null;
        for(var i = 0; i < radios.length; i++) { //loops over the amount of radio button/answers
            var id = radios[i].id;
            var query = `label[for="${radios[i].id}"]`;
            var label = document.querySelector(query);
            if(radios[i].checked === true){ // checks if checked answer is correct answer
                userAnswerIndex = i;
            }
            if(currentQuestion.answers[i].correct_answer){
                label.style.color = 'lightgreen'; //highlights correct answers;
            } else {
                label.style.color = 'red'; //changes incorrect answers to red
            }
        }

        if(userAnswerIndex !=null && true === currentQuestion.answers[userAnswerIndex].correct_answer){ 
            numCorrect++; //increases scorec count
        }
    })
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${allQuestions.length}`
};

function playAgain() {
    console.log("clicked reset");
    location.reload();
};

function showRestart() {
    if (restartButton.style.display === "none") {
        restartButton.style.display = "block";
    } else {
        restartButton.style.display = "none";
    }
};


submitAnswers.addEventListener('click', showResults);
submitAnswers.addEventListener('click', showRestart);
restartButton.addEventListener('click', playAgain);
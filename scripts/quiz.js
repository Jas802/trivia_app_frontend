const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const submitAnswers = document.getElementById('submitAnswers')
submitAnswers.style.display = "none";

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0; //sets a variable for correct answers
    allQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen'; //highlights correct answers
        }else{
            answerContainers[questionNumber].style.color = 'red'; //changes incorrect answers to red
        }
    })
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${allQuestions.length}`
};

submitAnswers.addEventListener('click', showResults);

//3rd call POST request submit answers
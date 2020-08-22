const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let questions = [];
let answers = [];
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
        const choices = [];
        for(response in currentQuestion.choices){
            answers.push(
                `<label>
                 <input type="radio" name="questions${questionNumber}" value=${response}>
                 ${response} :
                 ${currentQuestion.answers[response]}
                <label>`
            );
        }
        output.push(
        `<div class="quesion"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
};

buildQuiz();

function showResults() {

};

submitButton.addEventListener('click', showResults);

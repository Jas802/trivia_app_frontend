
function buildQuiz() {
    const output = [];

    allQuestions.forEach((currentQuestion, questionNumber) => { //iterates over each question
        const choices = [];
        console.log(currentQuestion, "log1");
        currentQuestion.answers.forEach((answer) => { //iterates over each answer
            console.log(answer);
            choices.push(
                `<label>
                 <input type="radio" name="questions${questionNumber}" value=${answer.response}>
                 ${answer.response}
                <label>`
            );
        });
        output.push(
        `<div class="question"> ${currentQuestion.title} </div>
        <div class="answers"> ${choices.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
};

function showSubmit() {
    if (submitAnswers.style.display === "none") {
        submitAnswers.style.display = "block";
    } else {
        submitAnswers.style.display = "none";
    }
};
fetchQuestions(questionBaseUrl);
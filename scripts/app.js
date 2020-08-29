
function buildQuiz() {
    const output = [];
    
    allQuestions.forEach((currentQuestion, questionNumber) => { //iterates over each question
        const choices = [];
        //console.log(currentQuestion, "log1");
        currentQuestion.answers.forEach((answer, index) => { //iterates over each answer
            console.log(answer);
            choices.push(
                `<label for="${answer.id}">${answer.response}</label>
                 <input type="radio" id="${answer.id}" name="${answer.question_id}" value=${index}>`
                 //${answer.response}
                 
            );
        });
        output.push(
        `<div class="question"> ${currentQuestion.title} </div>
        <div class="answers"> ${choices.join("")} </div>
        `
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
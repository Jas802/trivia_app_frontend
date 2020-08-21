let questions = []
let answers = []


fetch('http://localhost:3000/api/v1/questions').then((response) => { //gets question index from API
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data.data); // looks for the 'data' value of the json response
    questions = data.data.map(trivia => { // turns the 'data' value into an array using 'map'
        const question = new Question(trivia.title);   //creates new instance of Question class
        return question
    });
   // document.querySelector('#quiz').insertAdjacentHTML('afterbegin', questions); 
}).catch((err) => {
    console.log('rejected', err);
});


fetch('http://localhost:3000/api/v1/answers').then((response) => { //gets answer index from API
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data.data);
    answers = data.data.map(record => {
        const answer = new Answer(record.response, record.question_id)
        return answer
    });
    //document.querySelector('#quiz').insertAdjacentHTML('afterend', answers); 
}).catch((err) => {
    console.log('rejected', err);
});

function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
        const answers = [];
        for(response in currentQuestion.answers){
            answers.push(
                `<label>
                 <input type="radio" name="question${questionNumber}" value=${response}>
                 ${response} :
                 ${currentQuestion.answers[response]}
                <label>`
            );
        }
        output.push(
        `<div class="slide">
            <div class="quesion"> ${currentQuestion.title} </div>
            <div class="answers"> ${answers.join('')} </div>
         </div>`

        );
    });
    quizContainer.innerHTML = output.join('');
};
buildQuiz();
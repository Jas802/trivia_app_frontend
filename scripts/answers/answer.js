class Answer {
    constructor(answer) {
        //debugger
        this.id = answer.id
        this.response = answer.attributes.response;
        this.question_id = answer.relationships.question.data.id;
    }
}
let answers = [];

const createAnswers = (question, answers) => {
    answers.forEach((answer) => {
        let answerObj = new Answer(answer)
        //debugger
        question.answers.push(answerObj)
    });
}
console.log(answers, 'logging answers');
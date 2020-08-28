class Answer {
    constructor(answer) {
        this.id = answer.id
        this.response = answer.attributes.response;
        this.question_id = answer.relationships.question.data.id;
    }
}
let answers = [];

const createAnswers = (question, answers) => {
    answers.forEach((answer) => {
        let answerObj = new Answer(answer)
        question.answers.push(answerObj)
    });
}
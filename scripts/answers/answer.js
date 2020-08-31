class Answer {
    constructor(answer) {
        this.id = answer.id
        this.response = answer.attributes.response;
        this.question_id = answer.relationships.question.data.id;
        this.correct_answer = answer.attributes.correct_answer;
    }
}
let answers = [];

const createAnswers = (question, answers) => {
    answers.forEach((answer) => {
        let answerObj = new Answer(answer)
        question.answers.push(answerObj) //pushes into the this.answers array in Question class
    });
}
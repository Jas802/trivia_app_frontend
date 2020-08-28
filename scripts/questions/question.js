class Question {
    constructor(question) {
        this.id = question.id
        this.title = question.attributes.title;
        this.answers = [];
    }
}
let allQuestions = [];
const questionBaseUrl = 'http://localhost:3000/api/v1/questions'
 
const fetchQuestions = (questionBaseUrl) => { //fetches questions from URL
     fetch(questionBaseUrl)
     .then(resp => resp.json()) //converts to JSON
     .then(json => createQuestions(json))
 }

 const createQuestions = (json) => {
     json.data.forEach((question) => {
         let questionObj = new Question(question)
         console.log(json); //creates a new Question object using forEach()
         let answers = json.included.filter((answer) => {
             return answer.relationships.question.data.id === question.id //gets asociated answers for question
         })
         createAnswers(questionObj, answers)
         allQuestions.push(questionObj)
     })
 }

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
    document.querySelector('#app').insertAdjacentHTML('afterbegin', questions); 
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
    document.querySelector('#app').insertAdjacentHTML('afterend', answers); 
}).catch((err) => {
    console.log('rejected', err);
});

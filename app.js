fetch('http://localhost:3000/api/v1/questions').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data.data);
    const questions = data.data.map(question => {
        return `<p>Question ${question.title}</p>`
    }).join("");
    document.querySelector('#app').insertAdjacentHTML('afterbegin', questions); 
}).catch((err) => {
    console.log('rejected', err);
});


fetch('http://localhost:3000/api/v1/answers').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data.data);
}).catch((err) => {
    console.log('rejected', err);
});

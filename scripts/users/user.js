class User {
    constructor(name) {
        this.name = name
    }
}
const users = [];
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
//const usernames = Object.assign({}, users);

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value; //gets whatever is in the name field
    console.log(username);
    if(username == ""){
        alert("Choose a name, young Padawan") //name field must have text in order to play
    } else {
        feedback.textContent = "May The Force Be With You!";
        const user = new User(username)
        users.push(user);
        showSubmit();
        buildQuiz();
    }
    console.log(users, "logging users");
});

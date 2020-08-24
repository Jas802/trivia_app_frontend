class User {
    constructor(name) {
        this.name = name
    }
}

const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    console.log(username);
    if(username == ""){
        alert("Choose a name, young Padawan")
    } else {
        feedback.textContent = "May The Force Be With You!"
         
    }
});
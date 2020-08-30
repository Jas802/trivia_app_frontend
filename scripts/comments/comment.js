class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.content
    }
}
// Styling variables for comments
var field = document.querySelector('textarea');
var backUp = field.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('cancelButton');
var commentForm = document.getElementById('comment-form');

//Styling functions for comments
field.onfocus = function() {
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333'
    btn.style.display = 'block'
}

field.onblur = function() {
    this.setAttribute('placeholder', backUp)
    this.style.borderColor = '#aaa';
}

clear.onclick = function() {
    btn.style.display = 'none';
    field.value = '';
};

commentForm.addEventListener('submit', postComment)

function postComment(e) {
    e.preventDefault();//page doesn't refresh
    let commentValue = e.target.querySelector('textarea').value; //gets comment field
    let commentData = {content:commentValue} //mapping for database

    //Fetching and POST methods for comments
    const commentBaseUrl = 'http://localhost:3000/api/v1/comments';

fetch(commentBaseUrl, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(commentData)
})
.then(resp => resp.json())
.then(comment => {
      let comObj = new Comment(comment.data)
      renderComment(comObj);
      field.value = '';
  })

 function renderComment(c) {
    let commentsUl = document.querySelector('#commentsList > ul');
    let commentLi = document.createElement('li');
    commentLi.textContent = c.content;
    commentsUl.appendChild(commentLi);
};
    
};


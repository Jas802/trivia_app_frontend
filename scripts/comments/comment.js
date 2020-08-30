class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.content
    }
}
const commentBaseUrl = 'http://localhost:3000/api/v1/comments';

fetch(commentBaseUrl, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(comment)
})
.then(resp => resp.json())
.then(comment => {
      let com = new Comment(comment.id, comment.content)

      com.renderComment();
  })

renderComment() {
    let commentsDiv = document.getElementById("comments-container");
    commentsDiv.innerHTML +=
        `<div id="comments-container">
            <ul>
                <li> ${this.content} </li>
            </ul>
        </div>`
};
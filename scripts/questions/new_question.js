const questionBaseUrl = 'http://localhost:3000/api/v1/questions';
const answerBaseUrl = 'http://localhost:3000/api/v1/answers';
var newQForm = document.getElementById('newQuestion');
const radios = document.getElementsByName('correctAnswer');


 async function postRequest(route, params) {
    console.log(params);
    var response = null;
    try{
        response = await fetch(route, {method:'POST', headers:{"Content-Type":'application/json'}, body:JSON.stringify(params)});
    }
    catch(error){
    console.log("Error!", error);
    return error;
    }
    console.log("Success!", response);
    //setTimeout(function(){}, 6000);
      return response;
};
newQForm.addEventListener('submit', function(e){
    e.preventDefault();
    var params = { "title":document.getElementById("newTitle").value};
    let postResponse = postRequest(questionBaseUrl, params);//await fetch(questionBaseUrl, {method:'POST', headers:{"Content-Type":'application/json'}, body:JSON.stringify(params)})
    console.log(postResponse);
    postResponse.then(response => {
        //console.log("Success!", response.json());
        response.json().then(response => {
            for(var i = 0; i < radios.length; i++) {
                if(radios[i].checked === true){
                    params = {"response":radios[i].value, "question_id":response.data.id, correct_answer:true};
                } else {
                    params = {"response":radios[i].value, "question_id":response.data.id};
                }
                postRequest(answerBaseUrl, params);
            }
        });
    }).catch(err => {
        console.log("Error!", err);
    });
});
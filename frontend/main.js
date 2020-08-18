const APIcred = {
    url :  "http://localhost:4000/download?URL=",
}


document.querySelector("#send").addEventListener("click", function(e){
    e.preventDefault();

    const query = document.querySelector("#url").value;

    send( query );


});


function send( query ){
    window.location.href = APIcred.url+query; 
}
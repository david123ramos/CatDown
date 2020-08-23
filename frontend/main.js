const APIcred = {
    url :  "http://localhost:4000"
}

document.querySelector("#send").addEventListener("click", function(e) {
    let url = document.querySelector("#url").value;
    let type = document.querySelector("#type").value;
    let query = `/download?type=${type}&URL=${url}`;


    if (query != '') {
        e.preventDefault();

        send(query);

        document.querySelector("#url").value = '';
    }
});

function send(query) {
    window.location.href = APIcred.url+query; 
}
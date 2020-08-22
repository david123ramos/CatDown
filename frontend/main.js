const APIcred = {
    url :  "http://localhost:4000/download?URL="
}

document.querySelector("#send").addEventListener("click", function(e) {
    var query = document.querySelector("#url").value;

    if (query != '') {
        e.preventDefault();

        send(query);

        document.querySelector("#url").value = '';
    }
});

function send(query) {
    window.location.href = APIcred.url+query; 
}
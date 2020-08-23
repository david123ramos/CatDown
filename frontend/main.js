const APIcred = {
    url :  "http://localhost:4000"
}

document.querySelector("#send").addEventListener("click", function(e) {
    let url = document.querySelector("#url").value;
    let query = `/download?type=${ getHost(url) }&URL=${url}`;
    if (query != '') {
        e.preventDefault();

        send(query);

        document.querySelector("#url").value = '';
    }
});

/**
 * 
 * @param {String} url link do vídeo 
 * @returns {String} host  
 */
function getHost( url ){
    return new URL(url).host.split(".")[1]
}


function send(query) {
    window.location.href = APIcred.url+query; 
}
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

/**
 * 
 * @param {Boolean} value valor do estado loading.
 */
function setLoading(value){ 
    const body = document.querySelector("body");
    const input = document.getElementById("url");
    const btn = document.getElementById("send");

    // Desabilita os input
    input.disabled = value;
    btn.disabled = value;

    // Seta a classe no body para adicionar novos eventos de css
    if (value) body.classList.add('loading');
    else body.classList.remove('loading');
}

function setError(message) {
    const error = document.querySelector(".error");
    if (message) {
        error.style.display = "block";
        error.innerText = message;
    } else {
        error.style.display = "none";
    }
}

/**
 * 
 * @param {Number} total Tamanho total
 * @param {Number} current Quantidade de baixado
 */
function setPercent(total, current) {
    const percent = current * 100 / total; // Faz o calculo para porcentagem
    
    // Pega o elemento progressbar e seta o tamanho do progresso.
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${percent.toFixed(0)}%`;
}

/**
 * 
 * @param {Blob} blob Binário do arquivo
 * @param {String} disposition Header contendo o nome do arquivo
 */
function download(blob, disposition){

    const regexFileName = /(attachment; filename=")(.+[^"])(")/;

    // Extrai o nome do arquivo do header
    const filename = regexFileName.exec(disposition)[2] || "video.mp4";

    // Cria o elemento "a" e aciona o evento de click e depois remove o elemento
    const url = URL.createObjectURL(blob);
    const anchor = document.querySelector(".after-download-button");
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = 'block';
    anchor.click();
}

/**
 * 
 * @param {Response} response Fetcher response
 */
async function reciveFile (response) {
    const reader = response.body.getReader(); // Pega o Objeto Reader

    // Tamanho do vídeo 
    const contentLength = response.headers.get("Content-Length");

    // Nome do vídeo
    const contentDisposition = response.headers.get("content-disposition");

    // Onde o arquivo será armazenado
    let chunks = [];

    // Progresso do armazenamento do arquivo
    let recivedLength = 0;

    while(true) {
        // Lê o próximo chunk do arquivo
        const {done, value} = await reader.read(); 

        // Se terminou sai do loop
        if (done) break;

        // Adiciona o chunk no vetor
        chunks.push(value);
        recivedLength += value.length; // Atualiza o tamanho do arquivo

        // Seta a porcentagem e acordo com a quantidade de dados recebido
        setPercent(contentLength, recivedLength); 
    }

    let blob = new Blob(chunks); // "Junta o arquivo" (Transforma em binário)
    download(blob, contentDisposition); // Executa o trigger do download.
}

/**
 * 
 * @param {String} query Url da requisição.
 */
async function send(query) {
    const uri = APIcred.url + query;
    setLoading(true); // Seta como carregando
    setError(false); // Remove todos os erros
    try {
        const response = await fetch(uri); // Faz a requisição com o API Fetch
        if (response.status === 200)
            await reciveFile(response); // Recebe o arquivo caso tenha sucesso (200)
        else throw new Error("Não foi possível baixar o vídeo.");
    } catch (error) {
        console.log(error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
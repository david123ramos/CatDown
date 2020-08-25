const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const axios = require('axios');
const fbvid = require('fbvideos');
const app = express();

app.use(cors({
    exposedHeaders: ['Content-Disposition', 'Content-Length'],
  }));
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/download', async (req,res) => {
    let URL = req.query.URL;
    let type = req.query.type;

    if( type === 'youtube' ) {
        let resp = ytdl.validateURL( URL );
        console.log("----> ", resp, typeof resp)
        if( resp ){
            ytdl(URL, { format: 'mp4' })
            .on("info", info => {
                res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`);
            })
            .on("response", response => {
                // If you want to set size of file in header
                res.setHeader("content-length", response.headers["content-length"]);
            }).on("error", error => {
                return res.status(500).json( {"Erro": "Não foi possível encontrar o vídeo"} )
            }).pipe(res) 
        
        } else {
            res.send(  {"Erro": "Vídeo não encontrado"}  )
        }
    } else {
        let video = await fbvid.high(URL);

        if( video.url ) {
            res.header('Content-Disposition', 'attachment; filename="video.mp4"');
            const response = await axios({
                url: video.url,
                method: 'GET',
                responseType: 'stream'
            });

            response.data.pipe(res);
        } else {
            res.send( {"Erro": "Vídeo não existe ou não é público "} );
        }
    }
});

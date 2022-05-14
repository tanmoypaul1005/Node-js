/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// dependencies
const http = require('http');
const url = require('url');
const {StringDecoder}=require('string_decoder');
// const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes =(req, res) => {
    const parseUrl =url.parse(req.url,true);
    const path=parseUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/$/g, ''); 
    const method=req.method.toLowerCase();
    const queryStringObject=parseUrl.query;
    const headersObject=req.headers;
    
    
    const decoder=new StringDecoder('utf-8')
    let realData='';

    req.on('data',(buffer)=>{
     realData+=decoder.write(buffer);
    });

    req.on('end',()=>{
        realData+=decoder.end();
        console.log(realData);
        res.end('Hello World');
    });

   
    
}

// start the server
app.createServer();


const Joi =require('joi');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(__dirname+'/sslcert/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname+'/sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();


// app.use(express.json());

const EventEmmiter = require('events');
const emmiter = new EventEmmiter();

const Utils = require('./module/utils')
const utils = new Utils();


const { query } = require('express');
const e = require('express');



const dateSchema = Joi.object({
    date:Joi.string().min(3).required()
})

app.get("/api/:date",(req,res)=>{

    console.log(req.params.date)
    // const { error } = dateSchema.validate(req);

    // if(!error){
    
        utils.on('getDate',(eventArg) => {
            
            if(eventArg.flag===1)
{
    res.json({unix:req.params.date,utc:eventArg.data})

}
else{

}
            console.log('getDate',eventArg);
        })

        utils.getDateFromTimeStamp(req.params.date);
       
        // res.write(utils.getDateFromTimeStamp(req.params.date))
        res.end;
    
// }
});





// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);




httpServer.listen(8080);
httpsServer.listen(8443);
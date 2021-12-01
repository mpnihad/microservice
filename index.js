

const Joi =require('joi');

const express =require('express');
const app= express();

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

const port = process.env.PORT || 3000;
app.listen(port,()=>{
   
    console.log(`listening on port ${port}`)
});
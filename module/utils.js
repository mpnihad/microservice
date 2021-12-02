

const EventEmmiter = require('events');

class Utils extends EventEmmiter{
    
    getDateFromTimeStamp(timeStamp,res){

        try {
            var date = new Date(timeStamp*1000);
            console.log(date.toUTCString())
            console.log(timeStamp)
            var dateString = date.toUTCString();
            this.emit('getDate',{data : dateString,flag : 1});
            res.json({unix:timeStamp,utc:dateString})
        } catch (error) {
            console.log(error)
            res.json({unix:timeStamp,utc:"Not a valid TimeStamp"})
        }
    }
}
module.exports=Utils;
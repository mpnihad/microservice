

const EventEmmiter = require('events');

class Utils extends EventEmmiter{
    
    getDateFromTimeStamp(timeStamp){

        try {
            var date = new Date(timeStamp*1000);
            console.log(date.toUTCString())
            console.log(timeStamp)
            var dateString = date.toUTCString();
            this.emit('getDate',{data : dateString,flag : 1});
        } catch (error) {
            console.log(error)
            this.emit('getDate',{data : "Not a valid TimeStamp",flag : 0});
        }
    }
}
module.exports=Utils;
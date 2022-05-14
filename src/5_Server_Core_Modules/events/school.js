const EventEmitter= require('events');
class School extends EventEmitter{
    shartPeriod(){
  console.log('class shirt')
  setTimeout(() => {
    this.emit('ballcalick',{
        period:'1st',
        text:'period end',
    });
  },2000);
    }
}
module.exports=School;
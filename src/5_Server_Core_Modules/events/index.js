const School=require('./school');
const school=new School();
//refister a listener for ball event
emitter.on('ballcalick',({period,text})=>{
    console.log(`we need to bacyse ${period} ${text}`);
})
school.shartPeriod();
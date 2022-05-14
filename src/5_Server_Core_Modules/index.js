const path =require('path');
const mypath='D:/CODE/Sumit Saha Node .js/4_Module_System/index.js';
console.log(path.basename(mypath));
console.log(path.parse(mypath));


const os = require('os');
console.log(os.cpus())

// const fs = require('fs');
// fs.writeFileSync("myfile.txt","hello programers");


const fs = require('fs');
fs.readFile("myfile.txt",(err,data)=>{
    console.log(data);
});



const EventEmitter= require('events');
const emitter= new EventEmitter();

emitter.on('ballcalick',({period,text})=>{
    console.log(`we need to bacyse ${period} ${text}`);
})

emitter.emit('ballcalick',{
    period:'1st',
    text:'period end'
});
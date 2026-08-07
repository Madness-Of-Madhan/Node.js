const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data received user name ${name} with id:${id} `); 
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
customEmitter.emit('response','jhon','34')
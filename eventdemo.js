const events =require('events');

const evenEmitter = new events.EventEmitter();


//
evenEmitter.on('myEvent',(x)=>{

    console.log("my even event is triggered",x);
})

evenEmitter.emit('myEvent',"first event");
evenEmitter.emit('myEvent',"second event");
evenEmitter.emit('myEvent',"third event");
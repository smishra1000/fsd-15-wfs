const event = require("events")

const eventEmitter = new event.EventEmitter();

eventEmitter.on("callme",(data)=>{
console.log(data)
})

eventEmitter.emit("callme","sameer")

eventEmitter.on("class_started",(data)=>{
    console.log("calss started 30 students joind")
})

eventEmitter.emit("class_started","30")
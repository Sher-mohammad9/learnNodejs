# What is Events?

```js
Event ek module hai jo nodejs me events ko create, listener, handle karne ke liye use hota hai.
```

# What is Event Architecuter?

```js
Event Architecuter ek methods hai jiska use nodejs project me events ko handle karene users ke dawara hoi responses ko handle kerne ke liye kiya jata hai.


Event Emitter (Emits Event) -> jo event ko drop karta hai.
Event Listener (Calls event handler) -> jo event ko pikup karta hai.
Event Handler (Callback function, no request) -> jo event ko handle karta hai.
```
# What is Observer Pattern?

```js
Observer Pattern ka use event ko emit karne or event ko listene karne ki liye kiya jata hai.
```

# How to create, Listene, Handle Event?

```js
event create karne ke liye pahal event module ko import karna hoga, 
const events = require("events")
const myEvent = new events.EventEmitter(); // Use EventEmitter class
myEvent.on("feeDeposit", ()=>{ // Listene and Handle event
    console.log("Handle Event")
})
myEvent.emit("feeDeposit") // Create event
```

# How to multiple event listener on same event emitter?

```js
const events = require("events")
const myEvent = new events.EventEmitter();
myEvent.on("feeDeposit", ()=>{
    console.log("Handle Event 1")
})

myEvent.on("feeDeposit", ()=>{
    console.log("Handle Event 2")
})

myEvent.on("feeDeposit", ()=>{
    console.log("Handle Event 3")
})

myEvent.emit("feeDeposit")
```

# How can pass arguments in event emitter?

```js 
const events = require("events")
const myEvent = new events.EventEmitter(); 
myEvent.on("feeDeposit", (handler)=>{ 
    console.log(handler)
})
myEvent.emit("feeDeposit", "Handle Event") 
```

# How can create separate event class and import it as  per the need?

```
```


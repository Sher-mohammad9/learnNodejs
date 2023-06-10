# Node js

### 1. Nodejs hm kyu use krte hain? Nodejs ke benefits?

Kyunki nodejs asynchronous me chaleti hai. nodejs me API farst run hoti hai. nodejs humn module provide karati jis se kam time humra kaam ho jata hai.

Benefits :

Nodejs ki help se server se connect ho sakte hai. 
Files ko create, read, write, update, delete kare sakte hai.
Database se data export, import kar sakte hai.


### 2. Nodejs and JavaScipt me kya difference hai?


Nodejs server per run hoti hai || javascript browser per run hoti hai;
Nodejs se local machine se connect ho sakte hai || javascript client side language hai;
Nodejs se files create, read, write, update,delete kar sakte hai || javascript se webpages ko dynamic bena sakte hai;
Nodejs me API create kar sakte hai || javascript me API create nhi kar sakte;



### 3. Module kya hota hai ? Nodejs me module kitni trah se import kr skte hain ?


Module ek tarah ka packge hota hai jo specific facilities provide karata hai. module kai tarah ke hote hai. 

1. const myModule = require('./myModule');
2. import myModule from './myModule.mjs';
3. import { myFunction } from './myModule';
4. const myModule = import('./myModule.mjs');

### 4. Nodjes ke feature ke bare me likho 

Node.js, JavaScript runtime environment hai jo server-side applications ke development ko facilitate karta hai. Niche kuch Node.js ke pramukh features hai:

    **Non-blocking IO** : Node.js single-threaded architecture ka istemal karta hai, jiske wajah asynchronous tarike se handle kiye ja sakte hain. IO opresation jaise ki file system operations, network requests, databases se communication
     
    __Event-driven-architecture__ : Node.js event-driven programming model par tika hua hai. Ismein, applications events (jaise ki user input, network requests, timers) ko listen karte hain."

    __NPM-(Node Package Manager)__ : NPM Node.js ka package ecosystem hai, jise developers libraries, modules, frameworks, tools, etc. ko discover, share, aur reuse karne ke liye istemal karte hain. NPM ki help se developers easily third-party packages ko apne projects mein integrate kar sakte hain.

    __Module-system__ : Node.js me modules specific facitilirs provide karta hai, jisse code ko modularize aur reuse karne mein madad milti hai. Modules ki help se code components ko alag-alag files mein organize kiya ja sakta hai, jisse codebase maintainable aur scalable hota hai. Modules ko require aur import statements se import kiya ja sakta hai.

    __Scalability__ : Node.js horizontal scalability par emphasize karta hai, jisse applications  multiple CPU cores aur servers par distribute kar sakte hain. Node.js clusters, load balancing, aur distributed computing ke concepts ko support karta hai.

    __Single-threaded-event loop__ : Node.js ek single-threaded event loop model par kaam karta hai. Yeh architecture Node.js ko lightweight aur efficient banata hai, kyun ki single thread ko multiple concurrent requests handle karne ki capability hoti hai. Event loop multiple events ko handle karke non-blocking I/O operations ko possible banata hai.

    __Real-time-applications__ : Node.js real-time applications (jaise ki chat applications, collaborative tools, gaming servers) ke liye suitable hai. Non-blocking I/O aur event-driven architecture ki wajah se Node.js high-speed, low-latency, real-time communication provide kar sakta hai.


### 5. File System module ka kya use hai ?

File system module file ke liye specific facitilies provide karta hai. jis se local machine/server me file create, read, write, update, delete kar sakte hai.


### 6. Encoding kya hoti hai ? UTF-8 encoding ke bare me btayen 

Encoding ek process hai jisme information ko represent karne ke liye symbols, characters, ya numbers ka use kiya jata hai. Encoding, data ko ek particular format mein convert karne ka tarika hota hai jisse use transmit, store, aur interpret karne mein asani ho.

UTF-8 encoding 

UTF-8 encoding symbols, characters, numbers ko machine language me convert karne ke liye use hota hai. jis se ki machine symbols, characters, numbers ko samaj sak. 


### 7. Absolute and Relative path me kya differences hain 

Absolute path complete URL hota hai. jis se us data tak pahuncha ja sakta hai jis ka URL hai. absolute path ki help se us data tak pahuncha ja sakta hai jo data humar persent folder ya machine me nhi hai;

Relative path sort URL hota hai. relative path humar machine tak hi hota hai. relative path ki help se hum duser folder ya machine connet nhi ho sakte.     


### 8. File and Folder me kya differnce hai ?

File kai type ki hoti hai. || Folder ka koi type nhi hota hai.
File me sirf data hota hai. || Folder me file ya folder ho sakte hai.
File ke under file nhi hoti || Folder ke under folder ho sakte hai.
File ko export karne se sirf file ka data export hota hai || Folder ko export karne se folder ka sara data export ho jayga.


### 9. Differnce between callback and promise. Explain with example


callback ek function hota hai. jo as argument kisi function ko pass kiya jata hai. or ye kab call hoga hum pata nhi hota hai.


Example :
```js
function call(callback){
	let response = false || true
  if(response){
  	callback()
  }
}

call(function (){
	return "I am callback function";
})
```


Promises JavaScript mein asynchronous programming ke liye ek pattern hai. Ye ek object hai jo future value ko show karta hai. Promise ek asynchronous operation ko represent karta hai jo future mein complete hoga aur result ko resolve ya reject karega.

Promises three states mein exist karte hain:

1. __Pending__ : Promise initially pending state mein hota hai, yani ki operation abhi chal nahi hua hai.

2. **Fulfilled** : Promise fulfilled state mein chala jata hai jab async operation successfully complete ho jata hai. Is state mein promise ek result value ko resolve karta hai.

3. __Rejected__ : Promise rejected state mein chala jata hai jab async operation mein koi error ya exception occur hota hai. Is state mein promise ek error ko reject karta hai.

Promise ke response ko handle karne ke liye then function ka use hota hai. jo argument me ek callback function leta hai. or promise ke reject ko handle karne ke liye catch function ka use hota hai. jo ek parameter leta hai. 

Example :
```js
const promise = new Promise((response, reject)=>{
	let response = false || true
	if(response){
		response()
	}else{
		reject()
	}
})

promise.then((response)=> console.log(response)).catch((reject)=> console.log(reject))
```

### 10. readFile and readFileSync me kya differences hain? Explain with example

readFile ek function hai jo asynchronous behavior run hota hai. readFile function sirf file ko read karne ka kaam karta hai.


Example :
```js
const fs = require('fs');
fs.readFile("others.js", "UTF-8", (error, data)=>{
	if(error){
		throw new Error("File not found");
	}else{
		console.log(data);
	}
})
console.log("readFile")

// output
 readFile
 data
```


readFileSync ek function hai jo synchronous behavior run hota hai. readFileSync function sirf file ko read karne ka kaam karta hai.

Example :
```js
const fs = require('fs');
const data = readFileSync("others.js", {encoding : "UTF-8"});
console.log(data);
console.log("readFileSync")

// output
 data
 readFileSync
```


### 11. writeFile and writeFileSync me kya differences hain? Explain with example

writeFile ek function hai jo asynchronous behavior run hota hai. writeFile function exists file me data write karne or new file create kar ke data write karne ke liye use hota hai.


Example :
```js
__exists file__

const fs = require('fs');
fs.writeFile("others.js", "write hello", (error, data)=>{
	if(error){
		throw new Error("File not found")
	}else{
		console.log("Success")
	}
})

__Create file__

const fs = require('fs');
fs.writeFile("hello.js", "write hello", (error, data)=>{
	if(error){
		throw new Error("File not found")
	}else{
		console.log("Success")
	}
})
```


writeFileSync ek function hai jo synchronous behavior run hota hai. writeFileSync function exists file me data write karne or new file create kar ke data write karne ke liye use hota hai.

Example :
```js
__exists file__

const fs = require('fs');
fs.readFileSync("others.js", "write hello");

__Create file__

const fs = require('fs');
fs.readFileSync("others.js", "write hello");
```
let readlineSync = require('readline-sync');

let Wikipedia = readlineSync.question("Wikipedia Mb:");
let Memes = readlineSync.question ("Memes Mb:")

let total = (Wikipedia *0.10);
let total1= (Memes * 0.05);
 
console.log(`${total}  ${total1} `);


 if (total1>total){
    console.log("WOW MANY MEMES");
}
else if (total>=100){
    console.log("Too much consumption")
}






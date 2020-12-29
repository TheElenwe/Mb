let prompt = require('prompt-sync')({sigint: true});

let Wikipedia = prompt("Wikipedia Mb:");
let Memes = prompt ("Memes Mb:")

Wikipedia = parseFloat(Wikipedia );
Memes = parseFloat(Memes)


let total = (Wikipedia *0.10);
let total1= (Memes * 0.05);
 
console.log(`${total}  ${total1} `);


 if (total1>total){
    console.log("WOW MANY MEMES");
}
else if (total>=100){
    console.log("Too much consumption")
}





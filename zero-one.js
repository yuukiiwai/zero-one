const maxStringLength = 32;

const reset = '\u001b[0m';
const red = '\u001b[31m';
const yellow = '\u001b[33m'

const kengai = "お前は圏外だ"

const upper = [
    "   "+red+"▲             ▲",
    "  ▲▼▲           ▲▼▲",
    yellow+" ▲▼"+reset+"△"+yellow+"▼▲         ▲▼"+reset+"△"+yellow+"▼▲",
    "▲"+reset+"▽   ▽"+yellow+"▲       ▲"+reset+"▽   ▽"+yellow+"▲",
    reset+"     △"+yellow+"▼"+red+"▲     ▲"+yellow+"▼"+reset+"△",
    yellow+"  ▲"+reset+"▽"+yellow+"▲▼"+red+"▲▼▲   ▲▼▲"+yellow+"▼▲"+reset+"▽"+yellow+"▲",
    reset+" ▲"+red+"▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼"+reset+"▲",
    reset+"▲▼▲"+red+"▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼"+reset+"▲▼▲",
    "    ▼▲▼ ▼▲▼ ▼▲▼ ▼▲▼",
    "     ▼   ▼   ▼   ▼"]
const lower = [
    "         ▲   ▲",
    "        ▲▼▲ ▲▼▲",
    "    ▼▲▼"+red+"▲▼▲▼▲▼▲▼▲"+reset+"▼▲▼",
    "     ▼"+red+"▲▼▲▼▲▼▲▼▲▼▲"+reset+"▼"]

let rl = require('readline');
let os = require('os');

let kengaimoji = 0;
let kx = 0;
let ky = 0;

console.log(red);
const kengaiInt = setInterval(()=>{
    if(kx >= process.stdout.getWindowSize()[0]){
        kx = 0;
        ky++;
    }
    rl.cursorTo(process.stdout,kx,ky);
    process.stdout.write(kengai[kengaimoji]);
    kx+=2;
    kengaimoji = (kengaimoji+1)%6;
},10)

setTimeout(()=>{
    clearInterval(kengaiInt);
},20*1000)

let uplow = true;
let movie;

setTimeout(()=>{
    movie = setInterval(()=>{
        console.clear();
        for(let i = 0; i < upper.length ; i++){
            rl.cursorTo(process.stdout,process.stdout.getWindowSize()[0]/2-maxStringLength/2,(uplow ? 0 : 1)+i+10);
            process.stdout.write(upper[i]);
        }
    
        for(let i = 0; i < lower.length ; i++){
            rl.cursorTo(process.stdout,process.stdout.getWindowSize()[0]/2-maxStringLength/2,12+i+10);
            process.stdout.write(lower[i]);
        }
        uplow = !uplow;
    },100);
},20*1000)

setTimeout(()=>{
    clearInterval(movie)
    console.clear();
    console.log("logout PB01");
},25*1000);
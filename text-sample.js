const kengai = [
    [
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　おおお　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　おおお　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　おおお　　　　　　　　　お　　　　　　　　",
        "　　　　　　　　おおお　　　　　　　　おおおお　　　　　　",
        "　　　　　　　　おおお　　　　　　　　おおおおお　　　　　",
        "　　　　　　　　おおおおおおおおお　　　　おおおおお　　　",
        "　おおおおおおおおおおおおおおおお　　　　　おおおおお　　",
        "　おおおおおおおおおおおおおお　　　　　　　　おおおおお　",
        "　おおおおおおおおおお　　　　　　　　　　　　　　おおお　",
        "　　　　　　　　おおお　　　　　　　　　　　　　　　お　　",
        "　　　　　　　　おおお　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　おおお　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　おおお　　おおおおおおおおお　　　　　　　",
        "　　　　　　　　おおおおおおおおおおおおおおおお　　　　　",
        "　　　　　　　　おおおおおおおおおおおおおおおおお　　　　",
        "　　　　　　おおおおおおお　　　　　　　　おおおおお　　　",
        "　　　　おおおおおおお　　　　　　　　　　　　おおお　　　",
        "　　　おおおお　おおお　　　　　　　　　　　　おおおお　　",
        "　　おおお　　　おおお　　　　　　　　　　　　　おおお　　",
        "　おおお　　　　おおお　　　　　　　　　　　　　おおお　　",
        "　おおお　　　　おおお　　　　　　　　　　　　　おおお　　",
        "おおお　　　　　おおお　　　　　　　　　　　　おおおお　　",
        "おおお　　　　　おおお　　　　　　　　　　　　おおお　　　",
        "おおおお　　　　おおお　　　　　　　　　　おおおおお　　　",
        "　おおおお　　　おおお　　　　　　　　おおおおおお　　　　",
        "　　おおおおおおおおお　　おおおおおおおおおおお　　　　　",
        "　　　おおおおおおお　　　　おおおおおおおお　　　　　　　",
        "　　　　　おおおおお　　　　おおおお　　　　　　　　　　　"
    ],
    [
        "　　　　　　　　　　前　　　　　　　　　　　前前　　　　　　　　　　",
        "　　　　　　　　　前前前　　　　　　　　　　前前前　　　　　　　　　",
        "　　　　　　　　　前前前　　　　　　　　　前前前　　　　　　　　　　",
        "　　　　　　　　　　前前前　　　　　　　　前前前　　　　　　　　　　",
        "　　　　　　　　　　前前前　　　　　　　前前前　　　　　　　　　　　",
        "　　　　　　　　　　　前　　　　　　　　前前前　　　　　　　　　　　",
        "　前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前　",
        "　前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前前　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　前前前前前前前前前前前前前　　　　　　　　　　　　前前前　　　",
        "　　　前前前前前前前前前前前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前前前前前前前前前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前前前前前前前前前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前前前前前前前前前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前前前前前前前前前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　前前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　　前前　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　　　　　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　　　　　　　　　前前前　　　",
        "　　　前前前　　　　　　　前前前　　　　　　　　　　　　前前前　　　",
        "　　　前前前　　　　前前前前前前　　　　　　前前前前前前前前前　　　",
        "　　　前前前　　　　前前前前前前　　　　　　前前前前前前前前　　　　",
        "　　　前前前　　　　前前前前前　　　　　　　前前前前前前前前　　　　"
    ],
    [
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　はは　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　　　ははは　　　　　　　　　　　　　ははは　　　　　　　　",
        "　　ははは　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　　ははは　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　　ははは　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　　ははは　　　　　　　　　　　　　　ははは　　　はは　　　",
        "　ははは　　　　　　はははははははははははははははははは　　",
        "　ははは　　　　　　はははははははははははははははははは　　",
        "　ははは　　　　　　はははははははははははははは　　　　　　",
        "　ははは　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　ははは　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　ははは　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　はは　　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "　はは　　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "ははは　　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "ははは　　　　　　　　　　　　　　　　ははは　　　　　　　　",
        "ははは　　　は　　　　　　　　　　　　ははは　　　　　　　　",
        "ははは　　ははは　　　　　　　　　　　ははは　　　　　　　　",
        "ははは　　はは　　　　　はははははははははは　　　　　　　　",
        "　はは　ははは　　　　はははははははははははは　　　　　　　",
        "　ははははは　　　　ははははははははははははははは　　　　　",
        "　ははははは　　　　ははは　　　　　　はははははははは　　　",
        "　はははは　　　　ははは　　　　　　　ははは　ははははは　　",
        "　はははは　　　　　ははは　　　　　はははは　　　はははは　",
        "　はははは　　　　　はははははははははははは　　　　ははは　",
        "　はははは　　　　　　はははははははははは　　　　　　　　　",
        "　ははは　　　　　　　　　ははははははは　　　　　　　　　　",
        "　　はは　　　　　　　　　　　　　　　　　　　　　　　　　　"
    ],
    [
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏",
        "圏圏圏　　　　　　　　　　　　　　　　　　　　　　　　圏圏圏",
        "圏圏圏　　　　圏　　　　　圏圏　　　　　圏圏　　　　　圏圏圏",
        "圏圏圏　　　圏圏圏　　　　圏圏　　　　圏圏圏　　　　　圏圏圏",
        "圏圏圏　　　　圏圏圏　　　圏圏　　　　圏圏圏　　　　　圏圏圏",
        "圏圏圏　　　　　圏圏　　圏圏圏　　　圏圏圏　　　　　　圏圏圏",
        "圏圏圏　圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏　圏圏圏",
        "圏圏圏　圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏　圏圏圏",
        "圏圏圏　　　　　　　　圏圏圏　　　圏圏　　　　　　　　圏圏圏",
        "圏圏圏　　　　　　　　圏圏　　　　圏圏圏　　　　　　　圏圏圏",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏　圏圏圏",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏　圏圏圏",
        "圏圏圏　　　　　　圏圏　　　　　　　　圏圏圏　　　　　圏圏圏",
        "圏圏圏　　　　　圏圏圏　　　　　　　　　圏圏圏　　　　圏圏圏",
        "圏圏圏　　　　圏圏圏圏圏圏圏圏圏圏圏圏圏　圏圏圏　　　圏圏圏",
        "圏圏圏　　　圏圏圏圏圏圏圏圏圏圏圏圏圏圏　　圏圏圏　　圏圏圏",
        "圏圏圏　　圏圏圏　　　　　　　　　　圏圏　　　圏圏圏圏圏圏圏",
        "圏圏圏圏圏圏圏　　　　　　　　　　　圏圏　　　　圏圏圏圏圏圏",
        "圏圏圏圏圏圏　　圏圏圏圏圏圏圏圏圏圏圏圏　　　　　圏　圏圏圏",
        "圏圏圏　圏　　　圏圏圏圏圏圏圏圏圏圏圏圏　　　　　　　圏圏圏",
        "圏圏圏　　　　　圏圏圏　　　　　　　　　　圏圏圏　　　圏圏圏",
        "圏圏圏　　　　　圏圏圏　　　　　　　　　　圏圏圏　　　圏圏圏",
        "圏圏圏　　　　　圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏　　　圏圏圏",
        "圏圏圏　　　　　　圏圏圏圏圏圏圏圏圏圏圏圏圏圏　　　　圏圏圏",
        "圏圏圏　　　　　　　　　　　　　　　　　　　　　　　　圏圏圏",
        "圏圏圏　　　　　　　　　　　　　　　　　　　　　　　　圏圏圏",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏",
        "圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏圏",
        "圏圏圏　　　　　　　　　　　　　　　　　　　　　　　　圏圏圏"
    ],
    [
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　外外　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　外外外　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　　　外外　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　　外外外　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　　外外外外外外外外外　　　　　外外外　　　　　　　　　",
        "　　　　　　　外外外外外外外外外外　　　　外外外　　　　　　　　　",
        "　　　　　　外外外　　　　　外外外　　　　外外外　　　　　　　　　",
        "　　　　　　外外外　　　　　外外外　　　　外外外　　　　　　　　　",
        "　　　　　　外外外　　　　　外外外　　　　外外外　　　　　　　　　",
        "　　　　　外外外　　　　　　外外外　　　　外外外　　　　　　　　　",
        "　　　　　外外外　　　　　　外外外外　　　外外外　　　　　　　　　",
        "　　　　外外外　　　　　　外外外外外外　　外外外　　　　　　　　　",
        "　　　　外外外外　　　　　外外外　外外外　外外外　　　　　　　　　",
        "　　　外外外外外外　　　　外外外　外外外外外外外　　　　　　　　　",
        "　　外外外外外外外外　　　外外　　　外外外外外外　　　　　　　　　",
        "　　外外外　　外外外外　外外外　　　　外外外外外　　　　　　　　　",
        "　外外外　　　　外外外外外外外　　　　　　外外外外　　　　　　　　",
        "外外外　　　　　　外外外外外　　　　　　　外外外外外外　　　　　　",
        "　外外　　　　　　　外外外外　　　　　　　外外外外外外外外　　　　",
        "　　　　　　　　　　　外外外　　　　　　　外外外　外外外外外外　　",
        "　　　　　　　　　　外外外　　　　　　　　外外外　　外外外外外外　",
        "　　　　　　　　　外外外外　　　　　　　　外外外　　　　外外外　　",
        "　　　　　　　　　外外外　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　　　外外外　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　　外外外外　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　　外外外外　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　　外外外外　　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　　外外外外　　　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　外外外外　　　　　　　　　　　　　　外外外　　　　　　　　　",
        "　　外外外外　　　　　　　　　　　　　　　外外外　　　　　　　　　",
        "　　　外外　　　　　　　　　　　　　　　　外外外　　　　　　　　　"
    ],
    [
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　　　　　　　　　　　　　　　　　　だ　　　　　",
        "　　　　　　　　　　だだだ　　　　　　　　　　　だだだ　　　　",
        "　　　　　　　　　　だだだ　　　　　　　　　　　　だだだ　　　",
        "　　　　　　　　　　だだだ　　　　　　　　だだだ　　だだだ　　",
        "　　　　　　　　　だだだ　　　　　　　　　だだだだ　　だだだ　",
        "　　　　　　　　　だだだ　　　　　　　　　　だだだ　　　だ　　",
        "　　　　　　　　　だだだ　　　だだだ　　　　　だだだ　　　　　",
        "　だだだだだだだだだだだだだだだだだ　　　　　　だだだ　　　　",
        "　だだだだだだだだだだだだだだだだだ　　　　　　　だ　　　　　",
        "　だだだだだだだだだだだ　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　だだだ　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　　だだ　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　　だだだ　　　　　　　　　だだだだだだだだ　　　　",
        "　　　　　　　だだだ　　　　　だだだだだだだだだだだだ　　　　",
        "　　　　　　　だだだ　　　　　だだだだだだだだだだだだ　　　　",
        "　　　　　　だだだ　　　　　　だだだ　　　　　　　　　　　　　",
        "　　　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　だだだ　　　　　　　　　　　　　　　　　　　　　　　　",
        "　　　　だだだ　　　　　　だだ　　　　　　　　　　　　　　　　",
        "　　　だだだ　　　　　　　だだだ　　　　　　　　　　　　　　　",
        "　　　だだだ　　　　　　　だだだ　　　　　　　　　　　　　　　",
        "　　だだだだ　　　　　　　　だだだだ　　　　　　　　　　　　　",
        "　　だだだ　　　　　　　　　だだだだだだだだだだだだだだだ　　",
        "　だだだだ　　　　　　　　　　だだだだだだだだだだだだだだ　　",
        "　だだだ　　　　　　　　　　　　　　だだだだだだだだだだだ　　",
        "　　　だ　　　　　　　　　　　　　　　　　　　　　　　　　　　"
    ]
]

let rl = require('readline');
let os = require('os');

const MAX_Y = 32;
let loop = 0;
let sizes = [
    0,
    kengai[0][0].length, 
    kengai[0][0].length + kengai[1][0].length, 
    kengai[0][0].length + kengai[1][0].length + kengai[2][0].length,
    kengai[0][0].length + kengai[1][0].length + kengai[2][0].length + kengai[3][0].length,
    kengai[0][0].length + kengai[1][0].length + kengai[2][0].length + kengai[3][0].length + kengai[4][0].length,
]

setInterval(()=>{
    for(let letter = 0; letter < kengai.length; letter++){
        for(let c = 0; c < kengai[letter][0].length; c++){
            let x = c + sizes[letter] - loop;
            if(x < 0 || process.stdout.getWindowSize()[0]/2 <= x){ continue; }
            for(let i = 0; i < MAX_Y ; i++){
                rl.cursorTo(process.stdout,x*2,i);
                process.stdout.write( kengai[letter][i][c] );
            }
        }
    }

    loop++;
},50)



//console.log(kengai[0].length);
//console.log(kengai[1].length);
//console.log(kengai[2].length);
//console.log(kengai[3].length);
//console.log(kengai[4].length);
//console.log(kengai[5].length);
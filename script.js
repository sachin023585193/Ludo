let boxes = document.querySelectorAll('.boxes');

const redpath = [boxes[19], boxes[20], boxes[21], boxes[22], boxes[23], boxes[15], boxes[12], boxes[9], boxes[6],
    boxes[3], boxes[0], boxes[1], boxes[2], boxes[5], boxes[8], boxes[11], boxes[14], boxes[17], boxes[24], boxes[25],
    boxes[26], boxes[27], boxes[28], boxes[29], boxes[41], boxes[53], boxes[52], boxes[51], boxes[50], boxes[49],
    boxes[48], boxes[56], boxes[59], boxes[62], boxes[65], boxes[68], boxes[71], boxes[70], boxes[69], boxes[66],
    boxes[63], boxes[60], boxes[57], boxes[54], boxes[47], boxes[46], boxes[45], boxes[44], boxes[43], boxes[42],
    boxes[30], boxes[31], boxes[32], boxes[33], boxes[34], boxes[35], document.querySelector('.red.vaikunth')
];
const greenpath = [boxes[5], boxes[8], boxes[11], boxes[14], boxes[17], boxes[24], boxes[25], boxes[26], boxes[27],
    boxes[28], boxes[29], boxes[41], boxes[53], boxes[52], boxes[51], boxes[50], boxes[49], boxes[48], boxes[56],
    boxes[59], boxes[62], boxes[65], boxes[68], boxes[71], boxes[70], boxes[69], boxes[66], boxes[63], boxes[60],
    boxes[57], boxes[54], boxes[47], boxes[46], boxes[45], boxes[44], boxes[43], boxes[42], boxes[30], boxes[18],
    boxes[19], boxes[20], boxes[21], boxes[22], boxes[23], boxes[15], boxes[12], boxes[9], boxes[6], boxes[3],
    boxes[0], boxes[1], boxes[4], boxes[7], boxes[10], boxes[13], boxes[16], document.querySelector('.green.vaikunth')
];
const yellowpath = [boxes[52], boxes[51], boxes[50], boxes[49], boxes[48], boxes[56], boxes[59], boxes[62], boxes[65], boxes[68], boxes[71], boxes[70], boxes[69], boxes[66], boxes[63], boxes[60], boxes[57], boxes[54], boxes[47],
    boxes[46], boxes[45], boxes[44], boxes[43], boxes[42], boxes[30], boxes[18], boxes[19], boxes[20], boxes[21],
    boxes[22], boxes[23], boxes[15], boxes[12], boxes[9], boxes[6], boxes[3], boxes[0], boxes[1], boxes[2],
    boxes[5], boxes[8], boxes[11], boxes[14], boxes[17], boxes[24], boxes[25], boxes[26], boxes[27], boxes[28],
    boxes[29], boxes[41], boxes[40], boxes[39], boxes[38], boxes[37], boxes[36], document.querySelector('.yellow.vaikunth')
];
const bluepath = [boxes[66], boxes[63], boxes[60], boxes[57], boxes[54], boxes[47], boxes[46], boxes[45], boxes[44],
    boxes[43], boxes[42], boxes[30], boxes[18], boxes[19], boxes[20], boxes[21], boxes[22], boxes[23], boxes[15], boxes[12], boxes[9], boxes[6], boxes[3], boxes[0], boxes[1], boxes[2], boxes[5], boxes[8], boxes[11], boxes[14],
    boxes[17], boxes[24], boxes[25], boxes[26], boxes[27], boxes[28], boxes[29], boxes[41], boxes[53], boxes[52],
    boxes[51], boxes[50], boxes[49], boxes[48], boxes[56], boxes[59], boxes[62], boxes[65], boxes[68], boxes[71],
    boxes[70], boxes[67], boxes[64], boxes[61], boxes[58], boxes[55], document.querySelector('.blue.vaikunth')
];

// main logic starts
let dice = document.getElementById('dice');
let redtoken = document.querySelectorAll('.redtoken');
let greentoken = document.querySelectorAll('.greentoken');
let yellowtoken = document.querySelectorAll('.yellowtoken');
let bluetoken = document.querySelectorAll('.bluetoken');
let alltokens = document.querySelectorAll('.token')
let info = document.querySelector('.info')
let tokParent
let indexx
let index
let turn = 'red';
let number
let noOfEnabled = 0;
let obj2 = {
    'red': redpath,
    'green': greenpath,
    'yellow': yellowpath,
    'blue': bluepath,
}
let obj1 = {
    'red': document.querySelectorAll('.redtoken'),
    'green': document.querySelectorAll('.greentoken'),
    'yellow': document.querySelectorAll('.yellowtoken'),
    'blue': document.querySelectorAll('.bluetoken'),
}

function variables() {
    dice = document.getElementById('dice');
    redtoken = document.querySelectorAll('.redtoken');
    greentoken = document.querySelectorAll('.greentoken');
    yellowtoken = document.querySelectorAll('.yellowtoken');
    bluetoken = document.querySelectorAll('.bluetoken');
    alltokens = document.querySelectorAll('.token')
    obj2 = {
        'red': redpath,
        'green': greenpath,
        'yellow': yellowpath,
        'blue': bluepath,
    }

    obj1 = {
        'red': document.querySelectorAll('.redtoken'),
        'green': document.querySelectorAll('.greentoken'),
        'yellow': document.querySelectorAll('.yellowtoken'),
        'blue': document.querySelectorAll('.bluetoken'),
    }
    obj3 = { 'red': red, 'green': green, 'yellow': yellow, 'blue': blue }
    alltokens.forEach((token) => {
        token.addEventListener('click', move)
    })
}

// to create ojects for each color including theit positions and parents
class tokens {
    constructor(Color, NoOfHomes, token1, token2, token3, token4, parents) {
        this.Color = Color;
        this.NoOfHomes = NoOfHomes;
        this.tokenPositions = [token1, token2, token3, token4];
        this.parents = parents;
    }
}
let red = new tokens('red', 0, null, null, null, null, document.querySelectorAll('.red .innerp2'));
let green = new tokens('green', 0, null, null, null, null, document.querySelectorAll('.green .innerp2'));
let yellow = new tokens('yellow', 0, null, null, null, null, document.querySelectorAll('.yellow .innerp2'));
let blue = new tokens('blue', 0, null, null, null, null, document.querySelectorAll('.blue .innerp2'));
// let red = new tokens('red', 0, 41, 42, 43, 45, document.querySelectorAll('.red .innerp2'));
// let green = new tokens('green', 0, 52, 55, 54, 53, document.querySelectorAll('.green .innerp2'));
// let yellow = new tokens('yellow', 0, 52, 55, 54, 53, document.querySelectorAll('.yellow .innerp2'));
// let blue = new tokens('blue', 0, 52, 55, 54, 53, document.querySelectorAll('.blue .innerp2'));
let array = [red, green, yellow, blue];
let obj3 = { 'red': red, 'green': green, 'yellow': yellow, 'blue': blue }

// function to set tokens in their palce
function settokens() {
    // erase every box
    let innerp2 = document.querySelectorAll('.innerp2')
    let boxes = document.querySelectorAll('.boxes')
    boxes.forEach(box => box.innerHTML = '')
    innerp2.forEach(box => box.innerHTML = '')
        // 

    array.forEach((obj) => {
        variables();
        let object = obj;
        obj.tokenPositions.forEach((position, index) => {
            if (position != null) {
                obj2[object.Color][position].innerHTML += `<button disabled 
                    class="token ${object.Color}token"></button>`;

                function setvaikunth() {
                    array.forEach(x => {
                        document.querySelector(`.${x.Color}.vaikunth`).innerHTML = ""
                        for (let i = 0; i < x.NoOfHomes; i++) {
                            document.querySelector(`.${x.Color}.vaikunth`).innerHTML += `
                            <button disabled class="dummytoken dummy${x.Color}token"></button>;
                            `
                        }
                    })
                }
                setvaikunth()
            } else {
                object['parents'][index].innerHTML = `<button disabled class="token ${object.Color}token"></button>`;

            }
        })
    });



}
settokens()
    //

// functions to change the positions
function changeturn() {
    if (turn == 'red') {
        turn = 'green'
    } else if (turn == 'green') {
        turn = 'yellow'
    } else if (turn == 'yellow') {
        turn = 'blue'
    } else if (turn == 'blue') {
        turn = 'red'
    }
    info.innerText = turn + " Turn";
    if (obj3[turn].NoOfHomes == 4 || (false)) changeturn();
    // if some homed and none outside,changeturn
};
dice.addEventListener('click', () => {
    dice.innerHTML = '';
    number = Math.ceil(Math.random() * 6);
    for (let i = 1; i <= number; i++) {
        dice.innerHTML += '<div class="number"></div>';
    };
    dice.disabled = true;
    variables()
    enablebuttons();
});

function enablebuttons() {
    variables()
    noOfEnabled = 0;
    if (number == 6) {
        obj1[turn].forEach((token) => token.disabled = false);
    } else {
        obj1[turn].forEach((token) => {
                if (token.parentElement.className != 'innerp2') {
                    token.disabled = false;
                    noOfEnabled++
                }
            })
            //number is not equal to six and sabae vitra xan vane afae turn change hunu parx
            //checking if sabe vitra xan ki xaenan 
            // if (!obj3[turn].tokenPositions.map(item => item == null).includes(false)) {
            //     changeturn();
            //     dice.disabled = false;
            // }
            // might need to change if so uncomment upone
        if (noOfEnabled == 0) {
            changeturn();
            dice.disabled = false;
        }
    }
};

alltokens = document.querySelectorAll('.token')
alltokens.forEach((token) => {
    token.addEventListener('click', move)
})

// to move
function move(event) {
    if (event.target.parentElement.className == 'innerp2') {
        index = Object.values(obj3[turn].parents).indexOf(event.target.parentElement);
        obj3[turn].tokenPositions[index] = 0;
    } else {
        index = obj3[turn].tokenPositions.indexOf(obj2[turn].indexOf(event.target.parentElement))

        function checkout() {
            toMovePlace = obj2[turn][obj3[turn].tokenPositions[index] + number];
            if (toMovePlace == undefined) {
                return;
            } else {
                if (toMovePlace.classList[1] == 'vaikunth') {
                    obj3[turn].NoOfHomes += 1;
                    // checkWin()
                    if (obj3[turn].NoOfHomes == 4) {
                        console.log(obj3[turn].Color + "is the winner");
                    }
                }
            }
            anyOut = toMovePlace.querySelectorAll('.token');

            if (anyOut[0] != null) {
                anyOut.forEach((token) => {
                    if (token.classList[1] == obj1[turn][0].classList[1]) {
                        if ((obj3[turn].tokenPositions[index] + number) >= 57) {

                        } else {
                            obj3[turn].tokenPositions[index] += number;
                        }
                    } else {
                        // token katne logic
                        if (toMovePlace.classList[toMovePlace.classList.length - 1] != 'star') {
                            classname = token.classList[1]
                            tokParent = classname.substring(0, classname.length - 5)
                            indexx = (obj3[tokParent].tokenPositions.indexOf(obj2[tokParent].indexOf(token.parentElement)));
                            obj3[tokParent].tokenPositions[indexx] = null
                            variables()
                        }
                    }
                    if ((obj3[turn].tokenPositions[index] + number) >= 57) {

                    } else {
                        obj3[turn].tokenPositions[index] += number;
                    }
                })
            } else {
                if ((obj3[turn].tokenPositions[index] + number) >= 57) {

                } else {
                    obj3[turn].tokenPositions[index] += number;
                }
            }

        }
        checkout()

        // obj3[turn].tokenPositions[index] += number;
    }
    settokens();
    variables();
    disabletokens();
    changeturn()
    dice.disabled = false;
}

function disabletokens() {
    alltokens.forEach(token => token.disabled = true)
}
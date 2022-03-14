const stickman = document.querySelector('[data-stickman]');
const characterGuess = document.querySelector('[data-character-guess]');
const buttonSubmit = document.querySelector('[data-submit]');
const rightGuess = document.querySelector('[data-right]');
const guesses = document.querySelector('[data-guesses]');
const overlay = document.querySelector('[data-overlay]');
const ctx = stickman.getContext("2d");
let count = 0;
let isActive = true;

ctx.beginPath();

const draw = (moveX,moveY,lineX,lineY) => {
    ctx.moveTo(moveX,moveY);
    ctx.lineTo(lineX,lineY);
    ctx.stroke();
}
//line 1
const lineOne = () => {
    draw(50,150,200,150);
}
//line 2
const lineTwo = () => {
    draw(60,20,60,150);
}
//line 3
const lineThree = () => {
    draw(100,50,50,50);
}
//line 4
const lineFour = () => {
    draw(90,50,90,70);
}
// head
const head = () => {
    ctx.arc(90, 75, 7, -1, 2 * Math.PI);
    ctx.stroke();
}
// torso
const torso = () => {
    draw(90,120,90,82);
}
// left arm
const leftArm = () => {
    draw(80,110,90,88);
}
//right arm
const rightArm = () => {
    draw(90,88,100,110);
}
// left leg
const leftLeg = () => {
    draw(80,140,90,120);
}
// right leg
const rightLeg = () => {
    draw(90,120,100,140);
}

const wrongChoice = [lineOne, lineTwo, lineThree, lineFour, head, torso, leftArm, rightArm, leftLeg, rightLeg]


const word = ['ananas','dragon','cat','carrot','dubai','badin'];
const randomWord = Math.floor(Math.random() * word.length);
let correctArray = [];
let typed = [];
const wordCharacters = word[randomWord].toString().split("");

buttonSubmit.addEventListener('click',() => {
    if (isActive) {
        const guess = characterGuess.value.toLowerCase();
        typed.push(guess);
        for (let i = 0; i < wordCharacters.length; i++) {
            if (wordCharacters[i] === guess) {
                correctArray[i] = guess;
                rightGuess.innerHTML = correctArray;
            }  
        }
        
        if (wordCharacters.indexOf(guess) === -1) {
            guesses.innerHTML = typed;
            wrongChoice[count]();
            count++;
    
            if (count === 10) {
                isActive = false;
                overlay.style.display = 'block';
            };
        }
    
        if (correctArray.join("") === wordCharacters.join("")) {
            isActive = false;
        }
    }
})

for (let i = 0; i < wordCharacters.length; i++) {
    correctArray[i] = '_'; 
    rightGuess.innerHTML += '_&ensp;';
    
}
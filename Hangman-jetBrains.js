// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

console.log(`H A N G M A N`);
let exit = true;
const results = {
    win: 0,
    lost: 0
};
do {
    const possibleWords = ['python', 'java', 'swift', 'javascript'];
    const x = Math.floor(Math.random() * possibleWords.length);
    let letterArr = possibleWords[x].split('');
    let hanger = '-'.repeat(letterArr.length);
    let hint = hanger.split('');
    let nAttempt = 7;
    let bin = [];

    const score = () => {
        console.log(`You won: ${results.win} times.\nYou lost: ${results.lost} times.`);
    }
    const gamePlay = () => {
        console.log(`${hanger}`);
        for (let i = 0; i <= nAttempt; i++) {
            const attempt = input(`Input a letter: `);
            if (attempt.length === 1 && (attempt.match(/[a-z]/i)) && attempt === attempt.toLowerCase()) {
                if (!hint.includes(attempt) && !bin.includes(attempt)) {
                    if (attempt === letterArr.find(el => el === attempt)) {
                        for (let i = 0; i < letterArr.length; i++) {
                            if (letterArr[i] === letterArr[letterArr.indexOf(attempt)]) hint.splice(i, 1, letterArr[letterArr.indexOf(attempt)]);
                        }
                        i--;
                    } else {
                        console.log(`That letter doesn't appear in the word.`);
                        bin.push(attempt);
                    }
                } else {
                    console.log(`You've already guessed this letter.`);
                    i--;
                }
            } else if ((attempt.length > 1 || attempt.length < 1 || attempt.length === undefined)) {
                console.log(`Please, input a single letter.`);
                i--;
            } else {
                console.log(`Please, enter a lowercase letter from the English alphabet.`);
                i--;
            }
            if (i === nAttempt && hint.join('') !== letterArr.join('')) {
                console.log(`\nYou lost!`);
                results.lost += 1
            } else if (hint.join('') === letterArr.join('')) {
                console.log(`\nYou guessed the word ${hint.join('')}!\nYou survived!`);
                results.win += 1
                break;
            }
            console.log(`\n${hint.join('')}`);
        }
    }

    const gameMenu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: `);
    console.log(``)
    switch (gameMenu) {
        case 'play':
            gamePlay();
            break;
        case 'results':
            score();
            break;
        case 'exit':
            exit = false;
            break;
    }
} while (exit);

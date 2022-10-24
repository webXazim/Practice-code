// To Run this code locally replace all input to prompt and comment out line 2
input = require('sync-input');
//Write your code here
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

const currencyArr = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];
const value = [113.5, 0.89, 74.36, 1, 0.75];

let loop = true
do {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`)
    const userChoice = input()
    if (userChoice == 1) {
        console.log(`What do you want to convert?`)
        const convertFrom = input(`From: `).toUpperCase();
        if (currencyArr.find(element => element === convertFrom) === convertFrom) {
            const convertTo = input(`To: `).toUpperCase();
            if (currencyArr.find(el => el === convertTo) === convertTo) {
                const amount = parseFloat(input(`Amount: `));
                if (isNaN(amount)) console.log(`The amount has to be a number`); else if (amount < 0) console.log(`The amount cannot be less than 1`); else console.log(`Result: ${amount} ${convertFrom} equals ${(amount / value[currencyArr.indexOf(convertFrom)] * value[currencyArr.indexOf(convertTo)]).toFixed(4)} ${convertTo}`);
            } else console.log(`Unknown currency`);
        } else console.log(`Unknown currency`);
    } else if (userChoice == 2) {
        console.log(`Have a nice day!`)
        loop = false
        break;
    } else console.log(`Unknown input`)
} while (loop)

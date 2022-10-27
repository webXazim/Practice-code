// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const CoffeeMachine = () => {
    const coffeeType = {
        espresso: {
            water: 250,
            coffeeBeans: 16,
            price: 4,
        },
        latte: {
            water: 350,
            milk: 75,
            coffeeBeans: 20,
            price: 7
        },
        cappuccino: {
            water: 200,
            milk: 100,
            coffeeBeans: 12,
            price: 6
        }
    }

    const itemLimit = {
        water: 400,
        milk: 540,
        coffeeBeans: 120,
        cups: 9,
    }

    let cash = 550;

    const menu = () => {
        console.log(`The coffee machine has:\n${itemLimit.water} ml of water\n${itemLimit.milk} ml of milk
${itemLimit.coffeeBeans} g of coffee beans\n${itemLimit.cups} disposable cups\n$${cash} of money`)
    }

    const fill = () => {
        console.log(`Write how many ml of water you want to add:`)
        itemLimit.water += Number(input())

        console.log(`Write how many ml of milk you want to add:`)
        itemLimit.milk += Number(input())

        console.log(`Write how many grams of coffee beans you want to add:`)
        itemLimit.coffeeBeans += Number(input())

        console.log(`Write how many disposable cups you want to add:`)
        itemLimit.cups += Number(input())

    }

    const buy = () => {
        const espressoSell = () => {
            if (itemLimit.water >= coffeeType.espresso.water && itemLimit.coffeeBeans >= coffeeType.espresso.coffeeBeans && itemLimit.cups >= 1) {
                itemLimit.water -= coffeeType.espresso.water
                itemLimit.coffeeBeans -= coffeeType.espresso.coffeeBeans
                itemLimit.cups -= 1
                cash += coffeeType.espresso.price
                console.log(`I have enough resources, making you a coffee!\n`)
            } else if (itemLimit.water < coffeeType.espresso.water) {
                console.log(`Sorry, not enough water!\n`)
            } else if (itemLimit.coffeeBeans < coffeeType.espresso.coffeeBeans) {
                console.log(`Sorry, not enough coffee beans!\n`)
            } else if (itemLimit.cups < 1) {
                console.log(`Sorry, not enough cups!\n`)
            }
        }
        const latteSell = () => {
            if (itemLimit.water < coffeeType.latte.water) {
                console.log(`Sorry, not enough water!\n`)
            } else if (itemLimit.milk < coffeeType.latte.milk) {
                console.log(`Sorry, not enough milk!\n`)
            } else if (itemLimit.coffeeBeans < coffeeType.latte.coffeeBeans) {
                console.log(`Sorry, not enough coffee beans!\n`)
            } else if (itemLimit.cups < 1) {
                console.log(`Sorry, not enough cups!\n`)
            } else {
                itemLimit.water -= coffeeType.latte.water
                itemLimit.milk -= coffeeType.latte.milk
                itemLimit.coffeeBeans -= coffeeType.latte.coffeeBeans
                itemLimit.cups -= 1
                cash += coffeeType.latte.price
                console.log(`I have enough resources, making you a coffee!\n`)
            }
        }
        const cappuccinoSell = () => {
            if (itemLimit.water < coffeeType.cappuccino.water) {
                console.log(`Sorry, not enough water!\n`)
            } else if (itemLimit.milk < coffeeType.cappuccino.milk) {
                console.log(`Sorry, not enough milk!\n`)
            } else if (itemLimit.coffeeBeans < coffeeType.cappuccino.coffeeBeans) {
                console.log(`Sorry, not enough coffee beans!\n`)
            } else if (itemLimit.cups < 1) {
                console.log(`Sorry, not enough cups!\n`)
            } else {
                itemLimit.water -= coffeeType.cappuccino.water
                itemLimit.milk -= coffeeType.cappuccino.milk
                itemLimit.coffeeBeans -= coffeeType.cappuccino.coffeeBeans
                itemLimit.cups -= 1
                cash += coffeeType.cappuccino.price
                console.log(`I have enough resources, making you a coffee!\n`)
            }
        }
        console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:`)
        const cmd = input()
        switch (cmd) {
            case '1':
                espressoSell();
                break;
            case '2':
                latteSell();
                break;
            case '3':
                cappuccinoSell();
                break;
        }
    }

    const take = () => {
        console.log(`I gave you $${cash}\n`)
        cash = 0
    }

    const action = () => {
        console.log(`\nWrite action (buy, fill, take, remaining, exit):`)
        const cmd = input()
        switch (cmd) {
            case 'buy':
                buy();
                break;
            case 'fill':
                fill();
                break;
            case 'take':
                take();
                break;
            case 'remaining':
                menu();
                break;
            case 'exit':
                exit = false;
                break;
        }
    }
    let exit = true
    do {
        action()
    } while (exit)
}


CoffeeMachine()

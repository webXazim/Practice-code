
function greet(bot_name, birth_year) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

function remind_name() {
    console.log("Please, remind me your name.");
    let name = prompt();
    console.log("What a great name you have, " + name + "!");
}

function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(prompt());
    let rem5 = Number(prompt());
    let rem7 = Number(prompt());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(prompt());
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

function test() {
    console.log("Let's test your programming knowledge.");

    // write your code here
    console.log('Why do we use methods?')

    const arr = ['To repeat a statement multiple times.',
        'To decompose a program into several small subroutines.',
        'To determine the execution time of a program.',
        'To interrupt the execution of a program.'
    ]
    for (let i = 1; i <= arr.length; i++) {
        console.log(`${i}. ${arr[i - 1]}`)
    }

    do {
        var userAns = prompt()
        if (userAns != 2) {
            console.log('Please, try again.')
        } else if (userAns == 2) {
            console.log('Congratulations, have a nice day!')
        }
    } while (userAns != 2)

}


greet('Aid', '2020')  // change it as you need
remind_name();
guess_age();
count();
// ...
test();

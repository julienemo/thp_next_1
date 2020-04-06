// 1. function get an random integer from 1 to 5
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
// 2. prepare constants
const magicNumber = getRandomIntInclusive(1, 5);
const limit = 10;

// 3. announce game start
userGuess = prompt("Gimme a number.");

// 4. the loop
for (let step = 0; step < limit; ++step) {
    // if last guess still wrong
    if((step === limit - 1) && (userGuess != magicNumber)){
        alert(`You've run out of guess...Refresh to start again.`);
        break;
    // otherwise
    } else {
        if (userGuess > magicNumber) {
            userGuess = prompt(`The magic number is smaller than your guess. You have ${limit - step - 1} guess(es) left.`);
        } else if (userGuess < magicNumber) {
            userGuess = prompt(`The magic number is larger than your guess. You have ${limit - step - 1} guess(es) left.`);
        } else {
            alert('Hooray! You guessed right!');
            break;
        }
    }
}

// takeaways
// 1. generation of random integer is not built-in
// 2. it SEEMS that interpolation only take the variable's value at the time
//    the interpolation is constructed. Bother

let isLetterUnique = (letter, array) => {
    let frequency = 0;
    array.forEach(function(element){
        if (element === letter) {
            ++ frequency
        }
    });
    if (frequency === 1){
        return true;
    }
}

let firstSoloLetter = stringToTest => {
    let arrayToTest = Array.from(stringToTest);
    let soloArray = []
    arrayToTest.forEach(function(item, array){
        if (isLetterUnique(item, arrayToTest) === true){
            soloArray.push(item);
        }
    });
    if (soloArray.length > 0) {
        console.log(soloArray[0]);
    } else {
        console.log(null);
    }
}

firstSoloLetter('raddar');

// takeaways
// 1. turn a string(myString) to an array(myArray) => 
// myArray = Array.from(myString);
// 2. equivalent of my_array << x =>
// myArray.push(x);
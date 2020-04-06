let letterIsSolo = (letter, word) => {
    let count_repeat = 0
  
    for (let j = 0; j < word.length; j++) {
      if (letter == word[j]) {
        count_repeat++
        if (count_repeat > 1) {
          // this letter is too much repeated
          return false
        }
      }
    }
    if (count_repeat == 1) {
      return true
    }
  }
  
  let firstSoloLetter = word => {
    // browse letters
    for (let i = 0; i < word.length; i++) {
      if (letterIsSolo(word[i], word) == true) {
        console.log(word[i])
        return
      }
    }
    // No solo letter
    console.log("null")
  }
  
firstSoloLetter(prompt("Entrez un mot"))
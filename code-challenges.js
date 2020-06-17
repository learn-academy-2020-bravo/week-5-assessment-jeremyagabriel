// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// Function that takes in a string
const codedMessage = (str) => {
  // Split the string into an array
  let strArray = str.split("")
  // Map through array
  let codedArray = strArray.map(value=> {
    // Convert the appropriate vowels to numbers
    if (value === "a") return "4"
    else if (value === "e") return "3"
    else if (value === "i") return "1"
    else if (value === "o") return "0"
    // Return all other values as itself
    else return value
  })
  // Join back into string
  return codedArray.join("")
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// Function that takes in array
const hasLetterA = (arr) => {
  // Filter through the array
  return arr.filter(word => {
    // Convert word to lowercase and into an array
    let wordArray = word.toLowerCase().split("")
    // Check if the array includes "a", if so, return
    return wordArray.includes("a")
  })
}

console.log(hasLetterA(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 3, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// Function that takes in an array of 5 numbers
const fullHouse = (arr) => {
  // Sort the array numerically
  let handSorted = arr.sort((a,b)=>a-b)
  // Check win conditions of either: array[0] array[1] and array[2] equal the same and array[3] and array[4] are the same, or vice versa
  if (handSorted[0] === handSorted[1] && handSorted[0] === handSorted[2] && handSorted[3] === handSorted[4]) {
    return true
  } else if (handSorted[0] === handSorted[1] && handSorted[2] === handSorted[3] && handSorted[2] === handSorted[4]) {
    return true
  } // else return false if it does not meet those conditions
    else return false
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))

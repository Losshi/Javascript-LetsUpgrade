// Printing palindrome words from a given sentence
s="Hello madam can I ride racecar before learning radar technology"
s=s+" "
word=""
rev=""
console.log("ACTUAL SENTENCE:")
console.log(s)
console.log("PALINDROME WORDS:")
for(i of s) {
  if(i!=" ") {
    word=word+i
    rev=i+rev
  } else {
    if(word==rev) {
      console.log(word)
    }
    word=""
    rev=""
  }
}

// OUTPUT OF THE PROGRAM:

// ACTUAL SENTENCE:
// Hello madam can I ride racecar before learning radar technology 
// PALINDROME WORDS:
// madam
// I
// racecar
// radar

// Multiples of 3     - print Fizz
// Multiples of 5     - print Buzz
// Multiples of 3 & 5 - print FizzBuzz

// Without using modulus operator
v1=15
v2=3
v3=5
for(i=1;i<=100;i++) {
  if(i==v1) {
    console.log("FizzBuzz")
    v1=v1+15
    v2=v2+3
    v3=v3+5
  } else if(i==v2) {
    console.log("Fizz")
    v2=v2+3
  } else if(i==v3) {
    console.log("Buzz")
    v3=v3+5
  } else {
    console.log(i)
  }
}

// OUTPUT OF THE PROGRAM (1-15):

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

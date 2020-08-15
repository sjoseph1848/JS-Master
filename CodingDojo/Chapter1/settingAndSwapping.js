let myNumber = 42;
let myName = "Sam";

let change = myNumber;
myNumber = myName;
myName = change;

console.log(`MyNumber is: ${myNumber}, MyName is ${myName}`);
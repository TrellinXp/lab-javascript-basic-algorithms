
console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = 'Clara';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Peter';
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has  ${
      hacker2.length
    } characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The Diver has the longest name, it has ${hacker1.length} character`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
var driversname = '';
for (let count = 0; count < hacker1.length; count++) {
  driversname += hacker1.charAt(count).toUpperCase() + ' ';
}
console.log(driversname);

/*
3.2 Print all the characters of the navigator's name, in reverse order. 
i.e. `"nhoJ"` */
var driversnameReverse = '';

for (let count = hacker1.length; count >= 0; count--) {
  driversnameReverse += hacker1.charAt(count) + ' ';
}
console.log(driversnameReverse);

/*
3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
  - `The driver's name goes first.` <br>
  - `Yo, the navigator goes first definitely.` <br>
  - `What?! You both have the same name?`
*/

for (var count = 0; count < hacker1.length; count++) {
  var driverCharAt = hacker1.charCodeAt(count) - 64;
  //console.log('Driver Char At ' + driverCharAt);
  var navigatorCharAt = hacker2.charCodeAt(count) - 64;
  //console.log('Navigator Char At ' + navigatorCharAt);

  if (driverCharAt < navigatorCharAt) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (driverCharAt > navigatorCharAt) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  } else {
    if (count === hacker1.length - 1) {
      console.log(`What?! You both have the same name?`);
    }
  }
}

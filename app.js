// var topStudents = [
//   {no: 201, name: "Jane", grade: 98},
//   {no: 242, name: "Eric", grade: 95},
//   {no: 345, name: "Bill", grade: 93}
// ]


// console.log(`${topStudents[0].name},${topStudents[1].name},${topStudents[2].name}`);


// let result = "";

// for (let obj of topStudents) {
//   result += obj.name + ",";
// }

// console.log(result.slice(0, -1));


// let result = [];

// for (let i = 0; i < topStudents.length; i++) {
//   result.push(topStudents[i].name);
// }

// console.log(String(result));



// var arr = [7, 3, 5, 9];


// console.log(arr.reverse().find(n => n % 3));  // 5



// (function (inputString) {
//   let outputString = "";
//   for (const char of inputString) {
//     char == char.toLocaleLowerCase() ? outputString += char.toLocaleUpperCase() : outputString += char.toLocaleLowerCase();
//   }
//   console.log(outputString);
// })("The Quick Brown Fox")



// var price = [
//   {pr$: 700, name: "pc"},
//   {pr$: 30, name: "book"},
//   {pr$: 90, name: "pen"}
// ];

// const lower100 = price.map(n => n.pr$ < 100 && console.log(n));

// console.log(lower100);



// var x = ["a", "b", "c"];
// var y = ["a", "b", "c"];
// console.log(x == y);
// console.log(x === x.reverse());
// console.log(x);



// function spec_opr(...numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     number % 2 === 0 ? sum += number / 2 : sum += number * 3;
//   }
//   console.log(sum);
// }

// spec_opr(93, 12, "5", 84, -22);



// const $ = [10, 100];
// const euro = $.forEach(n => console.log(n * 0.82));
// console.log(euro);



// const word = prompt("Enter a word : ");
// const seperator = prompt("Enter a seperator : ");
// const repetition = parseInt(prompt("Enter a repetition : "));

// alert(`Your output is ${(word + seperator).repeat(repetition).slice(0, -1)}`);


// function smt(word, seperator, rep) {
//   let a = []
//   i=0
//   while (i < rep) {
//     a.push(word)
//     i++
//   }
//   return a.join(seperator)
// }

// console.log(smt("ata", "/", 3));



// (function (x, y) {
//   let cd = [];
//   for (let i = 1; i <= x; i++ ) {
//     if (x % i == 0 && y % i == 0) {
//       cd.push(i);
//     }
//   }
//   alert(`The greatest common divisor is ${cd[cd.length - 1]}`);
// })(prompt("Enter first number : "), prompt("Enter second number : "));



for (let i = 1; i <= 1000; i++) {
  let sum = 0;
  for (let j = 1; j < i; j++) {
    if (i % j == 0) sum += j;
  }
  if (sum == i || i == 1) console.log(i);
}

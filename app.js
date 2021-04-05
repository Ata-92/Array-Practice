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



(function (inputString) {
  let outputString = "";
  for (const char of inputString) {
    char == char.toLocaleLowerCase() ? outputString += char.toLocaleUpperCase() : outputString += char.toLocaleLowerCase();
  }
  console.log(outputString);
})("The Quick Brown Fox")

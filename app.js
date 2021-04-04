var topStudents = [
  {no: 201, name: "Jane", grade: 98},
  {no: 242, name: "Eric", grade: 95},
  {no: 345, name: "Bill", grade: 93}
]

// console.log(`${topStudents[0].name},${topStudents[1].name},${topStudents[2].name}`);


let result = "";

for (let obj of topStudents) {
  result += obj.name + ",";
}

console.log(result.slice(0, -1));

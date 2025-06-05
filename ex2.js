function filterRange(arr, a, b) {
  return arr.filter(x => x >= a && x <= b);
}

function  filterRange(arr, a, b){
    return arr.filter(x=> x>=1 && x<=4);
}





//ex2
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

alert(names); // John,Pete,Mary



//ex3

function getAverageAge(users) {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];

alert( getAverageAge(users) );  // (25 + 30 + 29) / 3 = 28
// Var let const global and block scope

if(true){
    var count=10;
    let counter=20;
    const names="Manimegalai";
    console.log(counter);
    console.log(names);
}

console.log(count);
// console.log(counter); 
// console.log(names);


var hai=100;
console.log(hai);

// Redeclaration
var hai=500;
console.log(hai);

// Updation
hai=500
console.log(hai);

// Let 

let priya=500;
console.log(priya);

// Update
priya=5000;
console.log(priya);


const pri="Iniyan";
console.log(pri);
// updating but Error comes as assigned to the const variable
pri="Proyadharshan";
console.log(pri);

// 3rd row initialization
const ini;
console.log(ini);

let ini;
console.log(ini);

var ini;
console.log(ini);

// Hoisted
console.log(hos)
let hos=100;

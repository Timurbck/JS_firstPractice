'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),  
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},   
    optionalExpenses: {},
    income: [],
    savings: false
};

 
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

alert(appData.budget / 30);

console.log(appData["budget"]);
console.log(appData["timeData"]);
console.log(appData["expenses"]);
console.log(appData["optionalExpenses"]);
console.log(appData["income"]);
console.log(appData["savings"]);
console.log(appData["a1"]);
console.log(appData["a2"]);
console.log(appData["a3"]);
console.log(appData["a4"]);

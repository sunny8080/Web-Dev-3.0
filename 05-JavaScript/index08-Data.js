// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let date1 = new Date();
let date2 = new Date("July 24 1999");
let date3 = new Date(2000, 2, 20, 7);
console.log(date1); //
console.log(date2); //
console.log(date3); //

console.log(date3); //
console.log(date3.getFullYear()); // 
console.log(date3.getMonth()); //
console.log(date3.getDate()); //
console.log(date3.getDay()); //
console.log(date3.getHours()); //
console.log(date3.getMinutes()); //
console.log(date3.getSeconds()); //
console.log(date3.getMilliseconds()); //
console.log(date3.getTime()); //
console.log(date3.toDateString()); //
console.log(date3.toTimeString()); //
console.log(date3.toLocaleTimeString()); //
console.log(date3.toUTCString()); //
console.log(date3.toISOString()); //
console.log(date3.toString()); // 

date3.setHours(13);
date3.setFullYear(2005);
date3.setMonth(11);

console.log(date3); //

let val;

const today = new Date();
let birthday = new Date('9-21-1991 12:01:31');
birthday = new Date('September 21 1991');

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


console.log(val);
console.log(typeof val);
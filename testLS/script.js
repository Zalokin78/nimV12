"use strict";

localStorage.clear();

let myObj = { name: "Bob", age: 50 };

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem(myObj, myObj_serialized);

console.log(localStorage);

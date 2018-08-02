"use strict";
//Array

let arr = [1,2,3,4,5,6]

arr.forEach((key)=>{
    console.log(key);
})

for(let i = 0 ; i<arr.length;i++){
    console.log(i);
}

for(let i of arr){
    console.log(i);
}

for(let i in arr){
    console.log(i);
}

arr.push(9);
console.log(arr);

arr.pop();
console.log(arr);

//array destructuring
let [i,j] = arr;
console.log("This is is destructure:",i);
console.log("This is is destructure:",j);


let examplespread = (firstName,...hobbies)=>{
    console.log("Spread Prameters");
    console.log(`FirstName is ${firstName}`);
    for(let hobby in hobbies){
        console.log(`hobby is ${hobby}`);
    } 
}

examplespread('rizwan','cricket','vollyball','basketball');

let exampleRest = (firstname,lastName,email)=>{

    console.log(firstname,lastName,email);        
}

let userinfo = ['rizwan','shaikh','rizwanshaikh@cuelogic.com']
exampleRest(...userinfo);

// objects declaration 
let user = {};
let user1 = new Object();

let firstName = "Rizwan";
let lastName = "Shaikh";
let email = "rizwan.shaikh@cuelogic.com"

user = {
    firstName, //shorthand property value
    lastName ,
    email 
};

//accessing using dot 

console.log(user.firstName);

// accessing using index 
console.log(user[firstName]);


// for in loop 
for (let key in user){
    console.log(user[key]);
}

// for of loop 
for(let key of Object.keys(user)){
    console.log(key,user[key]);
}

// for each
Object.keys(user).forEach((key)=>{
    console.log(key,user[key]);
})

// Existence check
if("firstName" in user){
    console.log("name exists");
}
else{
    console.log("name not exists");
}

// objects are copy by reference
let obj = user  // point to same object
obj.email = "rii@cuelogic.com";
console.log(user.email);
if(obj === user){
    console.log("both objects are same");
}

//clonning objects  using object.assign
let obj1 = { 3: "one",2:"two",1:"Three"}; 
//integer always order in ascending order
let clone = Object.assign({},obj1);
console.log(clone);



// delete property of object;
delete obj1.firstName;
console.log("firstName" in obj1);


// Map 
let nameMap= new Map();
nameMap.set("firstName","Rizwan");
nameMap.set("lastName","Shaikh");
nameMap.set("email","rizwan.shaikh@cuelogic.com");
console.log(`lastName is exists? : ${nameMap.has("lastName")} `);
console.log(`email is deleted : ${nameMap.delete('email')}`);


for(let [key,value] of nameMap)
{
    console.log(`${key} is ${value}`);
}

// Weak Map  only objects can be passed as key not primitive data types
let user2 = {
    firstName:"abc",
    lastName : "xyz",
    email : "abc@gmail.com"
}
let comment = {};

// individual entries of weak map can be garbage collected
let nameweakMap = new WeakMap();
nameweakMap.set(user,"user");
nameweakMap.set(comment,"comment")
console.log(nameweakMap.get(user));
console.log(nameweakMap.get(comment))


// Set : collection of any type of entries duplicate not allowed

let language = new Set();
language.add("C");
language.add("C++");
language.add("Java");
language.add("Python");
language.add("Javascript");
language.add("C");
console.log(language.size);

//for each
language.forEach(key =>{
    console.log(key);
});
// for of 
for(let key of language){
    console.log(key);
}
//destructuring of Array
let [lan1] = language;
console.log(lan1);


// WeakSet : only allow to stored object memory efficient
// cannot read weak sets

let languageWeak = new WeakSet();
let ios = {"name":"rizwan"}
languageWeak.add(ios);
console.log(languageWeak.has(ios));
console.log(languageWeak.delete(ios));








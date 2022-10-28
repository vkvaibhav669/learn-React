
// let and const 

// mostly var is used to declare a variable 

var n = "Vaibhav";

console.log(n);

let ret = "retention ";

const treio = "Vaibhav kumar ";


console.log(treio);
console.log(ret);



//normal function 


function sayName(myurl){
    console.log("Vishwajeet",myurl);
}

let myURL = "Vaibhav Kumar ";

sayName(myURL);

//arrow function 


sayName(myURL)
//no parenthesis in case of a single argument 

let sayNAME = (name,age)=>{
    return {name,age};
}
//arrow function with dual args 
console.log(sayNAME("Vaibhav ",24));


//shortcut way for arrow function 
let fcuk = name => name;
console.log(fcuk("IKA"));

//double of a number

let double = num => num*2;

console.log(double(34));

//export and import for modules -> create modules for project 
//import * as bundle from "./customer.js"; 
//bundle is a object of property , which can access the property from customer 
import {hello} from "./sell.js";
import {data as da } from "./sell.js";
import person from './customer.js';
hello();
console.log(da);
console.log(person)

//properties exported by default need not be included within {}
//property exported as default can be impored using any name if its exported as default . 
// import bc from "./customer ";  ==> works same as import person from "./customer";

//oops concept class and object 

class Customer {

    constructor(n){
        this.name = n;

    }
    age = 24; // we can add propeties outside this constructor without this keyword 

    //method - not a function 
    buy(){

        console.log("hello from customer");
    }

}

let customer1 =new Customer("Vaibhav");

console.log(customer1);
customer1.buy();


//to access a variable inside class , we use this , if it is to be used outside class , we have to use object name 

class GuestCutomer extends Customer{
    hello(){
        console.log("hello from guestcustomer");
    }
}

let retro = new GuestCutomer("SRK");
console.log(retro);

retro.buy();
//any function inside a class is a method 

// spread and rest operator (...)

// ... spread operator -> to split an operator 
let list = ["honda ","BMW","MERC"];
let newList = [...list,"800"]; //spread this to newList using list
console.log(list);
console.log(newList);
let newnewLIST = ["Toyota", ...newList];
console.log(newnewLIST);
//...rest operator 

let personT = {
    name : "VKS",
};

let newPersonT = {
    ...personT,
    age : 24,
};

console.log(personT);
console.log(newPersonT);

//rest operator
function urt(...ret){
    console.log(ret);
}
 urt(1,23,432432,42342,789,2456);


//array destructuring -> store every value in a variable 
let list24 = ["audi ","MERC","BMW","800","I10"];
let [car1 ,car2,car3,car4,car5]=list24;
console.log(car5);
console.log(car2);
console.log(car1);

//object destructuring 
const person1998 = {
    nano : "VKS",
    bro : "SRK",
    ag1 :20,
    ag2:24,
};
 let {nano,bro} = person1998;
 console.log(nano);
console.log(bro);



//reference (array , object ) and primitve type(string , number ) 

let num1 = 100;
let num2 = num1;
console.log(num1);
num2=69;
console.log(num2);


let rto = {
    name : "SRB",
    age : 23,
};

let person669 = rto;
console.log(rto);
console.log(person669);
//in reference type data is not copied , it is pointed to , changes are made in both so we use spread operator 
person669.name = "SRK2000";
console.log(rto);
console.log(person669);

let retu = {
    name : "INDIA",
};

let tyu = {
    ...retu,
    age : 23 ,
};

console.log(retu);
console.log(tyu);



//map function -> create a new array taking a anonymous function 
let array1 = [2,3,4,5,6,7,8,9];
console.log(array1);
let array2 = array1.map(function(x){
    return x*2;
}
);
console.log(array2);


//filter function -> takes a condition like a if condition in a function , anonymous function 
//stores only the true values in the array3 
let array3 = array1.filter(x => x%2 ==0);
console.log(array3);

let array4 = array1.filter( function(x){
    if(x%3==0){
        return x;
    }
});
console.log(array4);
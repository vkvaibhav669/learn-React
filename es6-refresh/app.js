
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

let sayNameTwice = name => {
    console.log(name);
    console.log(name);
}

sayName(myURL)
//no parenthesis in case of a single argument 

let sayNAME = (name,age)=>{
    return {name,age};
}
//arrow function with dual args 
console.log(sayNAME("Vaibhav ",24));



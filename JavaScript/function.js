
//no return and no argument
//no return and use argument
//use return and use argument
// function xyz(name){
    
//     return "My Name is " + name +" He is a boy"

// }


// console.log(xyz("Prabhat"))
// console.log(xyz("Uttam"))
// console.log(xyz("Rishi"))

// arrow function

// add=(a, b)=> a+b;
// console.log(add(10,5))
// console.log(add(10,50))
// console.log(add(15,55))

student =(age)=>{
    var msg;
    if(age>=18){
        msg= "You can Vote"
    }
    else{
        msg= "You can not Vote"
    }
    return msg;
}

console.log(student(15))

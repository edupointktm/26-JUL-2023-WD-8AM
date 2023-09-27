// a=-5;

// // if(a>=0){
// //     document.querySelector("#root").innerHTML="Post"
// // }
// // else{
// //     document.querySelector("#root").innerHTML="Nag"
// // }


// //Tenary Operator
// a>0 ? document.querySelector("#root").innerHTML="Post"  :  document.querySelector("#root").innerHTML="Nag"

// let num = [5,3, 5, 6, 7]

// num.map((no)=> { document.querySelector("#root").innerHTML +=no})
// // console.log(n)


var num=[{
    "name":"Prabhat",
    "address":"jnk"
}]

num.map((n)=> document.querySelector("#root").innerHTML += n.name + " " + n.address)
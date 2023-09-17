

// // loop
// // for loop
// // while loop
// // do while loop
// var a=5;
// for(let i =1; i<=10; i++){
// var c=a*i;
// // console.log(a +" x " + i + " = " + c)
// console.log(`${a} x ${i} =  ${c}`)
// 

// for (var i = 1; i <= 10; i++) {
//     var r=i%2
//     if (r == 0) {
        
//         break
//     }
//     console.log(i)
// }
var n=243;
var s=0;
while(n>0){
    f = n%10
    n = parseInt(n/10)
    s= (f*10)+s;
   
}
console.log(s)




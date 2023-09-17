
//Write a javascript code to ask from user enter week num and dispaly week name as given number 
// var w_n = prompt("Enter your Week Day number :")

// if(w_n==1){
//     document.write("Sunday")
    
// }
// else if(w_n==2){
//     document.write("Monday")
// }
// else if(w_n==3){
//  document.write("Tuesday")
// }
// else if(w_n==4){
//   document.write("Wednesday")
// }
// else if(w_n==5){
//     document.write("Thursday")
// }
// else if(w_n==6){
//     document.write("Friday")
// }
// else if(w_n==7){
//     document.write("Saturday")
// }
// else{
//     document.write("Soryy! you entered number week day number")
// }

 //Wrtie a Javascript code to ask any number number from user and dispaly given number is ODD or EVEN

var num = prompt("Enter Number :")

var rem = num % 2;

if(rem == 0){
    document.write("<h1> EVEN </h1>")
}
else{
    document.write("<h1> ODD </h1>")
}

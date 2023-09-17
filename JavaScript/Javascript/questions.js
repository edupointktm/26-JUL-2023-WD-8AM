// Q No 6
// user ask => sales

var sales= 3500;
var com_per;
if(sales >= 0 && sales <=1000){
    com_per = 5;
}
else if(sales >= 1001 && sales <=2500){
    com_per= 10;
}
else{
    com_per=15;
}

var com_amount = sales * com_per / 100;
console.log("Daily Sales = " + sales)
console.log("Com per = "+com_per + "%")
console.log("--------------------------")
console.log("Commision amt = "+com_amount)

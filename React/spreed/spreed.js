let num = [4,5,6,8]
let num2 =[34, 54]
let num3 = [...num, ...num2]
console.log(num3)
// document.querySelector('#root').innerHTML=num;
for (var i = 0;i<num3.length;i++)
{
    document.querySelector("#root").innerHTML += num3[i]
}
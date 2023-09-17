// object rule = key:value

//object declare
// var student = ["prab", "moan"]
var student = [
    {
        "name": "prabhat",
        "address": "janakpur",
        "mobile": "98440"
    },
    {
        "name": "Nikesh",
        "address": "Kathmandu",
        "mobile": "9844027213"
    },
    {
        "name": "Uttam",
        "address": "Biratangar",
        "mobile": "558754"
    }

    ,
    {
        "name": "Dilip",
        "address": "Hariduwar",
        "mobile": "8455454"
    }
]

// access
var l = student.length
document.write("<table border=1 width=500px>")
document.write("<tr><th>Name</th> <th> Address </th> <th>Mobile </th> </tr>")
for (var i = 0; i < l; i++) {
    document.write(
    `<tr> 
        <td> ${student[i].name} </td> 
        <td> ${student[i].address} </td> 
        <td> ${student[i].mobile} </td> 
   </tr>`)
}
document.write("</table>")
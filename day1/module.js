let arr=[
    {name:"Sarah",grade:80},
    {name:"omar", grade:100},
    {name:"hadi",grade:70},
];
function add(name , grade ){
    arr.push (name,grade);
    console.log(arr);
}


function get(){
    console.log(arr);
}


//list
function list(){
console.log(arr);
}


// arr.forEach(element=>{
//     console.log(element)
// });


function edit (id,newgrade){
    arr[id].grade = newgrade;
    console.log(arr);
}
// edit(2,60);



function sum(i){
var sum = 0;
for (var i = 0; i< arr.length; i++)
{
  sum += arr[i].grade
}
console.log(sum);
}

function delarr(i){
    delete arr[i];
    console.log(arr);
}


module.exports={add,list,edit,delarr,sum};
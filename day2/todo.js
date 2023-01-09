const fs=require('fs');


    let productdb=fs.readFileSync('todos.json','utf-8');
    console.log(productdb);
    productdb=JSON.parse(productdb); 
   
    console.log(productdb);

  


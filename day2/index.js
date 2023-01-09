const http=require('http');
const fs= require('fs')
http.createServer(function(req,response)
{
    // console.log(req.url)
    console.log("in server")
    if(req.url=="/home")
    {
    
    response.write("<p><b>welcome to our APIs</b></p>");
    }
    else if(req.url=="/products")
    {
        
       let html =fs.readFileSync("products.json","utf-8");
       response.write(html);
        
    }
    else if (req.url.split("/")){
        
       
let arr=[];
arr=req.url.split("/");


if( arr.lengh==3){
    const id=arr[2];
    let html =fs.readFileSync("products.json","utf-8");
    let product=JSON.parse(html);

    for(let i=0;i< product.lengh;i++){
        

        if (i==id){

    response.write(JSON.stringify(product[i]));
}
    
    }
}



    }else{
        response.write("<h1> Error 404</h1>");
    }
   
        response.end()
    
}).listen(7000,function(){
console.log("port 7000");
});


// function addTodo(data)
// {
    
//     let todo=fs.readFileSync('products.json','utf-8');
//     console.log(todo)
//     todo=JSON.parse(todo); 
//     todo.push(data);
//     console.log(todo)
//     fs.writeFileSync('products.json',JSON.stringify(todo,null,1),'utf-8')
// }
// addTodo({id:3,product:"juice"})
// module.exports={addTodo};
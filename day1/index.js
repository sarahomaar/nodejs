const arr =require("./module");
switch (process.argv[2]){
    case "add":
        arr.add(process.argv[3],process.argv[4]);
        break;
     case"list":
        arr.list();
        break;
    case "edit":
        arr.edit(process.argv[3],process.argv[4]);
        break;
     case"delarr":
        arr.delarr(process.argv[3]);
        break;
    case "sum":
        arr.sum() ;
}
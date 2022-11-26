// output
var output = document.getElementsByClassName("screen")[0];
var values = {prev:null,new:null};
var opType = "";
function display(num){
   output.value += num;
   if(values.prev){
    values.new= num;
   }
   else{
    values.prev=(output.value += num);
   }
}

// operator function
function getOp(op){
    console.log(values)
    opType=op;
}

// clear
function clearNums(){
    output.value = "" ;
}

// delete
function del(){
    output.value = output.value.slice(0,-1);
}

// calc
// function calc(){
//     try {
//         output.value = eval (output.value);
//       }
//       catch(err) {
//         output.value= "Error";
//       } 
// }







// output
var output = document.getElementsByClassName("screen")[0];

function display(num){
   output.value += num;
  
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
function calculate(){
   let p = output.value;
   try {
    output.value = eval(p);
   }
   catch(err){
    output.value = "Error"
   }


}








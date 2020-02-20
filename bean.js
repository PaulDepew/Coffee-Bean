
function bean(){

    var person  = prompt('What Coffee do you like') ;

    if  (person == "") {
        txt= "Goodbye!" ;
    } else {
        txt = "Hmm... Interesting Choice..."
    }
    
    return txt 

   
}

function coffee(){
    var txt;

var r = confirm("Do you love coffee!");
if (r == true) {
  txt = "ONE OF US!";
} else {
  txt = "Maybe this isn't the place for you...";
}

  return txt

}

function time(){

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Not Coffee Time!"
} else if (hourNow > 12) {
    greeting = "Coffee? Sure!" ;
} else if (hourNow >0) {
    greeting = "MORE COFFEE NOW!" ;
} else {
    greeting = "Always Coffee Time" ;
}

return greeting
}
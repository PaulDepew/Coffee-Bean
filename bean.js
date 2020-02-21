
function bean(){

    var person  = prompt('What Coffee do you like') ;

     while  (person == '') {
        txt = prompt('What Coffee do you like') ;
    } if (person =="French") {
        txt = "Oui Oui!"
    } if (person =="Guatemalan") {
        txt = "Me Gusta!"
    } if (person =="Espresso") {
        txt = "Fancy, Fancy!"
    } if (person =="Black") {
        txt = "Like my soul..."
    } if (person =="Irish") {
            txt = "Top of the Morning to ya!"
    } else  {
        txt = "Wrong Place!"
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

function itemNumber(){
    var count = prompt('How many beans do you need?');

    while(count ==='' || isNaN(count)){
        count = prompt('Put in a number please!') ;
    }
    return count
}

function shopDisplay(){

    var count = itemNumber() ;
    
    for (i = 0 ; i < count ; i++ )  {
        document.write( '<article>' +  
        '<img src="coffeephotos/bean1.jpg">' + 
          '<h2>This is a product</h2>' +
            '<p> This is a description of this product </p>' +
            '<img class="button" src="coffeephotos/Button.png">' + 
            
      '</article>') ;
    }
}
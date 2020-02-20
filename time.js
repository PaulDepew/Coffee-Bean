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

document.write( '<h4>' + greeting + '</h4>' );
/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var number = 101;
    while(number>100 || number < 0){
        number = Number(prompt("choisis un chiffre de 0 a 100"))
    }
    if((number%3 == 0 && number%5==0)||(number%3 != 0 && number%5!=0)){
        alert("fizzbuzz");
    }
    else if(number%3==0 && number%5!=0){
        alert("fizz");
    }
    else{
        alert("buzz");
    }

    

})();

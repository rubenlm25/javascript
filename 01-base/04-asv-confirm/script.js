/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var r = 0;
    while(r!=true){
    let age = prompt("How old are you??");
    let gender = prompt("male or female");
    let city = prompt("Where do you live ? (city)");
    r = confirm("age:"+age+"gender:"+gender+"city"+city+".");
    } 

})();
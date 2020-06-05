/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let value1;
    let value2;
    let result;
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        value1 = Number(document.getElementById("op-one").value);
        value2 = Number(document.getElementById("op-two").value);
        result=value1+value2;
        alert(+result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        value1 = Number(document.getElementById("op-one").value);
        value2 = Number(document.getElementById("op-two").value);
        result=value1-value2;
        alert(+result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        value1 = Number(document.getElementById("op-one").value);
        value2 = Number(document.getElementById("op-two").value);
        result=value1*value2;
        alert(+result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        value1 = Number(document.getElementById("op-one").value);
        value2 = Number(document.getElementById("op-two").value);
        result=value1/value2;
        alert(+result);
    });
})();

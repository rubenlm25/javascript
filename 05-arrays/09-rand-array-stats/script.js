/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    var number = [3, 45, 21, 4, 6, 2, 4, 6, 2, 67];
    document.getElementById("run").addEventListener("click", function () {
        var min = Math.min.apply(Math, number);
        var max = Math.max.apply(Math, number);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var sum = number.reduce(reducer);
        var average = sum/10;
        // remplissage du tableau
        document.getElementById("n-1").innerHTML = number[0];
        document.getElementById("n-2").innerHTML = number[1];
        document.getElementById("n-3").innerHTML = number[2];
        document.getElementById("n-4").innerHTML = number[3];
        document.getElementById("n-5").innerHTML = number[4];
        document.getElementById("n-6").innerHTML = number[5];
        document.getElementById("n-7").innerHTML = number[6];
        document.getElementById("n-8").innerHTML = number[7];
        document.getElementById("n-9").innerHTML = number[8];
        document.getElementById("n-10").innerHTML = number[9];
        // remplissage des operation
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average + "%";





    });

})();
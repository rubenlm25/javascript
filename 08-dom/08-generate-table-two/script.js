/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var target = document.getElementById("target");
    var table = document.createElement("table");
    target.appendChild(table);
    var i;
    var j = 1;
    for(i=1;i<=10;i++)
    {
        var newRow =table.insertRow();
        while(j<=10)
        {
            var newCell = newRow.insertCell();
            newCell.innerHTML = i*j;
            j++;
        }
        j = 1;
    }

})();

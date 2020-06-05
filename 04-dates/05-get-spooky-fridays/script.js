/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){
        var year = document.getElementById("year").Value;
        var month = 0;
        const day = 13;
        var inspectdate;
        var i ;
        var actualday;
        alert("ok");
        while(month<=11)
        {
            inspectdate = new Date(year,month,day)
            actualday = inspectdate.getDay();
            if(actualday == 5)
            {
                alert(inspectdate);
            }
            month ++;
        }

    })
    // your code here

})();

/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click",function(){
        //date d'aujourd'hui
        var today = new Date();
        var currentday = today.getDay();
        var currentmonth= today.getMonth();
        var currentyear= today.getFullYear();
        currentmonth++;
        alert("le"+currentday+"/"+currentmonth+"/"+currentyear);
        //date de naissance
        var selector = document.getElementById("dob-day");
        var birthday = selector[selector.selectedIndex].value;
        selector = document.getElementById("dob-month");
        var birthmonth = selector[selector.selectedIndex].value;
        selector = document.getElementById("dob-year");
        var birthyear = selector[selector.selectedIndex].value;
        alert("le"+birthday+"/"+birthmonth+"/"+birthyear);
        //calcul d'age
        var result = currentyear - birthyear;
        if(currentmonth<=birthmonth){
            if(currentday<birthday){
                result --;
            }
        }
        alert(result);
        


        
    });

})();

/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var today = new Date();
    var day = today.getDay();
    var fullday;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var month = today.getMonth();
    var numday = today.getDate();
    var fulldate;
    var fullmonth;
    switch(day){
        case 0 : fullday = "Sunday";
        break;
        case 1 : fullday = "Monday";
        break;
        case 2 : fullday = "Saturday";
        break;
        case 3: fullday = "Wednesday";
        break;
        case 4: fullday = "Thursday";
        break;
        case 5: fullday = "Friday";
        break;
        case 6: fullday = "Saturday";
        break;
    }
    switch(month){
        case 0 : fullmonth = "January";
        break;
        case 1 : fullmonth = "February";
        break;
        case 2 : fullmonth = "March";
        break;
        case 3: fullmonth = "April";
        break;
        case 4: fullmonth = "May";
        break;
        case 5: fullmonth = "June";
        break;
        case 6: fullmonth = "July";
        break;
        case 7 : fullmonth = "August";
        break;
        case 8 : fullmonth = "Septembre";
        break;
        case 9 : fullmonth = "Octobre";
        break;
        case 10: fullmonth = "November";
        break;
        case 11: fullmonth = "December";
        break;
    }
fulldate = fullday +" "+numday+" "+fullmonth+" "+year+","+hour+":"+minute;
document.getElementById("target").innerHTML = fulldate;

})();

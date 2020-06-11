/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class People {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
            this.sayhello = function(){
                return ("Hello "+this.firstname+" "+this.lastname);
            }
        }
    }
    document.getElementById("run").addEventListener("click",function(){
        let person1 = new People("Ruben","Lomo Maestu");
        console.log(person1.sayhello());
        

    });
})();

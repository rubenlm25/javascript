/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let regex1 = /.(?=(.*\d){2}){8,}/g;
    let mdp = "";

//keyup

    document.getElementById("pass-one").addEventListener("keyup",function(){
        let nbwords = document.getElementById("pass-one").value;
        console.log(nbwords);
        // if(nbwords.inputType == "insertText"){
            
        //     mdp = mdp + nbwords.data;
        //     console.log(mdp);
        // }
        // else if(nbwords.inputType == "deleteContentBackward"){
            
            
        //     console.log(mdp);
        // }

        if(regex1.test(nbwords) === true){
            document.getElementById("validity").innerHTML = "ok";
        }
    });

})();

/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function callbackTest (error, articlesArr) {
        
        if (error != null){
            console.log("Error");


        } else {
            articlesArr.forEach(article => {

                window.lib.getComments(article.id, (error,commentsArr) => {

                    if (error != null){
                        console.log("Error comment");
                    } else {
                        article.comments = commentsArr;
                    }

                });
            });
        };
        
        console.table(articlesArr);

    };

    document.getElementById("run").addEventListener("click",() => {
    
        window.lib.getPosts(callbackTest);
    
    });

})();
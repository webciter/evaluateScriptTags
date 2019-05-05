    /* Code By David Clews */
    
    /*
     * evaluateScriptTag
     * 
     * Loops through the html string and processes the script tags
     * 
     * @param {string} a The complete string that contains HTML and Script Tags
     * @return {Promise}
     */
    function evaluateScriptTag(a){ 
        
        return new Promise(function(c, d){
            let b = document.createElement("div");
            b.innerHTML = a;

            /* get all the script elements */
            let e = b.getElementsByTagName('script');

            for (   let f = 0;
                    f < e.length; 
                    f++){
                        eval(e[f].innerHTML)/* ; ide breaks with semi-comon */
                    }

            c();
        });
    }

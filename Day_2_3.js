
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var i = 0;
    for(i=0;i<s.length;i++){
        if ((s[i]=="a") || (s[i]=="e") ||(s[i]=="i") ||(s[i]=="o") ||(s[i]=="u")){
            console.log(s[i])
        }
    }
    for(i=0;i<s.length;i++){
        if ((s[i]=="a") || (s[i]=="e") ||(s[i]=="i") ||(s[i]=="o") ||(s[i]=="u")){
            continue
        }
        else{
            console.log(s[i])
        }
        }
    }
    
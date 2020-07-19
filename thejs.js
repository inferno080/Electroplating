   var c = 0;
   var t = 0;
  
  function f1() 
    {
        c= c+1;
        if (c==1){
    document.getElementById("fun1").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f2() 
    {
        c= c+1;
        if (c==2){
    document.getElementById("fun2").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f3() 
    {
        c= c+1;
        delayInMilliseconds= 1000;
        if (c==3){
            document.getElementById("fun3").style.display="none";
            setTimeout(function() {
                    document.getElementById("zero").style.display="block";
                    }, delayInMilliseconds);
}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f4() 
    {   
        c= c+1;
        var p = 0;
        if (c==4){
            delayInMilliseconds = 1000;
            document.getElementById("fun4").style.display="none";
            setInterval(function() {
                p = p + 1;
                if (p==1){
                document.getElementById("bluepowder").style.display="block";
                document.getElementById("fancyspoon2").style.display="block";
                document.getElementById("fancyspoon").style.display="none";
                }
                if (p==2){
                    document.getElementById("zero").style.display="none";
                    document.getElementById("thirtynine").style.display="block";
                    //document.getElementById("fancyspoon2").style.display= "none";
                }
              }, delayInMilliseconds);
            }
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f5() 
    {
        c= c+1;
        if (c==5){
    document.getElementById("fun5").style.display="none";}

        else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
        }

    function f6() 
    {
        c= c+1;
        if (c==6){
    document.getElementById("fun6").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f7() 
    {
        c= c+1;
        if (c==7){
    document.getElementById("fun7").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f8() 
    {
        c= c+1;
        if (c==8){
    document.getElementById("fun8").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f9() 
    {
        c= c+1;
        if (c==9){
    document.getElementById("fun9").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f10() 
    {
        c= c+1;
        if (c==10){
    document.getElementById("fun10").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f11() 
    {
        c= c+1;
        if (c==11){
    document.getElementById("fun11").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f12() 
    {        c= c+1;
        if (c==12){
    document.getElementById("fun12").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function f13() 
    {
        c= c+1;
        if (c==13){
    document.getElementById("fun8").style.display="none";}
    else{alert("You clicked on the wrong apparatus. Refresh the page to avoid potential errors");}
    }

    function add1()
    {
        t= t+1;
        if (t==1){ f5();}
    }
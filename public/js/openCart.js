document.getElementById('minicart').addEventListener("click", function( event ) {   
    var boxcart = document.getElementById('cart');   

    if(boxcart.className != ''){
        boxcart.style.display = "none";
        boxcart.className = "";
    }else{
        boxcart.className = "open";
        boxcart.style.display = "block";
    }  

}, false);
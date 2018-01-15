function miniCart(){
    let product = readCookie('listProduct');
    if(product != null){
        let el = document.getElementById('total-items');
        let elCart = document.getElementById('total-items-sacola');

        if(product.indexOf(',') >= 0){
            let obj = product.split(',');
            let qtd = obj.length;
            el.innerHTML = qtd;
            elCart.innerHTML = qtd;

            let cart = document.getElementById('cart');
            if(qtd > 3){                
                cart.className = 'box-scrool';
            }else{
                cart.className = '';
            }
        }else{        
            el.innerHTML = 1;
            elCart.innerHTML = 1;
        }
    }else{
        //console.info('Função miniCart:. Não existe produtos adicionados.');
    }    

    setTimeout(function() {
        let total = constituirSacola();
        if(total > 0){
            var elemento = document.querySelectorAll('.price-cart-results .subtotal strong')[0];
            elemento.innerHTML = "R$ "+total.toFixed(2).toString().replace('.',',');
        
            var elementoParcel = document.querySelectorAll('.price-cart-results .subtotal p')[0];
            total = total/10;
            elementoParcel.innerHTML = "ou em até 10x "+total.toFixed(2).toString().replace('.',',');
        }         
    }, 15);       
}
setTimeout(function() {
    miniCart();
}, 5); 
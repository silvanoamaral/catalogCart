function constituirSacola(){
    let product = readCookie('listProduct');
    let total = 0;
    let el = document.getElementById('resumeCart');
    el.innerHTML = '';

    if(product != null && product != ""){   
        let obj = '';
        if(product.indexOf(',') >= 0){
            obj = product.split(',');
        }else{
            obj = product.split(' ');
        }

        obj.forEach(function(e,i){ 
            if(document.querySelectorAll('.btn-comprar[data-idproduct="'+e+'"]')[0] != undefined){
                let data = document.querySelectorAll('.btn-comprar[data-idproduct="'+e+'"]')[0].getAttribute("data-prod");
                //para obj
                data = JSON.parse(data);
    
                total += data.price;               

                let html = `
                    <div class="product-list" data-id="${data.id}">
                        <div class="img-product">
                            <img src="images/item-${data.id}.jpg" />
                        </div>
                        <div class="info-product">
                            <p>${data.title}</p>
                            <p class="detalhes">${data.style}</p>
                            <p class="detalhes">Quantidade: 1</p>
                        </div>
                        <div class="price-product">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" data-id="${data.id}">&times;</span>
                            </button>
                            <p class="price-cart">${data.price.toFixed(2).toString().replace('.',',')}</p>
                        </div>
                    </div>
                `; 
                
                el.innerHTML += html;
            }else{
                //console.info('Função constituirSacola forEach:. Não existe produtos adicionados.');
            }   
        });        
    }else{
        //não existe produtos adicionados
        //console.info('Função constituirSacola:. Não existe produtos adicionados.');

        let el = document.getElementById('resumeCart');
        el.innerHTML = '<div class="sacola-vazio"><h3>O carrinho está vazio</h3></div>';

        let elitems = document.getElementById('total-items');
        let elCart = document.getElementById('total-items-sacola');

        elitems.innerHTML = 0;
        elCart.innerHTML = 0;

        var elemento = document.querySelectorAll('.price-cart-results .subtotal strong')[0];
        elemento.innerHTML = "R$ 00,00";
    
        var elementoParcel = document.querySelectorAll('.price-cart-results .subtotal p')[0];        
        elementoParcel.innerHTML = "&nbsp;";
    }

    //Atribuindo evento clique no botão excluir
    setTimeout(function(){
       excluirProduct();
    },120);

    return total;
}//fim da função
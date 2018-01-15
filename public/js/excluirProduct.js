function produtoExcluido(e){
    let product = readCookie('listProduct');
    if(product != null){
        var id = e.target.getAttribute("data-id");
        var arr = product.split(',');

        arr = arr.filter(function(item) { 
            return item !== id
        });
        
        createCookie('listProduct', arr, 150); 

        setTimeout(function(){
            miniCart();
        },10);
    }else{
        //não existe produtos adicionados
        //console.info('Função excluirProduct:. Não existe produtos adicionados.');
    }
}

function excluirProduct(){
    var btnExcluir = document.querySelectorAll('.price-product button.close span');
    btnExcluir.forEach(function(element){
        element.addEventListener('click', produtoExcluido, false);
    });
}
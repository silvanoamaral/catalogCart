function addProductCart(e){
    //type. O tipo de evento que se está lidando;
    //target. O elemento que disparou o evento.
    var id = e.target.getAttribute("data-idProduct"); 
    var listProduct = readCookie('listProduct');

    if(listProduct === null){
        //não existe o cookie
        createCookie('listProduct', id, 150); 
    }else{
        let obj = '';

        if(listProduct.indexOf(',') >= 0){
            obj = listProduct.split(',');
        }else{
            obj = listProduct.split('');
        }

        obj.push(id);
        createCookie('listProduct', obj, 150); 
    }    
    
    //Atualiza o value da sacola
    miniCart();
}

//Adicina evento clique no botão comprar
var clickButton = document.querySelectorAll('.btn-comprar');
clickButton.forEach(function(element){
    element.addEventListener('click', addProductCart, false);
});
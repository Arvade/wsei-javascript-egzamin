document.addEventListener('DOMContentLoaded', () => {

    const shoppingList = document.getElementById('shopping-list');

    const btn1 = document.getElementById('button-1');
    const btn2 = document.getElementById('button-2');
    const btn3 = document.getElementById('button-3');

    btn1.addEventListener('click', () => {
        shoppingList.appendChild(createProduct('chleb'));
    });

    btn2.addEventListener('click', () => {
        if(!shoppingList.lastElementChild) return;

        shoppingList.removeChild(shoppingList.lastElementChild);
    });

    btn3.addEventListener('click', () => {
        if(shoppingList.children.length <2) return;
        shoppingList.appendChild(shoppingList.children[1].cloneNode(true));
    });


    function createProduct(name){
        const newProduct = document.createElement('li');
        newProduct.innerHTML = name;
        return newProduct;
    }
});
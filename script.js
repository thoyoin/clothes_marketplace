"use strict";

const products = [{
    image: 'catalog/Winter_Puffer_Jacket-removebg-preview.png',
    name: 'Winter Puffer Jacket',
    price: 'BYN 260',
    href: '#'
},{
    image: 'catalog/Adidas_Zip_Hoodie-removebg-preview.png',
    name: 'Adidas Zip Hoodie',
    price: 'BYN 110',
    href: '#'
},{
    image: 'catalog/Alpha_Industries_B15-removebg-preview.png',
    name: 'Alpha Industrie B15',
    price: 'BYN 370',
    href: '#'
},{
    image: 'catalog/CDG_Play_Shirt-removebg-preview.png',
    name: 'CDG Play Shirt',
    price: 'BYN 150',
    href: '#'
},{
    image: 'catalog/Vivienne_Westwood_Свитшот-removebg-preview.png',
    name: 'Vivienne Westwood',
    price: 'BYN 120',
    href: '#'
},{
    image: 'catalog/REGENERATOR_N2B_Puffer_Jacket-removebg-preview.png',
    name: 'Regenerator N2B',
    price: 'BYN 280',
    href: 'productRegenerator.html'
},{
    image: 'catalog/Dolce_Gabbana_Shirt-removebg-preview.png',
    name: 'Dolce&Gabbana Shirt',
    price: 'BYN 200',
    href: '#'
},{
    image: 'catalog/Heavy_cotton_sweater-removebg-preview.png',
    name: 'Heavy cotton sweater',
    price: 'BYN 120',
    href: '#'
},{
    image: 'catalog/Heavy_cotton_sweater2-removebg-preview.png',
    name: 'Heavy cotton sweater 2',
    price: 'BYN 120',
    href: '#'
},{
    image: 'catalog/Tactical shirt.png',
    name: 'Tactical Shirt',
    price: 'BYN 150',
    href: '#'
},{
    image: 'catalog/Winter_Active_Jacket.png',
    name: 'Winter Active Jacket',
    price: 'BYN 280',
    href: '#'
},{
    image: 'catalog/Exstra_Wide_Baggy_Jeans.png',
    name: 'Exstra Wide Baggy Jeans',
    price: 'BYN 190',
    href: '#'
}]

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product">
        <a href="#"><img src="${product.image}" alt="${product.name}"></a>
        <a href="#" class="name">${product.name}</a>
        <div clss="price">${product.price}</div>
    </div>  
    `
});

document.querySelector('.js-content-grid').innerHTML = productsHTML;
"use strict";

const products = [{
    image: 'catalog/Winter_Puffer_Jacket-removebg-preview.png',
    name: 'Winter Puffer Jacket',
    price: 'BYN 260',
    id: 'winter-puffer-jacket'
},{
    image: 'catalog/Adidas_Zip_Hoodie-removebg-preview.png',
    name: 'Adidas Zip Hoodie',
    price: 'BYN 110',
    id: 'adidas-zip-hoodie'
},{
    image: 'catalog/Alpha_Industries_B15-removebg-preview.png',
    name: 'Alpha Industrie B15',
    price: 'BYN 370',
    id: 'alpha-industries-b15'
},{
    image: 'catalog/CDG_Play_Shirt-removebg-preview.png',
    name: 'CDG Play Shirt',
    price: 'BYN 150',
    id: 'cdg-play-shirt'
},{
    image: 'catalog/Vivienne_Westwood_Свитшот-removebg-preview.png',
    name: 'Vivienne Westwood',
    price: 'BYN 120',
    id: 'vivienne-westwood'
},{
    image: 'catalog/REGENERATOR_N2B_Puffer_Jacket-removebg-preview.png',
    name: 'Regenerator N2B',
    price: 'BYN 280',
    id: 'regenerator-n2b-puffer-jacket'
},{
    image: 'catalog/Dolce_Gabbana_Shirt-removebg-preview.png',
    name: 'Dolce&Gabbana Shirt',
    price: 'BYN 200',
    id: 'dolce-gabbana-shirt'
},{
    image: 'catalog/Heavy_cotton_sweater-removebg-preview.png',
    name: 'Heavy cotton sweater',
    price: 'BYN 120',
    id: 'heavy-cotton-sweater'
},{
    image: 'catalog/Heavy_cotton_sweater2-removebg-preview.png',
    name: 'Heavy cotton sweater 2',
    price: 'BYN 120',
    id: 'heavy-cotton-sweater2'
},{
    image: 'catalog/Tactical shirt.png',
    name: 'Tactical Shirt',
    price: 'BYN 150',
    id: 'tactical-shirt'
},{
    image: 'catalog/Winter_Active_Jacket.png',
    name: 'Winter Active Jacket',
    price: 'BYN 280',
    id: 'winter-active-jacket'
},{
    image: 'catalog/Exstra_Wide_Baggy_Jeans.png',
    name: 'Exstra Wide Baggy Jeans',
    price: 'BYN 190',
    id: 'extra-wide-baggy-jeans'
},{
    image: 'catalog/Vanucci_Italian.png',
    name: 'Vanucci Italian',
    price: 'BYN 320',
    id: 'vanucci-italian'
},{
    image: 'catalog/Gosha.png',
    name: 'Гоша Рубчинский',
    price: 'BYN 100',
    id: 'gosha'
},{
    image: 'catalog/Slim_Fit_Long_Sleeve.png',
    name: 'Slim Fit Long Sleeve',
    price: 'BYN 120',
    id: 'slim-fit-long-sleeve'
},{
    image: 'catalog/Avangard_Leather_Jacket.png',
    name: 'Avangard Leather Jacket',
    price: 'BYN 180',
    id: 'avangard-leather-jacket'
}]

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product">
        <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
        <a href="product.html?id=${product.id}" class="name">${product.name}</a>
        <div clss="price">${product.price}</div>
    </div>  
    `
});

document.querySelector('.js-content-grid').innerHTML = productsHTML;
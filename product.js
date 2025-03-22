"use strict";


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');


const products = [{
    image: 'catalog/Winter_Puffer_Jacket-removebg-preview.png',
    name: 'Winter Puffer Jacket',
    price: 'BYN 260',
    conditon: '10/10',
    size: 'L',
    id: 'winter-puffer-jacket'
},{
    image: 'catalog/Adidas_Zip_Hoodie-removebg-preview.png',
    name: 'Adidas Zip Hoodie',
    price: 'BYN 110',
    conditon: '8/10',
    size: 'L',
    id: 'adidas-zip-hoodie'
},{
    image: 'catalog/Alpha_Industries_B15-removebg-preview.png',
    name: 'Alpha Industrie B15',
    price: 'BYN 370',
    conditon: '10/10',
    size: 'L',
    id: 'alpha-industries-b15'
},{
    image: 'catalog/CDG_Play_Shirt-removebg-preview.png',
    name: 'CDG Play Shirt',
    price: 'BYN 150',
    conditon: '8/10',
    size: 'M',
    id: 'cdg-play-shirt'
},{
    image: 'catalog/Vivienne_Westwood_Свитшот-removebg-preview.png',
    name: 'Vivienne Westwood',
    price: 'BYN 120',
    conditon: '7/10',
    size: 'M',
    id: 'vivienne-westwood'
},{
    image: 'catalog/REGENERATOR_N2B_Puffer_Jacket-removebg-preview.png',
    name: 'Regenerator N2B',
    price: 'BYN 280',
    conditon: '10/10',
    size: 'XL',
    id: 'regenerator-n2b-puffer-jacket'
},{
    image: 'catalog/Dolce_Gabbana_Shirt-removebg-preview.png',
    name: 'Dolce&Gabbana Shirt',
    price: 'BYN 200',
    conditon: '9/10',
    size: 'L',
    id: 'dolce-gabbana-shirt'
},{
    image: 'catalog/Heavy_cotton_sweater-removebg-preview.png',
    name: 'Heavy cotton sweater',
    price: 'BYN 120',
    conditon: '10/10',
    size: 'M',
    id: 'heavy-cotton-sweater'
},{
    image: 'catalog/Heavy_cotton_sweater2-removebg-preview.png',
    name: 'Heavy cotton sweater 2',
    price: 'BYN 120',
    conditon: '10/10',
    size: 'M',
    id: 'heavy-cotton-sweater2'
},{
    image: 'catalog/Tactical shirt.png',
    name: 'Tactical Shirt',
    price: 'BYN 150',
    conditon: '8/10',
    size: 'L',
    id: 'tactical-shirt'
},{
    image: 'catalog/Winter_Active_Jacket.png',
    name: 'Winter Active Jacket',
    price: 'BYN 280',
    conditon: '10/10',
    size: 'XL',
    id: 'winter-active-jacket'
},{
    image: 'catalog/Exstra_Wide_Baggy_Jeans.png',
    name: 'Exstra Wide Baggy Jeans',
    price: 'BYN 190',
    conditon: '10/10',
    size: 'M, L, XL',
    id: 'extra-wide-baggy-jeans'
},{
    image: 'catalog/Vanucci_Italian.png',
    name: 'Vanucci Italian',
    price: 'BYN 320',
    conditon: '10/10',
    size: 'M-L',
    id: 'vanucci-italian'
},{
    image: 'catalog/Gosha.png',
    name: 'Гоша Рубчинский',
    price: 'BYN 100',
    conditon: '10/10',
    size: 'M',
    id: 'gosha'
},{
    image: 'catalog/Slim_Fit_Long_Sleeve.png',
    name: 'Slim Fit Long Sleeve',
    price: 'BYN 120',
    conditon: '9/10',
    size: 'L',
    id: 'slim-fit-long-sleeve'
},{
    image: 'catalog/Avangard_Leather_Jacket.png',
    name: 'Avangard Leather Jacket',
    price: 'BYN 180',
    conditon: '7/10',
    size: 'M',
    id: 'avangard-leather-jacket'
}]


const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `${product.price}`;
    document.getElementById('product-condition').textContent = `CONDITION: ${product.conditon}`;
    document.getElementById('product-size').textContent = `SIZE: ${product.size}`;
} else {
    document.querySelector('.container-1product').innerHTML = '<p>Товар не найден</p>';
}
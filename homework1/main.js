const products = [
    {id: 1, title: 'Notebook', img: 'img/notebook.jpg', price: 20000},
    {id: 2, title: 'Mouse', img: 'img/notebook.jpg', price: 1500},
    {id: 3, title: 'Keyboard', img: 'img/notebook.jpg', price: 5000},
    {id: 4, title: 'Gamepad', img: 'img/notebook.jpg', price: 4500},
];

const renderProduct = (title, img, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src='${img}' alt='${title}'>
                <p>${price}</p>
                <button class="buy"><b>В корзину</b></button>
            </div>`;
};

const renderProducts = goodsList => {
    // const productsList = goodsList.map(good => renderProduct(good.title, good.img, good.price));
    // document.querySelector('.products').innerHTML = productsList;
    document.querySelector('.products').innerHTML = goodsList.map(good => renderProduct(good.title, good.img, good.price)).join(''); // задача 3*. выходил массив с разделителем "," - исправлено .join('');
};

renderProducts(products);
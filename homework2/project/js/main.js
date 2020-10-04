class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 40000, quantity: 100},
      {id: 2, title: 'Mouse', price: 1000, quantity: 100},
      {id: 3, title: 'Keyboard', price: 2500, quantity: 100},
      {id: 4, title: 'Gamepad', price: 1500, quantity: 100},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  _getProductListPrice() { // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    return this.goods.reduce((price, good) => {
      return price + good.price * good.quantity;
    }, 0);
  }
}

const list = new ProductList();


/**
 *  1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
 *  Продумайте, какие методы понадобятся для работы с этими сущностями.
 */

class cart {
  constructor() {
    this.cartListBlock = null;
    this.cartButton = null;
    this.goods = [];
    this._render();
  }

  _render() {
    this.cartListBlock = document.querySelector('.cart-list');
    this.cartButton = document.querySelector('.btn-cart');

    if (this.goods.length > 0) {
      this.cartListBlock.textContent = `В корзине ${this.goods.length} товаров(а) стоимостью ${this.getCartPrice()}`;
    } else {
      this.cartListBlock.textContent = 'Корзина пуста';
    }

    this.cartButton.addEventListener('click', this.dropCart.bind(this));
  }

  _getCartPrice() {
    return this.goods.reduce((price, good) => {
      return price + good.price * good.quantity;
    }, 0);
  }

  _dropCart() {
    this.goods = [];
    this.render();
  }

  _cartItem(name, price) {
    return `<div>
                <div class="cart-title">${name}</div>
                <div class="cart-price">${price}</div>
            </div>`;
  }
}

// cart.render();
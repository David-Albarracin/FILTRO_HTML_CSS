const cart = [];
const cartAmount = document.getElementById("carrito-amount")
const showProduct = {}
const productContainer = document.getElementById("product")

let count = 0
let products = [{
    "id": 0,
    "category": "abrigo",
    "img": "./image/abrigos/0-1.webp",
    "title": "Abrigo 01",
    "amount": "1000"
},
{
    "id": 1,
    "category": "abrigo",
    "img": "./image/abrigos/1-1.webp",
    "title": "Abrigo 02",
    "amount": "1000"
}
]




products.forEach(product => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML += `
        <div class="product">
            <a onclick(selectedProduct(${product.id})) class="product__img">
                <img id="product-img" src="${product.img}" alt="${product.title}">
            </a>
            <div class="product__content">
                <div>
                    <a onclick(selectedProduct(${product.id})) href="./pages/product.html">${product.title}</a>
                    <h4>$<span>${product.amount}</span></h4>
                </div>
                <button onclick="addCart(${product.id})" name="add-cart" class="add-cart">
                    Agregar
                </button>
            </div>
        </div>
    `
})

function addCart(id) {
    cart.push(products[id])
    cartAmount.textContent = cart.length
}

function selectedProduct(id) {
    showProduct = products[id]
    productContainer.innerHTML = `
    
    
    
    
    `
}



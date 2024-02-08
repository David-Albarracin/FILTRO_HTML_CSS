const cart = [];
const showProduct = {}

const cartAmount = document.getElementById("carrito-amount")
const category = document.getElementById("category")
const productContainer = document.getElementById("product")
const productsContainer = document.getElementById('products');

let aCategory = document.getElementById("all")
category.textContent = "Todos Los Productos"

let count = 0
let products = [{
    "id": 0,
    "category": "abrigos",
    "img": "./image/abrigos/0-1.webp",
    "img2": "./image/abrigos/0-2.webp",
    "title": "Abrigo 01",
    "amount": "1000"
},
{
    "id": 1,
    "category": "abrigos",
    "img": "./image/abrigos/1-1.webp",
    "img2": "./image/abrigos/1-2.webp",
    "title": "Abrigo 02",
    "amount": "1000"
}
]

function loadProducts(productsL){
    productsL.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <a onclick="loadProduct(${product.id})" class="product__img">
                    <img id="product-img" src="${product.img}" alt="${product.title}">
                </a>
                <div class="product__content">
                    <div>
                        <a onclick="loadProduct(${product.id})">${product.title}</a>
                        <h4>$<span>${product.amount}</span></h4>
                    </div>
                    <button onclick="addCart(${product.id})" name="add-cart" class="add-cart">
                        Agregar
                    </button>
                </div>
            </div>
        `
    })
}

loadProducts(products)

function addCart(id) {
    cart.push(products[id])
    cartAmount.textContent = cart.length
}

function loadProduct(id) {
    var product = products[id]
    category.textContent = product.title
    productContainer.innerHTML = `
    <div class="dialog">
        <div class="dialog__images">
            <div>
                <div class="dialog__image">
                    <img src="${product.img}" alt="alt">
                </div>
                <div class="dialog__image">
                    <img src="${product.img2}" alt="alt">
                </div>
            </div>
            <div class="dialog__img">
                <img id="dialog__img" src="${product.img}" alt="alt">
            </div>
        </div>
        <h3 class="my-1">${product.title}</h3>
        <div class="d-flex my-1">
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star-half' ></i>
        </div>
        <p class="my-1">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Excepturi, quo officiis a facilis 
            inventore eveniet dolore reiciendis tempora 
            amet explicabo ex deserunt ea mollitia voluptatibus 
            necessitatibus maiores accusamus quidem. Similique!
        </p>
        <div class="d-flex my-1">
            <h3>$<span>${product.amount}</span></h3>
            <h5>$99.59</h5>
        </div>
        <button onclick="hrefBack()" class="add-cart">
            Regresar
        </button>
    </div>
    `
}

function hrefBack(){
    productContainer.innerHTML = ``
}

function filter(categoryS){
    //Agregar el Estilo  a la etiqueta a de activado
    aCategory.classList.remove("link-active")
    aCategory = document.getElementById(categoryS)
    aCategory.classList.add("link-active")

    //Reiniciar los Elementos dentro de los Contenedores
    productContainer.innerHTML = ``
    productsContainer.innerHTML = ``


    if (categoryS == "all") {
        category.textContent = "Todos los Productos"
        loadProducts(products)
    }else{
        filterProducts = []
        products.forEach(product => {
            if(product.category == "categoryS"){
                filterProducts.push(product)
            }
        })
        category.textContent = categoryS
        loadProducts(filterProducts)
    }
}


function loadCart(){
    //Agregar el Estilo  a la etiqueta a de activado
    aCategory.classList.remove("link-active")

    //Reiniciar los Elementos dentro de los Contenedores
    productContainer.innerHTML = ``
    productsContainer.innerHTML = ``

    category.textContent = "Carrito"
    if (cart.length == 0) {
        productsContainer.innerHTML += `
            <div class="my-1"><h2>Tu Carrito esta Vació :c</h2></div>
        
        `
    }else{
        loadProducts(cart)
    }


}
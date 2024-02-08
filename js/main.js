var cart = [];
const showProduct = {}

const cartAmount = document.getElementById("carrito-amount")
const category = document.getElementById("category")
const productContainer = document.getElementById("product")
const productsContainer = document.getElementById('products');
const total = document.getElementById('total');


let aCategory = document.getElementById("all")
category.textContent = "Todos Los Productos"

let count = 0
let products = [
    {
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
    },
    {
        "id": 2,
        "category": "abrigos",
        "img": "./image/abrigos/2-1.webp",
        "img2": "./image/abrigos/2-2.webp",
        "title": "Abrigo 03",
        "amount": "2000"
    },
    {
        "id": 3,
        "category": "abrigos",
        "img": "./image/abrigos/3-1.webp",
        "img2": "./image/abrigos/3-2.webp",
        "title": "Abrigo 04",
        "amount": "2000"
    },
    {
        "id": 4,
        "category": "abrigos",
        "img": "./image/abrigos/4-1.webp",
        "img2": "./image/abrigos/4-2.webp",
        "title": "Abrigo 05",
        "amount": "2000"
    },
    {
        "id": 5,
        "category": "camisas",
        "img": "./image/camisas/0-1.webp",
        "img2": "./image/camisas/0-1.webp",
        "title": "Camisa 01",
        "amount": "2000"
    },
    {
        "id": 6,
        "category": "camisas",
        "img": "./image/camisas/0-2.webp",
        "img2": "./image/camisas/0-2.webp",
        "title": "Camisa 02",
        "amount": "2000"
    },
    {
        "id": 7,
        "category": "camisas",
        "img": "./image/camisas/0-3.webp",
        "img2": "./image/camisas/0-3.webp",
        "title": "Camisa 03",
        "amount": "2000"
    },
    {
        "id": 8,
        "category": "camisas",
        "img": "./image/camisas/0-4.webp",
        "img2": "./image/camisas/0-4.webp",
        "title": "Camisa 04",
        "amount": "2000"
    },
    {
        "id": 9,
        "category": "camisas",
        "img": "./image/camisas/0-5.webp",
        "img2": "./image/camisas/0-5.webp",
        "title": "Camisa 05",
        "amount": "2000"
    },
    {
        "id": 10,
        "category": "pantalones",
        "img": "./image/pantalones/0-1.webp",
        "img2": "./image/pantalones/0-2.webp",
        "title": "Pantalones 01",
        "amount": "2000"
    },
    {
        "id": 11,
        "category": "pantalones",
        "img": "./image/pantalones/1-1.webp",
        "img2": "./image/pantalones/1-2.webp",
        "title": "Pantalones 02",
        "amount": "2000"
    },
    {
        "id": 12,
        "category": "pantalones",
        "img": "./image/pantalones/2-1.webp",
        "img2": "./image/pantalones/2-2.webp",
        "title": "Pantalones 03",
        "amount": "2000"
    },
    {
        "id": 13,
        "category": "pantalones",
        "img": "./image/pantalones/3-1.webp",
        "img2": "./image/pantalones/3-2.webp",
        "title": "Pantalones 04",
        "amount": "2000"
    },
    {
        "id": 14,
        "category": "pantalones",
        "img": "./image/pantalones/4-1.webp",
        "img2": "./image/pantalones/4-2.webp",
        "title": "Pantalones 05",
        "amount": "2000"
    }

]

function loadProducts(productsL){
    //Recorremos los productos que vengan en productsL
    productsL.forEach(product => {
        //Insertamos el producto teniendo encuenta el anterio += 
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

//Cargamos Todos los productos
loadProducts(products)

function addCart(id) {
    //Agregar al array cart
    cart.push(products[id])

    //Actualizar el Contador
    cartAmount.textContent = cart.length

}

function loadProduct(id) {
    //Reiniciar los Elementos dentro de los Contenedores
    productsContainer.innerHTML = ``

    //Buscar el Producto
    var product = products[id]

    //Cambiar titulo al nombre del producto
    category.textContent = product.title

    //Insertar la Estrcuctura del producto
    productContainer.innerHTML = `
    <div class="dialog">
        <div class="dialog__images">
            <div>
                <div class="dialog__image">
                    <img onclick="changeIMG('${product.img}')" src="${product.img}" alt="alt">
                </div>
                <div class="dialog__image">
                    <img onclick="changeIMG('${product.img2}')" src="${product.img2}" alt="alt">
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
        <button onclick="hrefBack(${product.category})" class="add-cart">
            Regresar
        </button>
    </div>
    `
}

function hrefBack(c){
    filter(c.id)
}

function filter(categoryS){
    //Agregar el Estilo  a la etiqueta a de activado
    productsContainer.classList.add("d-grid")
    aCategory.classList.remove("link-active")
    aCategory = document.getElementById(categoryS)
    aCategory.classList.add("link-active")

    //Reiniciar los Elementos dentro de los Contenedores
    productContainer.innerHTML = ``
    productsContainer.innerHTML = ``
    total.innerHTML = ``


    if (categoryS == "all") {
        category.textContent = "Todos los Productos"
        loadProducts(products)
    }else{
        filterProducts = []
        products.forEach(product => {
            if(product.category == categoryS){
                filterProducts.push(product)
            }
        })
        category.textContent = categoryS
        loadProducts(filterProducts)
    }
}


function loadCart(){
    //Agregar el Estilo  a la etiqueta a de activado
    productsContainer.classList.add("d-grid")
    aCategory.classList.remove("link-active")

    //Reiniciar los Elementos dentro de los Contenedores
    productContainer.innerHTML = ``
    productsContainer.innerHTML = ``
    total.innerHTML = ``
    productsContainer.classList.remove("d-grid")

    category.textContent = "Carrito"
    if (cart.length == 0) {
        productsContainer.innerHTML += `
            <div class="my-1"><h2>Tu Carrito esta Vació :c</h2></div>
        `
    }else{
        cart.forEach(product => {
            productsContainer.innerHTML +=  `
                <div class="cart__product">
                    <img src="${product.img}" alt="alt">
                    <div>
                        <h3>Nombre</h3>
                        <span>${product.title}</span>
                    </div>
                    <div class="d-grid gap-1">
                        <label for="amount">Cantidad</label>
                        <input type="text" name="amount" id="" value="1">
                    </div>
                    <div>
                        <h3>Precio</h3>
                        <h4>$<span>${product.amount}</span></h4>  
                    </div>
                    <div>
                        <h3>Subtotal</h3>
                        <h4>$<span>${product.amount}</span></h4>
                    </div>
                    <div class="text-align-center">
                        <h2 onclick="removeCart(${product.id})">
                            <i class='bx bxs-trash'></i>
                        </h2>
                    </div>
                </div>
            `
        })
        total.innerHTML = `
        <button onclick="clearCart()" class="add-cart">
            Vaciar Carrito
        </button>
        <div class="d-flex">
            <div class="total-price">
                <h2>Total</h2>
                <h3>$8.000</h3>
            </div>
            <button class="add-cart">
                Comprar Ahora
            </button>
        </div>
        `

    }
}

function clearCart(){
    cart = []
    loadCart()
}

function changeIMG(url) {
    var MainImg = document.getElementById("dialog__img")
    MainImg.src = url
}

function removeCart(id) {
    var index = cart.findIndex(product => product.id == id);
    cart.splice(index, 1)
    loadCart()
}
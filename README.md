

![css](https://raw.githubusercontent.com/David-Albarracin/README_MATERIALS/main/css-html-js.png)

# FILTRO_HTML_CSS

En style.css encontraras primero base que esta conformado por el root que se usa para almacenar variables y luego podemos encontrar como reiniciamos los estilos de algunas etiquetas html 

```
/* ====================== BASE ====================== */
:root{
	//Encontraras las varibles
}
//Reinicio de etiquetas de html 
html{
    scroll-behavior: smooth;
}
```

Luego encontramos el layout donde encontraremos clases reusables que nos ayudan aplicar estilos especificos como por ejemplo:

Vuelve el contenedor flexible 

```
.d-flex{
    display: flex;
}
```

Vuelve el contenedor grid

```
.d-grid{
    display: grid;
}
```

Aplica un espacio a  un contenedor grid

```
.gap-1{
    gap: 0.5rem;
}
```

Centra el Texto

```
.text-align-center{
    text-align: center;
}
```

Da un margen en el bottom de 3 rem

```
.mb-3{
    margin-bottom: 3rem;
}
```

Da un margen en el Top de 0.5rem

```
.mt-1{
    margin-top: 0.5rem;
}

```

Da un margen en el eje y top y bottom de 0.5rem

```
.my-1{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
```

Luego encontramos el /*========== CAMPUS SHOP ==========*/ donde encontramos la siguientes clases:

Esta clase se aplica al contenedor padre del sidebar para volverlo flexible que ocupe todo el espacio tanto en alto como en ancho y luego posiciona su contenido a between con un margen de arriba y abajo de 1rem

```
.sidebar{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 1rem 0;
}
```

Esta clase se la aplica a el cotenedor padre de los productos para redondear el borde aplicar borde dar un ancho aplicar un overflow scroll que nos ayuda a que el contenido si supera el contenedor se genera un scroll para poder navegar y se le aplica un fondo blanco y un pading de un rem

```
.products{
    border-radius: 20px;
    border: 2px solid var(--border-color);
    width: 100%;
    height: 90vh;
    padding: 1rem;
    background-color: var(--container-color);
    overflow-y: scroll;
}
```

se usa para aplicar un pading top de 1rem y un espaciado de 1rem dentro de su contenido

```
.products__content{
    padding-top: 1rem;
    gap: 1rem;
}
```

Se usa para aplicarle al menu donde encontramos las categarias un orden de tipo column

```
.side-menu {
    display: flex;
    flex-direction: column;
}
```

Se usa para darle el estilo a los link del side menu se le aplica un padding y un margen con un borde de 2px 

```
.side-menu__link {
    padding: 1rem;
    margin: 0.5rem 0px;
    border: 2px solid var(--border-color);
}
```

Se usa para darle un espaciado a el boton carrito que ajuste su contenido a los lados que ocupe el 100% y que tenga un fondo blanco

```
.side__button {
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--container-color);
}
```

Ahora vamos para el contenedor producto de la vista no carrito se le agrega flexibilidad al contenedor para poder poner sus objetos arriba y abajo con  justify-content: space-between; y flex-direction: column; luego agregamos un borde de 2px y centramos el texto

```
.product{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    border-radius: 20px;
    border: 2px solid var(--border-color);
}
```

Ahora tenemos que arreglar el contenido donde aparece el titulo del producto el precio y el botton de agregar carrito para ello vamos a poner el contenido a los laterales le damos un espaciado de un 1rem y luego el texto se alinea al comienzo para sobrescribir el text center mencionado anterior mente

```
.product__content {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    padding: 1rem;
    border: 2px solid;
    border-radius: 20px;
    text-align: start;
}
```

Damos el estilo de los botones del menu donde la clase se llama add cart pero se usara en diferentes partes del proyecto donde tengamos botones verder

```
.product__content {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    padding: 1rem;
    border: 2px solid;
    border-radius: 20px;
    text-align: start;
}
```

Ahora encontramos la seccion /*========== DIALOG ==========*/ donde encontramos la vista completa del producto lleva consigo ese nombre por que el desarrollador pensaba poner una ventana emergente por motivos de tiempo no alcanzo .dialog es para darle estilo a la estructura que muestra el producto completo para ello se le aplica un espaciado de 1rem luego un maximo de 600px para que no ocupe todo el contenedor main y borde de 2px redondeado

```
.dialog{
    padding: 1rem;
    max-width: 600px;
    border: 2px solid var(--border-color);
    border-radius: 20px;
}
```

Creamos la el estilo de las imagenes volviendolo grid y haciendo columnas de 20% y 80% para que las imagenes queden en la parte izquierda 

```
.dialog__images{
    display: grid;
    grid-template-columns: 20% 80%;
}
```

Ahora vamos a crear la visualizacion de los productos del cart para ello de agregamos un margen inferior de 1 rem luego volvemos el contenedor grid un borde de 2px redondeado con un 

```
.cart__product {
    margin-bottom: 1rem;
    display: grid;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 20px;
    align-items: center;
    overflow-x: scroll;
    text-align: center;
}
```

Teniendo los estilos para mobil vamos a hacerlo responsivo para las pantallas desktop para ello creamos dos media query una en 992px y otra en 1400px en la primera agregamos las siguentes clases

Para dividir el contenedor de los productos en 3

```
.products__content{
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
 }
```

Ahora la visualizacion de los productos del carrito se alinea en row para ello usamos 

```
.cart__product {
        grid-template-columns: repeat(6, 1fr);
        text-align: start;
}
```

Limitamos el ancho de las imagenes y de los inputs en el carrito 

```
.cart__product img{
        max-width: 100px; 
    }

    .cart__product input{
        max-width: 100px;
    }
```

ponemos el sidebar a la izquierda con la siguiente clase 

```
.shop{
        grid-template-columns: 25% 75%;
    }
```

Ahora el media query de 1400 px se usa para agrandar un poco el product__content y cambiar su distribución a 4 filas 

```
.products__content{
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }


    .shop{
        grid-template-columns: 20% 80%;
    }
```


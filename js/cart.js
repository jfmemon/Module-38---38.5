const getProductById = id => {
    const productInputField = document.getElementById(id);
    const productInputFieldValue = productInputField.value;
    productInputField.value = ``;
    return productInputFieldValue;
}

const buyProduct = () => {
    const productName = getProductById('product-name');
    const productQuantity = getProductById('product-quantity');
    console.log(productName, productQuantity);
    // localStorage.setItem(productName, productQuantity);
    saveCartToLocalStorage(productName, productQuantity);
    addProductToDisplay(productName, productQuantity);
}

// getting the key of local storage
const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveCartToLocalStorage = (product, quantity) => {
    const cart = getCartFromLocalStorage();
    cart[product] = quantity;   // cart[propertyName] = property value(quantity); as product name is changable so -> []
    const stringifyData = JSON.stringify(cart);   // convert value into string
    localStorage.setItem('cart', stringifyData);     // key name = cart, value = stringify value
}


const addProductToDisplay = (product, quantity) => {
    const productList = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productList.appendChild(li);
}

const displayProduct = () => {
    const cart = getCartFromLocalStorage();
    for(const product in cart) {
        const quantity = cart[product];
        addProductToDisplay(product, quantity);
    }
}

displayProduct();
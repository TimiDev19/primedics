let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

//The part that opens and closes the cart
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

//Product listing that i was saying is in the js file
let products = [
    {
        id: 1,
        name: 'Stethoscope',
        image: `<img src="./img/home.png">`,
        price: 120000
    },
    {
        id: 2,
        name: 'C Sharp',
        image: `<img src="./img/Csharp_Logo.png">`,
        price: 120000
    },
    {
        id: 3,
        name: 'HTML',
        image: `<img src="./img/html-logo.png">`,
        price: 220000
    },
    {
        id: 4,
        name: 'LinkedIn',
        image: `<img src="./img/linkedin-pic.png">`,
        price: 123000
    },
    {
        id: 5,
        name: 'CSS',
        image: `<img src="./img/css-logo.png">`,
        price: 320000
    },
    {
        id: 6,
        name: 'Whatsapp',
        image: `<img src="./img/whatsapp.png">`,
        price: 120000
    }
];

//This is the part that makes it show in the cart
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div>${value.image}</div>
            <div class="title">${value.name}</div>
            <div class="price">${"$" + value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list cart
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//The cart's functionality
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.image}</div>
                <div>${value.name}</div>
                <div>${"$" + value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "$" + totalPrice.toLocaleString();
    quantity.innerText = count;
}

//calculates the price
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
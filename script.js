/* =====================================================
   RUP'S ART SUPPLY
   COMPLETE WEBSITE JAVASCRIPT
   CART + WISHLIST + PRODUCT DETAILS
   ORDER NOW + UPI + WHATSAPP
   ===================================================== */


/* =====================================================
   BUSINESS SETTINGS
   ===================================================== */

const whatsappNumber = "7439436681";
const upiId = "7439436681@ybl";
const businessName = "Rup's Art Supply";


/* =====================================================
   PRODUCT LIST
   ===================================================== */

const products = [

    {
        id: 1,
        name: "Remote control car",
        category: "toys",
        price: 199,
        discount: "10% OFF",
        image: "images/toys/toy1.png",
        description: "Fun and colorful toy for children."
    },

    

 

    {
        id: 2,
        name: "Unicon Box Set",
        category: "stationery",
        price: 120,
        discount: "5% OFF",
        image: "images/stationery/uni.png",
        description: "Cute unicon pencil box."
    },

    {
        id: 3,
        name: "Lion Printed Box",
        category: "stationery",
        price: 150,
        discount: "10% OFF",
        image: "images/stationery/l.png",
        description: "Useful for school and daily work."
    },

    {
        id: 4,
        name: "LCD Panel",
        category: "stationery",
        price: 180,
        discount: "10% OFF",
        image: "images/stationery/lcd.png",
        description: "Quality digital LCD board for students and artists."
    },

    {
        id: 5,
        name: "Glass Bottle",
        category: "gifts",
        price: 150,
        discount: "10% OFF",
        image: "images/gifts/lunch1.jpeg",
        description: "Beautiful gift item for your loved ones."
    },

    {
        id: 6,
        name: "Sports Car",
        category: "gifts",
        price: 250,
        discount: "15% OFF",
        image: "images/gifts/car.png",
        description: "Special gift for your kids."
    },

   
{
    id: 7,
    name: "Piano",
    category: "gifts",
    price: 300,
    discount: "5% OFF",
    image: "images/gifts/p.png",
    description: "Melodious gift item."
},

{
    id: 8,
    name: "Educational",
    category: "toys",
    price: 150,
    discount: "10% OFF",
    image: "images/toys/bskit.jpeg",
    description: "Engineering tool kit."
},
{
    id: 9,
    name: "Big Train set",
    category: "toys",
    price: 90,
    discount: "10% OFF",
    image: "images/toys/btrain.jpeg",
    description: "Track Game."
},
{
    id: 10,
    name: "Ramp Car",
    category: "toys",
    price: 99,
    discount: "10% OFF",
    image: "images/toys/rampcar.jpeg",
    description: "Ramp car game set."
},
{
    id: 11,
    name: "Helicopter",
    category: "toys",
    price: 250,
    discount: "20% OFF",
    image: "images/toys/rheli.jpeg",
    description: "Remote control helicopter."
},
{
    id: 12,
    name: "Science Kit",
    category: "toys",
    price: 79,
    discount: "20% OFF",
    image: "images/toys/sskit.jpeg",
    description: "Engineering tool kit."
},
{
    id: 13,
    name: "Train set",
    category: "toys",
    price: 60,
    discount: "20% OFF",
    image: "images/toys/strain.jpeg",
    description: "Train set for children."
},
{
    id: 14,
    name: "Taxi",
    category: "toys",
    price: 230,
    discount: "15% OFF",
    image: "images/toys/taxi.jpeg",
    description: "Kolkata famous yellow taxi."
},
{
        id: 15,
        name: "Mechanical Pencil",
        category: "toys",
        price: 15,
        discount: "No Discount",
        image: "images/stationery/lk.jpeg",
        description: "Make your writing easy with this mechanical pencil."
    },

];


/* =====================================================
   CART
   ===================================================== */

function getCart() {

    try {

        return JSON.parse(localStorage.getItem("cart")) || [];

    } catch (error) {

        return [];

    }

}


function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCounts();

}


function addToCart(id) {

    const cart = getCart();

    const existingProduct =
        cart.find(item => item.id === Number(id));


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: Number(id),

            quantity: 1

        });

    }


    saveCart(cart);

    alert("Product added to cart!");

}


function removeFromCart(id) {

    let cart = getCart();

    cart = cart.filter(
        item => item.id !== Number(id)
    );

    saveCart(cart);

    displayCart();

}


function changeQuantity(id, change) {

    const cart = getCart();

    const item = cart.find(
        item => item.id === Number(id)
    );


    if (!item) return;


    item.quantity += Number(change);


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart(cart);

    displayCart();

}


/* =====================================================
   WISHLIST
   ===================================================== */

function getWishlist() {

    try {

        return JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveWishlist(wishlist) {

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateCounts();

}


function addToWishlist(id) {

    id = Number(id);

    const wishlist = getWishlist();


    if (!wishlist.includes(id)) {

        wishlist.push(id);

        saveWishlist(wishlist);

        alert("Product added to wishlist!");

    } else {

        alert("Product is already in wishlist!");

    }

}


function removeFromWishlist(id) {

    id = Number(id);

    let wishlist = getWishlist();

    wishlist = wishlist.filter(
        item => item !== id
    );

    saveWishlist(wishlist);

    displayWishlist();

}


/* =====================================================
   PRODUCT FINDER
   ===================================================== */

function getProductById(id) {

    return products.find(
        product => product.id === Number(id)
    );

}


/* =====================================================
   WHATSAPP PRODUCT ENQUIRY
   ===================================================== */

function contactOnWhatsApp(id) {

    const product = getProductById(id);

    if (!product) return;


    const message =

        `Hello ${businessName},\n\n` +

        `I want to know more about this product:\n\n` +

        `Product: ${product.name}\n` +

        `Price: ₹${product.price}\n` +

        `Product Reference: ${product.name}\n\n` +

        `Please share more details.`;


    const whatsappURL =

        `https://wa.me/${whatsappNumber}` +

        `?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(productList) {

    const container =
        document.getElementById(
            "productContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    if (productList.length === 0) {

        container.innerHTML =
            `<p class="no-products">No products found.</p>`;

        return;

    }


    productList.forEach(product => {

        const card =
            document.createElement("div");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <h3>
                ${product.name}
            </h3>


            <p class="product-description">
                ${product.description}
            </p>


            <p class="product-price">
                ₹${product.price}
            </p>


            <span class="discount">
                ${product.discount}
            </span>


            <div class="product-buttons">

                <button
                    class="cart-button"
                    onclick="event.stopPropagation(); addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>


                <button
                    class="wishlist-button"
                    onclick="event.stopPropagation(); addToWishlist(${product.id})"
                >
                    ❤️
                </button>


                <button
                    class="whatsapp-button"
                    onclick="event.stopPropagation(); contactOnWhatsApp(${product.id})"
                >
                    <span class="whatsapp-icon">☎</span>
                    WhatsApp
                </button>


                <button
                    class="order-button"
                    onclick="event.stopPropagation(); openOrderPage(${product.id})"
                >
                    ⚡ Order Now
                </button>

            </div>

        `;


        card.addEventListener(
            "click",
            function () {

                window.location.href =
                    `product-details.html?id=${product.id}`;

            }
        );


        container.appendChild(card);

    });

}


/* =====================================================
   LOAD PRODUCTS
   ===================================================== */

function loadProducts() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get("category");


    const search =
        params.get("search");


    let productList =
        [...products];


    if (category) {

        productList =
            productList.filter(
                product =>
                    product.category === category
            );

    }


    if (search) {

        const searchText =
            search.toLowerCase();


        productList =
            productList.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText)

            );

    }


    displayProducts(productList);

}


/* =====================================================
   CART DISPLAY
   ===================================================== */

function displayCart() {

    const container =
        document.getElementById(
            "cartContainer"
        );


    if (!container) return;


    const cart = getCart();


    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                Your cart is empty.
            </p>`;


        const total =
            document.getElementById(
                "cartTotal"
            );


        if (total) {

            total.innerText = "₹0";

        }


        return;

    }


    let totalAmount = 0;


    cart.forEach(item => {

        const product =
            getProductById(item.id);


        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        totalAmount += itemTotal;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="cart-info">

                <h3>
                    ${product.name}
                </h3>


                <p>
                    ₹${product.price}
                </p>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>


                <p>
                    Item Total: ₹${itemTotal}
                </p>


                <button
                    class="remove-button"
                    onclick="removeFromCart(${product.id})"
                >
                    Remove
                </button>


                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >
                    <span class="whatsapp-icon">☎</span>
                    Ask on WhatsApp
                </button>

            </div>

        `;


        container.appendChild(cartItem);

    });


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (totalElement) {

        totalElement.innerText =
            `₹${totalAmount}`;

    }

}


/* =====================================================
   WISHLIST DISPLAY
   ===================================================== */

function displayWishlist() {

    const container =
        document.getElementById(
            "wishlistContainer"
        );


    if (!container) return;


    const wishlist =
        getWishlist();


    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                Your wishlist is empty.
            </p>`;

        return;

    }


    wishlist.forEach(id => {

        const product =
            getProductById(id);


        if (!product) return;


        const card =
            document.createElement("div");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <h3>
                ${product.name}
            </h3>


            <p class="product-description">
                ${product.description}
            </p>


            <p class="product-price">
                ₹${product.price}
            </p>


            <div class="product-buttons">

                <button
                    class="cart-button"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>


                <button
                    class="remove-button"
                    onclick="removeFromWishlist(${product.id})"
                >
                    Remove
                </button>


                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >
                    <span class="whatsapp-icon">☎</span>
                    WhatsApp
                </button>


                <button
                    class="order-button"
                    onclick="openOrderPage(${product.id})"
                >
                    ⚡ Order Now
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   COUNTERS
   ===================================================== */

function updateCounts() {

    const cart =
        getCart();


    const wishlist =
        getWishlist();


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    const wishlistCount =
        document.getElementById(
            "wishlistCount"
        );


    if (cartCount) {

        const count =
            cart.reduce(
                (total, item) =>
                    total + Number(item.quantity),
                0
            );


        cartCount.innerText =
            count;

    }


    if (wishlistCount) {

        wishlistCount.innerText =
            wishlist.length;

    }

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function checkout() {

    const cart =
        getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    window.location.href =
        "product-details.html";

}


/* =====================================================
   ORDER NOW
   ===================================================== */

function openOrderPage(id) {

    window.location.href =
        `product-details.html?id=${Number(id)}&order=true`;

}


/* =====================================================
   ORDER TOTAL
   ===================================================== */

function calculateOrderTotal() {

    const priceElement =
        document.getElementById(
            "orderProductPrice"
        );


    const quantityElement =
        document.getElementById(
            "orderQuantity"
        );


    const totalElement =
        document.getElementById(
            "orderTotal"
        );


    if (
        !priceElement ||
        !quantityElement ||
        !totalElement
    ) {
        return;
    }


    const price =
        Number(
            priceElement.dataset.price
        );


    let quantity =
        Number(
            quantityElement.value
        );


    if (!Number.isFinite(quantity) || quantity < 1) {

        quantity = 1;

        quantityElement.value = 1;

    }


    const total =
        price * quantity;


    totalElement.innerText =
        `₹${total}`;

}


/* =====================================================
   INCREASE QUANTITY
   ===================================================== */

function increaseOrderQuantity() {

    const quantity =
        document.getElementById(
            "orderQuantity"
        );


    if (!quantity) return;


    quantity.value =
        Number(quantity.value) + 1;


    calculateOrderTotal();

}


/* =====================================================
   DECREASE QUANTITY
   ===================================================== */

function decreaseOrderQuantity() {

    const quantity =
        document.getElementById(
            "orderQuantity"
        );


    if (!quantity) return;


    let value =
        Number(quantity.value);


    if (value > 1) {

        value--;

    } else {

        value = 1;

    }


    quantity.value =
        value;


    calculateOrderTotal();

}


/* =====================================================
   UPI PAYMENT
   ===================================================== */

function payUsingUPI() {

    const productNameElement =
        document.getElementById(
            "orderProductName"
        );


    const quantityElement =
        document.getElementById(
            "orderQuantity"
        );


    const totalElement =
        document.getElementById(
            "orderTotal"
        );


    if (
        !productNameElement ||
        !quantityElement ||
        !totalElement
    ) {
        return;
    }


    const productName =
        productNameElement.innerText;


    const quantity =
        quantityElement.value;


    const total =
        totalElement.innerText;


    const amount =
        total.replace("₹", "").trim();


    const upiURL =

        `upi://pay` +

        `?pa=${encodeURIComponent(upiId)}` +

        `&pn=${encodeURIComponent(businessName)}` +

        `&am=${encodeURIComponent(amount)}` +

        `&cu=INR` +

        `&tn=${encodeURIComponent(
            "Order - " + productName
        )}`;


    window.location.href =
        upiURL;

}


/* =====================================================
   PLACE ORDER
   ===================================================== */

function placeOrder() {

    const productNameElement =
        document.getElementById(
            "orderProductName"
        );


    const quantityElement =
        document.getElementById(
            "orderQuantity"
        );


    const totalElement =
        document.getElementById(
            "orderTotal"
        );


    const customerNameElement =
        document.getElementById(
            "customerName"
        );


    const customerPhoneElement =
        document.getElementById(
            "customerPhone"
        );


    const customerAddressElement =
        document.getElementById(
            "customerAddress"
        );


    const transactionIdElement =
        document.getElementById(
            "transactionId"
        );


    if (
        !productNameElement ||
        !quantityElement ||
        !totalElement ||
        !customerNameElement ||
        !customerPhoneElement ||
        !customerAddressElement ||
        !transactionIdElement
    ) {

        alert(
            "Order form is incomplete."
        );

        return;

    }


    const productName =
        productNameElement.innerText;


    const quantity =
        quantityElement.value;


    const total =
        totalElement.innerText;


    const customerName =
        customerNameElement.value.trim();


    const customerPhone =
        customerPhoneElement.value.trim();


    const customerAddress =
        customerAddressElement.value.trim();


    const transactionId =
        transactionIdElement.value.trim();


    if (!customerName) {

        alert(
            "Please enter your name."
        );

        customerNameElement.focus();

        return;

    }


    if (!customerPhone) {

        alert(
            "Please enter your mobile number."
        );

        customerPhoneElement.focus();

        return;

    }


    if (!customerAddress) {

        alert(
            "Please enter your delivery address."
        );

        customerAddressElement.focus();

        return;

    }


    if (!transactionId) {

        alert(
            "Please enter your UPI Transaction ID / UTR number."
        );

        transactionIdElement.focus();

        return;

    }


    const message =

        `Hello ${businessName},\n\n` +

        `*NEW PREPAID ORDER*\n\n` +

        `Product: ${productName}\n` +

        `Quantity: ${quantity}\n` +

        `Total Amount: ${total}\n\n` +

        `Customer Name: ${customerName}\n` +

        `Mobile: ${customerPhone}\n` +

        `Delivery Address: ${customerAddress}\n\n` +

        `UPI ID Used: ${upiId}\n` +

        `Transaction / UTR Number: ${transactionId}\n\n` +

        `Payment Status: Prepaid - Please verify payment.`;


    const whatsappURL =

        `https://wa.me/${whatsappNumber}` +

        `?text=${encodeURIComponent(message)}`;


    alert(
        "Your order details are ready. WhatsApp will now open."
    );


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   PRODUCT DETAILS
   ===================================================== */

function displayProductDetails() {

    const container =
        document.getElementById(
            "productDetails"
        );


    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const product =
        getProductById(id);


    if (!product) {

        container.innerHTML =
            `<p>Product not found.</p>`;

        return;

    }


    container.innerHTML = `

        <div class="details-image">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        </div>


        <div class="details-info">

            <h1>
                ${product.name}
            </h1>


            <p class="details-price">
                ₹${product.price}
            </p>


            <span class="discount">
                ${product.discount}
            </span>


            <p class="details-description">
                ${product.description}
            </p>


            <div class="details-buttons">

                <button
                    class="cart-button"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>


                <button
                    class="wishlist-button"
                    onclick="addToWishlist(${product.id})"
                >
                    ❤️ Add to Wishlist
                </button>


                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >
                    <span class="whatsapp-icon">☎</span>
                    Ask on WhatsApp
                </button>


                <button
                    class="order-button large-order-button"
                    onclick="showOrderSection(${product.id})"
                >
                    ⚡ Order Now
                </button>

            </div>

        </div>

    `;


    if (
        params.get("order") === "true"
    ) {

        setTimeout(
            function() {

                showOrderSection(
                    product.id
                );

            },
            250
        );

    }

}


/* =====================================================
   SHOW ORDER SECTION
   ===================================================== */

function showOrderSection(id) {

    const product =
        getProductById(id);


    if (!product) return;


    const orderSection =
        document.getElementById(
            "orderSection"
        );


    if (!orderSection) return;


    const productName =
        document.getElementById(
            "orderProductName"
        );


    const priceElement =
        document.getElementById(
            "orderProductPrice"
        );


    const quantityElement =
        document.getElementById(
            "orderQuantity"
        );


    const totalElement =
        document.getElementById(
            "orderTotal"
        );


    if (
        !productName ||
        !priceElement ||
        !quantityElement ||
        !totalElement
    ) {

        return;

    }


    productName.innerText =
        product.name;


    priceElement.innerText =
        `₹${product.price}`;


    priceElement.dataset.price =
        product.price;


    quantityElement.value = 1;


    totalElement.innerText =
        `₹${product.price}`;


    /* Show order section */

    orderSection.style.display =
        "block";


    /* Smooth scroll */

    setTimeout(
        function() {

            orderSection.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        },
        100
    );

}


/* =====================================================
   LOGIN
   ===================================================== */

function setupLogin() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (!loginForm) return;


    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Demo login successful!"
            );

        }
    );

}


/* =====================================================
   PAGE TRANSITION
   ===================================================== */

function setupPageTransitions() {

    document.body.classList.add(
        "page-loaded"
    );

}


/* =====================================================
   HERO VIDEO
   ===================================================== */

function startHeroVideo() {

    const video =
        document.getElementById(
            "heroVideo"
        );


    if (!video) return;


    video.muted = true;


    video.setAttribute(
        "muted",
        ""
    );


    video.setAttribute(
        "playsinline",
        ""
    );


    video.setAttribute(
        "webkit-playsinline",
        ""
    );


    const playVideo =
        function() {

            const promise =
                video.play();


            if (
                promise !== undefined
            ) {

                promise.catch(
                    function() {}
                );

            }

        };


    if (
        video.readyState >= 2
    ) {

        playVideo();

    } else {

        video.addEventListener(
            "loadeddata",
            playVideo,
            {
                once: true
            }
        );

    }

}


/* =====================================================
   PAGE START
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProducts();

        displayCart();

        displayWishlist();

        updateCounts();

        setupLogin();

        displayProductDetails();

        setupPageTransitions();

        startHeroVideo();

    }
);
/* =====================================================
   RUP'S ART SUPPLY
   COMPLETE WEBSITE JAVASCRIPT
   CART + WISHLIST + PRODUCT DETAILS
   ORDER NOW + UPI + WHATSAPP + STOCK MANAGEMENT
   ===================================================== */


/* =====================================================
   BUSINESS SETTINGS
   ===================================================== */

const whatsappNumber = "7439436681";
const upiId = "7439436681@ybl";
const businessName = "Rup's Art Supply";


/* =====================================================
   PRODUCT LIST
   IMPORTANT: Change each stock value to your actual stock.
   ===================================================== */

const products = [

    {
        id: 1,
        name: "Remote control car",
        category: "toys",
        price: 199,
        stock: 10,
        discount: "10% OFF",
        image: "images/toys/toy1.png",
        description: "Fun and colorful toy for children."
    },
    {
        id: 2,
        name: "Unicon Box Set",
        category: "stationery",
        price: 120,
        stock: 10,
        discount: "5% OFF",
        image: "images/stationery/uni.png",
        description: "Cute unicon pencil box."
    },
    {
        id: 3,
        name: "Lion Printed Box",
        category: "stationery",
        price: 150,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/l.png",
        description: "Useful for school and daily work."
    },
    {
        id: 4,
        name: "LCD Panel",
        category: "stationery",
        price: 180,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/lcd.png",
        description: "Quality digital LCD board for students and artists."
    },
    {
        id: 5,
        name: "Glass Bottle",
        category: "gifts",
        price: 150,
        stock: 10,
        discount: "10% OFF",
        image: "images/gifts/lunch1.jpeg",
        description: "Beautiful gift item for your loved ones."
    },
    {
        id: 6,
        name: "Sports Car",
        category: "gifts",
        price: 250,
        stock: 10,
        discount: "15% OFF",
        image: "images/gifts/car.png",
        description: "Special gift for your kids."
    },
    {
        id: 7,
        name: "Piano",
        category: "gifts",
        price: 300,
        stock: 10,
        discount: "5% OFF",
        image: "images/gifts/p.png",
        description: "Melodious gift item."
    },
    {
        id: 8,
        name: "Educational",
        category: "toys",
        price: 150,
        stock: 10,
        discount: "10% OFF",
        image: "images/toys/bskit.jpeg",
        description: "Engineering tool kit."
    },
    {
        id: 9,
        name: "Big Train set",
        category: "toys",
        price: 90,
        stock: 10,
        discount: "10% OFF",
        image: "images/toys/btrain.jpeg",
        description: "Track Game."
    },
    {
        id: 10,
        name: "Ramp Car",
        category: "toys",
        price: 99,
        stock: 10,
        discount: "10% OFF",
        image: "images/toys/rampcar.jpeg",
        description: "Ramp car game set."
    },
    {
        id: 11,
        name: "Helicopter",
        category: "toys",
        price: 250,
        stock: 10,
        discount: "20% OFF",
        image: "images/toys/rheli.jpeg",
        description: "Remote control helicopter."
    },
    {
        id: 12,
        name: "Science Kit",
        category: "toys",
        price: 79,
        stock: 10,
        discount: "20% OFF",
        image: "images/toys/sskit.jpeg",
        description: "Engineering tool kit."
    },
    {
        id: 13,
        name: "Train set",
        category: "toys",
        price: 60,
        stock: 10,
        discount: "20% OFF",
        image: "images/toys/strain.jpeg",
        description: "Train set for children."
    },
    {
        id: 14,
        name: "Taxi",
        category: "toys",
        price: 230,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/taxi.jpeg",
        description: "Kolkata famous yellow taxi."
    },
    {
        id: 15,
        name: "DKit",
        category: "stationery",
        price: 20,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/dkit.jpeg",
        description: "Useful stationery kit for school and daily work."
    },
    {
        id: 16,
        name: "LCD Board",
        category: "stationery",
        price: 80,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/16.jpeg",
        description: "Useful stationery kit for school and daily work."
    },
    {
        id: 17,
        name: "Hello Kitty Gift Box",
        category: "stationery",
        price: 119,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/17.jpeg",
        description: "Hello kitty gift box."
    },
    {
        id: 18,
        name: "Cmel sketch pencil set",
        category: "stationery",
        price: 60,
        stock: 10,
        discount: "20% OFF",
        image: "images/stationery/18.jpeg",
        description: "Useful sketch pencil set."
    },
    {
        id: 19,
        name: "Blending Kit",
        category: "stationery",
        price: 50,
        stock: 10,
        discount: "5% OFF",
        image: "images/stationery/19.jpeg",
        description: "Useful blending kit."
    },
    {
        id: 20,
        name: "Doms My Pencil kit",
        category: "stationery",
        price: 15,
        stock: 10,
        discount: "19% OFF",
        image: "images/stationery/20.jpeg",
        description: "Useful pencil kit."
    },
    {
        id: 21,
        name: "All types of pen",
        category: "stationery",
        price: 0,
        stock: 0,
        discount: "10% OFF",
        image: "images/stationery/21.jpeg",
        description: "All types of pens."
    },
    {
        id: 22,
        name: "Stapler",
        category: "stationery",
        price: 50,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/22.jpeg",
        description: "Stapler for office use."
    },
    {
        id: 23,
        name: "Mechanical Pencil",
        category: "stationery",
        price: 15,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/23.jpeg",
        description: "Mechanical pencil for writing."
    },
    {
        id: 24,
        name: "Scratch Book",
        category: "stationery",
        price: 80,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/24.jpeg",
        description: "Scratch book for drawing and sketching."
    },
    {
        id: 25,
        name: " Camel 25shades colour",
        category: "stationery",
        price: 79,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/25.jpeg",
        description: "Camel 25shades colour."
    },
    {
        id: 26,
        name: "Camel 50shades colour",
        category: "stationery",
        price: 149,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/26.jpeg",
        description: "Camel 50shades colour."
    },
    {
        id: 27,
        name: "All birthday party items",
        category: "stationery",
        price: 200,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/27.jpeg",
        description: "All birthday party items."
    },
    {
        id: 28,
        name: "Sketch pen",
        category: "stationery",
        price: 15,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/28.jpeg",
        description: "Sketch pen for drawing."
    },
    {
        id: 29,
        name: "Doms Pencil colour",
        category: "stationery",
        price: 27,
        stock: 10,
        discount: "2% OFF",
        image: "images/stationery/29.jpeg",
        description: "Doms pencil color."
    },
    {
        id: 30,
        name: "Camel 15shades colour",
        category: "stationery",
        price: 49,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/30.jpeg",
        description: "Camel 15shades colour."
    },
    {
        id: 31,
        name: "Colour Palatte",
        category: "stationery",
        price: 35,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/31.jpeg",
        description: "Colour palette for artists."
    },
    {
        id: 32,
        name: "Doms Gift Set",
        category: "stationery",
        price: 49,
        stock: 10,
        discount: "10% OFF",
        image: "images/stationery/32.jpeg",
        description: "Doms gift set for art enthusiasts."
    },
    {
        id: 33,
        name: "Blocks",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/33.jpeg",
        description: "Colorful building blocks for children."
    },
    {
        id: 34,
        name: "Dot Gun",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/34.jpeg",
        description: "Colorful dot gun for children."
    },
    {
        id: 35,
        name: "Ball gun",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/35.jpeg",
        description: "Colorful ball gun for children."
    },
    {
        id: 36,
        name: "Toy Train",
        category: "toys",
        price: 49,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/36.jpeg",
        description: "Colorful toy train for children."
    },
    {
        id: 37,
        name: "Binooculars",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/37.jpeg",
        description: "Binooculars for children."
    },
    {
        id: 38,
        name: "Water Dispenser",
        category: "toys",
        price: 59,
        stock: 0,
        discount: "15% OFF",
        image: "images/toys/38.jpeg",
        description: "Designable water dispenser for children."
    },
    {
        id: 39,
        name: "Metal BackPush Car",
        category: "toys",
        price: 149,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/39.jpeg",
        description: "Colorful metal backpush car for children."
    },
    {
        id: 40,
        name: "YoYo",
        category: "toys",
        price: 79,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/40.jpeg",
        description: "Colorful yo-yo for children."
    },
    {
        id: 41,
        name: "Kitchen Set",
        category: "toys",
        price: 99,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/41.jpeg",
        description: "Black & White kitchen set for children."
    },
    {
        id: 42,
        name: "Rope Pull Car",
        category: "toys",
        price: 29,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/42.jpeg",
        description: " rope pull car for children."
    },
    {
        id: 43,
        name: "Auto Car",
        category: "toys",
        price: 89,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/43.jpeg",
        description: "Auto car for children."
    },
    {
        id: 44,
        name: "Mini Doctoer Set",
        category: "toys",
        price: 69,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/44.jpeg",
        description: "Mini doctor set for children."
    },
    {
        id: 45,
        name: "Big Doctor Set",
        category: "toys",
        price: 119,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/45.jpeg",
        description: "Big doctor set for children."
    },
    {
        id: 46,
        name: "JCB(Pull the rope)",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/46.jpeg",
        description: "JCB for children."
    },
    {
        id: 47,
        name: "Staring Video Game",
        category: "toys",
        price: 89,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/47.jpeg",
        description: "Staring video game for children(Available in different colors)."
    },
    {
        id: 48,
        name: "Tank",
        category: "toys",
        price: 99,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/48.jpeg",
        description: "Tank for children."
    },
    {
        id: 49,
        name: "Mobile Video Game",
        category: "toys",
        price: 49,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/49.jpeg",
        description: "Mobile video game for children."
    },
    {
        id: 50,
        name: "Jcb",
        category: "toys",
        price: 149,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/50.jpeg",
        description: "JCB for children."
    },
    {
        id: 51,
        name: "Small Fishing Game",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/51.jpeg",
        description: "Small fishing game for children."
    },
    {
        id: 52,
        name: "Cuute toy car",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/52.jpeg",
        description: "Cute toy car for children."
    },
    {
        id: 53,
        name: "Small blocks set ",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/53.jpeg",
        description: "Small blocks set for children."
    },
    {
        id: 54,
        name: "Shutter Gun",
        category: "toys",
        price: 49,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/54.jpeg",
        description: "Shutter gun for children."
    },
    {
        id: 55,
        name: "Bullet Train",
        category: "toys",
        price: 59,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/55.jpeg",
        description: "Bullet train for children."
    },
    {
        id: 56,
        name: "Big Blocks Set",
        category: "toys",
        price: 119,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/56.jpeg",
        description: "Big blocks set for children."
    },
    {
        id: 57,
        name: "Small JCB",
        category: "toys",
        price: 49,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/57.jpeg",
        description: "Small JCB for children."
    },
    {
        id: 58,
        name: "Cute barbie doll",
        category: "toys",
        price: 89,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/58.jpeg",
        description: "Cute barbie doll."
    },
    {
        id: 59,
        name: "Rope Pull Car",
        category: "toys",
        price: 49,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/59.jpeg",
        description: "Rope pull car for children."
    },
    {
        id: 60,
        name: "Black Die-cast Thar",
        category: "toys",
        price: 249,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/60.jpeg",
        description: "Black die-cast Thar(Light and Sound)."
    },
    {
        id: 61,
        name: "Laser Llight",
        category: "toys",
        price: 149,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/61.jpeg",
        description: "Laser Llight for children."
    },
    {
        id: 62,
        name: "Black Die-cast Bike",
        category: "toys",
        price: 149,
        stock: 10,
        discount: "15% OFF",
        image: "images/toys/62.jpeg",
        description: "Black die-cast bike(Available in 2 colors)."
    }

];
/* =====================================================
   STOCK MANAGEMENT
   ===================================================== */

function getProductStock(id) {
    const product = getProductById(id);

    if (!product) return 0;

    const stock = Number(product.stock);

    return Number.isFinite(stock) && stock > 0
        ? Math.floor(stock)
        : 0;
}


function isOutOfStock(id) {
    return getProductStock(id) <= 0;
}


function getStockLabel(id) {
    const stock = getProductStock(id);

    if (stock <= 0) {
        return "OUT OF STOCK";
    }

    if (stock <= 5) {
        return `Only ${stock} left`;
    }

    return `${stock} pieces available`;
}


function showOutOfStockAlert(id) {
    const product = getProductById(id);

    if (!product) return;

    alert(`${product.name} is currently out of stock.`);
}


function validateCartStock(cart) {
    let changed = false;

    const validCart = cart.filter(item => {
        const product = getProductById(item.id);

        if (!product) {
            changed = true;
            return false;
        }

        const stock = getProductStock(item.id);

        if (stock <= 0) {
            changed = true;
            return false;
        }

        if (item.quantity > stock) {
            item.quantity = stock;
            changed = true;
        }

        if (item.quantity < 1) {
            changed = true;
            return false;
        }

        return true;
    });

    if (changed) {
        localStorage.setItem("cart", JSON.stringify(validCart));
    }

    return validCart;
}


/* =====================================================
   CART
   ===================================================== */

function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (!Array.isArray(cart)) return [];

        return cart;
    } catch (error) {
        return [];
    }
}


function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounts();
}


function addToCart(id) {
    id = Number(id);

    const product = getProductById(id);

    if (!product) {
        alert("Product not found.");
        return;
    }

    const stock = getProductStock(id);

    if (stock <= 0) {
        showOutOfStockAlert(id);
        return;
    }

    let cart = getCart();

    const existingProduct = cart.find(
        item => Number(item.id) === id
    );

    if (existingProduct) {
        if (existingProduct.quantity >= stock) {
            alert(`Only ${stock} piece(s) of ${product.name} are available.`);
            return;
        }

        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    saveCart(cart);
    alert("Product added to cart!");
}


function removeFromCart(id) {
    id = Number(id);

    let cart = getCart();

    cart = cart.filter(
        item => Number(item.id) !== id
    );

    saveCart(cart);
    displayCart();
}


function changeQuantity(id, change) {
    id = Number(id);
    change = Number(change);

    let cart = getCart();

    const item = cart.find(
        item => Number(item.id) === id
    );

    if (!item) return;

    const product = getProductById(id);

    if (!product) {
        removeFromCart(id);
        return;
    }

    const newQuantity = item.quantity + change;
    const stock = getProductStock(id);

    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }

    if (newQuantity > stock) {
        alert(`Only ${stock} piece(s) of ${product.name} are available.`);
        return;
    }

    item.quantity = newQuantity;

    saveCart(cart);
    displayCart();
}


/* =====================================================
   WISHLIST
   ===================================================== */

function getWishlist() {
    try {
        const wishlist = JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

        return Array.isArray(wishlist) ? wishlist : [];
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

    const product = getProductById(id);

    if (!product) return;

    const wishlist = getWishlist();

    if (!wishlist.includes(id)) {
        wishlist.push(id);
        saveWishlist(wishlist);

        alert("Product added to wishlist!");
    } else {
        alert("Product is already in your wishlist.");
    }
}


function removeFromWishlist(id) {
    id = Number(id);

    let wishlist = getWishlist();

    wishlist = wishlist.filter(
        item => Number(item) !== id
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
        `Stock status: ${getStockLabel(id)}\n\n` +
        `Please share more details.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}` +
        `?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(productList) {
    const container = document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";

    if (!productList || productList.length === 0) {
        container.innerHTML =
            `<p class="no-products">No products found.</p>`;

        return;
    }

    productList.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        const outOfStock = isOutOfStock(product.id);
        const stockLabel = getStockLabel(product.id);

        card.innerHTML = `
            <div class="product-image-box"
                 style="position:relative;">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    style="${outOfStock
                        ? "filter:blur(3px);opacity:0.45;"
                        : ""}"
                >

                ${outOfStock ? `
                    <div style="
                        position:absolute;
                        inset:0;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        background:rgba(255,255,255,0.35);
                        color:#dc2626;
                        font-weight:bold;
                        font-size:18px;
                        text-align:center;
                    ">
                        OUT OF STOCK
                    </div>
                ` : ""}
            </div>

            <h3>${product.name}</h3>

            <p class="product-description">
                ${product.description}
            </p>

            <p class="product-price">
                ₹${product.price}
            </p>

            <span class="discount">
                ${product.discount}
            </span>

            <p style="
                font-size:13px;
                margin:8px 0;
                color:${outOfStock ? "#dc2626" : "#15803d"};
                font-weight:bold;
            ">
                ${stockLabel}
            </p>

            <div class="product-buttons">

                <button
                    class="cart-button"
                    ${outOfStock ? "disabled" : ""}
                    style="${outOfStock
                        ? "opacity:0.5;cursor:not-allowed;"
                        : ""}"
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
                    ${outOfStock ? "disabled" : ""}
                    style="${outOfStock
                        ? "opacity:0.5;cursor:not-allowed;"
                        : ""}"
                    onclick="event.stopPropagation(); openOrderPage(${product.id})"
                >
                    ⚡ ${outOfStock ? "Out of Stock" : "Order Now"}
                </button>

            </div>
        `;

        card.addEventListener("click", function () {
            window.location.href =
                `product-details.html?id=${product.id}`;
        });

        container.appendChild(card);
    });
}


/* =====================================================
   LOAD PRODUCTS AND SEARCH
   ===================================================== */

function loadProducts() {
    const params = new URLSearchParams(
        window.location.search
    );

    const category = params.get("category");
    const search = params.get("search");

    let productList = [...products];

    if (category) {
        productList = productList.filter(
            product => product.category === category
        );
    }

    if (search) {
        const searchText = search.toLowerCase();

        productList = productList.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
        );
    }

    displayProducts(productList);
}
/* =====================================================
   CART DISPLAY
   ===================================================== */

function displayCart() {
    const container = document.getElementById("cartContainer");

    if (!container) return;

    const cart = validateCartStock(getCart());

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML =
            `<p class="empty-message">Your cart is empty.</p>`;

        const total = document.getElementById("cartTotal");

        if (total) total.innerText = "₹0";

        return;
    }

    let totalAmount = 0;

    cart.forEach(item => {
        const product = getProductById(item.id);

        if (!product) return;

        const itemTotal = product.price * item.quantity;
        totalAmount += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="cart-info">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <p>${getStockLabel(product.id)}</p>

                <div class="quantity-controls">
                    <button onclick="changeQuantity(${product.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                        ${item.quantity >= getProductStock(product.id) ? "disabled" : ""}
                    >+</button>
                </div>

                <p>Item Total: ₹${itemTotal}</p>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${product.id})"
                >Remove</button>

                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >
                    ☎ Ask on WhatsApp
                </button>
            </div>
        `;

        container.appendChild(cartItem);
    });

    const totalElement = document.getElementById("cartTotal");

    if (totalElement) {
        totalElement.innerText = `₹${totalAmount}`;
    }
}


/* =====================================================
   WISHLIST DISPLAY
   ===================================================== */

function displayWishlist() {
    const container = document.getElementById("wishlistContainer");

    if (!container) return;

    const wishlist = getWishlist();

    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML =
            `<p class="empty-message">Your wishlist is empty.</p>`;
        return;
    }

    wishlist.forEach(id => {
        const product = getProductById(id);

        if (!product) return;

        const outOfStock = isOutOfStock(product.id);

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image-box" style="position:relative;">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    style="${outOfStock ? "filter:blur(3px);opacity:0.45;" : ""}"
                >

                ${outOfStock ? `
                    <div style="
                        position:absolute;
                        inset:0;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        color:#dc2626;
                        font-weight:bold;
                    ">OUT OF STOCK</div>
                ` : ""}
            </div>

            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">₹${product.price}</p>
            <p>${getStockLabel(product.id)}</p>

            <div class="product-buttons">
                <button
                    class="cart-button"
                    ${outOfStock ? "disabled" : ""}
                    onclick="addToCart(${product.id})"
                >🛒 Add to Cart</button>

                <button
                    class="remove-button"
                    onclick="removeFromWishlist(${product.id})"
                >Remove</button>

                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >☎ WhatsApp</button>

                <button
                    class="order-button"
                    ${outOfStock ? "disabled" : ""}
                    onclick="openOrderPage(${product.id})"
                >⚡ Order Now</button>
            </div>
        `;

        container.appendChild(card);
    });
}


/* =====================================================
   CART AND WISHLIST COUNTERS
   ===================================================== */

function updateCounts() {
    const cart = getCart();
    const wishlist = getWishlist();

    const cartCount = document.getElementById("cartCount");
    const wishlistCount = document.getElementById("wishlistCount");

    if (cartCount) {
        const count = cart.reduce(
            (total, item) => total + Number(item.quantity || 0),
            0
        );

        cartCount.innerText = count;
    }

    if (wishlistCount) {
        wishlistCount.innerText = wishlist.length;
    }
}


/* =====================================================
   CHECKOUT
   ===================================================== */

function checkout() {
    const cart = validateCartStock(getCart());

    if (cart.length === 0) {
        alert("Your cart is empty.");
        displayCart();
        return;
    }

    window.location.href = "product-details.html";
}


/* =====================================================
   ORDER NOW
   ===================================================== */

function openOrderPage(id) {
    id = Number(id);

    if (!getProductById(id)) {
        alert("Product not found.");
        return;
    }

    if (isOutOfStock(id)) {
        showOutOfStockAlert(id);
        return;
    }

    window.location.href =
        `product-details.html?id=${id}&order=true`;
}


/* =====================================================
   ORDER TOTAL
   ===================================================== */

function calculateOrderTotal() {
    const priceElement = document.getElementById("orderProductPrice");
    const quantityElement = document.getElementById("orderQuantity");
    const totalElement = document.getElementById("orderTotal");

    if (!priceElement || !quantityElement || !totalElement) {
        return;
    }

    const price = Number(priceElement.dataset.price);
    const productId = Number(priceElement.dataset.productId);
    const stock = getProductStock(productId);

    let quantity = Number(quantityElement.value);

    if (!Number.isFinite(quantity) || quantity < 1) {
        quantity = 1;
    }

    if (stock > 0 && quantity > stock) {
        quantity = stock;
        alert(`Only ${stock} piece(s) are available.`);
    }

    if (stock <= 0) {
        quantity = 1;
    }

    quantityElement.value = quantity;
    quantityElement.max = Math.max(stock, 1);

    totalElement.innerText = `₹${price * quantity}`;
}


/* =====================================================
   INCREASE ORDER QUANTITY
   ===================================================== */

function increaseOrderQuantity() {
    const quantityElement = document.getElementById("orderQuantity");
    const priceElement = document.getElementById("orderProductPrice");

    if (!quantityElement || !priceElement) return;

    const productId = Number(priceElement.dataset.productId);
    const stock = getProductStock(productId);
    const currentQuantity = Number(quantityElement.value) || 1;

    if (stock <= 0) {
        showOutOfStockAlert(productId);
        return;
    }

    if (currentQuantity >= stock) {
        alert(`Only ${stock} piece(s) are available.`);
        return;
    }

    quantityElement.value = currentQuantity + 1;
    calculateOrderTotal();
}


/* =====================================================
   DECREASE ORDER QUANTITY
   ===================================================== */

function decreaseOrderQuantity() {
    const quantityElement = document.getElementById("orderQuantity");

    if (!quantityElement) return;

    const currentQuantity = Number(quantityElement.value) || 1;

    quantityElement.value = Math.max(1, currentQuantity - 1);

    calculateOrderTotal();
}


/* =====================================================
   UPI PAYMENT
   ===================================================== */

function payUsingUPI() {
    const productNameElement = document.getElementById("orderProductName");
    const quantityElement = document.getElementById("orderQuantity");
    const totalElement = document.getElementById("orderTotal");
    const priceElement = document.getElementById("orderProductPrice");

    if (!productNameElement || !quantityElement ||
        !totalElement || !priceElement) {
        alert("Order form is incomplete.");
        return;
    }

    const productId = Number(priceElement.dataset.productId);
    const stock = getProductStock(productId);
    const quantity = Number(quantityElement.value);

    if (stock <= 0 || quantity < 1 || quantity > stock) {
        alert("The requested quantity is not available.");
        return;
    }

    const productName = productNameElement.innerText;
    const amount = Number(totalElement.innerText.replace("₹", "").trim());

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please check the order amount.");
        return;
    }

    const upiURL =
        `upi://pay` +
        `?pa=${encodeURIComponent(upiId)}` +
        `&pn=${encodeURIComponent(businessName)}` +
        `&am=${encodeURIComponent(amount.toFixed(2))}` +
        `&cu=INR` +
        `&tn=${encodeURIComponent("Order - " + productName)}`;

    window.location.href = upiURL;
}


/* =====================================================
   PLACE ORDER THROUGH WHATSAPP
   ===================================================== */

function placeOrder() {
    const productNameElement = document.getElementById("orderProductName");
    const quantityElement = document.getElementById("orderQuantity");
    const totalElement = document.getElementById("orderTotal");
    const priceElement = document.getElementById("orderProductPrice");

    const customerNameElement = document.getElementById("customerName");
    const customerPhoneElement = document.getElementById("customerPhone");
    const customerAddressElement = document.getElementById("customerAddress");
    const transactionIdElement = document.getElementById("transactionId");

    if (
        !productNameElement ||
        !quantityElement ||
        !totalElement ||
        !priceElement ||
        !customerNameElement ||
        !customerPhoneElement ||
        !customerAddressElement ||
        !transactionIdElement
    ) {
        alert("Order form is incomplete.");
        return;
    }

    const productId = Number(priceElement.dataset.productId);
    const product = getProductById(productId);
    const quantity = Number(quantityElement.value);
    const stock = getProductStock(productId);

    if (!product || stock <= 0 || quantity < 1 || quantity > stock) {
        alert("Sorry, the requested quantity is not available.");
        return;
    }

    const customerName = customerNameElement.value.trim();
    const customerPhone = customerPhoneElement.value.trim();
    const customerAddress = customerAddressElement.value.trim();
    const transactionId = transactionIdElement.value.trim();

    if (!customerName) {
        alert("Please enter your name.");
        customerNameElement.focus();
        return;
    }

    if (!/^[0-9]{10}$/.test(customerPhone)) {
        alert("Please enter a valid 10-digit mobile number.");
        customerPhoneElement.focus();
        return;
    }

    if (!customerAddress) {
        alert("Please enter your delivery address.");
        customerAddressElement.focus();
        return;
    }

    if (!transactionId) {
        alert("Please enter your UPI Transaction ID / UTR number.");
        transactionIdElement.focus();
        return;
    }

    const message =
        `Hello ${businessName},\n\n` +
        `*NEW PREPAID ORDER*\n\n` +
        `Product: ${product.name}\n` +
        `Quantity: ${quantity}\n` +
        `Total Amount: ${totalElement.innerText}\n\n` +
        `Customer Name: ${customerName}\n` +
        `Mobile: ${customerPhone}\n` +
        `Delivery Address: ${customerAddress}\n\n` +
        `UPI ID Used: ${upiId}\n` +
        `Transaction / UTR Number: ${transactionId}\n\n` +
        `Payment Status: Prepaid - Please verify payment.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    alert("Your order details are ready. WhatsApp will now open.");

    window.open(whatsappURL, "_blank");
}


/* =====================================================
   PRODUCT DETAILS
   ===================================================== */

function displayProductDetails() {
    const container = document.getElementById("productDetails");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const product = getProductById(id);

    if (!product) {
        container.innerHTML = "<p>Product not found.</p>";
        return;
    }

    const outOfStock = isOutOfStock(product.id);

    container.innerHTML = `
        <div class="details-image" style="position:relative;">
            <img
                src="${product.image}"
                alt="${product.name}"
                style="${outOfStock ? "filter:blur(3px);opacity:0.45;" : ""}"
            >

            ${outOfStock ? `
                <div style="
                    position:absolute;
                    inset:0;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#dc2626;
                    font-weight:bold;
                    font-size:20px;
                ">OUT OF STOCK</div>
            ` : ""}
        </div>

        <div class="details-info">
            <h1>${product.name}</h1>
            <p class="details-price">₹${product.price}</p>
            <span class="discount">${product.discount}</span>

            <p class="details-description">${product.description}</p>

            <p style="
                color:${outOfStock ? "#dc2626" : "#15803d"};
                font-weight:bold;
                margin:10px 0;
            ">${getStockLabel(product.id)}</p>

            <div class="details-buttons">
                <button
                    class="cart-button"
                    ${outOfStock ? "disabled" : ""}
                    onclick="addToCart(${product.id})"
                >🛒 Add to Cart</button>

                <button
                    class="wishlist-button"
                    onclick="addToWishlist(${product.id})"
                >❤️ Add to Wishlist</button>

                <button
                    class="whatsapp-button"
                    onclick="contactOnWhatsApp(${product.id})"
                >☎ Ask on WhatsApp</button>

                <button
                    class="order-button large-order-button"
                    ${outOfStock ? "disabled" : ""}
                    onclick="showOrderSection(${product.id})"
                >⚡ ${outOfStock ? "Out of Stock" : "Order Now"}</button>
            </div>
        </div>
    `;

    if (params.get("order") === "true" && !outOfStock) {
        setTimeout(function () {
            showOrderSection(product.id);
        }, 250);
    }
}


/* =====================================================
   SHOW ORDER SECTION
   ===================================================== */

function showOrderSection(id) {
    const product = getProductById(id);

    if (!product) return;

    if (isOutOfStock(id)) {
        showOutOfStockAlert(id);
        return;
    }

    const orderSection = document.getElementById("orderSection");
    const productName = document.getElementById("orderProductName");
    const priceElement = document.getElementById("orderProductPrice");
    const quantityElement = document.getElementById("orderQuantity");
    const totalElement = document.getElementById("orderTotal");

    if (
        !orderSection ||
        !productName ||
        !priceElement ||
        !quantityElement ||
        !totalElement
    ) {
        alert("Order form is incomplete. Please check product-details.html.");
        return;
    }

    productName.innerText = product.name;

    priceElement.innerText = `₹${product.price}`;
    priceElement.dataset.price = product.price;
    priceElement.dataset.productId = product.id;

    quantityElement.min = 1;
    quantityElement.max = getProductStock(product.id);
    quantityElement.value = 1;

    totalElement.innerText = `₹${product.price}`;

    orderSection.style.display = "block";

    orderSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =====================================================
   LOGIN
   ===================================================== */

function setupLogin() {
    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Demo login successful!");
    });
}


/* =====================================================
   PAGE TRANSITION
   ===================================================== */

function setupPageTransitions() {
    document.body.classList.add("page-loaded");
}


/* =====================================================
   HERO VIDEO
   ===================================================== */

function startHeroVideo() {
    const video = document.getElementById("heroVideo");

    if (!video) return;

    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    function playVideo() {
        const promise = video.play();

        if (promise !== undefined) {
            promise.catch(function () {
                // The browser may block autoplay.
            });
        }
    }

    if (video.readyState >= 2) {
        playVideo();
    } else {
        video.addEventListener("loadeddata", playVideo, {
            once: true
        });
    }
}


/* =====================================================
   PAGE START
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();

    displayCart();
    displayWishlist();
    updateCounts();

    setupLogin();
    displayProductDetails();
    setupPageTransitions();
    startHeroVideo();

    const quantityElement = document.getElementById("orderQuantity");

    if (quantityElement) {
        quantityElement.addEventListener("input", calculateOrderTotal);
        quantityElement.addEventListener("change", calculateOrderTotal);
    }
});
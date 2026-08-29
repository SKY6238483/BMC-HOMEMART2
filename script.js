/* =========================================================
   BMC HOMEMART
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   CART SYSTEM
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("bmcCart")
    ) || [];


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "bmcCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(
    name,
    price,
    category
) {

    const existing =
        cart.find(
            item =>
                item.name === name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: Number(price),

            category: category,

            quantity: 1

        });

    }


    saveCart();


    alert(
        name +
        " ถูกเพิ่มลงในตะกร้าแล้ว"
    );

}


/* =========================================================
   UPDATE CART COUNT
========================================================= */

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );


    const element =
        document.getElementById(
            "cartCount"
        );


    if (element) {

        element.textContent = count;

    }

}


/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {

        return;

    }


    cart.splice(index, 1);

    saveCart();

    renderCart();

}


/* =========================================================
   CHANGE CART QUANTITY
========================================================= */

function changeQuantity(
    index,
    change
) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity += change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(index, 1);

    }


    saveCart();

    renderCart();

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) {
        return;
    }


    /* EMPTY */

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="cart-empty">

                <h3>
                    ยังไม่มีสินค้าในตะกร้า
                </h3>

                <p>
                    เลือกสินค้าที่ต้องการ
                    เพื่อขอใบเสนอราคา
                </p>

                <a
                    href="products.html"
                    class="btn btn-gold">

                    เลือกชมสินค้า

                </a>

            </div>

        `;

        return;

    }


    let total = 0;


    container.innerHTML =

        cart.map(
            (item, index) => {

                const price =
                    Number(item.price || 0);


                const quantity =
                    Number(
                        item.quantity || 1
                    );


                const subtotal =
                    price * quantity;


                total += subtotal;


                return `

                    <div class="cart-item">

                        <div class="cart-item-info">

                            <small>
                                ${item.category || ""}
                            </small>

                            <strong>
                                ${item.name}
                            </strong>

                            <p>
                                ${price.toLocaleString()}
                                บาท / รายการ
                            </p>

                        </div>


                        <div class="cart-item-control">

                            <div class="quantity-control">

                                <button
                                    onclick="changeQuantity(${index}, -1)">
                                    −
                                </button>

                                <span>
                                    ${quantity}
                                </span>

                                <button
                                    onclick="changeQuantity(${index}, 1)">
                                    +
                                </button>

                            </div>


                            <strong class="cart-subtotal">

                                ${subtotal.toLocaleString()}
                                บาท

                            </strong>


                            <button
                                class="remove-cart"
                                onclick="removeFromCart(${index})">

                                ลบ

                            </button>

                        </div>

                    </div>

                `;

            }
        ).join("");


    container.innerHTML += `

        <div class="cart-total">

            <span>
                ยอดรวมโดยประมาณ
            </span>

            <strong>
                ${total.toLocaleString()}
                บาท
            </strong>

        </div>

        <p class="cart-note">

            * ราคานี้เป็นราคาเบื้องต้น
            ทีมงาน BMC HOMEMART
            จะยืนยันราคาอีกครั้ง

        </p>

    `;

}


/* =========================================================
   QUOTATION
========================================================= */

function submitQuote() {

    const name =
        document.getElementById(
            "customerName"
        )?.value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        )?.value.trim();


    const email =
        document.getElementById(
            "customerEmail"
        )?.value.trim();


    const message =
        document.getElementById(
            "customerMessage"
        )?.value.trim();


    if (!name || !phone) {

        alert(
            "กรุณากรอกชื่อและเบอร์โทรศัพท์"
        );

        return;

    }


    if (cart.length === 0) {

        alert(
            "กรุณาเลือกสินค้าก่อนส่งใบเสนอราคา"
        );

        return;

    }


    console.log(
        "Quotation:",
        {
            name,
            phone,
            email,
            message,
            cart
        }
    );


    alert(
        "ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว\n\n" +
        "ทีมงาน BMC HOMEMART จะติดต่อกลับ"
    );


    cart = [];

    saveCart();

    renderCart();


    const formFields = [
        "customerName",
        "customerPhone",
        "customerEmail",
        "customerMessage"
    ];


    formFields.forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {

            element.value = "";

        }

    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const nav =
        document.getElementById(
            "navMenu"
        );


    if (!nav) {
        return;
    }


    nav.classList.toggle("show");

}


/* =========================================================
   CATEGORY FROM HOMEPAGE
========================================================= */

function initCategoryFilter() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get("category");


    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    if (
        category &&
        categoryFilter
    ) {

        categoryFilter.value =
            category;

        filterProducts();

    }

}


/* =========================================================
   SEARCH FROM HEADER
========================================================= */

function initSearchPage() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const searchMode =
        params.get("search");


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (
        searchMode === "true" &&
        searchInput
    ) {

        searchInput.focus();

    }

}

/* =========================================================
   PRODUCT FILTER & SEARCH
========================================================= */

/* =========================================================
   PRODUCT FILTER & SEARCH
========================================================= */

function filterProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const productCards =
        document.querySelectorAll(".product-card");

    const noProducts =
        document.getElementById("noProducts");


    /* ถ้าไม่ใช่หน้าสินค้า ให้จบการทำงาน */

    if (!productCards.length) {
        return;
    }


    /* ==========================================
       ค่าที่พิมพ์ในช่องค้นหา
    ========================================== */

    const searchText =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    /* ==========================================
       หมวดหมู่ที่เลือก
    ========================================== */

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    let visibleProducts = 0;


    /* ==========================================
       ตรวจสอบสินค้าทุกตัว
    ========================================== */

    productCards.forEach(function(card) {


        /* -------------------------------
           ชื่อสินค้า
        -------------------------------- */

        const productName =
            (
                card.dataset.name ||
                card.querySelector("h3")?.textContent ||
                ""
            )
            .trim()
            .toLowerCase();


        /* -------------------------------
           หมวดหมู่
        -------------------------------- */

        const productCategory =
            (
                card.dataset.category ||
                ""
            )
            .trim()
            .toLowerCase();


        /* -------------------------------
           ข้อมูลทั้งหมดของสินค้า
        -------------------------------- */

        const productText =
            card.textContent
                .trim()
                .toLowerCase();


        /* ==================================
           ตรวจสอบการค้นหา
        ================================== */

        const matchSearch =
            searchText === "" ||
            productName.includes(searchText) ||
            productText.includes(searchText);


        /* ==================================
           ตรวจสอบหมวดหมู่
        ================================== */

        const matchCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        /* ==================================
           แสดง / ซ่อนสินค้า
        ================================== */

        if (
            matchSearch &&
            matchCategory
        ) {

            card.style.display = "";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    /* ==========================================
       แสดงข้อความเมื่อไม่พบสินค้า
    ========================================== */

    if (noProducts) {

        if (visibleProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }

    }

}

/* =========================================================
   RESET PRODUCT FILTER
========================================================= */

function resetProductFilter() {

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");


    if (searchInput) {

        searchInput.value = "";

    }


    if (categoryFilter) {

        categoryFilter.value = "all";

    }


    filterProducts();

}


/* =========================================================
   PRODUCT DETAIL DATA
========================================================= */

const productDetails = {


    /* =====================================================
       WHITE CARRARA
    ===================================================== */

    "white-carrara": {

        name: "White Carrara Marble",

        category: "หินอ่อน",

        categoryCode: "marble",

        price: 1850,
        unit : "/ตร.ม",

        description:
            "หินอ่อนสีขาวจากธรรมชาติ " +
            "มีลวดลายเส้นสีเทาอ่อน " +
            "ให้ความรู้สึกหรูหราและสะอาดตา " +
            "เหมาะสำหรับงานพื้น ผนัง เคาน์เตอร์ " +
            "และงานตกแต่งภายใน",

        images: [

            "image/carrara-white.jpg",
            "image/carrara-white-2.jpg",
            "image/carrara-white-3.jpg",
            "image/carrara-white-4.jpg"

        ]

    },


    /* =====================================================
       NERO MARQUINA
    ===================================================== */
 "nero-marquina": {

        name: "Nero Marquina",

        category: "หินอ่อน",

        categoryCode: "marble",

        price: 2450,

        description:

            "หินอ่อนสีดำพร้อมลายเส้นสีขาว " +

            "ให้ความรู้สึกหรูหราและโดดเด่น " +

            "เหมาะสำหรับงานพื้น ผนัง เคาน์เตอร์ " +

            "และงานตกแต่งภายใน",

        images: [

            "image/MARQUINA-NERO.jpg",

            "image/MARQUINA-NERO-2.jpg",

            "image/MARQUINA-NERO-3.jpg",

            "image/MARQUINA-NERO-4.jpg"

        ]

    },

    /* =====================================================

       BLACK GALAXY

    ===================================================== */

    "black-galaxy": {

        name: "Black Galaxy Granite",

        category: "หินแกรนิต",

        categoryCode: "granite",

        price: 1950,

        description:

            "หินแกรนิตสีดำ " +

            "มีลวดลายประกายธรรมชาติ " +

            "แข็งแรงและทนทาน " +

            "เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง " +

            "และงานตกแต่ง",

        images: [

            "image/black-galaxy-granite.jpg",

            "image/black-galaxy-granite-2.jpg",

            "image/black-galaxy-granite-3.jpg",

            "image/black-galaxy-granite-4.jpg"

        ]

    },

    /* =====================================================

       OAK ENGINEERED

    ===================================================== */

    "oak-engineered": {

        name: "Oak Engineered Flooring",

        category: "พื้นไม้",

        categoryCode: "flooring",

        price: 1290,

        description:

            "พื้นไม้ Engineered โทนสีธรรมชาติ " +

            "ให้ความรู้สึกอบอุ่นและทันสมัย " +

            "เหมาะสำหรับบ้านพักอาศัย " +

            "และงานตกแต่งภายใน",

        images: [

            "image/oak-engineer.jpg",

            "image/oak-engineer-2.jpg",

            "image/oak-engineer-3.jpg",

            "image/oak-engineer-4.jpg"

        ]

    },

    /* =====================================================

       PVC WALL

    ===================================================== */

    "wood-pvc": {

        name: "Wood PVC Wall",

        category: "ไม้ PVC",

        categoryCode: "pvc",

        price: 590,

        description:

            "วัสดุตกแต่งผนังลายไม้ PVC " +

            "ดูแลรักษาง่าย น้ำหนักเบา " +

            "เหมาะสำหรับงานตกแต่งภายใน",

        images: [

            "image/PVC-wall.jpeg",

            "image/PVC-wall-2.jpg",

            "image/PVC-wall-3.jpg",

            "image/PVC-wall-4.jpg"

        ]

    },

    /* =====================================================

       MODERN DOOR

    ===================================================== */

    "modern-door": {

        name: "Modern Wooden Door",

        category: "ประตู",

        categoryCode: "door",

        price: 8900,

        description:

            "ประตูไม้ดีไซน์ Modern " +

            "เหมาะสำหรับบ้านพักอาศัยและโครงการ " +

            "ช่วยเพิ่มความสวยงามให้กับพื้นที่",

        images: [

            "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=85"

        ]

    }

};

/* =========================================================

   OPEN PRODUCT DETAIL

========================================================= */

function openProductDetail(productId) {

    window.location.href =

        "product-detail.html?id=" +

        encodeURIComponent(productId);

}

/* =========================================================

   RENDER PRODUCT DETAIL

========================================================= */

function renderProductDetail() {

    const container =

        document.getElementById(

            "productDetail"

        );

    if (!container) {

        return;

    }

    const params =

        new URLSearchParams(

            window.location.search

        );

    const productId =

        params.get("id");

    const product =

        productDetails[productId];

    if (!product) {

        container.innerHTML = `

            <div class="product-not-found">

                <h2>

                    ไม่พบสินค้านี้

                </h2>

                <p>

                    กรุณากลับไปเลือกสินค้าจากหน้าสินค้า

                </p>

                <a

                    href="products.html"

                    class="btn btn-gold">

                    กลับไปหน้าสินค้า

                </a>

            </div>

        `;

        return;

    }

    container.innerHTML = `

        <div class="product-detail-grid">

            <!-- ==========================================

                 IMAGES

            =========================================== -->

            <div class="product-detail-images">

                <!-- รูปใหญ่ -->

                <div

                    class="main-product-image"

                    onclick="openMainProductImage()">

                    <img

                        id="mainProductImage"

                        src="${product.images[0]}"

                        alt="${product.name}">

                </div>

                <!-- รูปย่อย -->

                <div class="product-thumbnails">

                    ${product.images.map(

                        (image, index) => `

                            <img

                                src="${image}"

                                alt="${product.name} รูปที่ ${index + 1}"

                                class="${index === 0 ? "active" : ""}"

                                onclick="changeProductImage('${image}', this)">

                        `

                    ).join("")}

                </div>

            </div>

            <!-- ==========================================

                 INFORMATION

            =========================================== -->

            <div class="product-detail-info">

                <div class="product-category">

                    ${product.category}

                </div>

                <h1>

                    ${product.name}

                </h1>

                <p class="product-detail-description">

                    ${product.description}

                </p>

                <div class="product-detail-price">

                    ${product.price.toLocaleString()} / ${product.quantity}

                    /ตร.ม.

                </div>

                <button

                    class="btn btn-gold product-add-btn"

                    onclick="addToCart(

                        '${product.name}',

                        ${product.price},

                        '${product.category}'

                    )">

                    🛒 เพิ่มลงตะกร้า

                </button>

                <a

                    href="cart.html"

                    class="btn btn-dark">

                    ไปที่ตะกร้าสินค้า

                </a>

                <a

                    href="products.html"

                    class="back-products">

                    ← กลับไปหน้าสินค้า

                </a>

            </div>

        </div>

    `;

}

/* =========================================================

   CHANGE PRODUCT IMAGE

========================================================= */

function changeProductImage(

    image,

    thumbnail

) {

    const mainImage =

        document.getElementById(

            "mainProductImage"

        );

    if (!mainImage) {

        return;

    }

    /* เปลี่ยนรูปในกรอบใหญ่ */

    mainImage.src = image;

    /* เปลี่ยนรูป Active */

    const thumbnails =

        document.querySelectorAll(

            ".product-thumbnails img"

        );

    thumbnails.forEach(

        item => {

            item.classList.remove(

                "active"

            );

        }

    );

    if (thumbnail) {

        thumbnail.classList.add(

            "active"

        );

    }

}

/* =========================================================

   OPEN CURRENT MAIN PRODUCT IMAGE

========================================================= */

function openMainProductImage() {

    const mainImage =

        document.getElementById(

            "mainProductImage"

        );

    if (!mainImage) {

        return;

    }

    /* เปิดรูปที่กำลังแสดงอยู่ */

    openImage(

        mainImage.src,

        mainImage.alt

    );

}

/* =========================================================

   OPEN LIGHTBOX

========================================================= */

function openImage(

    src,

    alt = ""

) {

    const lightbox =

        document.getElementById(

            "productImageLightbox"

        );

    const image =

        document.getElementById(

            "lightboxProductImage"

        );

    if (

        !lightbox ||

        !image

    ) {

        return;

    }

    image.src = src;

    image.alt = alt;

    lightbox.classList.add(

        "active"

    );

}

/* =========================================================

   CLOSE LIGHTBOX

========================================================= */

function closeImage() {

    const lightbox =

        document.getElementById(

            "productImageLightbox"

        );

    if (!lightbox) {

        return;

    }

    lightbox.classList.remove(

        "active"

    );

}

/* =========================================================

   CLOSE LIGHTBOX WHEN CLICK BACKGROUND

========================================================= */

document.addEventListener(

    "click",

    function (event) {

        const lightbox =

            document.getElementById(

                "productImageLightbox"

            );

        if (!lightbox) {

            return;

        }

        if (

            event.target === lightbox

        ) {

            closeImage();

        }

    }

);

/* =========================================================

   ESC TO CLOSE LIGHTBOX

================================================================================================================ */

document.addEventListener(

    "keydown",

    function (event) {

        if (

            event.key === "Escape"

        ) {

            closeImage();

        }

    }

);

/* =========================================================

   HERO SLIDER

========================================================= */

function initHeroSlider() {

    const track =

        document.getElementById(

            "heroTrack"

        );

    const slides =

        document.querySelectorAll(

            ".hero-slide"

        );

    const prevButton =

        document.getElementById(

            "heroPrev"

        );

    const nextButton =

        document.getElementById(

            "heroNext"

        );

    const dotsContainer =

        document.getElementById(

            "sliderDots"

        );

    if (

        !track ||

        slides.length === 0

    ) {

        return;

    }

    let currentSlide = 0;

    const totalSlides =

        slides.length;

    let autoSlide;

    /* CREATE DOTS */

    if (dotsContainer) {

        dotsContainer.innerHTML = "";

        slides.forEach(

            (slide, index) => {

                const dot =

                    document.createElement(

                        "button"

                    );

                dot.className =

                    "slider-dot";

                dot.setAttribute(

                    "aria-label",

                    "ไปยังภาพที่ " +

                    (index + 1)

                );

                dot.addEventListener(

                    "click",

                    function () {

                        goToSlide(index);

                        restartAutoSlide();

                    }

                );

                dotsContainer.appendChild(

                    dot

                );

            }

        );

    }

    const dots =

        document.querySelectorAll(

            ".slider-dot"

        );

    /* GO TO SLIDE */

    function goToSlide(index) {

        currentSlide = index;

        track.style.transform =

            `translateX(-${currentSlide * 100}%)`;

        dots.forEach(

            (dot, dotIndex) => {

                dot.classList.toggle(

                    "active",

                    dotIndex === currentSlide

                );

            }

        );

    }

    /* NEXT */

    function nextSlide() {

        currentSlide++;

        if (

            currentSlide >=

            totalSlides

        ) {

            currentSlide = 0;

        }

        goToSlide(

            currentSlide

        );

    }

    /* PREVIOUS */

    function previousSlide() {

        currentSlide--;

        if (

            currentSlide < 0

        ) {

            currentSlide =

                totalSlides - 1;

        }

        goToSlide(

            currentSlide

        );

    }

    /* BUTTONS */

    if (prevButton) {

        prevButton.addEventListener(

            "click",

            function () {

                previousSlide();

                restartAutoSlide();

            }

        );

    }

    if (nextButton) {

        nextButton.addEventListener(

            "click",

            function () {

                nextSlide();

                restartAutoSlide();

            }

        );

    }

    /* AUTO */

    function startAutoSlide() {

        autoSlide =

            setInterval(

                nextSlide,

                5000

            );

    }

    function restartAutoSlide() {

        clearInterval(

            autoSlide

        );

        startAutoSlide();

    }

    /* TOUCH SWIPE */

    let startX = 0;

    let endX = 0;

    track.addEventListener(

        "touchstart",

        function (event) {

            startX =

                event.touches[0].clientX;

        },

        {

            passive: true

        }

    );

    track.addEventListener(

        "touchend",

        function (event) {

            endX =

                event.changedTouches[0].clientX;

            const distance =

                startX - endX;

            if (distance > 50) {

                nextSlide();

                restartAutoSlide();

            }

            if (distance < -50) {

                previousSlide();

                restartAutoSlide();

            }

        },

        {

            passive: true

        }

    );

    goToSlide(0);

    startAutoSlide();

}

/* =========================================================

   FLOATING CONTACT

========================================================= */

function initFloatingContact() {

    const contact =

        document.querySelector(

            ".floating-contact"

        );

    const button =

        document.getElementById(

            "floatingContactBtn"

        );

    if (

        !contact ||

        !button

    ) {

        return;

    }

    button.addEventListener(

        "click",

        function (event) {

            event.stopPropagation();

            contact.classList.toggle(

                "active"

            );

        }

    );

    document.addEventListener(

        "click",

        function (event) {

            if (

                !contact.contains(

                    event.target

                )

            ) {

                contact.classList.remove(

                    "active"

                );

            }

        }

    );

}

/* =========================================================

   CLOSE MENU WHEN CLICK LINK

========================================================= */

function initMobileMenuLinks() {

    const nav =

        document.getElementById(

            "navMenu"

        );

    if (!nav) {

        return;

    }

    const links =

        nav.querySelectorAll("a");

    links.forEach(

        link => {

            link.addEventListener(

                "click",

                function () {

                    nav.classList.remove(

                        "show"

                    );

                }

            );

        }

    );

}

/* =========================================================

   INITIALIZE

========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        updateCartCount();

        renderProductDetail();

        renderCart();

        initHeroSlider();

        initCategoryFilter();

        initSearchPage();

        initFloatingContact();

        initMobileMenuLinks();
        filterProducts();

    }

);   
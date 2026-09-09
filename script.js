/* =========================================================
   BMC HOMEMART - MAIN JAVASCRIPT
   Responsive catalog / product detail / cart / slider
========================================================= */

const LINE_OA_URL = "https://line.me/ti/p/@bmchomemart";

/* =========================
   CART
========================= */
let cart = JSON.parse(localStorage.getItem("bmcCart") || "[]");

function saveCart(){
    localStorage.setItem("bmcCart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    const el = document.getElementById("cartCount");
    if(!el) return;
    const count = cart.reduce((sum,item)=>sum + Number(item.quantity || 0),0);
    el.textContent = count;
}

function addToCart(name, price, category){
    const numericPrice = Number(price || 0);
    if(!numericPrice){
        window.open(LINE_OA_URL, "_blank", "noopener,noreferrer");
        return;
    }
    const existing = cart.find(item => item.name === name);
    if(existing) existing.quantity = Number(existing.quantity || 0) + 1;
    else cart.push({name, price:numericPrice, category, quantity:1});
    saveCart();
    alert(name + " ถูกเพิ่มลงในตะกร้าแล้ว");
}

function removeFromCart(index){
    if(index < 0 || index >= cart.length) return;
    cart.splice(index,1);
    saveCart();
    renderCart();
}

function changeQuantity(index, change){
    if(!cart[index]) return;
    cart[index].quantity = Number(cart[index].quantity || 1) + change;
    if(cart[index].quantity <= 0) cart.splice(index,1);
    saveCart();
    renderCart();
}

function renderCart(){
    const container = document.getElementById("cartItems");
    if(!container) return;

    if(cart.length === 0){
        container.innerHTML = `
            <div class="cart-empty">
                <h3>ยังไม่มีสินค้าในตะกร้า</h3>
                <p>เลือกสินค้าที่ต้องการเพื่อขอใบเสนอราคา</p>
                <a href="products.html" class="btn btn-gold">เลือกชมสินค้า</a>
            </div>`;
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item,index)=>{
        const price = Number(item.price || 0);
        const quantity = Number(item.quantity || 1);
        const subtotal = price * quantity;
        total += subtotal;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <small>${escapeHTML(item.category || "")}</small>
                    <strong>${escapeHTML(item.name || "")}</strong>
                    <p>${price.toLocaleString()} บาท / รายการ</p>
                </div>
                <div class="cart-item-control">
                    <div class="quantity-control">
                        <button onclick="changeQuantity(${index},-1)">−</button>
                        <span>${quantity}</span>
                        <button onclick="changeQuantity(${index},1)">+</button>
                    </div>
                    <strong class="cart-subtotal">${subtotal.toLocaleString()} บาท</strong>
                    <button class="remove-cart" onclick="removeFromCart(${index})">ลบ</button>
                </div>
            </div>`;
    }).join("");

    container.innerHTML += `
        <div class="cart-total">
            <span>ยอดรวมโดยประมาณ</span>
            <strong>${total.toLocaleString()} บาท</strong>
        </div>
        <p class="cart-note">* ราคานี้เป็นราคาเบื้องต้น ทีมงาน BMC HOMEMART จะยืนยันราคาอีกครั้ง</p>`;
}

function submitQuote(){
    const name = document.getElementById("customerName")?.value.trim();
    const phone = document.getElementById("customerPhone")?.value.trim();
    const email = document.getElementById("customerEmail")?.value.trim();
    const message = document.getElementById("customerMessage")?.value.trim();

    if(!name || !phone){
        alert("กรุณากรอกชื่อและเบอร์โทรศัพท์");
        return;
    }
    if(cart.length === 0){
        alert("กรุณาเลือกสินค้าก่อนส่งใบเสนอราคา");
        return;
    }

    console.log("Quotation:", {name,phone,email,message,cart});
    alert("ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว\n\nทีมงาน BMC HOMEMART จะติดต่อกลับ");

    cart = [];
    saveCart();
    renderCart();

    ["customerName","customerPhone","customerEmail","customerMessage"].forEach(id=>{
        const el = document.getElementById(id);
        if(el) el.value = "";
    });
}

/* =========================
   COMMON
========================= */
function escapeHTML(value){
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[char]));
}

function toggleMenu(){
    const nav = document.getElementById("navMenu");
    if(nav) nav.classList.toggle("show");
}

function initMobileMenuLinks(){
    const nav = document.getElementById("navMenu");
    if(!nav) return;
    nav.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>nav.classList.remove("show"));
    });
}

/* =========================
   IMAGE LIGHTBOX
========================= */
function openImage(src, alt=""){
    const lightbox = document.getElementById("productImageLightbox") || document.getElementById("imageLightbox");
    const image = document.getElementById("lightboxProductImage") || document.getElementById("lightboxImage");
    if(!lightbox || !image) return;
    image.src = src;
    image.alt = alt;
    lightbox.classList.add("active");
}

function closeImage(){
    const lightbox = document.getElementById("productImageLightbox") || document.getElementById("imageLightbox");
    if(lightbox) lightbox.classList.remove("active");
}

document.addEventListener("keydown",event=>{
    if(event.key === "Escape") closeImage();
});

/* =========================
   HERO SLIDER
========================= */
function initHeroSlider(){
    const track = document.getElementById("heroTrack");
    const slides = [...document.querySelectorAll(".hero-slide")];
    const prev = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");
    const dotsContainer = document.getElementById("sliderDots");
    if(!track || !slides.length) return;

    let current = 0;
    let timer = null;

    function renderDots(){
        if(!dotsContainer) return;
        dotsContainer.innerHTML = slides.map((_,i)=>
            `<button class="slider-dot${i===0?" active":""}" type="button" aria-label="ไปยังภาพที่ ${i+1}" data-slide="${i}"></button>`
        ).join("");
        dotsContainer.querySelectorAll("button").forEach(btn=>{
            btn.addEventListener("click",()=>{
                goTo(Number(btn.dataset.slide));
                restart();
            });
        });
    }

    function goTo(index){
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer?.querySelectorAll(".slider-dot").forEach((dot,i)=>{
            dot.classList.toggle("active",i===current);
        });
    }

    function restart(){
        clearInterval(timer);
        timer = setInterval(()=>goTo(current+1),5000);
    }

    prev?.addEventListener("click",()=>{goTo(current-1);restart();});
    next?.addEventListener("click",()=>{goTo(current+1);restart();});

    let startX = 0;
    track.addEventListener("touchstart",e=>{startX=e.touches[0].clientX;},{passive:true});
    track.addEventListener("touchend",e=>{
        const distance = startX - e.changedTouches[0].clientX;
        if(Math.abs(distance)>50){
            goTo(current + (distance>0 ? 1 : -1));
            restart();
        }
    },{passive:true});

    renderDots();
    goTo(0);
    restart();
}

/* =========================
   FLOATING CONTACT
========================= */
function initFloatingContact(){
    const contact = document.querySelector(".floating-contact");
    const button = document.getElementById("floatingContactBtn");
    if(!contact || !button) return;

    button.addEventListener("click",event=>{
        event.stopPropagation();
        contact.classList.toggle("active");
    });

    document.addEventListener("click",event=>{
        if(!contact.contains(event.target)) contact.classList.remove("active");
    });
}

/* =========================
   MATERIAL TABS
========================= */
function initMaterialTabs(){
    document.querySelectorAll(".material-panel").forEach(panel=>{
        const buttons = panel.querySelectorAll(".material-category-btn");
        const panels = panel.querySelectorAll(".material-category-panel");
        buttons.forEach(button=>{
            button.addEventListener("click",()=>{
                buttons.forEach(btn=>btn.classList.remove("active"));
                panels.forEach(p=>p.classList.remove("active"));
                button.classList.add("active");
                document.getElementById(button.dataset.categoryTarget)?.classList.add("active");
            });
        });
    });
}

/* =========================
   PRODUCT CATALOG
========================= */
const categoryLabels = {
    all:"ทุกหมวดสินค้า",
    natural:"หินธรรมชาติ",
    marble:"หินอ่อน",
    granite:"หินแกรนิต",
    artificial:"หินเทียม",
    tile:"กระเบื้องหินอ่อน",
    mosaic:"โมเสค",
    door:"ประตู",
    solid:"ไม้ Solid",
    laminate:"ไม้ Laminate",
    engineered:"ไม้ Engineered",
    pvc:"ไม้ PVC"
};

function getProductById(id){
    if(typeof BMC_CATALOG === "undefined") return null;
    return BMC_CATALOG.find(product=>product.id === id) || null;
}

function formatPrice(product){
    const price = Number(product.price || 0);
    if(!price) return "สอบถามราคา";
    return `฿${price.toLocaleString()} / ${product.unit || "รายการ"}`;
}

function cardHTML(product){
    const price = Number(product.price || 0);
    const description = product.description || "วัสดุคุณภาพสำหรับงานบ้าน งานตกแต่ง และโครงการ";
    const image = product.image;
    const isInquiry = !price;
    return `
        <article class="product-card"
            data-id="${escapeHTML(product.id)}"
            data-category="${escapeHTML(product.category)}"
            data-name="${escapeHTML((product.name+" "+product.categoryLabel+" "+product.subcategory).toLowerCase())}"
            data-price="${price}">
            <div class="product-card-image-wrap">
                <img class="product-image" src="${escapeHTML(image)}" alt="${escapeHTML(product.name)}" loading="lazy">
            </div>
            <div class="product-card-content">
                <span>${escapeHTML(product.categoryLabel || "")}</span>
                <small class="product-subcategory">${escapeHTML(product.subcategory || "")}</small>
                <h3>${escapeHTML(product.name)}</h3>
                <p>${escapeHTML(description)}</p>
                <div class="product-bottom">
                    <strong>${formatPrice(product)}</strong>
                    ${
                        isInquiry
                        ? `<a class="product-inquiry-btn" href="${LINE_OA_URL}" target="_blank" rel="noopener noreferrer">สอบถาม</a>`
                        : `<button class="product-add-btn-small" type="button">+ เพิ่ม</button>`
                    }
                </div>
            </div>
        </article>`;
}

function renderCatalog(){
    const grid = document.getElementById("productCatalog");
    if(!grid || typeof BMC_CATALOG === "undefined") return;

    grid.innerHTML = BMC_CATALOG.map(cardHTML).join("");

    grid.querySelectorAll(".product-card").forEach(card=>{
        const id = card.dataset.id;
        const product = getProductById(id);
        card.addEventListener("click",event=>{
            if(event.target.closest("button,a")) return;
            openProductDetail(id);
        });
        card.querySelector(".product-image")?.addEventListener("click",event=>{
            event.stopPropagation();
            openImage(event.currentTarget.src,event.currentTarget.alt);
        });
        card.querySelector(".product-add-btn-small")?.addEventListener("click",event=>{
            event.stopPropagation();
            if(product) addToCart(product.name,product.price,product.categoryLabel);
        });
    });

    filterProducts();
}

function initCategoryFilter(){
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const search = params.get("q");
    const filter = document.getElementById("categoryFilter");
    const input = document.getElementById("searchInput");
    if(filter && category && categoryLabels[category]) filter.value = category;
    if(input && search) input.value = search;
}

function matchesCategory(product, selected){
    if(selected === "all") return true;
    if(selected === "natural") return ["marble","granite"].includes(product.category);
    return product.category === selected;
}

function filterProducts(){
    const grid = document.getElementById("productCatalog");
    const input = document.getElementById("searchInput");
    const filter = document.getElementById("categoryFilter");
    const empty = document.getElementById("noProducts");
    const count = document.getElementById("productVisibleCount");
    if(!grid || typeof BMC_CATALOG === "undefined") return;

    const search = (input?.value || "").trim().toLowerCase();
    const category = filter?.value || "all";
    let visible = 0;

    grid.querySelectorAll(".product-card").forEach(card=>{
        const product = getProductById(card.dataset.id);
        if(!product) return;
        const haystack = [
            product.name,product.categoryLabel,product.subcategory,product.description
        ].join(" ").toLowerCase();
        const ok = (!search || haystack.includes(search)) && matchesCategory(product,category);
        card.style.display = ok ? "" : "none";
        if(ok) visible++;
    });

    if(count) count.textContent = visible.toLocaleString();
    if(empty) empty.style.display = visible ? "none" : "block";
}

function sortProducts(){
    const grid = document.getElementById("productCatalog");
    const select = document.getElementById("sortFilter");
    if(!grid || !select) return;
    const cards = [...grid.querySelectorAll(".product-card")];
    cards.sort((a,b)=>{
        const pa=getProductById(a.dataset.id)||{};
        const pb=getProductById(b.dataset.id)||{};
        if(select.value==="price-low") return (Number(pa.price||0)||Infinity)-(Number(pb.price||0)||Infinity);
        if(select.value==="price-high") return (Number(pb.price||0)||Infinity)-(Number(pa.price||0)||Infinity);
        if(select.value==="name") return String(pa.name).localeCompare(String(pb.name),"th");
        return Number(a.dataset.id.split("-")[1]||0)-Number(b.dataset.id.split("-")[1]||0);
    });
    cards.forEach(card=>grid.appendChild(card));
}

function initProductsPage(){
    const grid = document.getElementById("productCatalog");
    if(!grid) return;
    renderCatalog();
    initCategoryFilter();

    document.getElementById("searchInput")?.addEventListener("input",filterProducts);
    document.getElementById("categoryFilter")?.addEventListener("change",filterProducts);
    document.getElementById("sortFilter")?.addEventListener("change",sortProducts);
    document.getElementById("resetFilter")?.addEventListener("click",()=>{
        const input=document.getElementById("searchInput");
        const filter=document.getElementById("categoryFilter");
        const sort=document.getElementById("sortFilter");
        if(input) input.value="";
        if(filter) filter.value="all";
        if(sort) sort.value="default";
        sortProducts();
        filterProducts();
    });

    filterProducts();
}

/* =========================
   PRODUCT DETAIL
========================= */
function productFromLegacy(id){
    const legacy = {
        "white-carrara":{
            name:"White Carrara Marble",category:"หินอ่อน",categoryCode:"marble",price:1850,unit:"ตร.ม.",
            description:"หินอ่อนสีขาว ลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและผนัง ใช้ได้กับเคาน์เตอร์และงานตกแต่งภายในที่ต้องการความหรูหราและสะอาดตา",
            images:["image/carrara-white.jpg","image/carrara-white-2.jpg","image/carrara-white-3.jpg","image/carrara-white-4.jpg"]
        }
    };
    return legacy[id] || null;
}

function renderProductDetail(){
    const container=document.getElementById("productDetail");
    if(!container) return;
    const id=new URLSearchParams(location.search).get("id");
    const catalogProduct=getProductById(id);
    const product=catalogProduct || productFromLegacy(id);

    if(!product){
        container.innerHTML=`
            <div class="product-not-found">
                <h2>ไม่พบสินค้านี้</h2>
                <p>กรุณากลับไปเลือกสินค้าจากหน้าสินค้า</p>
                <a href="products.html" class="btn btn-gold">กลับไปหน้าสินค้า</a>
            </div>`;
        return;
    }

    const images = product.gallery || product.images || [product.image];
    const price=Number(product.price||0);
    const category=product.categoryLabel || product.category || "";
    const unit=product.unit || (product.categoryCode==="door" ? "ชุด" : "รายการ");

    container.innerHTML=`
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <div class="main-product-image" onclick="openMainProductImage()">
                    <img id="mainProductImage" src="${escapeHTML(images[0])}" alt="${escapeHTML(product.name)}">
                </div>
                <div class="product-thumbnails">
                    ${images.map((image,index)=>`
                        <img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)} รูปที่ ${index+1}"
                             class="${index===0?"active":""}" data-image="${escapeHTML(image)}">
                    `).join("")}
                </div>
            </div>

            <div class="product-detail-info">
                <div class="product-category">${escapeHTML(category)}</div>
                ${product.subcategory ? `<div class="product-detail-subcategory">${escapeHTML(product.subcategory)}</div>` : ""}
                <h1>${escapeHTML(product.name)}</h1>
                <p class="product-detail-description">${escapeHTML(product.description || "วัสดุคุณภาพสำหรับงานบ้าน งานตกแต่ง และโครงการ")}</p>
                <div class="product-detail-price">${price ? `฿${price.toLocaleString()} / ${escapeHTML(unit)}` : "สอบถามราคา"}</div>
                <div class="product-detail-actions">
                    ${
                        price
                        ? `<button class="btn btn-gold product-add-btn" id="detailAdd">🛒 เพิ่มลงตะกร้า</button>`
                        : `<a class="btn btn-gold product-add-btn" href="${LINE_OA_URL}" target="_blank" rel="noopener noreferrer">สอบถามสินค้า</a>`
                    }
                    <a href="cart.html" class="btn btn-dark">ไปที่ตะกร้าสินค้า</a>
                </div>
                <a href="products.html" class="back-products">← กลับไปหน้าสินค้า</a>
            </div>
        </div>`;

    container.querySelectorAll(".product-thumbnails img").forEach(thumb=>{
        thumb.addEventListener("click",()=>{
            changeProductImage(thumb.dataset.image,thumb);
        });
    });

    document.getElementById("detailAdd")?.addEventListener("click",()=>{
        addToCart(product.name,product.price,category);
    });
}

function changeProductImage(image,thumbnail){
    const main=document.getElementById("mainProductImage");
    if(!main) return;
    main.src=image;
    document.querySelectorAll(".product-thumbnails img").forEach(img=>img.classList.remove("active"));
    thumbnail?.classList.add("active");
}

function openMainProductImage(){
    const main=document.getElementById("mainProductImage");
    if(main) openImage(main.src,main.alt);
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded",()=>{
    updateCartCount();
    renderCart();
    initHeroSlider();
    initFloatingContact();
    initMobileMenuLinks();
    initMaterialTabs();
    initProductsPage();
    renderProductDetail();
});

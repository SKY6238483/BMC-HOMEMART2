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

window.renderCart=function renderCart(){
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
    all:"ทุกหมวดสินค้า", natural:"หินธรรมชาติ", marble:"หินอ่อน", granite:"หินแกรนิต",
    quartz:"หินควอตซ์", quartzite:"หินควอตไซต์", limestone:"หินไลม์สโตน", travertine:"หินทราเวอร์ทีน",
    onyx:"หินออนิกซ์", pool:"ปูสระว่ายน้ำ", "compressed-marble":"หินอ่อนอัด", terrazzo:"หินเทอราซโซ่",
    solid:"ไม้ Solid", wpc:"ไม้เทียม WPC", spc:"ไม้เทียม SPC", stair:"ไม้บันได",
    "marble-tile":"กระเบื้องหินอ่อน", ceramic:"กระเบื้องเซรามิก", porcelain:"กระเบื้องพอซเซเลน",
    furniture:"เฟอร์นิเจอร์", laminate:"ไม้ลามิเนต", engineered:"ไม้เอ็นจิเนียร์", mosaic:"โมเสค", pvc:"ไม้ PVC", artificial:"หินควอตซ์"
};

function getProductById(id){
    if(typeof BMC_CATALOG === "undefined") return null;
    return BMC_CATALOG.find(product=>product.id === id) || null;
}

const categoryLabelsEn = {
    all:'All Categories', natural:'Natural Stone', marble:'Marble', granite:'Granite', quartz:'Quartz', quartzite:'Quartzite', limestone:'Limestone', travertine:'Travertine', onyx:'Onyx', pool:'Pool Stone', mosaic:'Mosaic', 'compressed-marble':'Compressed Marble', terrazzo:'Terrazzo', solid:'Solid Wood', wpc:'WPC Wood', spc:'SPC Flooring', stair:'Stair Wood', engineered:'Engineered Wood', laminate:'Laminate Flooring', 'marble-tile':'Marble Tile', ceramic:'Ceramic Tile', porcelain:'Porcelain Tile', furniture:'Furniture', tile:'Marble Tile', pvc:'PVC Wood', door:'Doors', granite:'Granite'
};
const descriptionEnByCategory = {
 marble:'Natural marble with distinctive patterns, suitable for floors, walls, countertops and premium interiors.',
 granite:'Durable natural granite with distinctive patterns, ideal for countertops, floors, walls and decorative applications.',
 quartzite:'Natural quartzite with high durability and distinctive patterns, ideal for floors, walls, countertops and premium interiors.',
 limestone:'Natural limestone with warm tones and texture, suitable for floors, walls, landscaping and exterior applications.',
 travertine:'Travertine with naturally distinctive patterns and texture, suitable for floors, walls and decorative applications.',
 onyx:'Onyx with striking patterns and translucency, ideal for luxurious decorative applications.',
 pool:'Stone selected for swimming pools and surrounding areas, suitable for exterior applications.',
 mosaic:'Mosaic for walls, floors and decorative applications, adding detail and character to spaces.',
 quartz:'Quartz / engineered stone with a consistent surface and easy maintenance, ideal for countertops, island tops, tables and interiors.',
 'compressed-marble':'Compressed marble with consistent patterns and tones, suitable for floors, walls, countertops and decorative applications.',
 terrazzo:'Terrazzo with distinctive aggregate patterns, suitable for floors, walls, countertops and statement interiors.',
 solid:'Solid wood flooring made from real wood with natural texture and grain, ideal for floors and interiors.',
 wpc:'WPC flooring for exterior areas and spaces requiring durable performance.',
 spc:'SPC flooring that is easy to maintain and suitable for interior applications.',
 stair:'Stair wood for decorative and staircase applications, using images from the PVC wood set.',
 engineered:'Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring.',
 laminate:'Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces.',
 furniture:'Furniture selected for homes and interiors, balancing design and material suitability.',
 tile:'Marble-look tiles for floors and walls, available in a variety of patterns and finishes.',
 ceramic:'Ceramic tiles for floors and walls, available in a variety of styles for different interiors.',
 porcelain:'Porcelain tiles for floors and walls, offering durability and easy maintenance.',
 pvc:'PVC wood materials suitable for decorative and practical applications.',
 door:'Doors selected for residential and project applications, balancing appearance and durability.'
};

function formatPrice(product){
    const price=Number(product.price||0);
    const en=document.documentElement.lang==='en';
    if(!price) return en?'Price on request':'สอบถามราคา';
    return `฿${price.toLocaleString()} / ${product.unit|| (en?'item':'รายการ')}`;
}

function cardHTML(product){
 const en=document.documentElement.lang==='en';
 const name=en?(product.nameEn||product.name):(product.name||'');
 const cat=en?(categoryLabelsEn[product.category]||product.categoryLabelEn||product.categoryLabel):(product.categoryLabel||'');
 const sub=en?(categoryLabelsEn[product.category]||product.subcategoryEn||product.subcategory):(product.subcategory||'');
 const rawEn=product.descriptionEn||'';
 const hasThai=/[\u0E00-\u0E7F]/.test(rawEn);
 const description=en?(hasThai?(descriptionEnByCategory[product.category]||'Quality materials for homes, interiors and projects.'):rawEn):(product.description||'วัสดุคุณภาพสำหรับงานบ้าน งานตกแต่ง และโครงการ');
 return `<article class="product-card" data-id="${escapeHTML(product.id)}" data-category="${escapeHTML(product.category)}" data-name="${escapeHTML((name+' '+cat+' '+sub).toLowerCase())}" data-price="${Number(product.price||0)}">
 <div class="product-card-image-wrap"><img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(name)}" loading="lazy"></div>
 <div class="product-card-content"><span>${escapeHTML(cat)}</span><small class="product-subcategory">${escapeHTML(sub)}</small><h3>${escapeHTML(name)}</h3><p>${escapeHTML(description)}</p>
 <div class="product-bottom"><strong>${formatPrice(product)}</strong><div class="product-actions"><button class="product-add-btn-small" type="button">+ เพิ่ม</button><button class="product-inquiry-btn" type="button">${en?'Inquiry':'สอบถาม'}</button></div></div></div></article>`;
}
window.renderCatalog=function renderCatalog(){
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
            if(product){ const name=document.documentElement.lang==='en'?(product.nameEn||product.name):product.name; const cat=document.documentElement.lang==='en'?(product.categoryLabelEn||product.categoryLabel):product.categoryLabel; addToCart(name,product.price,cat); }
        });
        card.querySelector(".product-inquiry-btn")?.addEventListener("click",event=>{event.stopPropagation();openInquiry(product);});
    });

    filterProducts();
}

function initCategoryFilter(){
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const search = params.get("q");
    const filter = document.getElementById("categoryFilter");
    const input = document.getElementById("searchInput");
    if(filter && category && categoryLabels[category]){
        filter.value = category;
        document.querySelectorAll(".product-pill").forEach(btn=>{
            btn.classList.toggle("active", (btn.dataset.value||"all") === category);
        });
    }
    if(input && search) input.value = search;
}

function matchesCategory(product, selected){
    if(selected === "all") return true;
    if(selected === "marble-tile") return product.category === "marble-tile" || product.category === "tile";
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
            product.name, product.nameEn,
            product.categoryLabel, product.categoryLabelEn,
            product.subcategory, product.subcategoryEn,
            product.description, product.descriptionEn
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


function openInquiry(product){
 let box=document.getElementById('productInquiryModal');
 if(!box){box=document.createElement('div');box.id='productInquiryModal';box.className='inquiry-modal';box.innerHTML=`<div class="inquiry-modal-backdrop" data-close-inquiry></div><div class="inquiry-modal-box"><button class="inquiry-close" data-close-inquiry>×</button><div class="eyebrow gold">BMC HOMEMART</div><h3 id="inquiryTitle">สอบถามสินค้า</h3><p id="inquiryProduct"></p><div class="inquiry-links"><a href="tel:0876867772">📞 <span>เบอร์โทร</span></a><a href="https://line.me/ti/p/@bmchomemart" target="_blank" rel="noopener">LINE OA</a><a href="mailto:info@bmchomemart.com">✉ Email</a></div></div>`;document.body.appendChild(box);box.querySelectorAll('[data-close-inquiry]').forEach(e=>e.addEventListener('click',()=>box.classList.remove('show')))}
 const en=document.documentElement.lang==='en'; box.querySelector('#inquiryTitle').textContent=en?'Product Inquiry':'สอบถามสินค้า'; box.querySelector('#inquiryProduct').textContent=en?(product.nameEn||product.name):(product.name||''); box.querySelector('.inquiry-links span').textContent=en?'Phone':'เบอร์โทร'; box.classList.add('show');
}
function initProductPills(){
    document.querySelectorAll(".product-pill").forEach(btn=>{
        btn.addEventListener("click",()=>{
            document.querySelectorAll(".product-pill").forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
            const filter=document.getElementById("categoryFilter");
            if(filter){ filter.value=btn.dataset.value || "all"; filterProducts(); }
        });
    });
}

function initHorizontalProductPillScroll(){
    document.querySelectorAll(".product-category-pills").forEach(scroller=>{
        if(scroller.dataset.dragReady==="1") return;
        scroller.dataset.dragReady="1";
        let down=false,startX=0,startScroll=0,moved=false;
        scroller.style.cursor="grab";
        scroller.addEventListener("mousedown",e=>{
            down=true; moved=false; startX=e.pageX; startScroll=scroller.scrollLeft;
            scroller.style.cursor="grabbing";
        });
        window.addEventListener("mousemove",e=>{
            if(!down) return;
            const dx=e.pageX-startX;
            if(Math.abs(dx)>4) moved=true;
            scroller.scrollLeft=startScroll-dx;
        });
        window.addEventListener("mouseup",()=>{
            if(!down) return;
            down=false; scroller.style.cursor="grab";
        });
        scroller.addEventListener("click",e=>{
            if(moved){ e.preventDefault(); e.stopPropagation(); moved=false; }
        },true);
    });
}

function initProductsPage(){
    const grid = document.getElementById("productCatalog");
    if(!grid) return;

    // อ่านหมวดหมู่จาก URL ก่อน
    initCategoryFilter();

    // สร้างรายการสินค้า
    renderCatalog();

    // ตั้งค่าปุ่มหมวดหมู่
    initProductPills();
    initHorizontalProductPillScroll();

    // ระบบค้นหา
    document.getElementById("searchInput")?.addEventListener("input", filterProducts);

    // ระบบเลือกหมวดหมู่
    document.getElementById("categoryFilter")?.addEventListener("change", filterProducts);

    // ระบบเรียงสินค้า
    document.getElementById("sortFilter")?.addEventListener("change", sortProducts);

    // ปุ่ม Reset ถ้ามี
    document.getElementById("resetFilter")?.addEventListener("click",()=>{
        const input = document.getElementById("searchInput");
        const filter = document.getElementById("categoryFilter");
        const sort = document.getElementById("sortFilter");

        if(input) input.value = "";
        if(filter) filter.value = "all";
        if(sort) sort.value = "default";

        sortProducts();
        filterProducts();
    });

    // กรองสินค้าอีกครั้งหลังจากอ่าน URL แล้ว
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
    const en=document.documentElement.lang==='en';
    const category=en?(categoryLabelsEn[product.category]||product.categoryLabelEn||product.categoryLabel||product.category):(product.categoryLabel || product.category || "");
    const name=en?(product.nameEn||product.name):(product.name||'');
    const rawDetailEn=product.descriptionEn||""; const description=en?(/[\u0E00-\u0E7F]/.test(rawDetailEn)?(descriptionEnByCategory[product.category]||'Quality materials for homes, interiors and projects.'):rawDetailEn):(product.description||"วัสดุคุณภาพสำหรับงานบ้าน งานตกแต่ง และโครงการ");
    const unit=product.unit || (en?'item':(product.categoryCode==="door" ? "ชุด" : "รายการ"));

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
                ${product.subcategory ? `<div class="product-detail-subcategory">${escapeHTML(en?(product.subcategoryEn||product.subcategory):product.subcategory)}</div>` : ""}
                <h1>${escapeHTML(name)}</h1>
                <p class="product-detail-description">${escapeHTML(description)}</p>
                <div class="product-detail-price">${price ? `฿${price.toLocaleString()} / ${escapeHTML(unit)}` : (en?'Price on request':'สอบถามราคา')}</div>
                <div class="product-detail-actions">
                    <button class="btn btn-gold product-add-btn" id="detailAdd">🛒 ${en?'Add to Cart':'เพิ่มลงตะกร้า'}</button>
                    <button class="btn btn-dark product-detail-inquiry" id="detailInquiry">${en?'Inquiry':'สอบถาม'}</button>
                    <a href="cart.html" class="btn btn-dark">${en?'Go to Cart':'ไปที่ตะกร้าสินค้า'}</a>
                </div>
                <a href="products.html" class="back-products">← ${en?'Back to Products':'กลับไปหน้าสินค้า'}</a>
            </div>
        </div>`;

    container.querySelectorAll(".product-thumbnails img").forEach(thumb=>{
        thumb.addEventListener("click",()=>{
            changeProductImage(thumb.dataset.image,thumb);
        });
    });

    document.getElementById("detailAdd")?.addEventListener("click",()=>{
        addToCart(name,product.price,category);
    });
    document.getElementById("detailInquiry")?.addEventListener("click",()=>openInquiry(product));
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
    window.addEventListener('bmcLanguageChanged',()=>renderProductDetail());
});

/* Horizontal product category navigation: mouse drag + wheel + touch */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.product-category-pills').forEach(strip=>{
    let down=false,startX=0,startScroll=0,moved=false;
    strip.addEventListener('pointerdown',e=>{down=true;moved=false;startX=e.clientX;startScroll=strip.scrollLeft;strip.setPointerCapture?.(e.pointerId);strip.classList.add('is-dragging');});
    strip.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-startX;if(Math.abs(dx)>4)moved=true;strip.scrollLeft=startScroll-dx;});
    const end=()=>{down=false;strip.classList.remove('is-dragging');};
    strip.addEventListener('pointerup',end); strip.addEventListener('pointercancel',end); strip.addEventListener('pointerleave',()=>{if(down)end();});
    strip.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();moved=false;}},true);
    strip.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){strip.scrollLeft += e.deltaY;}}, {passive:true});
  });
});

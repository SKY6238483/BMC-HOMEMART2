/* =========================================================
   BMC HOMEMART — DYNAMIC PRODUCT CATALOG
   Products are generated from product-catalog-data.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const catalog = Array.isArray(window.BMC_CATALOG) ? window.BMC_CATALOG : [];
    const grid = document.getElementById("productCatalog");
    const search = document.getElementById("searchInput");
    const category = document.getElementById("categoryFilter");
    const sort = document.getElementById("sortFilter");
    const count = document.getElementById("productVisibleCount");
    const empty = document.getElementById("noProducts");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const initialCategory = params.get("category");
    if (category && initialCategory && [...category.options].some(o => o.value === initialCategory)) {
        category.value = initialCategory;
    }

    function card(product) {
        const safeId = String(product.id).replace(/'/g, "\\'");
        const price = Number(product.price || 0);
        return `
            <article class="product-card"
                data-category="${product.category}"
                data-name="${String(product.name).toLowerCase().replace(/"/g, '&quot;')}"
                data-price="${price}"
                onclick="openCatalogProduct('${safeId}')">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy"
                     onclick="event.stopPropagation(); openImage(this.src, this.alt)">
                <div class="product-card-content">
                    <span>${product.categoryLabel}</span>
                    <h3>${product.name}</h3>
                    <p>วัสดุสำหรับงานบ้าน งานตกแต่งภายใน และโครงการ</p>
                    <div class="product-bottom">
                        <strong>${price > 0 ? `฿${price.toLocaleString()} / ตร.ม.` : 'สอบถามราคา'}</strong>
                        <button type="button" onclick="event.stopPropagation(); addToCart('${String(product.name).replace(/'/g, "\\'")}',${price},'${product.category}')">+ เพิ่ม</button>
                    </div>
                </div>
            </article>`;
    }

    function render() {
        const q = (search?.value || "").trim().toLowerCase();
        const cat = category?.value || "all";
        let list = catalog.filter(p =>
            (!q || p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q)) &&
            (cat === "all" || p.category === cat)
        );

        if (sort?.value === "name") list.sort((a,b) => a.name.localeCompare(b.name, "th"));
        if (sort?.value === "price-low") list.sort((a,b) => Number(a.price) - Number(b.price));
        if (sort?.value === "price-high") list.sort((a,b) => Number(b.price) - Number(a.price));

        grid.innerHTML = list.map(card).join("");
        if (count) count.textContent = list.length;
        if (empty) empty.style.display = list.length ? "none" : "block";
    }

    window.openCatalogProduct = function(id) {
        window.location.href = "product-detail.html?catalog=" + encodeURIComponent(id);
    };

    search?.addEventListener("input", render);
    category?.addEventListener("change", render);
    sort?.addEventListener("change", render);

    render();
});

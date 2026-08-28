/* =========================================================
   BMC HOMEMART
   PRODUCT CATALOG FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const products =
        document.querySelectorAll(".catalog-product");

    const search =
        document.getElementById("productSearch");

    const price =
        document.getElementById("priceFilter");

    const categories =
        document.querySelectorAll(".category-filter");

    const sort =
        document.getElementById("sortProduct");

    const total =
        document.getElementById("productTotal");

    const noProducts =
        document.getElementById("noProducts");

    const resetButton =
        document.getElementById("resetFilter");


    /* ไม่มีหน้าสินค้า ก็ไม่ต้องทำอะไร */

    if (!products.length) {
        return;
    }


    /* =====================================================
       FILTER
    ===================================================== */

    function filterCatalogProducts() {

        const keyword =
            search
                ? search.value.trim().toLowerCase()
                : "";


        const selectedCategories =
            [...categories]
                .filter(c => c.checked)
                .map(c => c.value);


        const selectedPrice =
            price
                ? price.value
                : "all";


        let visible = [];


        products.forEach(product => {

            const name =
                (
                    product.dataset.name || ""
                ).toLowerCase();


            const category =
                product.dataset.category || "";


            const productPrice =
                Number(
                    product.dataset.price || 0
                );


            /* SEARCH */

            const matchSearch =
                name.includes(keyword);


            /* CATEGORY */

            const matchCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(category);


            /* PRICE */

            let matchPrice = true;


            if (selectedPrice === "under1000") {

                matchPrice =
                    productPrice < 1000;

            }


            if (selectedPrice === "1000-5000") {

                matchPrice =
                    productPrice >= 1000 &&
                    productPrice <= 5000;

            }


            if (selectedPrice === "5000") {

                matchPrice =
                    productPrice > 5000;

            }


            /* SHOW / HIDE */

            if (
                matchSearch &&
                matchCategory &&
                matchPrice
            ) {

                product.style.display = "";

                visible.push(product);

            } else {

                product.style.display = "none";

            }

        });


        if (total) {

            total.textContent =
                visible.length;

        }


        if (noProducts) {

            noProducts.style.display =
                visible.length === 0
                    ? "block"
                    : "none";

        }

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    if (search) {

        search.addEventListener(
            "input",
            filterCatalogProducts
        );

    }


    /* =====================================================
       PRICE
    ===================================================== */

    if (price) {

        price.addEventListener(
            "change",
            filterCatalogProducts
        );

    }


    /* =====================================================
       CATEGORY
    ===================================================== */

    categories.forEach(checkbox => {

        checkbox.addEventListener(
            "change",
            filterCatalogProducts
        );

    });


    /* =====================================================
       SORT
    ===================================================== */

    if (sort) {

        sort.addEventListener(
            "change",
            function () {

                const grid =
                    document.getElementById(
                        "catalogGrid"
                    );


                if (!grid) {
                    return;
                }


                const items =
                    [...products];


                if (sort.value === "low") {

                    items.sort(
                        (a, b) =>
                            Number(a.dataset.price) -
                            Number(b.dataset.price)
                    );

                }


                if (sort.value === "high") {

                    items.sort(
                        (a, b) =>
                            Number(b.dataset.price) -
                            Number(a.dataset.price)
                    );

                }


                if (sort.value === "name") {

                    items.sort(
                        (a, b) =>
                            (
                                a.dataset.name || ""
                            ).localeCompare(
                                b.dataset.name || "",
                                "th"
                            )
                    );

                }


                items.forEach(item => {

                    grid.appendChild(item);

                });

            }
        );

    }


    /* =====================================================
       RESET
    ===================================================== */

    if (resetButton) {

        resetButton.addEventListener(
            "click",
            function () {

                if (search) {
                    search.value = "";
                }


                if (price) {
                    price.value = "all";
                }


                categories.forEach(
                    checkbox => {
                        checkbox.checked = false;
                    }
                );


                filterCatalogProducts();

            }
        );

    }


    /* เรียกครั้งแรก */

    filterCatalogProducts();

});
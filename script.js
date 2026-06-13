const products = [
    { name: "Laptop", price: 45000, inStock: true, category: "electronics" },
    { name: "Shirt", price: 1200, inStock: false, category: "clothing" },
    { name: "Phone", price: 25000, inStock: true, category: "electronics" },
    { name: "Shoes", price: 3500, inStock: true, category: "clothing" },
    { name: "Tablet", price: 18000, inStock: false, category: "electronics" },
    { name: "Watch", price: 8000, inStock: true, category: "accessories" },
    { name: "Bag", price: 2200, inStock: true, category: "accessories" },
    { name: "Headphones", price: 3000, inStock: true, category: "electronics" }
];

// Filterproducts that are in stock AND priced under ₹10,000
const inStockProducts = products.filter(product => product.inStock && product.price < 10000);
console.log("In Stock Products:", inStockProducts);

// Group the filtered results by category. Your output should look like
const groupedByCategory = inStockProducts.reduce((group, product) => {
    if (!group[product.category]) {
        group[product.category] = [];
    }
    group[product.category].push(product);
    return group;
}, {});
console.log("Grouped by Category:", groupedByCategory);

// Calculate the total value of all in-stock items under ₹10,000
const totalValue = inStockProducts.reduce((total, product) => total + product.price, 0)
console.log("Total Value of In stock ", totalValue);

let ascending = true;
const productGrid = document.getElementById("productGrid");
const sortBtn = document.getElementById("sortBtn");

function formatPrice(price) {
    return `₹${price.toLocaleString("en-IN")}`;
}

function renderProducts() {
    productGrid.innerHTML = "";

    const inStockProducts = products.filter(
        product => product.inStock
    );

    inStockProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = `
            bg-white rounded-xlshadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all
        `;

        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <h2 class="text-xl font-semibold text-gray-800">
                    ${product.name}
                </h2>

                <span class="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                    ${product.category}
                </span>
            </div>

            <p class="text-2xl font-bold text-green-600">
                ${formatPrice(product.price)}
            </p>
        `;
        productGrid.appendChild(card);
    });
}

sortBtn.addEventListener("click", () => {

    if (ascending) {
        products.sort((a, b) => a.price - b.price);
        sortBtn.textContent = "Sort by Price ↓";
    } else {
        products.sort((a, b) => b.price - a.price);
        sortBtn.textContent = "Sort by Price ↑";
    }

    ascending = !ascending;
    renderProducts();
});
renderProducts();

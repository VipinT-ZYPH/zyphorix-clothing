const products = [
  {
    name: "Zyphorix Tank Top",
    price: "499",
    image: "./assets/images/tanktop.jpg"
  },
  {
    name: "Zyphorix Hoodie",
    price: "999",
    image: "./assets/images/hoodie.jpg"
  }
];

const productList = document.getElementById("productList");

products.forEach((p) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="location.href='checkout.html'">Buy Now</button>
  `;
  productList.appendChild(div);
});

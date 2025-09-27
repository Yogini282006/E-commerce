// 3 products with images
const products = [
  { name: "Laptop", price: 1200, desc: "High-performance laptop", img: "laptop.jpg" },
  { name: "Phone", price: 800, desc: "Latest smartphone", img: "phone.jpg" },
  { name: "Watch", price: 200, desc: "Smart watch", img: "watch.jpg" },
  { name: "Airpods", price: 150, desc: "Wireless earbuds", img: "airpods.jpg" },
  { name: "TV", price: 60000, desc: "Smart TV", img: "tv.jpg" },
  { name: "Air Conditioner", price: 30000, desc: "Energy-efficient AC", img: "air.jpg" },
  { name: "Camera" , price: 500, desc: "Digital camera", img: "c.jpg" },
  { name: "Refrigerator", price: 40000, desc: "Double-door fridge", img: "ref.jpg" },
  { name: "Washing Machine", price: 25000, desc: "Front-load washer", img: "wash.jpg" },
  { name: "Headphones", price: 100, desc: "Noise-cancelling headphones", img: "head.jpg" }

];

// Background images
const homeBackgrounds = ["home1.jpg", "home2.jpg"];
const productBackgrounds = ["product1.jpg", "product2.jpg"];

// Set random background
function setRandomBackground() {
  const body = document.body;
  if (body.classList.contains("home")) {
    const img = homeBackgrounds[Math.floor(Math.random() * homeBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  } else if (body.classList.contains("product")) {
    const img = productBackgrounds[Math.floor(Math.random() * productBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  }
}

// Display products on home page
function displayProducts() {
  const container = document.querySelector(".products");
  if (!container) return;
  container.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    div.onclick = () => showProduct(product.name, product.price, product.desc, product.img);
    container.appendChild(div);
  });
}

// Save product details and navigate to product page
function showProduct(name, price, desc, img) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productDesc', desc);
  localStorage.setItem('productImg', img);
  window.location.href = 'product.html';
}

// Load product details on product page
function loadProductDetails() {
  if (document.getElementById('productName')) {
    document.getElementById('productName').innerText = localStorage.getItem('productName');
    document.getElementById('productPrice').innerText = 'Price: $' + localStorage.getItem('productPrice');
    document.getElementById('productDesc').innerText = 'Description: ' + localStorage.getItem('productDesc');

    const imgSrc = localStorage.getItem('productImg');
    if (imgSrc) {
      let imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = localStorage.getItem('productName');
      imgElement.className = "detail-img";
      document.body.insertBefore(imgElement, document.getElementById('productName').nextSibling);
    }
  }
}

// Go back to home
function goBack() {
  window.location.href = 'index.html';
}

// On page load
window.onload = function() {
  setRandomBackground();
  displayProducts();
  loadProductDetails();
}
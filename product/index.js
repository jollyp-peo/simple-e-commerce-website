import { cart, addToCart } from "./data/cart.js";
import { products } from "./data/product.js";

let productWrapper = document.getElementById("product-container");

let generateProduct = () => {
	return (productWrapper.innerHTML = products
		.map((product) => {
			let { id, name, img, rating, price } = product;
      
			return `
      <div class="product-item">
                <div class="img-wrapper">
                    <img src="${img}" alt="${name}">
                </div>

                <div class="price-info">
                    <h2 class="name">${name}</h2>
                    <div class="price">Price: $${price.toFixed(2)}</div>
                    <span class="rating">Rating: ${"⭐".repeat(rating)}</span>
                </div>

                <button class="cart-btn js-cart-btn" data-product-id="${id}">
                    Add To Cart
                </button>
            </div>
      `;
		})
		.join(""));
};
generateProduct();



const btns = document.querySelectorAll(".js-cart-btn");
btns.forEach(btn => {
  btn.addEventListener("click", ()=>{
    const productId = btn.dataset.productId;
    addToCart(productId);
    updateCart();
  });
});

export let updateCart = ()=>{
  let value = 0;
  cart.forEach(cartItem=> {
      value += cartItem.quantity
  });
  document.querySelector(".js-cart-value").textContent = value;
  //The reduce method also does the same thing as the forEach method ...
  
  // let value = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0); 
	// document.querySelector(".js-cart-value").textContent = value;
  localStorage.setItem('cart', JSON.stringify(cart));
}
const searchProduct = ()=>{
  const search = document.getElementById("search").value.toLowerCase();
  let results = products.filter((product=>product.name.toLowerCase().includes(search)));
  result(results);
};

document.getElementById("search").addEventListener("input", searchProduct);

const result = (results)=>{
  productWrapper.innerHTML = results.map(product=> {
    let { id, name, img, rating, price } = product;
    return `
      <div class="product-item">
                <div class="img-wrapper">
                    <img src="${img}" alt="${name}">
                </div>

                <div class="price-info">
                    <h2 class="name">${name}</h2>
                    <div class="price">Price: $${price.toFixed(2)}</div>
                    <span class="rating">Rating: ${"⭐".repeat(rating)}</span>
                </div>

                <button class="cart-btn js-cart-btn" data-product-id="${id}">
                    Add To Cart
                </button>
            </div>
      `;
  }).join("");

  document.querySelectorAll(".js-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.productId;
      addToCart(productId);
      updateCart();
    })
  });
};

updateCart();
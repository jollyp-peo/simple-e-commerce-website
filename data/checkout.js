import { products } from "./product.js";
import { cart, removeFromCart } from "./cart.js";
const cartContainer = document.querySelector(".item-wrapper");
const emptyCart = document.querySelector(".cart-container");
const totalPrice = document.getElementById("cart-total-price");
const totalQty = document.getElementById("cart-total-qty");

let updateCart = () => {
	let value = 0;
	cart.forEach((cartItem) => {
		value += cartItem.quantity;
	});
	document.querySelector(".js-cart-value").textContent = value;
	//The reduce method also does the same thing as the forEach method ...
	
	// let value = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0); 
	// document.querySelector(".js-cart-value").textContent = value;
	localStorage.setItem("cart", JSON.stringify(cart));
};
updateCart();

const generateCart = () => {
	if (cart.length !== 0) {
		cartContainer.innerHTML = cart
			.map((cartItem, index) => {
				const product = products.find((x) => x.id === cartItem.id);
				let { id, name, img, rating, price } = product;
				return `
      <div class="cart-product">
               <div class="image-card">
                 <div class="cart-img">
                   <img src="${img}" />
                 </div>
                 <div class="product-name">
                   <h2>${name}</h2>
                 </div>
               </div>
   
               <div class="cart-info">
                 <div class="price">Price: $${price}</div>
                 <div class="quantity">Quantity: <span>${cartItem.quantity}</span></div>
                 <button class="del-btn js-del-btn" data-cart-id="${cartItem.id}">Remove</button>
               </div>
             </div>
     `;
			})
			.join("");
	} else {
		cartContainer.innerHTML = "";
		emptyCart.innerHTML = `
   <div class="empty-cart">
         <h2>Cart is Empty</h2>
           <a href="index.html">
                 <button class="home-btn">Back to Home</button>
             </a>
         </div>
   `;
   
	}
	const price = cart.reduce((acc, item) => {
		const product = products.find((x) => x.id === item.id);
		return acc + (product.price ? product.price * item.quantity : 0);
	}, 0);
	totalPrice.textContent = `$${price.toFixed(2)}`;

	const qty = cart.reduce((acc, item) => acc + item.quantity, 0);
	totalQty.textContent = qty;
  deleteButton()
};
generateCart();



function deleteButton() {
  const delBtns = document.querySelectorAll(".js-del-btn");
  delBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const cartId = btn.dataset.cartId;
		removeFromCart(cartId);
    generateCart();
    updateCart();
	});
});
}
deleteButton();
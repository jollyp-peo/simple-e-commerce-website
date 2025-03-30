export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export let addToCart = (productId)=>{
  const id = parseInt(productId);
  const  search = cart.find(cartItem => cartItem.id === id);
  if(search){
    search.quantity += 1;
  } else {
    cart.push({id: id, quantity: 1});
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (cartId) => {
  const id = parseInt(cartId);
  const cartItem = cart.find((item) => item.id === id);
  if (!cartItem) return;
  if (cartItem.quantity > 1) {
    cartItem.quantity  -= 1;
  }else{
    cart.splice(cartItem, 1);
   
  }
  
};
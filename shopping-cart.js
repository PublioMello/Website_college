// Initialize quantities for each size
// used from the sizes becuase it was supposed to show each size in the cart but I couldn't finish it
let cart = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
};

// Function to add to the cart based on size
function addToCart(size) {
  // Increment the corresponding size quantity
  cart[size]++;

  // Calculate the total number of items in the cart
  let totalItems = cart.S + cart.M + cart.L + cart.XL;

  // Update the displayed quantity in the cart
  document.getElementById("cart-quantity").textContent = totalItems;
}

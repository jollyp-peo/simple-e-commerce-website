# E-Commerce Website

## Overview
This project is a simple e-commerce website where users can browse products, add items to the cart, and search for products. It is built using HTML, CSS, and JavaScript.

## Features
- Display products dynamically from a JavaScript module.
- Add products to the cart.
- Update cart quantity dynamically.
- Save cart items in local storage.
- Search functionality to filter products.

## Project Structure
```
/ (Root Directory)
│── index.html
│── styles.css
│── script.js
│── /data
│   ├── product.js
│   ├── cart.js
│── checkout.js
```

## JavaScript Modules
This project follows a modular approach, splitting different functionalities into separate JavaScript files:

- **product.js**: Contains the list of products.
- **cart.js**: Handles cart operations such as adding items and updating the cart.
- **checkout.js**: Manages checkout-related functionality.
- **index.js**: Main script that links everything together.

### Importing Modules
JavaScript modules are used to keep the code organized. The following import statement is used:
```js
import { cart, addToCart } from "./data/cart.js";
import { products } from "./data/product.js";
```

## How It Works
1. The `generateProduct()` function dynamically creates product elements from the `products` array.
2. Clicking the "Add to Cart" button adds the product to the cart and updates the total count.
3. The cart data is saved in local storage to persist across sessions.
4. Users can search for products using the search input, which filters the displayed products in real time.

## Usage
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Browse and add products to the cart.
4. Use the search bar to find specific products.
5. Check out when ready.

## Technologies Used
- HTML
- CSS
- JavaScript (ES6 Modules)

## Future Enhancements
- Implement a backend to manage products and orders.
- Improve the UI/UX with better styling.
- Add user authentication and payment integration.

## License
This project is open-source and available under the MIT License.

## Author
jollyp-peo | peter
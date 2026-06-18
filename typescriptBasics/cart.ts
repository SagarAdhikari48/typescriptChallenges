type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const cart: CartItem[] = [];

function addToCart(product: Product, quantity: number = 1): void {
  cart.push({ product, quantity });
}

function calculateTotal(): number {
  let total = 0;
  for (const item of cart) {
    total += item.product.price * item.quantity;
  }
  return total;
}


console.log("Adding products to cart...");
addToCart({ id: 1, name: "Laptop", price: 999.99 }, 1);
addToCart({ id: 2, name: "Headphones", price: 199.99 }, 2);

console.log("Cart items:", cart);
console.log("Total price:", calculateTotal());

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
  const cart = getCart();

  const exists = cart.find((item) => item.id === product.id);

  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseQty = (id) => {
  const cart = getCart();

  const item = cart.find((i) => i.id === id);

  if (item) {
    item.quantity++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseQty = (id) => {
  let cart = getCart();

  cart = cart.map((item) => {
    if (item.id === id) {
      item.quantity--;
    }
    return item;
  });

  cart = cart.filter((item) => item.quantity > 0);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeItem = (id) => {
  const cart = getCart().filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
};
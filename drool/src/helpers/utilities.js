export function calculateAmount(cartItems) {
  let amount = 0;
  cartItems.map((item) => (amount += item.option.price * item.qty));
  return amount;
}

export function formatPrice(price) {
  return new Intl.NumberFormat("tn-TN", {
    style: "currency",
    currency: "TND",
  }).format(price);
}

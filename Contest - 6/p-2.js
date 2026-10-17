function calculateCartTotal(items, taxRate) {
  // Your code here
  const subtotal = items.reduce((total, item) => {
    const discountedPrice =
      item.price * item.quantity * (1 - item.discount / 100);

    return total + discountedPrice;
  }, 0);

  const total = subtotal * (1 + taxRate / 100);

  return Math.round(total * 100) / 100;
}

var products = [
  { ID: 1, price: 1280 },
  { ID: 2, price: 1980 },
  { ID: 3, price: 1580 },
  { ID: 4, price: 980 },
  { ID: 5, price: 1680 },
  { ID: 6, price: 1780 },
];
products.sort(function (a, b) {
  return a.price - b.price;
});
console.log(products);

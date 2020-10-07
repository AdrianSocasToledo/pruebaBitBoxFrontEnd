export default function editItem(
  id,
  description,
  price,
  supplier,
  priceReduction
) {
  const url = "http://localhost:8080/items/editItem";
  const request = {
    idItem: id,
    description: description,
    price: price,
    suppliers: supplier,
    priceReductions: priceReduction,
  };
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}

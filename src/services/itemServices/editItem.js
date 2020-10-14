export default function editItem(
  user,
  id,
  description,
  price,
  suppliers,
  priceReduction
) {
  const url = "http://localhost:8080/items/editItem";
  console.log("pr edit", priceReduction);
  const request = {
    idItem: id,
    description: description,
    price: price,
    suppliers: suppliers,
    priceReduction: priceReduction,
  };
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  });
}

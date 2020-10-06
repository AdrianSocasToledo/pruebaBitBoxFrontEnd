export default function createItem(itemCode, description, price) {
  const url = "http://localhost:8080/items/createItem";
  const item = {
    itemCode: itemCode,
    description: description,
    price: price,
    creator: 1,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json",
    },
  });
}

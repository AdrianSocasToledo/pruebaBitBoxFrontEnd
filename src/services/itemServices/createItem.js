export default function createItem(user, itemCode, description, price) {
  const url = "http://localhost:8080/items/createItem";
  const item = {
    itemCode: itemCode,
    description: description,
    price: price,
    creator: {
      userName: user.userName,
    },
  };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  });
}

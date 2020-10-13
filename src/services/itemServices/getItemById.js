export default function getItemById(user, id) {
  const url = `http://localhost:8080/items/getItemById/${id}`;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => response);
}

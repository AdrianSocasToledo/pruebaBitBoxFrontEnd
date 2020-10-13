export default function getItems(user) {
  const url = "http://localhost:8080/items/getItems";
  return fetch(url, {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => response);
}

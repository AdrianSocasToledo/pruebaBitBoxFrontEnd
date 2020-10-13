export default function activateItem(user, id) {
  const url = `http://localhost:8080/items/activateItem/${id}`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  });
}

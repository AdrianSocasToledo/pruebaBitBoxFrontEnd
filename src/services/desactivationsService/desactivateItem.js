export default function desactivateItem(user, item, reason) {
  const url = "http://localhost:8080/items/desactivateItem";
  const request = {
    reason: reason,
    idItem: item.idItem,
    idUser: item.creator.idUser,
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

export default function desactivateItem(item, reason) {
  const url = "http://localhost:8080/items/desactivateItem";
  const request = {
    reason: reason,
    idItem: item.idItem,
    idUser: item.creator.idUser,
  };
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}

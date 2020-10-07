export default function activateItem(id) {
  const url = `http://localhost:8080/items/activateItem/${id}`;
  fetch(url, {
    method: "PUT",
  });
}

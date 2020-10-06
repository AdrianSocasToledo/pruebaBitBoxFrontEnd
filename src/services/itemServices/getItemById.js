export default function getItemById(id) {
  const url = `http://localhost:8080/items/getItemById/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response);
}

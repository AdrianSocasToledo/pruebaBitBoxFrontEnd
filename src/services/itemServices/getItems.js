export default function getItems() {
  const url = "http://localhost:8080/items/getItems";
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response);
}

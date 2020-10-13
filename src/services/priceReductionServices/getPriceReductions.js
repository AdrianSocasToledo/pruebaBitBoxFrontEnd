export default function getPriceReductions(user) {
  const url = "http://localhost:8080/priceReductions/getPriceReductions";
  return fetch(url, {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => response.data);
}

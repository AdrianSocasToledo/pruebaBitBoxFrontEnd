export default function getSuppliers(user) {
  const url = "http://localhost:8080/suppliers/getSuppliers";
  return fetch(url, {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => response.data);
}

export default function login(username, password) {
  const url = "http://localhost:8080/auth/login";
  const request = {
    userName: username,
    password: password,
  };
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => response);
}

export default function hello() {
  const welcome = document.createElement("h1");
  welcome.textContent = "Hello";
  return welcome;
}

document.body.appendChild(hello());

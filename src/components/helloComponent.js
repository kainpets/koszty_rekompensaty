export default function Hello() {
  const hello = document.createElement("h1");
  hello.textContent = "Hello";
  return hello;
}

document.body.appendChild(Hello());

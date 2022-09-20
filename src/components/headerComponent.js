export default function header() {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Kalkulator kosztów rekompensaty";
  header.appendChild(title);

  return header;
}

document.body.appendChild(header());

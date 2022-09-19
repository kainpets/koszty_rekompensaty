export default function header() {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Kalkulator kosztów rekompensaty";
  header.appendChild(title);

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Termin wymagalności zobowiązania: ";
  header.appendChild(formTitle);

  return header;
}

document.body.appendChild(header());

export default function form() {
  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("main");
  sectionTitle.textContent = "Wybierz termin wymagalności zobowiązania: ";
  document.body.appendChild(sectionTitle);

  const form = document.createElement("form");
  form.id = "form";
  form.classList.add("main");

  const userDateInput = document.createElement("input");
  userDateInput.id = "year";
  userDateInput.setAttribute("type", "date");
  userDateInput.setAttribute("name", "date");
  userDateInput.setAttribute("min", "2002-02-01");
  form.appendChild(userDateInput);

  return form;
}

document.body.appendChild(form());

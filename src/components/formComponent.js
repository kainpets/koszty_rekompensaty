export default function form() {
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Termin wymagalności zobowiązania: ";
  document.body.appendChild(sectionTitle);

  const form = document.createElement("form");
  form.id = "form";

  const userDateInput = document.createElement("input");
  userDateInput.id = "year";
  userDateInput.setAttribute("type", "date");
  userDateInput.setAttribute("name", "date");
  userDateInput.setAttribute("required", "");
  form.appendChild(userDateInput);

  return form;
}

document.body.appendChild(form());

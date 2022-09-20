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

  const submitButton = document.createElement("input");
  submitButton.id = "submit-btn";
  submitButton.setAttribute("type", "submit");

  form.appendChild(submitButton);

  return form;
}

document.body.appendChild(form());

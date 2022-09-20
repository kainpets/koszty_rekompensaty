export default function radio() {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Wybierz wysokość zaległego zobowiązania:";

  const inputUnder5000 = document.createElement("input");
  inputUnder5000.setAttribute("type", "radio");
  inputUnder5000.setAttribute("name", "debt");
  inputUnder5000.id = "under-5000";
  fieldset.appendChild(inputUnder5000);

  const labelUnder5000 = document.createElement("label");
  labelUnder5000.setAttribute("for", "under-5000");
  labelUnder5000.textContent = "mniej niż 5.000 zł";
  fieldset.appendChild(labelUnder5000);

  const inputOver5000 = document.createElement("input");
  inputOver5000.setAttribute("type", "radio");
  inputOver5000.setAttribute("name", "debt");
  inputOver5000.id = "under-50000";
  fieldset.appendChild(inputOver5000);

  const labelOver5000 = document.createElement("label");
  labelOver5000.setAttribute("for", "under-5000");
  labelOver5000.textContent = "mniej niż 50.000 zł";
  fieldset.appendChild(labelOver5000);

  const inputOver50000 = document.createElement("input");
  inputOver50000.setAttribute("type", "radio");
  inputOver50000.setAttribute("name", "debt");
  inputOver50000.id = "over-50000";
  fieldset.appendChild(inputOver50000);

  const labelOver50000 = document.createElement("label");
  labelOver50000.setAttribute("for", "under-5000");
  labelOver50000.textContent = "równa lub większa niż 50.000 zł";
  fieldset.appendChild(labelOver50000);

  fieldset.appendChild(legend);

  return fieldset;
}

document.body.appendChild(radio());

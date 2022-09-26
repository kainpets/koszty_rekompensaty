export default function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tr = document.createElement("tr");
  thead.appendChild(tr);

  const th1 = createTh();
  th1.textContent = "40 €";
  tr.appendChild(th1);

  const th2 = createTh();
  th2.textContent = "70 €";
  tr.appendChild(th2);

  const th3 = createTh();
  th3.textContent = "100 €";
  tr.appendChild(th3);

  const tbody = document.createElement("tbody");
  tbody.id = "result-list";
  table.appendChild(tbody);

  return table;
}

function createTh() {
  const th = document.createElement("th");

  return th;
}

document.body.appendChild(createTable());

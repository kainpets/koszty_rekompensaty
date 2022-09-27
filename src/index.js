import "./style.css";
import "./components/headerComponent";
import "./components/formComponent";
import "./components/tableComponent";
import "./components/footerComponent";

// The date input from the user is sent to the NBP API that
// checks what was the exchange rate of euro for the last day
// of the previous month.

function getUserDate() {
  const form = document.getElementById("form");

  form.addEventListener("change", (event) => {
    event.preventDefault();
    const date = document.getElementById("year").value;
    console.log(date);

    getData(date).then((data) => console.log("resolved:", data));
    displayResults();

    return date;
  });
}

function displayResults() {
  const resultList = document.getElementById("result-list");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>hi</td>
  <td>wtf</td>
  <td>ffs</td>
  `;

  resultList.appendChild(row);
}

async function getData(userDate) {
  const response = await fetch(
    `http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json
    `
  );
  const data = await response.json();

  return data;
}

function convertMonth(month) {
  switch (month) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
  }
}

getUserDate();

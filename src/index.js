import "./style.css";
import "./components/headerComponent";
import "./components/formComponent";
import "./components/tableComponent";
import "./components/footerComponent";
import moment from "moment/moment";

// The date input from the user is sent to the NBP API that
// checks what was the exchange rate of euro for the last day
// of the previous month.

function getLastDayOfPreviousMonth() {
  const form = document.getElementById("form");

  form.addEventListener("change", (event) => {
    event.preventDefault();
    const userDate = document.getElementById("year").value;
    const lastDayOfPreviousMonth = moment(userDate)
      .subtract(1, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
    getData(lastDayOfPreviousMonth).then((data) => {
      const euroExchangeRate = decimalAdjust("floor", data.rates[0].mid, -2);
      console.log(euroExchangeRate);
      displayResults(euroExchangeRate);
    });
  });
}

function displayResults(result) {
  const resultList = document.getElementById("result-list");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${result * 40}</td>
  <td>${result * 70}</td>
  <td>${result * 100}</td>
  `;

  resultList.appendChild(row);
}

async function getData(userDate) {
  const response = await fetch(
    `http://api.nbp.pl/api/exchangerates/rates/a/eur/${userDate}/?format=json
    `
  );
  const data = await response.json();

  return data;
}

function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

getLastDayOfPreviousMonth();

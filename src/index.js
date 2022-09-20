import "./style.css";
import "./components/headerComponent";
import "./components/radioComponent";
import "./components/formComponent";
import "./components/footerComponent";

// The date input from the user is sent to the NBP API that
// checks what was the exchange rate of euro for the last day
// of the previous month.

function getUserDate() {
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const date = new Date(document.getElementById("year").value);
    const month = date.toString().slice(4, 7);
    const year = date.toString().slice(11, 15);
    const finalDate = `${year}-${convertMonth(month)}`;
    getData(finalDate).then((data) => console.log("resolved:", data));

    console.log(finalDate);
    return finalDate;
  });
}

async function getData(userDate) {
  const response = await fetch(
    `http://api.nbp.pl/api/exchangerates/rates/a/eur/${userDate}-04/?format=json`
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

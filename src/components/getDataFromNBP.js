export default async function getData() {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/chf/"
  );
  const data = await response.json();

  return data;
};

getData().then((data) => console.log("resolved:", data));
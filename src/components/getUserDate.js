export default function getUserDate() {
  const submitBtn = document.getElementById("submit-btn");
  
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const date = new Date(document.getElementById("year").value);
    console.log(date);
  })
}

getUserDate();
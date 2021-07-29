var billAmount = document.querySelector("#bill-amount");
var submitBtn = document.querySelector("#submit-btn");
var paidContainer = document.querySelector(".paid-container");


function showBill() {
  console.log(billAmount.value);
  paidContainer.style.display = "block";

}

submitBtn.addEventListener("click", showBill);
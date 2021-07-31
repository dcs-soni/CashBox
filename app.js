//Input Divs
var billAmount = document.querySelector(".bill-amount");
var paidAmount = document.querySelector(".paid-amount");

//Buttons
var billBtn = document.querySelector(".bill-next-btn");
var paidBtn = document.querySelector(".paid-next-btn");

//Statement Div
var statement = document.querySelector(".statement");

//Containers - visible/hidden
var paidContainer = document.querySelector(".paid-container");
var notesContainer = document.querySelector(".notes-container");

function showBill() {
  // console.log(billAmount.value);
  if (billAmount.value < 0) {
    statement.innerHTML = "Errrrror!! Bill can't be less than 0 rupees";
  } else if (billAmount.value == 0) {
    statement.innerHTML = "Bill Amount = 0. You don't have to pay anything";
  } else {
    billBtn.style.display = "none";
    paidContainer.style.display = "block";
    paidBtn.style.display = "block";
  }
}

function showNotes() {
  paidBtn.style.display = "none"; //Hides next btn below paid div

  if (Number(billAmount.value) > Number(paidAmount.value)) {
    console.log("check");
    statement.innerHTML = "Please pay more";
  }

  if (billAmount.value === paidAmount.value) {
    console.log("test");
    statement.style.margin = "2rem";
    statement.innerHTML = "Thank you for paying";
  }

  if (Number(billAmount.value) < Number(paidAmount.value)) {
    console.log("testttt");
    notesContainer.style.display = "block";

    var notes = [2000, 500, 100, 20, 10, 5, 1];

    var returnAmt = paidAmount.value - billAmount.value;
    console.log("return", returnAmt);
    // let count  = 0;

    for (var i = 0; i < notes.length; i++) {
      if (Math.floor(returnAmt / notes[i]) >= 1) {
        currentNote = notes[i];
        var note = Math.floor(returnAmt / notes[i]);

        console.log("curr", currentNote);
        document.getElementById(`${notes[i]}`).innerText = `${note}`;

        var nextRemaiAmount = returnAmt - note * notes[i];
        var returnAmt = nextRemaiAmount;
      }
    }
  }
}

billBtn.addEventListener("click", showBill);
paidBtn.addEventListener("click", showNotes);

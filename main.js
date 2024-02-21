let totalSeat = 40;
let selectedSeat = 0;
let sessionCount = 0;
let totalTicketPrice = 0;

function changeBG(seatId) {
  document.getElementById(seatId).style.backgroundColor = "green";
}

function updateSeatTable(seatId) {
  // Catching the table
  let seatTable = document.getElementById("seatTable");

  // Creating a <tr> to insert into table
  let newRow = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.classList.add("px-5");
  let col2 = document.createElement("td");
  col2.classList.add("px-5");
  let col3 = document.createElement("td");
  col3.classList.add("px-5");

  // Setting the values of the <td>
  col1.innerText = seatId;
  col2.innerText = "Eco";
  col3.innerText = "550";

  // adding them to the <tr> tag
  newRow.appendChild(col1);
  newRow.appendChild(col2);
  newRow.appendChild(col3);

  // Finally adding it to the table!
  seatTable.appendChild(newRow);
}

function clearTable() {
  // catch the table
  var table = document.getElementById("seatTable");
  var rows = table.getElementsByTagName("tr");

  // Step 3: Loop through each <tr> element and remove it
  for (var i = rows.length - 1; i > 0; i--) {
    table.removeChild(rows[i]);
  }
}

function updateSeatCount(num, seat) {
  // Updating seat count in table
  let seatCountElement = document.getElementById("seatCount");
  seatCountElement.innerText = num;
  // Updating how many seats left on bus in destination section
  let busSeatCount = document.getElementById("busSeatCount");
  // totalSeat = parseInt(parseInt(totalSeat) - parseInt(num));
  busSeatCount.innerText = seat;
}

function updateTicketPrice(totalPrice) {
  let a = document.getElementById("ticketFare");
  a.innerText = totalPrice;
  console.log(totalTicketPrice);
}

function couponCheck() {
  let couponCode = document.getElementById("couponID").value;
  console.log("Coupon code : " + couponCode);
  if (couponCode === "NEW15") {
    totalTicketPrice = totalTicketPrice - parseInt(totalTicketPrice * 0.15);
    updateTicketPrice(totalTicketPrice);
    let couponCodeSection = document.getElementById("couponCodeSection");
    couponCodeSection.classList.add("hidden");
  }
  if (couponCode === "COUPLE20") {
    totalTicketPrice = totalTicketPrice - parseInt(totalTicketPrice * 0.2);
    updateTicketPrice(totalTicketPrice);
    let couponCodeSection = document.getElementById("couponCodeSection");
    couponCodeSection.classList.add("hidden");
  }
  // let b = "...";
  // document.getElementById('couponID').value = b;
}

function seatSelection(seatId) {
  sessionCount = parseInt(sessionCount + 1);
  // Checking if the seat is already bought or not
  let seatBg = document.getElementById(seatId).style.backgroundColor;
  if (seatBg == "green") {
    alert("This seat is bought!");
  } else {
    if (selectedSeat < 4) {
      selectedSeat = parseInt(selectedSeat + 1);
      totalTicketPrice = parseInt(totalTicketPrice + 550);
      totalSeat = parseInt(totalSeat - 1);
      console.log("total seat : " + selectedSeat + " left seat : " + totalSeat);

      changeBG(seatId);
      updateSeatTable(seatId);
      updateSeatCount(selectedSeat, totalSeat);
      updateTicketPrice(totalTicketPrice);
    } else {
      alert("You can't buy more than 4 tickets!");
    }
    if(selectedSeat === 0) {
        document.getElementById("nextBtn").classList.add("hidden");
    } else {
        document.getElementById("nextBtn").classList.remove("hidden");
    }
  }
}

function success() {
  let navbarSection = document.getElementById("navbarSection");
  navbarSection.classList.add("hidden");
  let heroSection = document.getElementById("heroSection");
  heroSection.classList.add("hidden");
  let couponSection = document.getElementById("couponSection");
  couponSection.classList.add("hidden");
  let ticketSection = document.getElementById("ticketSection");
  ticketSection.classList.add("hidden");
  let modeSection = document.getElementById("modeSection");
  modeSection.classList.remove("hidden");
  sessionCount = 0;
}

function buyAgain() {
  selectedSeat = 0;
  let navbarSection = document.getElementById("navbarSection");
  navbarSection.classList.remove("hidden");
  let heroSection = document.getElementById("heroSection");
  heroSection.classList.remove("hidden");
  let couponSection = document.getElementById("couponSection");
  couponSection.classList.remove("hidden");
  let ticketSection = document.getElementById("ticketSection");
  ticketSection.classList.remove("hidden");
  document.getElementById("couponSection").classList.remove("hidden");
  let couponCodeSection = document.getElementById("couponCodeSection");
  couponCodeSection.classList.remove("hidden");
  let b = "";
  document.getElementById("couponID").value = b;
  let aNum = parseInt("0");
  updateTicketPrice(aNum);
  totalTicketPrice = 0;
  document.getElementById("seatCount").innerText = 0;

  // Clearing the table!
  var table = document.getElementById("seatTable");
  var rows = table.getElementsByTagName("tr");
  for (var i = rows.length - 1; i > 0; i--) {
    table.removeChild(rows[i]);
  }

  let modeSection = document.getElementById("modeSection");
  modeSection.classList.add("hidden");
}

// const numberInput = document.getElementById("passengerPhoneNumber");
// if (numberInput != NaN) {
//   numberInput.addEventListener("input", function () {
//     if (numberInput.length > 0) {
//       if (selectedSeat > 0) {
//         document.getElementById("nextBtn").removeAttribute("disabled");
//       } else {
//         document
//           .getElementById("nextBtn")
//           .appendChild(document.createAttribute("disabled"));
//       }
//     }
//   });
// }

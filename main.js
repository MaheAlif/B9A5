let totalSeat = 40;
let selectedSeat = 0;

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

function seatSelection(seatId) {
  // Checking if the seat is already bought or not
  let seatBg = document.getElementById(seatId).style.backgroundColor;
  if (seatBg == "green") {
    alert("This seat is bought!");
  } else {
    if (selectedSeat <= 4) {
      selectedSeat = parseInt(selectedSeat + 1);
      totalSeat = parseInt(totalSeat - 1);
      console.log("total seat : " + selectedSeat + " left seat : " + totalSeat);

      changeBG(seatId);
      updateSeatTable(seatId);
      updateSeatCount(selectedSeat, totalSeat);
    } else {
      alert("You can't buy more than 4 tickets!");
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

  // Step 1: Get a reference to the table
  var table = document.getElementById("seatTable");

  // Step 2: Get a reference to all <tr> elements inside the table
  var rows = table.getElementsByTagName("tr");

  // Step 3: Loop through each <tr> element and remove it
  for (var i = rows.length - 1; i > 0; i--) {
    table.removeChild(rows[i]);
  }

  let modeSection = document.getElementById("modeSection");
  modeSection.classList.add("hidden");
}

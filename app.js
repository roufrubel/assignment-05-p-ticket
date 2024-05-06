let seatCount = 0;
const seats = document.getElementsByClassName("seat");
for (const seat of seats) {
  seat.addEventListener("click", function handleSelect(event) {    
    const singleSeatBtn = (event.target);
    // add seat bg-color
    singleSeatBtn.classList.add("bg-selected");
    // calculate left seat num
    let leftSeatValue = getValue('left-seats-num');
    leftSeatValue -= 1;
    setInnerText('left-seats-num', leftSeatValue);
    // calculate selected seat num
    let selectedSeatValue = getValue('selected-seat-num');
    selectedSeatValue += 1;
    setInnerText('selected-seat-num', selectedSeatValue);

    // creating selected seat name list
    const selectedSeatContainer = document.getElementById("selected-seat-name-list");
    const selectedSeatDiv = document.createElement("div");
    selectedSeatDiv.classList = `flex justify-between items-center mt-4 mb-4`;
    const seatNameP = document.createElement("p");
    seatNameP.innerText = singleSeatBtn.innerText;
    const seatClassP = document.createElement("p");
    seatClassP.innerText = 'Economy';
    const seatPriceP = document.createElement("p");
    seatPriceP.innerText = 550;

    // append selected seat name list
    selectedSeatDiv.appendChild(seatNameP);
    selectedSeatDiv.appendChild(seatClassP);
    selectedSeatDiv.appendChild(seatPriceP);
    selectedSeatContainer.appendChild(selectedSeatDiv);

    // total price update
    const selectedSeatTotalPrice = selectedSeatValue * 550;
    setInnerText('total-price', selectedSeatTotalPrice);
    setInnerText('grand-total', selectedSeatTotalPrice);




    // <div class="flex justify-between items-center mt-4 mb-4">
    //             <p>C2</p>
    //             <p>Economy</p>
    //             <p>550</p>
    //           </div>
    

//     seatCount += 1;
//     const budget = getValue("budget");

//     const placeName = event.target.parentNode.childNodes[1].innerText;
//     const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
//     if (budget - parseInt(price) < 0) {
//       alert("Low Budget Earn Moeny");
//       return;
//     }
//     const selectedContainer = document.getElementById(
//       "selected-place-container"
//     );
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     p.innerText = placeName;

//     const p2 = document.createElement("p");
//     p2.innerText = price;

//     li.appendChild(p);
//     li.appendChild(p2);
//     selectedContainer.appendChild(li);
//     totalPrice("total-cost", price);
//     event.target.parentNode.parentNode.style.backgroundColor = "gray";
//     event.target.setAttribute("disabled", true);
//     setInnerText("budget", budget - parseInt(price));
//     setInnerText("cart-count", seatCount);

  });


}




function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
  grandTotal("other");
}

// function grandTotal(category) {
//   console.log(category);
//   const convertTotal = getValue("total-cost");
//   if (category == "bus") {
//     setInnerText("grand-total", convertTotal + 100);
//   } else if (category == "train") {
//     setInnerText("grand-total", convertTotal - 200);
//   } else if (category == "flight") {
//     setInnerText("grand-total", convertTotal + 500);
//   } else {
//     setInnerText("grand-total", convertTotal);
//   }
// }

function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}













// // Define the per-seat price
// const perSeatPrice = 550;

// // Initialize an empty array to store booked seats
// let bookedSeats = [];

// // Function to book a seat
// function bookSeat(seatNumber) {
//   // Check if the seat is already booked
//   if (bookedSeats.includes(seatNumber)) {
//     console.log(`Seat ${seatNumber} is already booked.`);
//   } else {
//     // Add the seat to the booked seats array
//     bookedSeats.push(seatNumber);
//     console.log(`Seat ${seatNumber} booked successfully.`);
//   }
// }

// // Function to calculate total price
// function calculateTotalPrice() {
//   // Calculate the total price based on the number of booked seats
//   const totalPrice = bookedSeats.length * perSeatPrice;
//   return totalPrice;
// }

// // Example usage
// bookSeat(1); // Book seat number 1
// bookSeat(2); // Book seat number 2
// bookSeat(1); // Attempt to book seat number 1 again (already booked)

// // Calculate and log the total price
// const totalPrice = calculateTotalPrice();
// console.log(`Total price: ৳${totalPrice}`);





// // Function to book a bus seat
// function bookSeat(seatNumber) {
//     // Check if the seat is already booked
//     const seat = document.getElementById(`seat${seatNumber}`);
//     if (seat.style.backgroundColor === 'rgb(29, 209, 0)') {
//       console.log(`Seat ${seatNumber} is already booked.`);
//     } else {
//       // Book the seat
//       seat.style.backgroundColor = '#1DD100';
//       console.log(`Seat ${seatNumber} booked successfully.`);
//     }
//   }
  
//   // Function to unbook a bus seat
//   function unbookSeat(seatNumber) {
//     const seat = document.getElementById(`seat${seatNumber}`);
//     seat.style.backgroundColor = ''; // Reset the background color
//     console.log(`Seat ${seatNumber} unbooked.`);
//   }
  
//   // Function to handle seat selection
//   function handleSeatSelection(event) {
//     const seatNumber = event.target.id.replace('seat', ''); // Extract the seat number from the element ID
//     bookSeat(seatNumber); // Book the selected seat
//   }
  
//   // Example usage
//   // Assume you have HTML elements with IDs like seat1, seat2, seat3, etc.
//   // For example: <div id="seat1">1</div>, <div id="seat2">2</div>, etc.
  
//   // Add event listeners to each seat element
//   const seats = document.querySelectorAll('.seat');
//   seats.forEach(seat => {
//     seat.addEventListener('click', handleSeatSelection);
//   });
  
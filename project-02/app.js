// Get DOM Elements
const container = document.querySelector(".container");// Query Selctor 
//returns the first element 

//Query Selector all gets all the elements with the class of seat present
//in the .row class excluding the seats with the class of occupied
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value) ;

function updateSelectedCount()  {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}


container.addEventListener("click", e => {
    if(e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected")
        updateSelectedCount();
    }
})

movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value); 
    updateSelectedCount()
})

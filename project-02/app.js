// Get DOM Elements
//querySelector returns the first element. 
const container = document.querySelector(".container");// Query Selctor 

//Query Selector all gets all the elements with the class of seat present
//in the .row class excluding the seats with the class of occupied
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

populateUI()


let ticketPrice = parseInt(movieSelect.value) ;

function updateSelectedCount()  {
    //Get all the divs with the class of selected. Display the values in NodeList
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    
    /*
    Store all the selected seats inside an array by creating a copy using spread operator
    all our NodeList values will be returned in the array. 
    Start map on the array. Map function accepts an arguments which is a  function
    Inside the function we pass the seats variable created at line 7 and get the index 
    of the values on those seats which were selected 
    */
    let seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    
    // Same code with different approach of arrow function
    // seatsIndex = [] [...selectedSeats].map(function(seats){
    //     return [...seats].indexOf(seat)
    // })
    const selectedSeatsCount = selectedSeats.length;

    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}


//Save the slected movie data to local storage
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);

}                                                                                                                                                                      

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))
    console.log(selectedSeats)
    // Check if there is any data inside selectedSeats && there is not an empty array
    if(selectedSeats !== null && selectedSeats.length > 0){
    //Access all the seats and run forEach loop to update all the seats. 
    //forEach takes a input which is a function. The function further takes two inputs 
    //and which is a seat and its index 
    // 
        seats.forEach((seat,index)=> {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected")
            }
        })  
    }
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }

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
    setMovieData(e.target.selectedIndex, e.target.value); 
    updateSelectedCount()
})

//Calling the function again and updating Selected seats and count based on the 
//value present in local storage
updateSelectedCount()

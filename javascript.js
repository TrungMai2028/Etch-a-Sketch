// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    
    let size;
    do {
        let input = prompt("Please enter the size between 1 and 100:");
        size = Number(input); // Convert the input to a number
    } while (isNaN(size) || size < 1 || size > 100);
  
    // Create a 16x16 grid (256 squares)
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        container.appendChild(square);

        //if mouse touch boundary, turn the background into red
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    }   
});


  
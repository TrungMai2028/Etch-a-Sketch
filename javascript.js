// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
  
    // Create a 16x16 grid (256 squares)
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        container.appendChild(square);

        //if mouse touch boundary, turn the background into red
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    }   
});


  
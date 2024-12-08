// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const reSize = document.querySelector(".resize");

    function generateGrid(size){
        //change the size of container
        container.innerHTML = "";

        container.style.width = `${size * 20}px`;
        container.style.height = `${size * 20}px`;


        // Create a 16x16 grid (256 squares)
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            container.appendChild(square);

            //if mouse touch boundary, turn the background into red
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red";
            });
        } 
    }

    let size = 16; // Default size
    generateGrid(size);

    // Resize grid on button click
    reSize.addEventListener("click", () => {
        let newSize;
        do {
            const input = prompt("Please enter the size between 1 and 100:");
            newSize = Number(input);
        } while (isNaN(newSize) || newSize < 1 || newSize > 100);

        generateGrid(newSize);
    });
   
});


  
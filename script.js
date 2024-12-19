// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const matrix = document.getElementById('matrix');
    const numColumns = Math.floor(window.innerWidth / 18);  // Number of columns (18px wide per column)

    // Function to create the binary rain effect
    function createColumn(x) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.left = `${x}px`;
        matrix.appendChild(column);

        // Variables to control the movement of the column
        let y = 0;
        const speed = Math.random() * 5 + 1;  // Random speed for each column
        let textStack = [];  // Array to hold the stack of characters

        // Generate and animate the binary rain
        function animate() {
            y += speed;
            column.style.top = `${y}px`;

            // Reset column when it reaches the bottom
            if (y > window.innerHeight) {
                y = -100;  // Reset to start position above screen
            }

            // Create random binary characters in the column
            if (textStack.length > 30) {
                textStack.shift();  // Remove the oldest character when the stack grows too long
            }

            textStack.push(Math.random() > 0.5 ? '1' : '0'); // Random binary character

            // Render the stack of characters inside the column
            column.innerHTML = '';
            textStack.forEach(char => {
                const charElement = document.createElement('span');
                charElement.textContent = char;
                column.appendChild(charElement);
            });

            // Repeat the animation
            requestAnimationFrame(animate);
        }

        animate();  // Start the column animation
    }

    // Create columns for the binary rain
    for (let i = 0; i < numColumns; i++) {
        createColumn(i * 18);  // Spacing of 18px between columns (adjusted for a more packed look)
    }
});

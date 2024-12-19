// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const matrix = document.getElementById('matrix');
    const numColumns = Math.floor(window.innerWidth / 20);  // Number of columns

    // Function to create the binary rain effect
    function createColumn(x) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.style.left = `${x}px`;
        matrix.appendChild(column);

        // Variables to control the movement of the column
        let y = 0;
        const speed = Math.random() * 5 + 1;  // Random speed for each column

        // Generate and animate the binary rain
        function animate() {
            y += speed;
            column.style.top = `${y}px`;

            // Reset column when it reaches the bottom
            if (y > window.innerHeight) {
                y = -100;  // Reset to start position above screen
            }

            // Create random binary characters in the column
            column.innerHTML = '';
            for (let i = 0; i < 15; i++) {
                const char = document.createElement('span');
                char.textContent = Math.random() > 0.5 ? '1' : '0';
                column.appendChild(char);
            }

            // Repeat the animation
            requestAnimationFrame(animate);
        }

        animate();  // Start the column animation
    }

    // Create columns for the binary rain
    for (let i = 0; i < numColumns; i++) {
        createColumn(i * 20);  // Spacing of 20px between columns
    }
});

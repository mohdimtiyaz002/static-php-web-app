// Get the reference to the button and paragraph elements
const colorButton = document.getElementById('colorButton');
const textParagraph = document.getElementById('textParagraph');

// Add a click event listener to the button
colorButton.addEventListener('click', function() {
    // Generate a random color
    const randomColor = getRandomColor();

    // Change the text color of the paragraph
    textParagraph.style.color = randomColor;
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

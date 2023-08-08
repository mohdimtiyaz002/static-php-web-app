const colorButton = document.getElementById('colorButton');
const textParagraph = document.getElementById('textParagraph');

colorButton.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    textParagraph.style.color = randomColor;
});

const button = document.getElementById('btn');

const randomNumber = () => {
    const inputNumber = document.getElementById('randomNumber').value;
    const shapeOfColor = document.getElementById('round');
    
    if(inputNumber === '') {
        alert('You did not enter a valid number');
    } else if(inputNumber < 0 || inputNumber > 255) {
        alert('Please enter a number between 0 and 255');
    } else{
        const r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        const g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        shapeOfColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}


//Add event listener to Button
button.addEventListener('click', randomNumber);



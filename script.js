// Etch - A - Sketch

// 16 × 16 divs: 

for(let i = 0; i < 16 ; i++){

    for(let j = 0; j < 16 ; j++ ){
    const horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('inner');
    document.querySelector('.container').appendChild(horizontalDiv);

}
}

// Leaving trail:

const cells = document.querySelectorAll('.inner');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('trail');
    });
});
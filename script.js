// Etch - A - Sketch

function setRowColumn(){

    // To clear canvas each time the button is clicked
    document.querySelector('.container').innerHTML = '';

    // Asking for number of grid:
    const row = parseInt(prompt('Enter Number of Row (1-200): '));
    const column = parseInt(prompt('Enter Number of Column (1-200): '));

    while( 
        isNaN(row) || isNaN(column) ||
        row < 1 || row > 200 ||
        column < 1 || column > 200
    ){
        alert('Please Enter Numbers Between 1 to 200');
        return;
    }

    // 16 × 16 divs: 

    for(let i = 0; i < row ; i++){

        for(let j = 0; j < column ; j++ ){
        const horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('inner');
        horizontalDiv.style.width = (800 / row) + "px";
        horizontalDiv.style.height = (800 / column) + "px";
        horizontalDiv.style.border = `${Math.max(1, 4 - row / 8)}px solid hsla(0, 8%, 95%, 1.00)`;
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

}

    // Clear Button:

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    document.querySelector('.btnContainer').appendChild(clearBtn);
    
    clearBtn.addEventListener('click', () => {
        document.querySelectorAll('.inner').forEach( cell => {
            cell.classList.remove('trail');
        })
    })
const container = document.querySelector('#container');

function createGrids(num){
    for ( let i = 1; i <= num*num; i++){
        let grids = document.createElement('div');
        grids.classList.add('grids');
        container.appendChild(grids);
    }
}

createGrids(16);



function mouseOverGrids(){
    const gridsSelects = document.querySelectorAll('.grids');
    gridsSelects.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "blue";
        })
    });
}

const change = document.querySelector('#change');

function changeGrids(){
    change.addEventListener("click",() =>{
        let userInput = prompt("Input a new number from 1 to 100:");
        
        if (userInput > 0 && userInput <= 100) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createGrids(userInput);   
            mouseOverGrids();
            
        }else {
            alert("Please input a valid number from 1 to 100.");
        };      
    });
}


mouseOverGrids();
changeGrids();



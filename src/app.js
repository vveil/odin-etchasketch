// grid.addEventListener('mouseover', () => {
//     grid.classList.remove("bg-black-600");
//     grid.classList.add("bg-cyan-600");
// })
// grid.addEventListener('mouseout', () => {
//     console.log('test')
//     grid.classList.remove("bg-cyan-600")
//     grid.classList.add("bg-black-600");
// })
const drawingColor = "bg-[#EDEDED]"

var mouseDown = false;
document.body.onmousedown = function () {
    mouseDown = true;
}
document.body.onmouseup = function () {
    mouseDown = false;
}

function colorBackground(div) {
    if (mouseDown) {
        div.classList.add(drawingColor)
    }
}

function clearDrawing() {
    const pixel = document.querySelectorAll(".pixel")
    pixel.forEach(el => {
        el.classList.remove(drawingColor)
    })
}

function generateGrid(gridSize) {
    grid.innerHTML = ""
    let gridColStart = `<div class="flex flex-col flex-grow">`
    for (let row = 0; row < gridSize; row++) {
        let gridRowStart = `<div class="flex flex-grow">`
        for (let col = 0; col < gridSize; col++) {
            gridRowStart += `<div class="pixel flex-grow" onmouseover="colorBackground(this)"></div>`
        }
        gridRowStart += `</div>`
        gridColStart += gridRowStart
    }
    gridColStart += '</div'

    grid.innerHTML += gridColStart;
}

let grid = document.querySelector('#grid');
let slider = document.querySelector('#sizeSlider')
generateGrid(slider.value)
let clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', () => {
    clearDrawing()
})

let sizeDisplay = document.querySelector('#sizeDisplay')
slider.addEventListener('change', () => {
    generateGrid(slider.value)
})
slider.onmousemove = (e) => {sizeDisplay.textContent = `${slider.value}x${slider.value}`}
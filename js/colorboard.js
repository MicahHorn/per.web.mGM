const container = document.getElementById('container')
const colors = ['#e74c3c', '#ae44ad', '#3498db', '#e67e22', '#2ecc71']
const counter  = document.querySelector('.counter')
const squares = 2370




let squareslit = 0
for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.id = `${i}`
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => resetColor(square))
}

const cells = document.querySelectorAll('.square')

const inter = setInterval(function(){
    const randomnum = Math.floor(Math.random()*squares)
    element = document.getElementById(`${randomnum}`)
    setColor(element)
    setTimeout(function(){
    element.style.background = '#1d1d1d'
    element.classList.remove('colored')
    }, 20000)
},2)


document.addEventListener('keyup', event =>{
    if(event.code == 'Space'){
        clearInterval(inter)
    }
})


setInterval(function(){
    squareslit = 0
    cells.forEach(cell => {
        if (cell.classList.contains('colored')){
            squareslit++
        }
    })
    counter.innerHTML = squareslit
})



function resetColor(element){
    element.style.background = '#1d1d1d'
    element.classList.remove('colored')
}

function setColor(element){
    const color = getRandomColor()
    element.classList.add('colored')
    element.style.background = color   
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}


const box = document.querySelector('.box')
const container = document.querySelector('.container')
const arrow = document.querySelector('.left-arrow')
const body = document.querySelector('.body')
const leftcont = document.querySelector('.left-container')
const rarrow = document.querySelector('.right-arrow')
const announcement = document.querySelector('.ann')
const colorboard = document.querySelector('.colorboard')


box.addEventListener('click', () => {
    box.classList.toggle('active')
    container.classList.toggle('active')
})

arrow.addEventListener('mouseover', () =>{
    arrow.classList.add('active')
    leftcont.classList.add('active')
    colorboard.classList.add('active')
    rarrow.classList.add('active')
    console.log('hello')
})
rarrow.addEventListener('click', () =>{
    if(arrow.classList.contains('active')){
        arrow.classList.remove('active')
        leftcont.classList.remove('active')
        rarrow.classList.remove('active')
        colorboard.classList.remove('active')
    }
})

setInterval(rotate, 750)
let timing = 0
function rotate(){
    if (timing == 0){
        announcement.classList.remove('inactive')
        announcement.classList.add('active')
        timing = 1
    }
    else{
        announcement.classList.remove('active')
        announcement.classList.add('inactive')
        timing = 0
    }
    
}


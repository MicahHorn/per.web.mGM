const box = document.querySelector('.box')
const container = document.querySelector('.container')
const arrow = document.querySelector('.left-arrow')
const body = document.querySelector('.body')


box.addEventListener('click', () => {
    box.classList.toggle('active')
    container.classList.toggle('active')
})

arrow.addEventListener('mouseover', () =>{
    arrow.classList.add('active')
    body.classList.add('active')

})
body.addEventListener('click', () => {
    if (arrow.classList.contains('active')){
        arrow.classList.remove('active')
    }
})
arrow.addEventListener('click', () =>{
    if(arrow.classList.contains('active')){
        arrow.classList.remove('active')
    }
})
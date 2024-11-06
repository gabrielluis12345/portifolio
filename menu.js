let btnMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrie-menu')
})
Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrie-menu')
})
overlay.addEventListener('click', ()=>{
    Menu.classList.remove('abrie-menu')
})


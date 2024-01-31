let btn_pizza = document.querySelector('button#btn_pizza')
let btn_hamburguer = document.querySelector('button#btn_hamburguer')
let btn_bebidas = document.querySelector('button#btn_bebidas')
let btn_mostrarMais = document.querySelector('button#btn_mostrar-mais')
let btn_mostrarMenos = document.querySelector('button#btn_mostrar-menos')
let menu_mostrarMais = document.querySelector('div.menu_mostrar-mais')

btn_mostrarMenos.classList.add('excluir')
menu_mostrarMais.classList.add('excluir')

btn_mostrarMais.addEventListener('click',(evt)=>{
    btn_mostrarMais.classList.add('excluir')
    menu_mostrarMais.classList.add('adicionar')
    btn_mostrarMenos.classList.add('adicionar')
})

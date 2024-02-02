//Botões mostrar mais e menos:
let btn_mostrarMais = document.querySelector('button#btn_mostrar-mais')
let btn_mostrarMenos = document.querySelector('button#btn_mostrar-menos')
let menu_mostrarMais = document.querySelector('div.menu_mostrar-mais')

btn_mostrarMais.addEventListener('click',(evt)=>{
    btn_mostrarMais.classList.remove('adicionar')
    menu_mostrarMais.classList.add('adicionar')
    btn_mostrarMenos.classList.add('adicionar')
})

btn_mostrarMenos.addEventListener('click',(evt)=>{
    btn_mostrarMais.classList.add('adicionar')
    menu_mostrarMais.classList.remove('adicionar')
    btn_mostrarMenos.classList.remove('adicionar')
})

//Botões menu:
let btn_pizza = document.querySelector('#btn_pizza')
let btn_hamburguer = document.querySelector('#btn_hamburguer')
let btn_bebidas = document.querySelector('#btn_bebidas')

let menu_pizza = [...document.querySelectorAll('#menu_pizza')]
let menu_hamburguer = [...document.querySelectorAll('#menu_hamburguer')]
let menu_bebidas = [...document.querySelectorAll('#menu_bebidas')]

btn_pizza.addEventListener('click',(evt)=>{
    menu_pizza.map((el)=>{
        el.classList.add('adicionar')
    })

    menu_hamburguer.map((el)=>{
        el.classList.remove('adicionar')
    })

    menu_bebidas.map((el)=>{
        el.classList.remove('adicionar')
    })
})

btn_hamburguer.addEventListener('click',(evt)=>{
    menu_pizza.map((el)=>{
        el.classList.remove('adicionar')
    })

    menu_hamburguer.map((el)=>{
        el.classList.add('adicionar')
    })

    menu_bebidas.map((el)=>{
        el.classList.remove('adicionar')
    })
})

btn_bebidas.addEventListener('click',(evt)=>{
    menu_pizza.map((el)=>{
        el.classList.remove('adicionar')
    })

    menu_hamburguer.map((el)=>{
        el.classList.remove('adicionar')
    })

    menu_bebidas.map((el)=>{
        el.classList.add('adicionar')
    })
})
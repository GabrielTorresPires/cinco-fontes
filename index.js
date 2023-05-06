var interagir = window.document.getElementById('link')
interagir.addEventListener('click', clicar)
interagir.addEventListener('mouseenter',entrar)
interagir.addEventListener('mouseout',sair)

function clicar(){
    interagir.style.color = 'yellow'
    interagir.style.background = 'red'
}
function entrar(){
    interagir.style.background = 'orange'
    interagir.style.color = 'blue'
}
function sair(){
    interagir.style.background = 'deeppink'
    interagir.style.color = 'azure'
}
const selecionar = (elemento) => document.querySelector(elemento)
const selecionartudo = (elemento) => document.querySelectorAll(elemento)
const selecionarId = (elemento) => document.getElementById(elemento)




//abrir modal cadastro/login
var btnLogin = selecionarId('btn-abrir-login')
btnLogin.addEventListener('click', function(){
    selecionar('.apagar').style.display='none'
    selecionar('#login-card').style.display='block'
})
selecionar('.btn-abrir-login').addEventListener('click', function(e){
    e.preventDefault()
    selecionar('.cadastro').style.display='none'
    selecionar('.login').style.display='block'
})
selecionar('.btn-abrir-cadastro').addEventListener('click', function(e){
    e.preventDefault()
    selecionar('.cadastro').style.display='block'
    selecionar('.login').style.display='none'
})


selecionar('.cadastro').addEventListener('submit', (e) => {
    e.preventDefault()

    
    //localStorage.nome = selecionarId('nome').value
    //selecionarId('nome-dados1').innerHTML = localStorage.getItem('nome')
    //localStorage.removeItem('nome')
    var user = selecionarId('user-cadastro')
    var senha = selecionarId('senha-cadastro')

    let registros = new Array()
    //verifica se já existe a propriedade
    if(localStorage.hasOwnProperty('registros')){
        //recuperar os valores da propriedade registro no localstorage 
        //converte de string para object
        registros = JSON.parse(localStorage.getItem('registros'))
    }
    //adiciona um novo objeto no array
    registros.push({user_cadastro, senha_cadastro: senha})

    //salva no localstorage
    localStorage.setItem('registros', JSON.stringify(registros))
})

//finalizar cadastro
selecionarId('btn-cadastro').addEventListener('click', function(e){
    e.preventDefault()
    selecionar('.cadastro').style.display='none'
    selecionar('.login').style.display='block'

    return alert('Cadastro efetuado com sucesso')
})





//finalizar login
selecionarId('btn-login').addEventListener('click', function(e){
    var usuario = selecionarId('user-login').value
    var senha = selecionarId('senha-login').value


    e.preventDefault()
    alert('login efetuado com sucesso')
    if(usuario=='admin' && senha=='admin123'){
        window.location.replace('crud.html')
    }else{
        window.location.replace('index.html')
    }
})

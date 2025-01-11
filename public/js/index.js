const form = document.getElementById('form')
const botao = document.getElementById('botao');

botao.addEventListener('mouseup', function() {
    botao.classList.add('button-active'); 
    });
  
    botao.addEventListener('mousedown', function() {
        botao.classList.remove('button-active'); 
    });

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value
    const status = document.getElementById('status')
    
    fetch('http://localhost:3333/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name})
    })
    .then(res => {
        if(res.ok){
            status.innerText = 'Resultado: nome adicionado ao banco de dados!'
        }else{
            status.innerText = 'Resultado: Erro ao publicar nome, muito curto'
            console.log('error')
        }
    })
    .catch(error =>{
        status.innerHTML = 'Resultado:O servidor está desligado no momento'
        console.log('error')
    })
})




const interroga_btn = document.getElementById('interroga')

interroga_btn.addEventListener('mouseover', function(){
    const interroga_container = document.getElementById('interroga-container')
    console.log('deu')
    interroga_container.style.display = 'block'

})
interroga_btn.addEventListener('mouseout', function(){
    const interroga_container = document.getElementById('interroga-container')
    console.log('deu')
    interroga_container.style.display = 'none'
    
})
interroga_btn.addEventListener('click', function(){
    const interroga_container = document.getElementById('interroga-container')
    console.log('deu')
    interroga_container.classList.toggle('hiddle')
})
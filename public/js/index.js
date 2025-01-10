const form = document.getElementById('form')

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
        status.innerHTML = 'Resultado: Erro ao publicar nomeee!'
        console.log('error')
    })
})
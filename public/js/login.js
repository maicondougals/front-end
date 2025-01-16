const form = document.getElementById('form')
const botao = document.getElementById('button');

botao.addEventListener('mouseup', function() {
    botao.classList.add('button-active'); 
    });
  
    botao.addEventListener('mousedown', function() {
        botao.classList.remove('button-active'); 
    });

     
function validarNome(nome) {
    if (nome.length < 1) {
        return 'Preencha o campo "Nome"';
    } else if (nome.length <= 2) {
        return 'Nome deve conter no mínimo 3 caracteres.';
    }
    return null; // Retorna null se não houver erro
}
function validarEmail(email) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email.length < 1) {
        return 'Preencha o campo "Email"';
    } else if (!emailValido) {
        return 'Email inválido';
    } 
    return null; // Retorna null se não houver erro
}

    
form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const status = document.getElementById('status')
    // Validação do nome
    const erroNome = validarNome(name);
    if (erroNome) {
    return status.innerText = `Resultado: ${erroNome}`;
    }

    // Validação do email (formato)
    const erroEmail = validarEmail(mail);
    if (erroEmail) {
    return status.innerText = `Resultado: ${erroEmail}`;
    }
    fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, mail: mail }),
    })
    .then(res => {
        if (res.ok) {
            window.location.href = 'http://127.0.0.1:5500/public/pagina.html'; 
        }else {
            return status.innerText = 'Resultado: Nome ou senha incorretos';
        }

        // **Removido o throw new Error()** 
        return res.json(); // **Movido para fora do if**
    })
    .catch(error => {
        console.error('Erro na requisição:', error); // **Mensagem de erro mais informativa**
        status.innerText = 'Erro na requisição: ' + error; // **Exibe o erro na tela**
    });
})
//-------------
const interroga_btn = document.getElementById('interroga')

interroga_btn.addEventListener('mouseover', function(){
    const interroga_container = document.getElementById('interroga-container')

    interroga_container.style.display = 'block'

})
interroga_btn.addEventListener('mouseout', function(){
    const interroga_container = document.getElementById('interroga-container')

    interroga_container.style.display = 'none'
    
})
interroga_btn.addEventListener('click', function(){
    const interroga_container = document.getElementById('interroga-container')

    interroga_container.classList.toggle('hiddle')
})
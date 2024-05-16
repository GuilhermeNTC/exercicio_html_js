document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    var campoA = parseInt(document.getElementById('campoA').value)
    var campoB = parseInt(document.getElementById('campoB').value)
    
    if(campoB > campoA){
        showMessage('Formulário válido!', 'success')
    } else{
        showMessage('O número em campo B deve ser maior que o número no campo A', 'error')
    }

})

function showMessage(message, className){
    var messageDiv = document.getElementById('message')
    messageDiv.textContent = message
    messageDiv.className = 'message' + className
}
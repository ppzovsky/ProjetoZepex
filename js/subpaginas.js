function mostra(imageNumber) {
    var images = document.getElementsByClassName("selected");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";     
    }
    document.getElementById("image" + imageNumber).style.display = "block";
}

const form = document.querySelector('#modalbody');
        
console.log(form)
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    console.log("entrou");
    const nome = document.getElementById('exampleFormControlInput2').value;
    const email = document.getElementById('exampleFormControlInput1').value;
    const mensagem = document.getElementById('exampleFormControlTextarea1').value;
    
    const passeios = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const checkbox of checkboxes) {
    passeios.push(checkbox.value);
    }

    const data = document.getElementById('data').value;
    const pessoas = document.getElementById('numeroPessoas').value;
    const tipo = document.getElementById('tipo').value;

    const formData = {
    nome,
    email,
    mensagem,
    passeios,
    data,
    pessoas,
    tipo
    };
        
    sendFormToApi(formData);    
    console.log(form);
})

async function sendFormToApi(formData) {
    const url = "https://6632937ac51e14d69564d9af.mockapi.io/test/v1";
    const endpoint = "/agendamento";

    const response = await fetch(url+endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
    })
    console.log(response);
    document.getElementById('formModal').reset();
    
    criarModal();

}
function criarModal() {
    var modal = document.createElement('div');
    modal.classList.add('modal', 'fade', 'd-flex', 'justify-content-center', 'align-items-center');
    modal.setAttribute('tabindex', '-1');

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <p>Reserva efetuada com sucesso, as informações de pagamento serão enviadas ao seu email.</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(modal);
    });
}
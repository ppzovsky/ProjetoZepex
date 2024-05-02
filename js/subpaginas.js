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

    const formData = {
    nome,
    email,
    mensagem,
    passeios
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
}
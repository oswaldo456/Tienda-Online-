const setEditModal = (nombre) => {
}
const deleteUsuario = (nombre) => {
}
const loadUsuario = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/usuarios", false);
    xhttp.send();
    const usuarios = JSON.parse(xhttp.responseText);
    for (let usuario of usuarios) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.apellido}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${usuario.nombre}</h6>

                        <div>nickname: ${usuario.nickname}</div>
                        <div>correo: ${usuario.correo}</div>
                        <div>contraseña: ${usuario.pass}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editusuarioModal" onClick="setEditModal(${usuario.nombre})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('usuarios').innerHTML = document.getElementById('usuarios').innerHTML + x;
    }
}

loadUsuario();
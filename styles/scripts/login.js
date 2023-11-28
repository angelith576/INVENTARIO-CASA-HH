const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}
/* configurando localhost*/
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "394913417892-2mtd5tln4j0c6s3uug2di73uscjilfjg.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt();
}

function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}
/*en esta funciòn, usar el localstorage para guardar el nombre de usuario*/
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);    
    console.log("Nombre del usuario: ", responsePayload.name);
    /*llevamos al usuario al panel del admin*/
    window.location.href = 'admin.html';
}

/* local storage para guardar la información en el navegador*/
localStorage.setItem("Nombre de usuario" , "sabor italia");

/*Aqui muestra la información guardada en el navegador por local storage*/ 
let usuarioGuardado = localStorage.getItem("Nombre de usuario");
console.log("Los usuarios logueados  son: ", usuarioGuardado );
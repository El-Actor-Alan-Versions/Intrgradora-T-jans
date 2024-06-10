document.getElementById('formularioInsano').addEventListener('submit', function(event) {
    event.preventDefault();
    var contrasena = document.getElementById('contrasena').value;
    if (contrasena === 'docente123') {
        location.href = 'indexDocente.html';
    } else if (contrasena === 'admin123') {
        location.href = 'indexAdmin.html';
    } else {
        alert('Contraseña incorrecta');
    }
});
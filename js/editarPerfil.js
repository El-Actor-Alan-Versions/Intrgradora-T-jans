document.getElementById('profile-pic').addEventListener('click', () => {
    document.getElementById('upload-pic').click();
});

document.getElementById('upload-pic').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('profile-pic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profile-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Aquí podrías añadir el código para enviar los datos al servidor
    alert('Perfil actualizado con éxito.');
});
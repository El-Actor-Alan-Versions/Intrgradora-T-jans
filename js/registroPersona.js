
        // Código para llenar el formulario si se desea modificar una persona
        document.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            if (params.has('nombre')) {
                document.getElementById('nombre').value = params.get('nombre');
                document.getElementById('apellido').value = params.get('apellido');
                document.getElementById('edad').value = params.get('edad');
                document.getElementById('email').value = params.get('email');
            }
        });
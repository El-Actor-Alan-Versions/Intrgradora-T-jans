        document.addEventListener('DOMContentLoaded', () => {
            const tablaPersonas = document.getElementById('tablaPersonas');

            // Función para agregar una nueva persona a la tabla
            function agregarPersona(nombre, apellido, edad, email) {
                const nuevaFila = document.createElement('tr');
                nuevaFila.innerHTML = `
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${edad}</td>
                    <td>${email}</td>
                    <td><button class="btn btn-warning btn-modificar">Modificar</button></td>
                    <td><button class="btn btn-danger btn-eliminar">Eliminar</button></td>
                `;
                tablaPersonas.appendChild(nuevaFila);
                agregarEventos();
            }

            // Función para agregar eventos a los botones de modificar y eliminar
            function agregarEventos() {
                const botonesModificar = document.querySelectorAll('.btn-modificar');
                const botonesEliminar = document.querySelectorAll('.btn-eliminar');

                botonesModificar.forEach(boton => {
                    boton.onclick = (e) => {
                        const fila = e.target.parentElement.parentElement;
                        const nombre = fila.children[0].textContent;
                        const apellido = fila.children[1].textContent;
                        const edad = fila.children[2].textContent;
                        const email = fila.children[3].textContent;
                        window.location.href = `registrarPersona.html?nombre=${nombre}&apellido=${apellido}&edad=${edad}&email=${email}`;
                    };
                });

                botonesEliminar.forEach(boton => {
                    boton.onclick = (e) => {
                        const fila = e.target.parentElement.parentElement;
                        fila.remove();
                    };
                });
            }

            agregarEventos();

            // Obtener datos del formulario y agregar una nueva persona
            const params = new URLSearchParams(window.location.search);
            if (params.has('nombre')) {
                const nombre = params.get('nombre');
                const apellido = params.get('apellido');
                const edad = params.get('edad');
                const email = params.get('email');
                agregarPersona(nombre, apellido, edad, email);
            }
        });
    
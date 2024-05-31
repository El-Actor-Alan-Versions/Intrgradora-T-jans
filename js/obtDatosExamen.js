document.addEventListener("DOMContentLoaded", function() {
    const getParameter = (key) => {
        const address = window.location.search; // URL de la ventana actual
        // Objeto de tipo URLSearchParams
        const parameterList = new URLSearchParams(address);
        // Regresa el valor del parámetro “key”
        return parameterList.get(key);
    }

    const Materia = document.getElementById("Materia");
    Materia.innerText = getParameter("materia") || 'No especificado';

    const gradoGrupo = document.getElementById("gradoGrupo");
    gradoGrupo.innerText = getParameter("gradoGrupo") || 'No especificado';
    
    const fecha = document.getElementById("Fecha");
    fecha.innerText = getParameter("fechaAplicacion") || 'No especificado';

    const numeroPreguntas = getParameter("numero") || 'No especificado';
    const preguntas = document.getElementById("Preguntas");
    preguntas.innerText = numeroPreguntas;



});
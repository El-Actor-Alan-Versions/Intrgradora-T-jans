document.addEventListener('DOMContentLoaded', function () {
    const questionsDisplay = document.getElementById('questionsDisplay');
    const data = JSON.parse(localStorage.getItem('questions')) || [];

    data.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('h3');
        questionLabel.textContent = `Pregunta ${index + 1}: ${item.question}`;
        questionDiv.appendChild(questionLabel);

        item.answers.forEach((answer, answerIndex) => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');

            const answerLabel = document.createElement('p');
            answerLabel.textContent = `Respuesta ${answerIndex + 1}: ${answer}`;
            answerDiv.appendChild(answerLabel);

            questionDiv.appendChild(answerDiv);
        });

        questionsDisplay.appendChild(questionDiv);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const questionsDisplay = document.getElementById('questionsDisplay');
    const backButton = document.getElementById('regreso');

    backButton.addEventListener('click', function() {
        window.history.back(); // Redirigir al usuario a la página anterior
    });

    // Resto del código para mostrar preguntas y respuestas
    // ...
});


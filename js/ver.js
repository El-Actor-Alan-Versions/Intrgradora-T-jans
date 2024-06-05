document.addEventListener('DOMContentLoaded', function () {
    const questionsDisplay = document.getElementById('questionsDisplay');
    const urlParams = new URLSearchParams(window.location.search);
    const questionData = JSON.parse(urlParams.get('data')) || [];

    questionData.forEach((item, index) => {
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

document.getElementById('addQuestionButton').addEventListener('click', addQuestion);

function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionIndex = document.querySelectorAll('.question').length;

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('form-group', 'question');

    const label = document.createElement('label');
    label.textContent = 'Pregunta:';
    label.classList.add('form-label');

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'question[]';
    input.required = true;
    input.classList.add('form-control', 'mt-2');

    // Botón para agregar respuestas
    const addAnswerButton = document.createElement('button');
    addAnswerButton.type = 'button';
    addAnswerButton.textContent = 'Respuesta';
    addAnswerButton.classList.add('btn', 'btn-secondary', 'mt-2');
    addAnswerButton.addEventListener('click', () => addAnswer(questionDiv, questionIndex));

    // Contenedor de respuestas
    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container', 'mt-2');

    questionDiv.appendChild(label);
    questionDiv.appendChild(input);
    questionDiv.appendChild(addAnswerButton);
    questionDiv.appendChild(answersContainer);

    questionsContainer.appendChild(questionDiv);
}

function addAnswer(questionDiv, questionIndex) {
    const answersContainer = questionDiv.querySelector('.answers-container');
    const answerIndex = answersContainer.querySelectorAll('.answer').length;

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('form-group', 'answer', 'mt-2');

    const label = document.createElement('label');
    label.textContent = 'Respuesta:';
    label.classList.add('form-label');

    const input = document.createElement('input');
    input.type = 'text';
    input.name = `answer[${questionIndex}][]`;
    input.required = true;
    input.classList.add('form-control');

    answerDiv.appendChild(label);
    answerDiv.appendChild(input);

    answersContainer.appendChild(answerDiv);
}

document.getElementById('addQuestionButton').addEventListener('click', addQuestion);

function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');

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

    questionDiv.appendChild(label);
    questionDiv.appendChild(input);

    questionsContainer.appendChild(questionDiv);
}

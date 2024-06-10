            document.addEventListener('DOMContentLoaded', function () {
            const questionsDisplay = document.getElementById('questionsDisplay');
            const params = new URLSearchParams(window.location.search);

            params.forEach((value, key) => {
                if (key === 'question[]') {
                    const questionDiv = document.createElement('div');
                    questionDiv.classList.add('question');

                    const questionLabel = document.createElement('h3');
                    questionLabel.textContent = `Pregunta: ${value}`;
                    questionDiv.appendChild(questionLabel);

                    questionsDisplay.appendChild(questionDiv);
                } else if (key.startsWith('answer[')) {
                    const answerDiv = document.createElement('div');
                    answerDiv.classList.add('answer');

                    const answerLabel = document.createElement('p');
                    answerLabel.textContent = `Respuesta: ${value}`;
                    answerDiv.appendChild(answerLabel);

                    questionsDisplay.appendChild(answerDiv);
                }
            });
        });
    
let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let wrongList = [];
let totalQuestions = 0;

// Fetch and parse the CSV
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
    });

function startQuiz() {
    totalQuestions = parseInt(document.getElementById('quizLength').value) || questions.length;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    wrongList = [];
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        let q = questions[currentQuestionIndex];
        document.getElementById('question').textContent = q.question;
        document.getElementById('optionA').textContent = q.options[0];
        document.getElementById('optionB').textContent = q.options[1];
        document.getElementById('optionC').textContent = q.options[2];
        document.getElementById('optionD').textContent = q.options[3];
    } else {
        finishQuiz();
    }
}

function nextQuestion() {
    let selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return alert("Select an option!");
    
    let q = questions[currentQuestionIndex];
    if (selected.value == q.answer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
        wrongList.push(q.question);
    }

    currentQuestionIndex++;
    loadQuestion();
}

function finishQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    let ul = document.getElementById('wrongList');
    ul.innerHTML = "";
    for (let q of wrongList) {
        let li = document.createElement('li');
        li.textContent = q;
        ul.appendChild(li);
    }
}
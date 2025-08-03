
// Вопросы теста
const questions = [
    {
        id: 1,
        text: "Как часто за последние 2 недели вы чувствовали упадок сил или усталость?",
        type: "scale",
        answers: [
            { text: "Никогда", value: 0, emoji: "😊" },
            { text: "Редко", value: 1, emoji: "🙂" },
            { text: "Иногда", value: 2, emoji: "😐" },
            { text: "Часто", value: 3, emoji: "😔" },
            { text: "Постоянно", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 2,
        text: "Насколько сложно вам стало получать удовольствие от привычных дел?",
        type: "scale",
        answers: [
            { text: "Все как обычно", value: 0, emoji: "😄" },
            { text: "Немного сложнее", value: 1, emoji: "🙂" },
            { text: "Заметно сложнее", value: 2, emoji: "😐" },
            { text: "Очень сложно", value: 3, emoji: "😕" },
            { text: "Не получаю удовольствия", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 3,
        text: "Как бы вы описали качество своего сна в последнее время?",
        type: "choice",
        answers: [
            { text: "Сплю отлично, просыпаюсь бодрым", value: 0, emoji: "😴" },
            { text: "Иногда бывают проблемы с засыпанием", value: 1, emoji: "😊" },
            { text: "Часто просыпаюсь ночью", value: 2, emoji: "😐" },
            { text: "Сплю плохо, просыпаюсь уставшим", value: 3, emoji: "😔" },
            { text: "Серьезные проблемы со сном", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 4,
        text: "Как часто вы испытываете тревогу или беспокойство?",
        type: "scale",
        answers: [
            { text: "Практически никогда", value: 0, emoji: "😌" },
            { text: "Редко", value: 1, emoji: "🙂" },
            { text: "Иногда", value: 2, emoji: "😐" },
            { text: "Часто", value: 3, emoji: "😰" },
            { text: "Постоянно", value: 4, emoji: "😨" }
        ]
    },
    {
        id: 5,
        text: "Насколько легко вам концентрироваться на работе или учебе?",
        type: "scale",
        answers: [
            { text: "Легко, как всегда", value: 0, emoji: "🎯" },
            { text: "Немного сложнее обычного", value: 1, emoji: "🙂" },
            { text: "Заметно труднее", value: 2, emoji: "😐" },
            { text: "Очень сложно", value: 3, emoji: "😔" },
            { text: "Почти невозможно", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 6,
        text: "Как изменился ваш аппетит за последние недели?",
        type: "choice",
        answers: [
            { text: "Остался прежним", value: 0, emoji: "🍽️" },
            { text: "Немного снизился", value: 1, emoji: "🙂" },
            { text: "Заметно снизился", value: 2, emoji: "😐" },
            { text: "Ем намного больше обычного", value: 2, emoji: "😐" },
            { text: "Почти не хочется есть", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 7,
        text: "Как часто у вас возникают мысли о собственной никчемности?",
        type: "scale",
        answers: [
            { text: "Никогда", value: 0, emoji: "😊" },
            { text: "Очень редко", value: 1, emoji: "🙂" },
            { text: "Иногда", value: 2, emoji: "😐" },
            { text: "Часто", value: 3, emoji: "😔" },
            { text: "Постоянно", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 8,
        text: "Насколько активно вы общаетесь с друзьями и близкими?",
        type: "choice",
        answers: [
            { text: "Как обычно, регулярно", value: 0, emoji: "👥" },
            { text: "Немного реже", value: 1, emoji: "🙂" },
            { text: "Заметно меньше общаюсь", value: 2, emoji: "😐" },
            { text: "Избегаю общения", value: 3, emoji: "😔" },
            { text: "Почти ни с кем не общаюсь", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 9,
        text: "Как вы оцениваете свой уровень энергии утром?",
        type: "scale",
        answers: [
            { text: "Полон энергии", value: 0, emoji: "⚡" },
            { text: "Хорошо", value: 1, emoji: "😊" },
            { text: "Средне", value: 2, emoji: "😐" },
            { text: "Низкий", value: 3, emoji: "😔" },
            { text: "Совсем нет сил", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 10,
        text: "Как часто вы чувствуете безнадежность?",
        type: "scale",
        answers: [
            { text: "Никогда", value: 0, emoji: "🌟" },
            { text: "Редко", value: 1, emoji: "🙂" },
            { text: "Иногда", value: 2, emoji: "😐" },
            { text: "Часто", value: 3, emoji: "😔" },
            { text: "Постоянно", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 11,
        text: "Насколько легко вам принимать решения в последнее время?",
        type: "scale",
        answers: [
            { text: "Легко, как всегда", value: 0, emoji: "✅" },
            { text: "Немного сложнее", value: 1, emoji: "🙂" },
            { text: "Заметно труднее", value: 2, emoji: "😐" },
            { text: "Очень сложно", value: 3, emoji: "😔" },
            { text: "Почти невозможно", value: 4, emoji: "😞" }
        ]
    },
    {
        id: 12,
        text: "Как бы вы оценили свое настроение в целом за последний месяц?",
        type: "scale",
        answers: [
            { text: "Отличное", value: 0, emoji: "😄" },
            { text: "Хорошее", value: 1, emoji: "😊" },
            { text: "Нейтральное", value: 2, emoji: "😐" },
            { text: "Плохое", value: 3, emoji: "😔" },
            { text: "Очень плохое", value: 4, emoji: "😞" }
        ]
    }
];

// Переменные состояния
let currentQuestion = 0;
let answers = [];
let testStarted = false;

// Функции управления тестом
function startTest() {
    testStarted = true;
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('test-container').scrollIntoView({ behavior: 'smooth' });

    showQuestion(0);
    updateProgress();

    // Отправляем событие в аналитику
    if (typeof gtag !== 'undefined') {
        gtag('event', 'test_started', {
            'event_category': 'engagement',
            'event_label': 'depression_test'
        });
    }
}

function showQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('question-container');

    container.innerHTML = `
        <div class="question" id="question-${question.id}">
            <h3>${question.text}</h3>
            <div class="answers" id="answers-${question.id}">
                ${question.answers.map((answer, i) => `
                    <label class="answer-option" data-value="${answer.value}">
                        <input type="radio" name="question-${question.id}" value="${answer.value}" onchange="selectAnswer(${answer.value})">
                        <div class="answer-content">
                            <span class="answer-emoji">${answer.emoji}</span>
                            <span class="answer-text">${answer.text}</span>
                        </div>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    // Обновляем состояние кнопок
    updateNavigationButtons();
}

function selectAnswer(value) {
    answers[currentQuestion] = value;
    document.getElementById('next-button').disabled = false;

    // Добавляем визуальную обратную связь
    const selectedOption = document.querySelector(`label[data-value="${value}"]`);
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
        updateNavigationButtons();

        // Восстанавливаем выбранный ответ
        if (answers[currentQuestion] !== undefined) {
            const radio = document.querySelector(`input[value="${answers[currentQuestion]}"]`);
            if (radio) {
                radio.checked = true;
                selectAnswer(answers[currentQuestion]);
            }
        }
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    // Показать/скрыть кнопку "Назад"
    if (currentQuestion > 0) {
        prevButton.style.display = 'block';
    } else {
        prevButton.style.display = 'none';
    }

    // Обновить текст кнопки "Далее"
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Получить результат →';
    } else {
        nextButton.textContent = 'Далее →';
    }

    // Активность кнопки "Далее"
    nextButton.disabled = answers[currentQuestion] === undefined;
}

function finishTest() {
    const score = calculateScore();

    // Отправляем событие завершения теста
    if (typeof gtag !== 'undefined') {
        gtag('event', 'test_completed', {
            'event_category': 'engagement',
            'event_label': 'depression_test',
            'value': score
        });
    }

    // Показываем модалку для email
    showEmailModal(score);
}

function calculateScore() {
    const totalPossible = questions.length * 4; // Максимальный балл
    const userScore = answers.reduce((sum, answer) => sum + answer, 0);
    return Math.round((userScore / totalPossible) * 100);
}

function showEmailModal(score) {
    window.testResult = score;
    document.getElementById('email-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('email-modal').style.display = 'none';
}

function submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    const score = window.testResult;

    // Отправляем данные в CRM
    sendToEmailService(email, score);

    // Закрываем модалку
    closeModal();

    // Показываем результат
    displayResults(score);

    // Отправляем событие подписки
    if (typeof gtag !== 'undefined') {
        gtag('event', 'email_submitted', {
            'event_category': 'conversion',
            'event_label': 'test_results'
        });
    }
}

function sendToEmailService(email, score) {
    const resultType = getResultType(score);
    const utmSource = getUTMSource();

    // Здесь интеграция с вашим email-сервисом
    fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            score: score,
            result_type: resultType,
            source: utmSource,
            timestamp: new Date().toISOString(),
            answers: answers
        })
    }).then(response => {
        if (response.ok) {
            console.log('Email успешно отправлен в CRM');
        }
    }).catch(error => {
        console.error('Ошибка отправки email:', error);
    });
}

function getUTMSource() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        source: urlParams.get('utm_source') || 'direct',
        medium: urlParams.get('utm_medium') || 'none',
        campaign: urlParams.get('utm_campaign') || 'none'
    };
}

function getResultType(score) {
    if (score >= 80) {
        return 'Высокий';
    } else if (score >= 60) {
        return 'Средний';
    } else if (score >= 40) {
        return 'Низкий';
    } else {
        return 'Критический';
    }
}

// Инициализация теста
document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('prev-button').addEventListener('click', previousQuestion);
document.getElementById('email-form').addEventListener('submit', submitEmail);
document.getElementById('close-modal').addEventListener('click', closeModal);
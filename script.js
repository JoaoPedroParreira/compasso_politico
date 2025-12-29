// ==========================================
// SCRIPT PRINCIPAL / MAIN SCRIPT
// ==========================================
// Este ficheiro contém a lógica principal da aplicação.
// This file contains the main logic of the application.

// ------------------------------------------
// 1. Tratamento de Erros Global / Global Error Handling
// ------------------------------------------
window.onerror = function (msg, url, line, col, error) {
    alert("Erro/Error: " + msg + "\nLine: " + line + "\nFile: " + url);
    return false;
};

// ------------------------------------------
// 2. Estado da Aplicação / Application State
// ------------------------------------------
let currentLang = 'pt';           // Idioma atual / Current language
let currentQuestionIndex = 0;     // Índice da pergunta atual / Current question index
let userAnswers = [];             // Respostas do utilizador / User answers
let shuffledQuestions = [];       // Perguntas baralhadas para o teste / Shuffled questions for the quiz
let friendAnswersMap = {};        // Mapa de respostas do amigo (comparação) / Friend's answers map (comparison)
let comparisonMode = 'none';      // Modo de comparação: 'none', 'surprise', 'open'
let currentMode = 'full';     // Modo de jogo: 'full', 'half', 'quarter'
let chartInstances = {};          // Guardar instâncias dos gráficos para limpar depois / Store chart instances to destroy later
let secondaryEffectsMap = {};     // Mapa de efeitos secundários (Smart Tagging)

// ------------------------------------------
// 3. Elementos do DOM / DOM Elements
// ------------------------------------------
// Ecrãs / Screens
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Contentores / Containers
const detailedBarsContainer = document.getElementById('detailed-bars');

// Botões e Inputs / Buttons and Inputs
// Botões e Inputs / Buttons and Inputs
const langToggle = document.getElementById('lang-toggle');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const downloadBtn = document.getElementById('download-btn');
const restartBtn = document.getElementById('restart-btn');
const answerBtns = document.querySelectorAll('.answer-btn'); // Botões de resposta (Concordo/Discordo)
const friendFileInput = document.getElementById('friend-file');
const loadResultsInput = document.getElementById('load-results-file'); // Novo input
const compareModeToggle = document.getElementById('compare-mode-toggle');
// quickModeToggle removed, now using radio buttons name="gameMode"

// Elementos de Texto e Feedback / Text and Feedback Elements
const questionText = document.getElementById('question-text');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const progressBar = document.getElementById('progress-bar');
const friendIndicator = document.getElementById('friend-indicator');
const friendAnswerText = document.getElementById('friend-answer-text');

// ------------------------------------------
// 4. Configuração dos Eixos / Axis Configuration
// ------------------------------------------
// Define os 11 grupos temáticos e os seus eixos X e Y.
// Defines the 11 thematic groups and their X and Y axes.
const groupsConfig = [
    { id: 'eco', title: 'Economic', x: 'eco_sys', y: 'eco_act', xLabel: ['Socialism', 'Capitalism'], yLabel: ['Planned', 'Market'] },
    { id: 'gov', title: 'Governmental', x: 'gov_form', y: 'gov_scope', xLabel: ['Autocracy', 'Democracy'], yLabel: ['Libertarian', 'Authoritarian'] },
    { id: 'dip', title: 'Diplomatic', x: 'dip_align', y: 'dip_moral', xLabel: ['Nationalism', 'Globalism'], yLabel: ['Particularism', 'Universalism'] },
    { id: 'soc', title: 'Societal', x: 'soc_time', y: 'soc_change', xLabel: ['Tradition', 'Progress'], yLabel: ['Conservation', 'Reform'] },
    { id: 'tech', title: 'Technological', x: 'tech_speed', y: 'tech_nature', xLabel: ['Deceleration', 'Acceleration'], yLabel: ['Primitivism', 'Transhumanism'] },
    { id: 'law', title: 'Law', x: 'law_type', y: 'law_goal', xLabel: ['Civil Law', 'Common Law'], yLabel: ['Punitive', 'Rehab'] },
    { id: 'cul', title: 'Cultural', x: 'cul_hier', y: 'cul_div', xLabel: ['Hierarchy', 'Equality'], yLabel: ['Monocultural', 'Multicultural'] },
    { id: 'proc', title: 'Procedural', x: 'proc_style', y: 'proc_speed', xLabel: ['Persistence', 'Compromise'], yLabel: ['Transitional', 'Direct'] },
    { id: 'pol', title: 'Political', x: 'pol_intensity', y: 'pol_activism', xLabel: ['Moderate', 'Radical'], yLabel: ['Apolitical', 'Politicized'] },
    // Filosofia dividida em duas partes / Philosophy split into two parts
    { id: 'phil_a', title: 'Philosophy A', x: 'phil_soc', y: 'phil_change', xLabel: ['Collectivism', 'Individualism'], yLabel: ['Peace', 'Revolution'] },
    { id: 'phil_b', title: 'Philosophy B', x: 'phil_moral', y: 'phil_ethics', xLabel: ['Realism', 'Idealism'], yLabel: ['Deontology', 'Consequentialism'] },
    { id: 'rel', title: 'Religion', x: 'rel_state', y: 'rel_pers', xLabel: ['Laicism', 'Theocracy'], yLabel: ['Secularism', 'Religiosity'] }
];

// ------------------------------------------
// 5. Traduções / Translations
// ------------------------------------------
const translations = {
    pt: {
        downloadName: "Meus_Resultados_Compasso_Politico.json",
        friendChose: "Amigo escolheu:",
        sameChoice: "Igual!",
        diffChoice: "Diferente!",
        chartTitle: "Bússola",
        barLabels: {
            eco_sys: ["Socialismo", "Capitalismo"],
            eco_act: ["Economia Planeada", "Mercado Livre"],
            gov_scope: ["Libertário", "Autoritário"],
            gov_form: ["Autocracia", "Democracia"],
            dip_align: ["Nacionalismo", "Globalismo"],
            dip_moral: ["Particularismo", "Universalismo"],
            soc_time: ["Tradição", "Progresso"],
            soc_change: ["Conservação", "Reforma"],
            tech_speed: ["Desaceleração", "Aceleração"],
            tech_nature: ["Primitivismo", "Transumanismo"],
            law_type: ["Direito Civil", "Direito Comum"],
            law_goal: ["Punitivo", "Reabilitador"],
            cul_hier: ["Hierarquia", "Igualdade"],
            cul_div: ["Monocultural", "Multicultural"],
            proc_style: ["Persistência", "Compromisso"],
            proc_speed: ["Transicional", "Direto"],
            pol_intensity: ["Moderado", "Radical"],
            pol_activism: ["Apolítico", "Politizado"],
            phil_soc: ["Coletivismo", "Individualismo"],
            phil_change: ["Paz", "Revolução"],
            phil_moral: ["Realismo", "Idealismo"],
            phil_ethics: ["Deontologia", "Consequencialismo"],
            rel_state: ["Laicismo", "Teocracia"],
            rel_pers: ["Secularismo", "Religiosidade"]
        }
    },
    en: {
        downloadName: "My_Political_Compass_Results.json",
        friendChose: "Friend chose:",
        sameChoice: "Same!",
        diffChoice: "Different!",
        chartTitle: "Compass",
        barLabels: {
            eco_sys: ["Socialism", "Capitalism"],
            eco_act: ["Planned Econ", "Free Market"],
            gov_scope: ["Libertarian", "Authoritarian"],
            gov_form: ["Autocracy", "Democracy"],
            dip_align: ["Nationalism", "Globalism"],
            dip_moral: ["Particularism", "Universalism"],
            soc_time: ["Tradition", "Progress"],
            soc_change: ["Conservation", "Reform"],
            tech_speed: ["Deceleration", "Acceleration"],
            tech_nature: ["Primitivism", "Transhumanism"],
            law_type: ["Civil Law", "Common Law"],
            law_goal: ["Punitive", "Rehabilitative"],
            cul_hier: ["Hierarchy", "Equality"],
            cul_div: ["Monocultural", "Multicultural"],
            proc_style: ["Persistence", "Compromise"],
            proc_speed: ["Transitional", "Direct"],
            pol_intensity: ["Moderate", "Radical"],
            pol_activism: ["Apolitical", "Politicized"],
            phil_soc: ["Collectivism", "Individualism"],
            phil_change: ["Peace", "Revolution"],
            phil_moral: ["Realism", "Idealism"],
            phil_ethics: ["Deontology", "Consequentialism"],
            rel_state: ["Laicism", "Theocracy"],
            rel_pers: ["Secularism", "Religiosity"]
        }
    }
};

// ------------------------------------------
// 6. Inicialização / Initialization
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se os dados carregaram / Check if data loaded
    if (typeof questionsData === 'undefined') {
        alert("Erro Crítico: Perguntas não carregadas. Verifique a consola. / Critical Error: Questions not loaded.");
        return;
    }

    // Event Listeners / Ouvintes de Eventos
    // Event Listeners / Ouvintes de Eventos
    langToggle.addEventListener('click', toggleLanguage);
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', prevQuestion);
    downloadBtn.addEventListener('click', downloadJSON);
    restartBtn.addEventListener('click', () => location.reload()); // Recarregar página para reiniciar
    if (loadResultsInput) loadResultsInput.addEventListener('change', loadUserResults); // Listener para carregar resultados

    // Configuração Inicial de Efeitos Secundários / Initial Setup of Secondary Effects
    assignSecondaryEffects();

    // Botões de Resposta / Answer Buttons
    answerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = e.currentTarget.getAttribute('data-val');
            const score = parseInt(e.currentTarget.getAttribute('data-score'));
            handleAnswer(val, score);
        });
    });
});

// ------------------------------------------
// 7. Funções de Lógica / Logic Functions
// ------------------------------------------

// Alternar Idioma / Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    document.querySelector('html').lang = currentLang;

    // Atualizar textos estáticos / Update static texts
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
}

// Filtrar perguntas por idioma / Filter questions by language
function filterQuestionsByLang() {
    if (!questionsData) return [];
    // Retorna apenas perguntas que incluem o idioma atual na lista 'langs'
    // Returns only questions that include the current language in 'langs' list
    return questionsData.filter(q => q.langs && q.langs.includes(currentLang));
}

// Carregar Resultados do Utilizador / Load User Results
async function loadUserResults(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const text = await file.text();
        const data = JSON.parse(text);

        if (!Array.isArray(data) || data.length === 0) {
            alert(currentLang === 'pt' ? "Ficheiro inválido ou vazio." : "Invalid or empty file.");
            return;
        }

        // Restaurar respostas / Restore answers
        // Validar e reconstruir 'effect' se necessário para segurança
        userAnswers = data.map(ans => {
            // Se o objeto já tiver o efeito, usar. Se não, tentar buscar às perguntas originais.
            if (!ans.effect && ans.question_id_str) {
                const originalQ = questionsData.find(q => q.id === ans.question_id_str);
                if (originalQ) {
                    ans.effect = originalQ.effect;
                }
            }
            return ans;
        });

        // Simular finalização / Simulate finish
        startScreen.classList.add('hidden');
        startScreen.classList.remove('active');
        finishQuiz();

    } catch (err) {
        console.error(err);
        alert(currentLang === 'pt' ? "Erro ao ler o ficheiro." : "Error reading file.");
    }
}

// Começar o Teste / Start Quiz
async function startQuiz() {
    // Verificar carregamento de ficheiro de amigo / Check friend file upload
    if (friendFileInput.files.length > 0) {
        try {
            const text = await friendFileInput.files[0].text();
            const friendData = JSON.parse(text);
            processFriendData(friendData);
            comparisonMode = compareModeToggle.checked ? 'open' : 'surprise';
        } catch (e) {
            alert("Erro ao ler ficheiro / File read error");
            console.error(e);
        }
    } else {
        comparisonMode = 'none';
        compareModeToggle.checked = false;
    }

    // Reiniciar variáveis / Reset variables
    currentQuestionIndex = 0;
    userAnswers = [];

    // Definir Modo (Full vs Half vs Quarter)
    const selectedRadio = document.querySelector('input[name="gameMode"]:checked');
    if (selectedRadio) {
        currentMode = selectedRadio.value;
    } else {
        currentMode = 'full';
    }
    console.log("Mode selected:", currentMode); // Debug

    // Obter perguntas válidas / Get valid questions
    const validQuestions = filterQuestionsByLang();

    if (currentMode === 'quarter') {
        shuffledQuestions = selectQuestionsForMode(validQuestions, 5); // ~55 questions
    } else if (currentMode === 'half') {
        shuffledQuestions = selectQuestionsForMode(validQuestions, 11); // ~121 questions
    } else {
        shuffledQuestions = shuffleQuestions([...validQuestions]); // ~240 questions
    }

    console.log("Final questions count:", shuffledQuestions.length); // Debug

    // Atualizar Interface / Update Interface
    totalQSpan.textContent = shuffledQuestions.length;
    startScreen.classList.add('hidden');
    startScreen.classList.remove('active');

    resultScreen.classList.add('hidden');

    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');

    showQuestion();
}

// Lógica de Seleção de Perguntas / Question Selection Logic
function selectQuestionsForMode(sourceQuestions, countPerGroup) {
    let selected = [];

    // Para cada grupo (ex: Economia, Cultura...), selecionar N perguntas aleatórias
    groupsConfig.forEach(group => {
        const relevantAxes = [group.x, group.y];
        const groupQuestions = sourceQuestions.filter(q => relevantAxes.includes(q.effect.axis));

        const shuffled = shuffleQuestions([...groupQuestions]);
        selected.push(...shuffled.slice(0, countPerGroup));
    });

    return shuffleQuestions(selected);
}

// ------------------------------------------
// 8. Lógica de Efeitos Secundários / Secondary Effects Logic (Smart Tagging)
// ------------------------------------------
function assignSecondaryEffects() {
    console.log("Assigning secondary effects for Religion axes...");
    secondaryEffectsMap = {};

    questionsData.forEach(q => {
        if (!q.langs) return;

        const ptText = q.pt ? q.pt.toLowerCase() : "";
        const enText = q.en ? q.en.toLowerCase() : "";
        let effectsToAdd = [];

        // --- Keywords for Religion Detection ---
        const isRel = ptText.includes("religi") || ptText.includes("igreja") || ptText.includes("sagrado") || ptText.includes("deus") || ptText.includes("fé") || ptText.includes("divin") ||
            enText.includes("religi") || enText.includes("church") || enText.includes("sacred") || enText.includes("god") || enText.includes("faith") || enText.includes("divine");

        if (isRel) {
            // Eixo State: Laicismo (-1) vs Teocracia (+1)
            let wS = 0;
            const isStateIssue = ptText.includes("estado") || ptText.includes("leis") || ptText.includes("governo") || ptText.includes("públic") ||
                enText.includes("state") || enText.includes("law") || enText.includes("gov") || enText.includes("public");

            if (isStateIssue) {
                if (ptText.includes("separação") || ptText.includes("banir") || ptText.includes("remover") || ptText.includes("neutral") || ptText.includes("laic") || ptText.includes("não deve") || ptText.includes("extrair") || ptText.includes("gasta")) {
                    wS = -1; // Laicismo
                } else if (ptText.includes("basear") || ptText.includes("apoiar") || ptText.includes("oficial") || ptText.includes("promover") || ptText.includes("valores cristãos") || ptText.includes("bíblia")) {
                    wS = 1; // Teocracia
                }
            }
            if (wS !== 0) effectsToAdd.push({ axis: 'rel_state', weight: wS });

            // Eixo Personal: Secularismo (-1) vs Religiosidade (+1)
            let wP = 0;
            if (ptText.includes("mal") || ptText.includes("obsoleto") || ptText.includes("ilusão") || ptText.includes("ate") || ptText.includes("não exist") || ptText.includes("superstição")) {
                wP = -1; // Secularismo
            } else if (ptText.includes("importante") || ptText.includes("guia") || ptText.includes("verdade") || ptText.includes("moral") || ptText.includes("conforto") || ptText.includes("espiritual") || ptText.includes("fé")) {
                wP = 1; // Religiosidade
            }
            if (wP !== 0) effectsToAdd.push({ axis: 'rel_pers', weight: wP });
        }

        if (effectsToAdd.length > 0) {
            secondaryEffectsMap[q.id] = effectsToAdd;
        }
    });
    console.log(`Smart Tagging Complete. ${Object.keys(secondaryEffectsMap).length} religious questions tagged.`);
}

// Processar dados do amigo (Smart Matching) / Process friend data (Smart Matching)
function processFriendData(data) {
    friendAnswersMap = {};

    data.forEach(item => {
        let match = null;

        // 1. Tentar encontrar por ID exacto (String) / Try exact ID match
        if (item.question_id_str) {
            match = questionsData.find(q => q.id === item.question_id_str);
        }

        // 2. Se falhar, tentar por TEXTO PT / If fail, try PT Text match
        if (!match && item.question_text_pt) {
            // Normalizar espaços para evitar erros de copy-paste / Normalize spaces
            const targetPt = item.question_text_pt.trim();
            match = questionsData.find(q => q.pt.trim() === targetPt);
        }

        // 3. Se falhar, tentar por TEXTO EN / If fail, try EN Text match
        if (!match && item.question_text_en) {
            const targetEn = item.question_text_en.trim();
            match = questionsData.find(q => q.en && q.en.trim() === targetEn);
        }

        // Se encontrou correspondência, guardar resposta / If match found, save answer
        if (match) {
            friendAnswersMap[match.id] = item.answer_value;
        }
    });
}

// Baralhar Array (Fisher-Yates) / Shuffle Array
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mostrar Pergunta Atual / Show Current Question
function showQuestion() {
    const q = shuffledQuestions[currentQuestionIndex];

    // Animação simples de fade / Simple fade animation
    questionText.style.opacity = 0;

    // Resetar indicadores de amigo / Reset friend indicators
    friendIndicator.classList.add('hidden');
    document.querySelectorAll('.friend-marker').forEach(el => el.classList.add('hidden'));

    // Botão Voltar sempre visível / Back button always visible
    prevBtn.classList.remove('hidden');
    prevBtn.style.display = 'flex'; // Force display to override any specificity issues

    // Atualizar texto do botão Voltar / Update Back button text
    const backSpan = prevBtn.querySelector('span');
    if (currentQuestionIndex === 0) {
        backSpan.textContent = currentLang === 'pt' ? "Menu Inicial" : "Main Menu";
    } else {
        backSpan.textContent = currentLang === 'pt' ? "Voltar" : "Back";
    }

    setTimeout(() => {
        // Texto da pergunta no idioma atual
        questionText.textContent = q[currentLang];
        questionText.style.opacity = 1;

        currentQSpan.textContent = currentQuestionIndex + 1;

        // Atualizar barra de progresso / Update progress bar
        const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Se Modo Aberto, mostrar o que o amigo escolheu logo / If Open Mode, show friend choice immediately
        if (comparisonMode === 'open' && friendAnswersMap[q.id]) {
            const val = friendAnswersMap[q.id];
            const btn = document.querySelector(`.answer-btn[data-val="${val}"]`);
            if (btn) btn.querySelector('.friend-marker').classList.remove('hidden');
        }
    }, 200);
}

// Pergunta Anterior / Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        userAnswers.pop(); // Remover última resposta / Remove last answer
        showQuestion();
    } else {
        // Voltar ao Menu Principal / Back to Main Menu
        if (confirm(currentLang === 'pt' ? "Voltar ao menu inicial? O progresso será perdido." : "Return to main menu? Progress will be lost.")) {
            quizScreen.classList.add('hidden');
            quizScreen.classList.remove('active');
            startScreen.classList.remove('hidden');
            startScreen.classList.add('active');
        }
    }
}

// Lidar com Resposta / Handle Answer
function handleAnswer(value, score) {
    const currentQ = shuffledQuestions[currentQuestionIndex];

    // Guardar resposta do utilizador
    // Save user answer - Primary Effect
    userAnswers.push({
        question_id_str: currentQ.id, // Ensure we use string ID
        answer_value: value,
        answer_score_raw: score,
        effect: currentQ.effect       // Guardar o efeito (eixo e peso)
    });

    // Check for Secondary Effects (Smart Tagging for Religion)
    if (secondaryEffectsMap[currentQ.id]) {
        secondaryEffectsMap[currentQ.id].forEach(secEffect => {
            userAnswers.push({
                question_id_str: currentQ.id + "_sec", // Virtual ID
                answer_value: value,
                answer_score_raw: score,
                effect: secEffect
            });
            console.log(`Added secondary effect for ${currentQ.id}:`, secEffect);
        });
    }

    // Modo Surpresa: Mostrar se igual ou diferente / Surprise Mode: Show same/diff
    if (comparisonMode === 'surprise' && friendAnswersMap[currentQ.id]) {
        const fVal = friendAnswersMap[currentQ.id];

        // Mostrar marcador visual no botão do amigo
        const btn = document.querySelector(`.answer-btn[data-val="${fVal}"]`);
        if (btn) btn.querySelector('.friend-marker').classList.remove('hidden');

        friendIndicator.classList.remove('hidden');
        friendAnswerText.textContent = fVal === value ? translations[currentLang].sameChoice : translations[currentLang].diffChoice;

        // Esperar um pouco para o utilizador ver / Wait a bit for user to see
        setTimeout(nextStep, 1500);
    } else {
        nextStep();
    }
}

// Próximo Passo / Next Step
function nextStep() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

// ------------------------------------------
// 8. Finalização e Cálculo / Finish and Calculation
// ------------------------------------------
function finishQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    // Limpar gráficos antigos / Cleanup old charts
    Object.values(chartInstances).forEach(c => c.destroy());
    chartInstances = {};

    calculateAndRender();
}

function calculateAndRender() {
    console.log("Calculating results...");
    const scores = {};
    const counts = {};

    // 1. Initialize all possible axes from translations to avoid NaN
    Object.keys(translations.en.barLabels).forEach(axis => {
        scores[axis] = 0;
        counts[axis] = 0;
    });

    // 2. Aggregate scores from user answers
    userAnswers.forEach(ans => {
        if (ans.effect) {
            const axis = ans.effect.axis;
            if (!(axis in scores)) {
                scores[axis] = 0;
                counts[axis] = 0;
            }
            scores[axis] += (ans.answer_score_raw * ans.effect.weight);
            counts[axis] += 3;
        }
    });

    // 3. Render Small Compass Charts
    groupsConfig.forEach(group => {
        const xVal = counts[group.x] > 0 ? (scores[group.x] / counts[group.x]) * 10 : 0;
        const yVal = counts[group.y] > 0 ? (scores[group.y] / counts[group.y]) * 10 : 0;
        renderSmallChart(group.id, group.title, xVal, yVal);
    });

    // 4. Render Horizontal Progress Bars
    renderDetailedBars(scores, counts);

    // 5. Position Ideology Map Dot
    renderIdeologyMapDot(scores, counts);
}

function renderIdeologyMapDot(scores, counts) {
    const ecoScore = scores['eco_sys'] || 0;
    const govScore = scores['gov_scope'] || 0;
    const maxEco = counts['eco_sys'] || 1;
    const maxGov = counts['gov_scope'] || 1;

    // Normalize from [-1, 1] range to [0, 1]
    const normX = (ecoScore + maxEco) / (2 * maxEco);
    const normY = (govScore + maxGov) / (2 * maxGov);

    const xPos = normX * 100;
    const yPos = (1 - normY) * 100; // Invert for Y (Top is 0%)

    console.log(`Map: Eco=${ecoScore.toFixed(1)}/Max=${maxEco} (${xPos.toFixed(1)}%), Gov=${govScore.toFixed(1)}/Max=${maxGov} (${yPos.toFixed(1)}%)`);

    const dot = document.getElementById('ideology-dot');
    if (dot) {
        dot.style.display = 'block';
        dot.style.left = `${xPos}%`;
        dot.style.top = `${yPos}%`;
    }
}

// ------------------------------------------
// 9. Funções de Renderização / Render Functions
// ------------------------------------------

// Renderizar pequeno gráfico Chart.js / Render small Chart.js chart
function renderSmallChart(id, title, x, y) {
    const canvasId = `chart-${id}`;
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    chartInstances[id] = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: [{ x: x, y: y }],
                backgroundColor: '#fff',
                borderColor: '#000',
                borderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { min: -10, max: 10, ticks: { display: false }, grid: { display: false } },
                y: { min: -10, max: 10, ticks: { display: false }, grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            layout: { padding: 5 }
        },
        plugins: [{
            id: 'quadrantBG',
            beforeDraw: (chart) => {
                const { ctx, chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;
                const midX = x.getPixelForValue(0);
                const midY = y.getPixelForValue(0);

                // Desenhar 4 quadrantes com cores padrão
                // Q1 (+/+): Azul / Blue
                ctx.fillStyle = 'rgba(33, 150, 243, 0.5)';
                ctx.fillRect(midX, top, right - midX, midY - top);

                // Q2 (-/+): Vermelho / Red
                ctx.fillStyle = 'rgba(244, 67, 54, 0.5)';
                ctx.fillRect(left, top, midX - left, midY - top);

                // Q3 (-/-): Verde / Green
                ctx.fillStyle = 'rgba(76, 175, 80, 0.5)';
                ctx.fillRect(left, midY, midX - left, bottom - midY);

                // Q4 (+/-): Amarelo / Yellow
                ctx.fillStyle = 'rgba(255, 193, 7, 0.5)';
                ctx.fillRect(midX, midY, right - midX, bottom - midY);

                // Linhas dos eixos
                ctx.beginPath();
                ctx.moveTo(midX, top);
                ctx.lineTo(midX, bottom);
                ctx.moveTo(left, midY);
                ctx.lineTo(right, midY);
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }]
    });
}

// Renderizar barras detalhadas / Render detailed bars
function renderDetailedBars(scores, counts) {
    detailedBarsContainer.innerHTML = '';

    // Obter todas as chaves de eixos
    const allAxes = Object.keys(translations.en.barLabels);

    allAxes.forEach(key => {
        let pct = 50; // default 50% (Neutro)

        if (counts[key] > 0) {
            const max = counts[key];
            const raw = scores[key];
            // Normalizar (-Max a +Max) para (0 a 1)
            const ratio = (raw + max) / (2 * max);
            pct = ratio * 100;
        }

        // Criar HTML da barra
        const row = document.createElement('div');
        row.className = 'axis-row';

        const labels = translations[currentLang].barLabels[key] || [key, key];

        // Calcular larguras para o efeito visual "split"
        const leftW = (100 - pct).toFixed(1);
        const rightW = pct.toFixed(1);

        row.innerHTML = `
            <div class="axis-header">
                <span>${labels[0]}</span>
                <span>${labels[1]}</span>
            </div>
            <div class="axis-track">
                <div class="axis-left-bar" style="width: ${leftW}%; background: ${getRandomColor(key, 0)}">
                    ${leftW > 15 ? leftW + '%' : ''}
                </div>
                <div class="axis-right-bar" style="width: ${rightW}%; background: ${getRandomColor(key, 1)}">
                    ${rightW > 15 ? rightW + '%' : ''}
                </div>
            </div>
        `;
        detailedBarsContainer.appendChild(row);
    });
}

// Obter cores para as barras / Get colors for bars
function getRandomColor(key, side) {
    const colors = [
        ['#e57373', '#81c784'], // Red/Green
        ['#64b5f6', '#ffb74d'], // Blue/Orange
        ['#ba68c8', '#4db6ac'], // Purple/Teal
        ['#a1887f', '#90a4ae'], // Brown/Grey
        ['#f06292', '#aed581'], // Pink/LightGreen
    ];
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = key.charCodeAt(i) + ((hash << 5) - hash);
    const idx = Math.abs(hash) % colors.length;
    return colors[idx][side];
}

// Descarregar JSON / Download JSON
function downloadJSON() {
    // Enriquecer os dados com o texto da pergunta para referência futura (e compatibilidade)
    // Enrich data with question text for future reference (and compatibility)
    const enrichedData = userAnswers.map(ans => {
        // Encontrar a pergunta original para obter os textos
        // Find original question to get texts
        const question = questionsData.find(q => q.id === ans.question_id_str);

        return {
            ...ans,
            question_text_pt: question ? question.pt : "Texto não encontrado",
            question_text_en: question ? question.en : "Text not found"
        };
    });

    const dataStr = JSON.stringify(enrichedData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = translations[currentLang].downloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

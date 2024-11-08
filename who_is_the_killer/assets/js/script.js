// Define text for each language
const textContent = {
    en: {
        title: "Who is the Killer - Game Instructions",
        welcome: "Welcome, Detective! Follow these instructions carefully to begin your investigation and uncover the mystery.",
        overviewTitle: "Game Overview",
        overviewText: "Who is the Killer is an interactive mystery game where you must gather clues, analyze evidence, and interview suspects to solve the case.",
        howToPlayTitle: "How to Play",
        howToPlaySteps: [
            "Examine the Scene: Look around the crime scene for hidden clues.",
            "Interview Suspects: Speak to characters to gather information.",
            "Analyze Evidence: Use collected evidence to connect the dots.",
            "Accuse the Suspect: Make your accusation once confident."
        ],
        tipsTitle: "Tips for Success",
        tipsList: [
            "Pay close attention to details.",
            "Take notes as you play.",
            "Trust your instincts but verify everything with evidence.",
            "Don’t rush; evaluate each decision carefully."
        ],
        controlsTitle: "Controls",
        controlsList: [
            "Mouse: Click to interact with objects and characters.",
            "Keyboard: Use arrow keys or WASD to move through scenes."
        ],
        startGameText: "Ready to Begin?",
    },
    es: {
        title: "¿Quién es el asesino? - Instrucciones del juego",
        welcome: "Bienvenido, detective. Sigue estas instrucciones para iniciar tu investigación y descubrir el misterio.",
        overviewTitle: "Descripción del juego",
        overviewText: "¿Quién es el asesino? es un juego de misterio interactivo donde debes reunir pistas, analizar pruebas y entrevistar sospechosos para resolver el caso.",
        howToPlayTitle: "Cómo jugar",
        howToPlaySteps: [
            "Examina la escena: Observa la escena del crimen en busca de pistas.",
            "Entrevista a sospechosos: Habla con los personajes para recopilar información.",
            "Analiza las pruebas: Usa las pruebas recopiladas para hacer conexiones.",
            "Acusa al sospechoso: Haz tu acusación cuando estés seguro."
        ],
        tipsTitle: "Consejos para el éxito",
        tipsList: [
            "Presta mucha atención a los detalles.",
            "Toma notas mientras juegas.",
            "Confía en tus instintos pero verifica con pruebas.",
            "No te apresures; evalúa cada decisión con cuidado."
        ],
        controlsTitle: "Controles",
        controlsList: [
            "Ratón: Haz clic para interactuar con objetos y personajes.",
            "Teclado: Usa las teclas de flecha o WASD para moverte."
        ],
        startGameText: "¿Listo para empezar?",
    },
    // Additional languages can be added here
};

// Function to update the content based on selected language
function updateContent(language) {
    document.querySelector('header h1').textContent = textContent[language].title;
    document.querySelector('header p').textContent = textContent[language].welcome;

    const mainContent = document.getElementById('content');
    mainContent.innerHTML = `
        <section id="overview">
            <h2>${textContent[language].overviewTitle}</h2>
            <p>${textContent[language].overviewText}</p>
        </section>
        <section id="how-to-play">
            <h2>${textContent[language].howToPlayTitle}</h2>
            <ol>${textContent[language].howToPlaySteps.map(step => `<li>${step}</li>`).join('')}</ol>
        </section>
        <section id="tips">
            <h2>${textContent[language].tipsTitle}</h2>
            <ul>${textContent[language].tipsList.map(tip => `<li>${tip}</li>`).join('')}</ul>
        </section>
        <section id="controls">
            <h2>${textContent[language].controlsTitle}</h2>
            <ul>${textContent[language].controlsList.map(control => `<li>${control}</li>`).join('')}</ul>
        </section>
        <section id="start-game">
            <h2>${textContent[language].startGameText}</h2>
        </section>
    `;
}

// Event listener for language selection
document.getElementById('language-select').addEventListener('change', function() {
    updateContent(this.value);
});

// Initialize with default language
updateContent('en');


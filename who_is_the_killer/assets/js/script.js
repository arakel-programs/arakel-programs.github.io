// Define text for each language
const textContent = {
    en: {
        title: "Who is the Killer ? - Game Instructions",
        welcome: "Welcome, Detective! Follow these instructions carefully to begin your investigation and uncover the mystery.",
        overviewTitle: "Objective",
        overviewText: "The goal of the game is to deduce who the killer is before the other players. Each player will take on the role of a character, and through careful observation, questioning, and analysis of clues, the players must figure out who among them is the killer.",
        howToPlayTitle: "Setup",
        howToPlaySteps: [
            "Players: 4-10 players.",
            "Character Cards: Each player receives a character card, which describes their role, skills, and background (such as 'Doctor,' 'Police Officer,' 'Chef,' etc.). These characters are the suspects and have different abilities and personalities. One card will identify the 'Killer.'",
            "Killer's Card: Place one card in the deck that is the 'Killer's Card' and shuffle the deck. The rest are innocent characters. The 'Killer's' card is hidden from all players.",
            "Game Host: Assign a game host who is responsible for guiding the game, reading out clues, and handling the flow of the investigation."
        ],
        tipsTitle: "Gameplay",
        tipsList: "Starting the Game: ",
        tipsList1: "The host shuffles the character cards and deals one card to each player, ensuring that one player receives the 'Killer's Card.' Each player keeps their character's role secret, but they should try to play their character as described in the card.",
        tipsList2: "The Investigation:", 
        tipsList3: "The host will provide clues or events to guide the investigation. These may include:", 
        tipsList4: "Physical evidence found at the scene (e.g., a bloodstain near the 'Chef’s' station).", 
        tipsList5: "Testimonies from players (e.g., the 'Waiter' might mention they saw someone near the crime scene).", 
        tipsList6: "Occasional twists that force players to share information or reveal secrets.",
        tipsList7: "Players will take turns asking each other questions or presenting evidence to try and uncover the killer. For example:",
        tipsList8: "Where were you when the crime happened?",
        tipsList9: "What do you know about the victim?",
        tipsList10: "Do you have an alibi?",
        tipsList11: "Accusations and Discussions:",
        tipsList12: "Players can discuss their findings, form alliances, or try to manipulate others by presenting false information. As the game progresses, players must decide who they think the killer is based on the clues and interactions.",
        tipsList13: "Killer’s Role:",
        tipsList14: "The player who has the 'Killer's Card' must try to deflect suspicion while secretly continuing to deceive the group. The killer can lie, manipulate, and mislead others, but they must be careful not to reveal too much.",
        tipsList15: "Final Accusation:",
        tipsList16: "When the players feel they have gathered enough information, they can make a final accusation. Each player will vote on who they think the killer is. The host will reveal the identity of the killer.",
        tipsList17: "Winning the Game:",
        tipsList18: "If the killer is correctly identified, the innocent players win.",
        tipsList19: "If the killer is not identified, the killer wins.",
        controlsTitle: "Additional Rules (Optional)",
        controlsList: "Special Abilities: Some character cards might have special abilities or bonuses, like the 'Police Officer' being able to inspect another player's card secretly or the 'Doctor' being able to heal a player (preventing them from being accused).",
        controlsListR: "Timed Rounds: To keep the game moving, set a time limit (e.g., 10 minutes per round) for discussions before accusations are made.",
        controlsListL: "Multiple Killers: If you want to increase the difficulty, you can have more than one killer in the game.",
        startGameText: "Tips for Players",
        startGameTexts: "For Innocent Players: Pay attention to others' reactions and inconsistencies in their stories. The killer may try too hard to deflect suspicion or act too confident.",
        startGameTextr: "For the Killer: Keep your composure and try to blend in with the group. Use your character’s traits wisely to mislead others and avoid suspicion.",
        endOfText: "End of the Game",
        endOfTexts: "Once the killer is revealed, the game ends. The players can choose to play another round with different character cards or make adjustments to the rules for future games."
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
            <ol>
                <li>${textContent[language].tipsList}
                    <ul>
                        <li>${textContent[language].tipsList1}</li>
                    </ul>
                </li>
                <li>${textContent[language].tipsList2}<br>${textContent[language].tipsList3}
                    <ul>
                        <li>${textContent[language].tipsList4}</li>
                        <li>${textContent[language].tipsList5}</li>
                        <li>${textContent[language].tipsList6}</li>
                    </ul>${textContent[language].tipsList7}
                    <ul>
                        <li>${textContent[language].tipsList8}</li>
                        <li>${textContent[language].tipsList9}</li>
                        <li>${textContent[language].tipsList10}</li>
                    </ul>
                </li>
                <li>${textContent[language].tipsList11}<br>${textContent[language].tipsList12}</li>
                <li>${textContent[language].tipsList13}<br>${textContent[language].tipsList14}</li>
                <li>${textContent[language].tipsList15}<br>${textContent[language].tipsList16}</li>
                <li>${textContent[language].tipsList17}
                    <ul>
                        <li>${textContent[language].tipsList18}</li>
                        <li>${textContent[language].tipsList19}</li>
                    </ul>
                </li>
            </ol>
        </section>
        <section id="controls">
            <h2>${textContent[language].controlsTitle}</h2>
            <ul>
                <li>${textContent[language].controlsList}</li>
                <li>${textContent[language].controlsListR}</li>
                <li>${textContent[language].controlsListL}</li>
            </ul>
        </section>
        <section id="start-game">
            <h2>${textContent[language].startGameText}</h2>
            <ul>
                <li>${textContent[language].startGameTexts}</li>
                <li>${textContent[language].startGameTextr}</li>
            </ul>
        </section>
        <section id="end-game">
            <h2>${textContent[language].endOfText}</h2>
            <p>${textContent[language].endOfTexts}</p>
        </section>
    `;
}

// Event listener for language selection
document.getElementById('language-select').addEventListener('change', function() {
    updateContent(this.value);
});

// Initialize with default language
updateContent('en');


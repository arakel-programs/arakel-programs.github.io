// Define text for each language
const textContent = {
    en: {
        title: "Who is the Killer ? - Game Instructions",
        welcome: "Welcome, Detective! Follow these instructions carefully to begin your investigation and uncover the mystery.",
        overviewTitle: "Objective",
        overviewText: "The goal of the game is to deduce who the killer is before the other players. Each player will take on the role of a character, and through careful observation, questioning, and analysis of clues, the players must figure out who among them is the killer.",
        howToPlayTitle: "Setup",
        howToPlaySteps: [
            "Players: 4-12 players.",
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
        "title": "¿Quién es el Asesino? - Instrucciones del Juego",
        "welcome": "¡Bienvenido, detective! Sigue estas instrucciones cuidadosamente para comenzar tu investigación y descubrir el misterio.",
        "overviewTitle": "Objetivo",
        "overviewText": "El objetivo del juego es deducir quién es el asesino antes que los demás jugadores. Cada jugador asumirá el papel de un personaje, y mediante la observación, preguntas y análisis de pistas, deberán descubrir quién entre ellos es el asesino.",
        "howToPlayTitle": "Preparación",
        "howToPlaySteps": [
            "Jugadores: De 4 a 12 jugadores.",
            "Cartas de Personaje: Cada jugador recibe una carta de personaje, que describe su rol, habilidades y antecedentes (como 'Doctor', 'Policía', 'Chef', etc.). Estos personajes son sospechosos y tienen habilidades y personalidades únicas. Una carta identifica al 'Asesino'.",
            "Carta del Asesino: Coloca una carta 'Asesino' en la baraja y baraja las cartas. Las demás son personajes inocentes. La carta del 'Asesino' está oculta para todos.",
            "Anfitrión del Juego: Asigna un anfitrión que guiará el juego, leerá pistas y administrará el flujo de la investigación."
        ],
        "tipsTitle": "Desarrollo del Juego",
        "tipsList": "Comenzando el Juego:",
        "tipsList1": "El anfitrión baraja las cartas de personaje y las reparte a cada jugador, asegurándose de que uno reciba la carta de 'Asesino'. Cada jugador mantiene en secreto su rol, pero debe actuar como se describe en su carta.",
        "tipsList2": "La Investigación:",
        "tipsList3": "El anfitrión proporciona pistas o eventos para guiar la investigación. Esto incluye:",
        "tipsList4": "Evidencia física en la escena (ej., una mancha de sangre cerca del 'Chef').",
        "tipsList5": "Testimonios de los jugadores (ej., el 'Mesero' puede decir que vio a alguien cerca de la escena).",
        "tipsList6": "Giros ocasionales que obligan a los jugadores a compartir información o revelar secretos.",
        "tipsList7": "Los jugadores tomarán turnos para hacerse preguntas o presentar evidencia para tratar de descubrir al asesino. Por ejemplo:",
        "tipsList8": "¿Dónde estabas cuando ocurrió el crimen?",
        "tipsList9": "¿Qué sabes de la víctima?",
        "tipsList10": "¿Tienes una coartada?",
        "tipsList11": "Acusaciones y Discusiones:",
        "tipsList12": "Los jugadores pueden discutir sus hallazgos, formar alianzas o intentar manipular a otros con información falsa.",
        "tipsList13": "Rol del Asesino:",
        "tipsList14": "El jugador que tiene la carta de 'Asesino' debe desviar la sospecha y engañar al grupo. Puede mentir, manipular, y engañar, pero debe ser cuidadoso.",
        "tipsList15": "Acusación Final:",
        "tipsList16": "Cuando los jugadores creen que tienen suficiente información, pueden hacer una acusación final. Cada uno vota por el que cree es el asesino.",
        "tipsList17": "Ganando el Juego:",
        "tipsList18": "Si el asesino es identificado correctamente, ganan los jugadores inocentes.",
        "tipsList19": "Si el asesino no es identificado, gana el asesino.",
        "controlsTitle": "Reglas Adicionales (Opcionales)",
        "controlsList": "Habilidades Especiales: Algunas cartas de personaje pueden tener habilidades especiales.",
        "controlsListR": "Rondas Temporizadas: Para mantener el juego en movimiento, establece un límite de tiempo.",
        "controlsListL": "Asesinos Múltiples: Para mayor dificultad, pueden haber más asesinos.",
        "startGameText": "Consejos para los Jugadores",
        "startGameTexts": "Para los inocentes: Presta atención a las reacciones e inconsistencias de otros.",
        "startGameTextr": "Para el asesino: Mantén la compostura y trata de mezclarte.",
        "endOfText": "Fin del Juego",
        "endOfTexts": "Una vez que el asesino es revelado, el juego termina."
    },
    ru: {
        "title": "Кто убийца? - Инструкции к игре",
        "welcome": "Добро пожаловать, детектив! Следуйте этим инструкциям внимательно, чтобы начать расследование и раскрыть тайну.",
        "overviewTitle": "Цель",
        "overviewText": "Цель игры — выяснить, кто убийца, прежде чем это сделают остальные игроки. Каждый игрок исполняет роль персонажа и с помощью наблюдательности, вопросов и анализа улик должен выяснить, кто из них убийца.",
        "howToPlayTitle": "Подготовка",
        "howToPlaySteps": [
            "Игроки: 4-12 игроков.",
            "Карты персонажей: Каждый игрок получает карту персонажа с описанием его роли, навыков и биографии (например, 'Доктор', 'Полицейский', 'Шеф-повар' и т.д.). Эти персонажи — подозреваемые, и каждый имеет свои способности и характер. Одна карта — это 'Убийца'.",
            "Карта убийцы: Положите одну карту 'Убийцы' в колоду и перемешайте. Остальные карты — невинные персонажи. Карта 'Убийцы' скрыта от всех игроков.",
            "Ведущий: Назначьте ведущего, который отвечает за ведение игры, зачитывание улик и управление ходом расследования."
        ],
        "tipsTitle": "Игровой процесс",
        "tipsList": "Начало игры:",
        "tipsList1": "Ведущий перемешивает карты персонажей и раздаёт их игрокам, следя за тем, чтобы один игрок получил карту 'Убийцы'. Каждый игрок держит свою роль в секрете, но должен играть её согласно описанию на карте.",
        "tipsList2": "Расследование:",
        "tipsList3": "Ведущий предоставляет улики или события для помощи в расследовании, такие как:",
        "tipsList4": "Физические доказательства на месте преступления (например, пятно крови возле 'Шеф-повара').",
        "tipsList5": "Свидетельства игроков (например, 'Официант' может упомянуть, что видел кого-то рядом с местом преступления).",
        "tipsList6": "Случайные повороты событий, заставляющие игроков делиться информацией или раскрывать секреты.",
        "tipsList7": "Игроки по очереди задают друг другу вопросы или представляют улики, чтобы попытаться выявить убийцу. Например:",
        "tipsList8": "Где ты был во время преступления?",
        "tipsList9": "Что ты знаешь о жертве?",
        "tipsList10": "Есть ли у тебя алиби?",
        "tipsList11": "Обвинения и обсуждения:",
        "tipsList12": "Игроки могут обсуждать свои выводы, формировать альянсы или пытаться манипулировать другими, предоставляя ложную информацию. В процессе игры они должны решить, кто, по их мнению, убийца, основываясь на улики и взаимодействиях.",
        "tipsList13": "Роль убийцы:",
        "tipsList14": "Игрок, у которого карта 'Убийцы', должен попытаться отвлечь подозрения и при этом продолжать вводить группу в заблуждение. Убийца может лгать, манипулировать и обманывать других, но должен быть осторожен, чтобы не раскрыться.",
        "tipsList15": "Финальное обвинение:",
        "tipsList16": "Когда игроки считают, что у них достаточно информации, они могут сделать финальное обвинение. Каждый игрок голосует, кого он считает убийцей. Ведущий раскрывает личность убийцы.",
        "tipsList17": "Победа в игре:",
        "tipsList18": "Если убийца был выявлен правильно, побеждают невинные игроки.",
        "tipsList19": "Если убийца не был выявлен, побеждает убийца.",
        "controlsTitle": "Дополнительные правила (по желанию)",
        "controlsList": "Особые способности: Некоторые карты персонажей могут обладать особыми способностями, например, 'Полицейский' может тайно осмотреть карту другого игрока, а 'Доктор' может спасти игрока (предотвращая его обвинение).",
        "controlsListR": "Ограничение по времени: Чтобы ускорить игру, установите лимит времени (например, 10 минут на раунд) для обсуждений перед обвинением.",
        "controlsListL": "Несколько убийц: Для повышения сложности можно добавить более одного убийцы в игру.",
        "startGameText": "Советы для игроков",
        "startGameTexts": "Для невинных: Обратите внимание на реакции других и несоответствия в их рассказах. Убийца может стараться слишком сильно отвлечь подозрения или действовать слишком уверенно.",
        "startGameTextr": "Для убийцы: Сохраняйте спокойствие и старайтесь смешаться с остальными. Используйте особенности своего персонажа, чтобы запутать остальных и избежать подозрений.",
        "endOfText": "Конец игры",
        "endOfTexts": "Когда убийца раскрыт, игра заканчивается. Игроки могут выбрать, сыграть еще один раунд с другими персонажами или внести изменения в правила для следующих игр."
    },
    am: {
        "title": "Ո՞վ է մարդասպանը - Խաղի հրահանգներ",
        "welcome": "Բարի գալուստ, Հետախույզ։ Հետևեք այս հրահանգներին ձեր քննությունը սկսելու և առեղծվածը բացահայտելու համար։",
        "overviewTitle": "Նպատակ",
        "overviewText": "Խաղի նպատակը պարզելն է, թե ով է մարդասպանը նախքան մյուս խաղացողները։ Յուրաքանչյուր խաղացող ստանում է կերպար և հետևելով իր շուրջը, հարցաքննությամբ ու հուշումներով պետք է պարզի, թե ով է մարդասպանը։",
        "howToPlayTitle": "Պատրաստում",
        "howToPlaySteps": [
            "Խաղացողներ: 4-12 խաղացող:",
            "Կերպարների քարտեր: Յուրաքանչյուր խաղացող ստանում է կերպար, որը նկարագրում է իր դերը, հմտությունները և ֆոնը (օրինակ՝ 'Բժիշկ', 'Ոստիկան', 'Խոհարար' և այլն): Այս կերպարներն են կասկածյալները՝ տարբեր ունակություններով։ Մեկ քարտ նշում է 'Մարդասպանը':",
            "Մարդասպանի քարտը: Դրեք մեկ 'Մարդասպանի' քարտ տախտակին և խառնեք քարտերը։ Մնացածը անմեղ կերպարներ են։ 'Մարդասպանի' քարտը պահված է բոլոր խաղացողներից։",
            "Խաղի վարող: Նշանակեք խաղի վարողին, ով կկառավարի խաղը, կընթերցի հուշումները և կկառավարի քննությունը։"
        ],
        "tipsTitle": "Խաղի ընթացք",
        "tipsList": "Խաղի սկիզբը:",
        "tipsList1": "Խաղի վարողը խառնում է կերպարների քարտերը և բաժանում խաղացողներին՝ ապահովելով, որ մեկը ստանա 'Մարդասպանի' քարտը։",
        "tipsList2": "Հետաքննություն:",
        "tipsList3": "Վարողը տրամադրում է հետաքննությունը ուղղորդող հուշումներ կամ իրադարձություններ, ինչպիսիք են՝",
        "tipsList4": "Ֆիզիկական ապացույցներ դեպքի վայրում (օրինակ՝ արյան հետք խոհարարի կողքին):",
        "tipsList5": "Խաղացողների վկայությունները (օրինակ՝ 'Մատուցողը' կարող է ասել, որ տեսել է ինչ-որ մեկին):",
        "tipsList6": "Բացահայտումներ, որոնք ստիպում են խաղացողներին կիսվել տեղեկությամբ։",
        "tipsList7": "Խաղացողները հերթով տալիս են միմյանց հարցեր կամ ներկայացնում ապացույցներ՝ փորձելով բացահայտել մարդասպանը։ Օրինակ՝",
        "tipsList8": "Որտեղ էիր, երբ հանցագործությունը կատարվեց:",
        "tipsList9": "Ինչ գիտես զոհի մասին:",
        "tipsList10": "Ալիբի ունե՞ս:",
        "tipsList11": "Մեղադրանքներ և քննարկումներ:",
        "tipsList12": "Խաղացողները կարող են քննարկել իրենց գտնած տեղեկությունները, ստեղծել դաշինքներ կամ փորձել մոլորեցնել ուրիշներին՝ կեղծ տեղեկություն տրամադրելով։",
        "tipsList13": "Մարդասպանի դեր:",
        "tipsList14": "Խաղացողը, որը ունի 'Մարդասպանի' քարտը, պետք է խուսափի կասկածներից, պահպանելով գաղտնիությունը։",
        "tipsList15": "Վերջնական մեղադրանք:",
        "tipsList16": "Եթե խաղացողները բավարար տեղեկություն ունեն, կարող են մեղադրել մեկին։",
        "tipsList17": "Խաղի հաղթանակը:",
        "tipsList18": "Եթե մարդասպանը հայտնաբերվի, անմեղները հաղթում են։",
        "tipsList19": "Եթե մարդասպանը չի բացահայտվում, նա հաղթում է։",
        "controlsTitle": "Հավելյալ կանոններ (հնարավոր)",
        "controlsList": "Հատուկ հնարավորություններ: Որոշ կերպարներ ունենում են հատուկ հնարավորություններ։",
        "controlsListR": "Ժամանակային ռեժիմ: Նշանակեք ժամանակային սահման։",
        "controlsListL": "Մի քանի մարդասպանի ռեժիմ: Հնարավոր է ավելացնել այլ մարդասպան։",
        "startGameText": "Խորհուրդներ խաղացողներին",
        "startGameTexts": "Անմեղներին՝ Զգուշացեք մյուսների ռեակցիաներին և անհամապատասխանություններին։",
        "startGameTextr": "Մարդասպանին՝ պահպանեք հանգստությունը։",
        "endOfText": "Խաղի ավարտը",
        "endOfTexts": "Խաղն ավարտվում է, երբ մարդասպանը բացահայտվում է։"
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


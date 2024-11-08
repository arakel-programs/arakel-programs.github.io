// Define text content specifically for the Privacy Policy
const privacyContent = {
    en: {
        title: "Privacy Policy",
        overviewTitle: "Overview",
        overviewText: "This Privacy Policy outlines how we collect, use, and protect your personal information while you use the 'Who is the Killer' game.",
        dataCollectionTitle: "Data Collection",
        dataCollectionText: "We may collect data such as your name, email address, and gameplay information to improve the game experience and provide support.",
        dataUsageTitle: "Data Usage",
        dataUsageText: "Your data is used to enhance gameplay, improve our services, and communicate important information about the game.",
        dataProtectionTitle: "Data Protection",
        dataProtectionText: "We are committed to protecting your personal information through secure storage and encryption methods.",
        contactUsTitle: "Contact Us",
        contactUsText: "If you have questions about this Privacy Policy, please contact us at support@example.com."
    },
    es: {
        title: "Política de Privacidad",
        overviewTitle: "Visión General",
        overviewText: "Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal mientras usa el juego '¿Quién es el Asesino?'.",
        dataCollectionTitle: "Recopilación de Datos",
        dataCollectionText: "Podemos recopilar datos como su nombre, dirección de correo electrónico e información de juego para mejorar la experiencia del juego y brindar soporte.",
        dataUsageTitle: "Uso de Datos",
        dataUsageText: "Sus datos se utilizan para mejorar el juego, mejorar nuestros servicios y comunicar información importante sobre el juego.",
        dataProtectionTitle: "Protección de Datos",
        dataProtectionText: "Estamos comprometidos a proteger su información personal mediante métodos de almacenamiento seguro y cifrado.",
        contactUsTitle: "Contáctenos",
        contactUsText: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos en support@example.com."
    }
    // Additional languages can be added here
};

// Function to update the Privacy Policy content based on the selected language
function updatePrivacyContent(language) {
    const policy = privacyContent[language];
    document.getElementById('policy-title').textContent = policy.title;
    document.getElementById('overview-title').textContent = policy.overviewTitle;
    document.getElementById('overview-text').textContent = policy.overviewText;
    document.getElementById('data-collection-title').textContent = policy.dataCollectionTitle;
    document.getElementById('data-collection-text').textContent = policy.dataCollectionText;
    document.getElementById('data-usage-title').textContent = policy.dataUsageTitle;
    document.getElementById('data-usage-text').textContent = policy.dataUsageText;
    document.getElementById('data-protection-title').textContent = policy.dataProtectionTitle;
    document.getElementById('data-protection-text').textContent = policy.dataProtectionText;
    document.getElementById('contact-us-title').textContent = policy.contactUsTitle;
    document.getElementById('contact-us-text').textContent = policy.contactUsText;
}

// Event listener for language selection
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updatePrivacyContent(selectedLanguage);
});

// Initialize with default language
updatePrivacyContent('en');

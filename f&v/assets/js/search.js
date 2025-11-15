const searchInput = document.getElementById('search');
    const productCards = document.querySelectorAll('#products .card');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
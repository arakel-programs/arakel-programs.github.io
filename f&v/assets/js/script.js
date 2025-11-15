// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Elements for mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function closeMenu() {
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        if (navMenu) { navMenu.classList.remove('open'); navMenu.hidden = true; navMenu.setAttribute('aria-hidden','true'); }
        if (menuOverlay) { menuOverlay.classList.remove('open'); menuOverlay.hidden = true; }
        document.body.classList.remove('no-scroll');
    }
    function openMenu() {
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
        if (navMenu) { navMenu.classList.add('open'); navMenu.hidden = false; navMenu.setAttribute('aria-hidden','false'); }
        if (menuOverlay) { menuOverlay.hidden = false; menuOverlay.classList.add('open'); }
        document.body.classList.add('no-scroll');
    }

    if (menuToggle && navMenu && menuOverlay) {
        // show hamburger on small screens (in case HTML set hidden initially)
        menuToggle.hidden = false;

        menuToggle.addEventListener('click', () => {
            const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
            willOpen ? openMenu() : closeMenu();
        });

        // close when clicking overlay
        menuOverlay.addEventListener('click', closeMenu);

        // close when tapping link
        navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

        // close on Escape
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    }

    // existing language toggle: keep desktop behavior and add mobile language control
    const btn = document.getElementById('langBtn');
    const list = document.getElementById('langList');
    const wrapper = document.getElementById('langToggle');
    if (btn && list && wrapper) {
        btn.addEventListener('click', (e) => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            list.hidden = expanded;
        });
        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) { btn.setAttribute('aria-expanded','false'); list.hidden = true; }
        });
    }

    // mobile language toggle (inside panel)
    const btnM = document.getElementById('langBtnMobile');
    const listM = document.getElementById('langListMobile');
    if (btnM && listM) {
        btnM.addEventListener('click', () => {
            const expanded = btnM.getAttribute('aria-expanded') === 'true';
            btnM.setAttribute('aria-expanded', String(!expanded));
            listM.hidden = expanded;
        });
        document.addEventListener('click', (e) => {
            if (!document.getElementById('navMenu')?.contains(e.target)) {
                btnM.setAttribute('aria-expanded','false');
                if (listM) listM.hidden = true;
            }
        });
        listM.addEventListener('click', (e) => {
            const a = e.target.closest('a[data-lang]');
            if (!a) return;
            e.preventDefault();
            const img = a.querySelector('img');
            if (img) {
                const targetBtnImg = document.querySelector('#menuToggle img, #langBtn img, #langBtnMobile img');
                if (targetBtnImg) { targetBtnImg.src = img.src; targetBtnImg.alt = img.alt; }
            }
            btnM.setAttribute('aria-expanded','false'); listM.hidden = true;
        });
    }
});
// ...existing code...


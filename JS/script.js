document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
        overlay.classList.toggle('hidden'); // Toggle the opacity to make it visible
        overlay.classList.toggle('pointer-events-none'); // Toggle pointer events to make it interactive
    });

    // Close the menu and overlay when clicking outside the menu
    overlay.addEventListener('click', () => {
        if (nav.classList.contains('flex')) {
            btn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
            overlay.classList.toggle('pointer-events-none');
        }
    });
});
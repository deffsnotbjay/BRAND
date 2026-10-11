/* projects.js — extra wiring for the Projects page */

// Re-attach custom cursor hover to project cards
// (script.js runs first; this registers any [data-cursor-text] nodes
//  added after the initial DOMContentLoaded sweep.)
(function () {
    const cursor = document.getElementById('siteCursor');
    if (!cursor) return;

    const label = cursor.querySelector('.site-cursor__label');
    if (!(label instanceof HTMLElement)) return;

    // Make sure we're running on a fine-pointer device
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    function activateHover(el) {
        label.textContent = el.dataset.cursorText || 'View';
        cursor.classList.add('site-cursor--hover');
    }

    function deactivateHover() {
        cursor.classList.remove('site-cursor--hover');
    }

    // Query all project cards on this page
    document.querySelectorAll('.pg-card[data-cursor-text]').forEach((el) => {
        el.addEventListener('mouseenter', () => activateHover(el));
        el.addEventListener('mouseleave', deactivateHover);
        el.addEventListener('focus', () => activateHover(el));
        el.addEventListener('blur', deactivateHover);
    });
})();

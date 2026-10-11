/* contact.js — Contact page interactions */

(function () {
    'use strict';

    /* ── Form submission ─────────────────────────────────────── */
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('ctSubmit');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending…';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';

            // Simulate async send (replace with real fetch/formspree/etc.)
            setTimeout(function () {
                submitBtn.textContent = 'Sent ✓';
                submitBtn.style.background = '#1a7f4b';
                submitBtn.style.opacity = '1';

                setTimeout(function () {
                    form.reset();
                    // reset tag states
                    document.querySelectorAll('.ct-tag input').forEach(function (cb) {
                        cb.checked = false;
                    });
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2200);
            }, 1400);
        });
    }

    /* ── Tag keyboard accessibility ─────────────────────────── */
    document.querySelectorAll('.ct-tag').forEach(function (label) {
        label.addEventListener('keydown', function (e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                const cb = label.querySelector('input[type="checkbox"]');
                if (cb) cb.checked = !cb.checked;
            }
        });
        // Make labels focusable
        label.setAttribute('tabindex', '0');
    });

    /* ── Select placeholder colour ──────────────────────────── */
    const select = document.getElementById('ctBudget');
    if (select) {
        function updateSelectColour() {
            select.style.color = select.value === ''
                ? 'rgba(10,10,10,0.35)'
                : 'rgba(10,10,10,0.9)';
        }
        select.addEventListener('change', updateSelectColour);
        updateSelectColour();
    }

})();

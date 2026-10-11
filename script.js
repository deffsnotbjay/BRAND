const mobileMenu = document.getElementById("mobileMenu");
const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");

if (!mobileMenu || !burgerBtn || !closeBtn) {
    // Menu markup may be intentionally removed for certain pages/layouts.
    // Avoid hard-crashing the page in that case.
    console.warn("Mobile menu elements not found; skipping menu wiring.");
} else {

    let lastActiveElement = null;

    function setMenuOpen(isOpen) {
        if (isOpen) {
            lastActiveElement = document.activeElement;
            mobileMenu.hidden = false;
            burgerBtn.setAttribute("aria-expanded", "true");
            document.documentElement.classList.add("no-scroll");
            document.body.classList.add("no-scroll");

            // Focus the first link for keyboard users.
            const firstLink = mobileMenu.querySelector(".mobile-link");
            (firstLink || closeBtn).focus();
        } else {
            mobileMenu.hidden = true;
            burgerBtn.setAttribute("aria-expanded", "false");
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");

            if (lastActiveElement instanceof HTMLElement) {
                lastActiveElement.focus();
            } else {
                burgerBtn.focus();
            }
        }
    }

    closeBtn.addEventListener("click", () => setMenuOpen(false));

    burgerBtn.addEventListener("click", () => {
        const isOpen = burgerBtn.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    mobileMenu.addEventListener("click", (e) => {
        const target = e.target;
        if (!(target instanceof HTMLElement)) return;
        if (target.closest(".mobile-link")) {
            setMenuOpen(false);
            return;
        }

        // Click outside the panel closes the menu.
        if (!target.closest(".mobile-menu__panel")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !mobileMenu.hidden) {
            setMenuOpen(false);
        }
    });

    // Simple focus trap when open
    mobileMenu.addEventListener("keydown", (e) => {
        if (e.key !== "Tab") return;

        const focusable = mobileMenu.querySelectorAll(
            "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"
        );

        const focusables = Array.from(focusable).filter(
            (el) => el instanceof HTMLElement && !el.hasAttribute("disabled")
        );

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
}

/* Custom site cursor behavior */
function initSiteCursor() {
    // Only enable on devices that support a precise pointer and hover
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = document.getElementById('siteCursor');
    if (!cursor) return;

    const label = cursor.querySelector('.site-cursor__label');
    if (!(label instanceof HTMLElement)) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    const ease = 0.18;

    function rafLoop() {
        curX += (mouseX - curX) * ease;
        curY += (mouseY - curY) * ease;
        cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(rafLoop);
    }

    requestAnimationFrame(rafLoop);

    document.addEventListener('pointermove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function activateHover(el) {
        const text = el.dataset.cursorText || 'View';
        label.textContent = text;
        cursor.classList.add('site-cursor--hover');
    }

    function deactivateHover() {
        cursor.classList.remove('site-cursor--hover');
    }

    const hoverTargets = document.querySelectorAll('[data-cursor-text]');
    hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', () => activateHover(el));
        el.addEventListener('mouseleave', deactivateHover);
        el.addEventListener('focus', () => activateHover(el));
        el.addEventListener('blur', deactivateHover);
    });

    document.addEventListener('mousedown', () => cursor.classList.add('site-cursor--active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('site-cursor--active'));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteCursor, { once: true });
} else {
    initSiteCursor();
}

const heroBg = document.querySelector(".hero__bg");
const heroContent = document.querySelector(".hero__content");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;
    const clampY = Math.min(scrollY, window.innerHeight);

    if (heroBg) {
        // Move the background slightly upward on scroll so we never expose
        // a top gap (which would reveal the page background behind the hero).
        heroBg.style.transform =
            `translateY(-${clampY * 0.10}px) scale(1.18)`;
    }

    if (heroContent) {
        heroContent.style.transform =
            `translateY(-${clampY * 0.18}px)`;
    }

});

// Services accordion (FAQ-like)
const accordions = document.querySelectorAll("[data-accordion]");

accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll(".accordion__item"));
    if (items.length === 0) return;

    function setItemOpen(itemToOpen, open) {
        const trigger = itemToOpen.querySelector(".accordion__trigger");
        const panel = itemToOpen.querySelector(".accordion__panel");
        if (!(trigger instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) return;

        itemToOpen.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
        panel.hidden = !open;
    }

    // Normalize initial state
    items.forEach((item) => {
        const trigger = item.querySelector(".accordion__trigger");
        const panel = item.querySelector(".accordion__panel");
        if (!(trigger instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) return;

        const isOpen = item.classList.contains("is-open") || trigger.getAttribute("aria-expanded") === "true";
        setItemOpen(item, isOpen);
    });

    items.forEach((item) => {
        const trigger = item.querySelector(".accordion__trigger");
        if (!(trigger instanceof HTMLButtonElement)) return;

        trigger.addEventListener("click", () => {
            const isCurrentlyOpen = item.classList.contains("is-open");

            // Close others
            items.forEach((other) => {
                if (other !== item) setItemOpen(other, false);
            });

            // Toggle current
            setItemOpen(item, !isCurrentlyOpen);
        });
    });
});

/* Testimonial Slider */
(function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonials__btn--prev');
    const nextBtn = document.querySelector('.testimonials__btn--next');

    if (slides.length === 0 || !prevBtn || !nextBtn) return;

    let current = 0;

    function goTo(index) {
        slides[current].classList.remove('is-active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('is-active');
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
})();

// const CARDS = [
//     { label: 'Cairo.', bg: '#1b2820', accent: '#2e4a38', image: null, video: null },
//     { label: 'Manila.', bg: '#1a2535', accent: '#253b55', image: null, video: null },
//     { label: 'oslo.', bg: '#221810', accent: '#4a3020', image: null, video: null },
//     { label: 'thur', bg: '#242424', accent: '#3a3a3a', image: null, video: null },
//     { label: 'Nairobi.', bg: '#1c1c2c', accent: '#2e2e48', image: null, video: null },
// ];

// /*
//     ARC on Y-axis (horizontal rotation = left/right swing + depth).
//     Then we tilt the entire arc plane diagonally so the sweep goes
//     from bottom-right → top-left instead of flat left → right.

//     ARC_DEGREES  : how much of the circle cards travel through (270°)
//     RADIUS       : size of the arc — bigger = cards more spread out
//     DIAG_TILT    : how steeply the arc is tilted upward (degrees).
//                     0 = flat horizontal, 45 = steep diagonal, 90 = vertical
// */
// const ARC_DEGREES = 210;
// const RADIUS = 556;   // ~10px visual gap (avoid overlap)
// const DIAG_TILT = 20;    // diagonal tilt — bottom-right to top-left
// const CARD_W = 400;
// const CARD_H = 270;

// const N = CARDS.length;
// const carousel = document.getElementById('carousel');
// const dotsEl = document.getElementById('dots');
// const counter = document.getElementById('counter');
// const hint = document.getElementById('hint');

// CARDS.forEach((c, i) => {
//     const card = document.createElement('div');
//     card.className = 'card';

//     let mediaHTML = '';
//     if (c.video) {
//         mediaHTML = `<video class="card-placeholder" autoplay muted loop playsinline>
//                 <source src="${c.video}"></video>`;
//     } else if (c.image) {
//         mediaHTML = `<img class="card-placeholder" src="${c.image}" alt="${c.label}"/>`;
//     } else {
//         mediaHTML = `<img class="card-placeholder" src="https://dummyimage.com/1200x800/ececec/ececec" alt="${c.label}" loading="lazy"/>`;
//     }

//     card.innerHTML = `
//         <div class="card-inner">
//             <div class="card-face">
//                 ${mediaHTML}
//                 <div class="card-overlay"></div>
//                 <div class="card-border"></div>
//                 <div class="card-label">${c.label}</div>
//             </div>
//             <div class="card-back">
//                 <div class="card-border card-border--back"></div>
//                 <div class="card-label card-label--back">${c.label}</div>
//             </div>
//         </div>`;

//     carousel.appendChild(card);

//     const dot = document.createElement('div');
//     dot.className = 'dot' + (i === 0 ? ' active' : '');
//     dotsEl.appendChild(dot);
// });

// const cardEls = carousel.querySelectorAll('.card');
// const dotEls = dotsEl.querySelectorAll('.dot');
// const tiltRad = (DIAG_TILT * Math.PI) / 180;

// function setActive(idx) {
//     dotEls.forEach((d, i) => d.classList.toggle('active', i === idx));
//     counter.textContent =
//         String(idx + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0');
// }

// function render(progress) {
//     /*
//         Each card sits at a fixed angle on a 270° arc.
//         Card 0 is at angle 0, card N-1 is at angle 270°.

//         The arc's "front" (angle=135°, midpoint) faces the viewer.
//         As progress goes 0→1, we rotate the arc so each card passes
//         through the front position.

//         Arc position for card i at scroll progress p:
//         baseAngle  = i * (270 / (N-1))         [card's fixed spot on arc]
//         viewAngle  = p * 270                    [how far arc has rotated]
//         angle      = baseAngle - viewAngle      [offset from front]

//         From angle we get x (left/right) and z (depth) on the horizontal arc.
//         Then we apply the diagonal tilt: rotate the x-axis result into
//         both x and y screen coordinates using DIAG_TILT.

//         RIGHT → LEFT direction:
//         Cards with positive offset (not yet reached) sit to the RIGHT.
//         Cards with negative offset (already passed)  sit to the LEFT.
//         x = sin(rad) * RADIUS → positive sin = right ✓
//         After tilt: screen_x = x * cos(tilt)  → still right for positive
//                     screen_y = x * sin(tilt)  → positive = DOWN (below center)
//         So positive offset = right + below = bottom-right ✓
//             negative offset = left  + above = top-left    ✓
//     */

//     const step = ARC_DEGREES / (N - 1);
//     const scrollShift = progress * ARC_DEGREES;

//     let closestIdx = 0;
//     let closestDist = Infinity;

//     cardEls.forEach((card, i) => {
//         const angle = (i * step) - scrollShift;
//         const rad = (angle * Math.PI) / 180;

//         // Base arc position (Y-axis rotation)
//         const arcX = Math.sin(rad) * RADIUS;   // left/right on flat arc
//         const arcZ = Math.cos(rad) * RADIUS - RADIUS; // depth (0 at front)

//         // Apply diagonal tilt: decompose arcX into screen X and Y
//         // cos(tilt) keeps horizontal component, sin(tilt) adds vertical
//         const screenX = arcX * Math.cos(tiltRad);  // right for positive arcX
//         const screenY = arcX * Math.sin(tiltRad);  // down  for positive arcX

//         const absAngle = Math.abs(angle);

//         // Scale: center card = 1.0, side cards shrink
//         const scale = Math.max(0.38, 1 - absAngle * 0.0032);

//         // Opacity: center = 1, edges fade out
//         const opacity = Math.max(0.08, 1 - absAngle * 0.008);

//         // z-index: center card on top
//         const zIndex = Math.round(500 - absAngle * 8);

//         // Rotate as cards travel so the back becomes visible as they move away
//         const rotateY = Math.max(-175, Math.min(175, -angle * 1.2));

//         card.style.transform =
//             `translate3d(${screenX - (CARD_W / 2)}px, ${screenY - (CARD_H / 2)}px, ${arcZ}px) rotateY(${rotateY}deg) scale(${scale})`;
//         card.style.opacity = opacity;
//         card.style.zIndex = zIndex;

//         if (absAngle < closestDist) {
//             closestDist = absAngle;
//             closestIdx = i;
//         }
//     });

//     setActive(closestIdx);
//     hint.classList.toggle('hidden', progress > 0.04);
// }

// const scrollContainer = document.getElementById('scrollContainer');

// function onScroll() {
//     const rect = scrollContainer.getBoundingClientRect();
//     const scrolled = -rect.top;
//     const total = scrollContainer.offsetHeight - window.innerHeight;
//     const progress = Math.min(1, Math.max(0, scrolled / total));
//     render(progress);
// }

// window.addEventListener('scroll', onScroll, { passive: true });
// render(0);
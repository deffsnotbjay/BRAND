/* project-detail.js
   Reads ?id= from the URL and populates the detail page from PROJECTS data.
*/

(function () {
    'use strict';

    /* ── helpers ──────────────────────────────────────────────── */
    function qs(sel, ctx) { return (ctx || document).querySelector(sel); }

    function el(tag, attrs, ...children) {
        const node = document.createElement(tag);
        if (attrs) {
            for (const [k, v] of Object.entries(attrs)) {
                if (k === 'class') node.className = v;
                else if (k === 'text') node.textContent = v;
                else if (k === 'html') node.innerHTML = v;
                else node.setAttribute(k, v);
            }
        }
        children.forEach(c => {
            if (typeof c === 'string') node.insertAdjacentHTML('beforeend', c);
            else if (c instanceof Node) node.appendChild(c);
        });
        return node;
    }

    /* ── get project from URL ─────────────────────────────────── */
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const project = typeof getProject === 'function' ? getProject(id) : null;

    if (!project) {
        document.title = 'BRAND — Project Not Found';
        const main = qs('#detailMain');
        if (main) {
            main.innerHTML = `
                <div style="padding:120px 80px;text-align:center;font-family:var(--font-display);">
                    <p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:rgba(10,10,10,.45);margin:0 0 16px">[ 404 ]</p>
                    <h1 style="margin:0 0 24px;font-size:clamp(32px,5vw,60px);color:#0a0a0a;">Project not found</h1>
                    <a href="projects.html" style="font-family:var(--font-display);font-size:15px;color:#0a0a0a;border-bottom:1px solid #0a0a0a;">← Back to Projects</a>
                </div>`;
        }
        return;
    }

    /* ── update <title> and <meta description> ────────────────── */
    document.title = `BRAND — ${project.title} / ${project.subtitle}`;
    const metaDesc = qs('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.description);

    /* ── LEFT SIDEBAR ─────────────────────────────────────────── */
    const titleEl = qs('#detailTitle');
    const descEl = qs('#detailDesc');
    const metaEl = qs('#detailMeta');
    const svcEl = qs('#detailServices');
    const visitEl = qs('#detailVisit');

    if (titleEl) titleEl.textContent = project.title;
    if (descEl) descEl.textContent = project.description;

    if (metaEl) {
        const rows = [
            ['Client', project.client],
            ['Year', project.year],
            ['Industry', project.industry],
            ['Duration', project.duration],
        ];
        metaEl.innerHTML = rows.map(([label, value]) => `
            <div class="detail-meta__row">
                <span class="detail-meta__label">${label}</span>
                <span class="detail-meta__value">${value}</span>
            </div>`).join('');
    }

    if (svcEl && project.services.length) {
        const labelSpan = el('span', { class: 'detail-services__label', text: 'Services:' });
        const tagsDiv = el('div', { class: 'detail-services__tags' });
        project.services.forEach(s => {
            tagsDiv.appendChild(el('span', { class: 'detail-tag', text: s }));
        });
        svcEl.appendChild(labelSpan);
        svcEl.appendChild(tagsDiv);
    }

    if (visitEl) visitEl.href = project.websiteUrl || '#';

    /* ── RIGHT CONTENT PANEL ──────────────────────────────────── */
    const contentEl = qs('#detailContent');
    if (contentEl && project.sections) {
        let firstImage = true;
        project.sections.forEach((section) => {
            if (section.type === 'image') {
                const isHero = firstImage;
                firstImage = false;
                const wrapper = el('div', { class: isHero ? 'detail-hero-img' : 'detail-inline-img' });
                const img = document.createElement('img');
                img.src = section.src;
                img.alt = section.alt || '';
                img.loading = isHero ? 'eager' : 'lazy';
                wrapper.appendChild(img);
                contentEl.appendChild(wrapper);

            } else if (section.type === 'text') {
                const sec = el('div', { class: 'detail-text-section' });
                sec.appendChild(el('span', { class: 'detail-section-label', text: section.label }));
                sec.appendChild(el('p', { class: 'detail-section-body', text: section.body }));
                contentEl.appendChild(sec);
            }
        });
    }

    /* ── RELATED PROJECTS ─────────────────────────────────────── */
    const relGrid = qs('#detailRelatedGrid');
    if (relGrid && project.related) {
        const related = typeof getRelated === 'function' ? getRelated(project.related) : [];
        related.slice(0, 2).forEach(rel => {
            const card = el('a', {
                class: 'rel-card',
                href: `project-detail.html?id=${rel.id}`,
                'aria-label': `${rel.title} — ${rel.subtitle}`,
                'data-cursor-text': 'View Project',
                tabindex: '0'
            });

            const media = el('div', { class: 'rel-card__media' });
            const img = document.createElement('img');
            img.src = rel.heroImage;
            img.alt = `${rel.title} — ${rel.subtitle}`;
            img.loading = 'lazy';
            media.appendChild(img);

            const meta = el('div', { class: 'rel-card__meta' });
            meta.innerHTML = `
                <span class="rel-card__title">${rel.title} <span class="rel-card__sub">— ${rel.subtitle}</span></span>
                <span class="rel-card__year">${rel.year}</span>`;

            card.appendChild(media);
            card.appendChild(meta);
            relGrid.appendChild(card);

            /* wire cursor hover */
            card.addEventListener('mouseenter', () => activateCursor(card));
            card.addEventListener('mouseleave', deactivateCursor);
            card.addEventListener('focus', () => activateCursor(card));
            card.addEventListener('blur', deactivateCursor);
        });
    }

    /* ── CUSTOM CURSOR for related cards ─────────────────────── */
    function activateCursor(el) {
        const cursor = document.getElementById('siteCursor');
        if (!cursor) return;
        const label = cursor.querySelector('.site-cursor__label');
        if (label) label.textContent = el.dataset.cursorText || 'View';
        cursor.classList.add('site-cursor--hover');
    }

    function deactivateCursor() {
        const cursor = document.getElementById('siteCursor');
        if (cursor) cursor.classList.remove('site-cursor--hover');
    }

    /* ── SCROLL POSITION: start right panel at top ────────────── */
    const right = qs('#detailRight');
    if (right) right.scrollTop = 0;

    /* ── FIXED LEFT: unfix when split section ends ────────────── */
    (function initFixedLeft() {
        const leftEl = document.getElementById('detailLeft');
        const splitEl = document.getElementById('detailSplit');
        if (!leftEl || !splitEl) return;

        // Only active on desktop (above 860px breakpoint)
        const mq = window.matchMedia('(min-width: 861px)');

        function update() {
            if (!mq.matches) return; // mobile handles it via CSS

            const splitRect = splitEl.getBoundingClientRect();
            const leftH = leftEl.offsetHeight;
            const navTop = parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--nav-offset-top')) || 22;
            const navH = parseFloat(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--nav-height')) || 50;
            const topOffset = navTop + navH;

            // When the bottom of the split is about to pass behind the
            // top of the left panel, pin it absolutely so it sticks to
            // the split's bottom edge instead of floating over content below.
            const splitBottom = splitEl.getBoundingClientRect().bottom;

            if (splitBottom <= topOffset + leftH) {
                // Switch to absolute so it stays inside the split
                leftEl.style.position = 'absolute';
                leftEl.style.top = 'auto';
                leftEl.style.bottom = '0';
                leftEl.style.left = '0';
            } else {
                // Back to fixed while still within the split
                leftEl.style.position = 'fixed';
                leftEl.style.top = topOffset + 'px';
                leftEl.style.bottom = '';
                leftEl.style.left = '0';
            }
        }

        // Make split position:relative so absolute child positions inside it
        splitEl.style.position = 'relative';

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update(); // run once on load
    })();

})();

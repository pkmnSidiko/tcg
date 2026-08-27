/* Turn the methodology page into a set of early-web archive boxes. */
document.addEventListener('DOMContentLoaded', function () {
    const area = document.querySelector('.content-area');
    if (!area || !window.location.pathname.includes('/methodology')) return;

    const original = Array.from(area.children);
    if (!original.length) return;

    const page = document.createElement('div');
    page.className = 'methodology-page';

    const intro = document.createElement('header');
    intro.className = 'methodology-intro';

    let index = 0;
    while (index < original.length && !(original[index].tagName === 'H2' && original[index].id)) {
        const node = original[index];
        if (node.tagName === 'P' && node.classList.contains('section-label')) {
            node.classList.remove('section-label');
            node.classList.add('methodology-label');
        }
        intro.appendChild(node);
        index++;
    }
    if (intro.children.length) page.appendChild(intro);

    const summary = document.createElement('section');
    summary.className = 'methodology-summary';
    summary.innerHTML = `
        <span class="section-label">The Short Version</span>
        <h2>Collection Rules at a Glance</h2>
        <ul>
            <li>Every binder card gets at least a penny sleeve.</li>
            <li>Foil cards get a perfect-fit sleeve inside a penny sleeve.</li>
            <li>Each collection can have its own definition of complete.</li>
            <li>Master collections focus on qualifying English printings.</li>
            <li>The Living Pokédex is about representation, not every printing.</li>
            <li>Michi Method spreads are aesthetic compositions, not checklists.</li>
        </ul>
    `;
    page.appendChild(summary);

    const sections = document.createElement('div');
    sections.className = 'methodology-sections';

    while (index < original.length) {
        const heading = original[index];
        if (!(heading.tagName === 'H2' && heading.id)) {
            index++;
            continue;
        }

        const box = document.createElement('section');
        box.className = 'methodology-box';
        box.id = heading.id;

        const label = document.createElement('span');
        label.className = 'methodology-box-label';
        label.textContent = heading.textContent.trim();
        box.appendChild(label);

        heading.classList.add('methodology-box-heading');
        box.appendChild(heading);
        index++;

        while (index < original.length && !(original[index].tagName === 'H2' && original[index].id)) {
            box.appendChild(original[index]);
            index++;
        }
        sections.appendChild(box);
    }

    page.appendChild(sections);
    area.replaceChildren(page);
});

/* Turn the existing methodology headings into early-web boxed sections. */
document.addEventListener('DOMContentLoaded', function () {
    const area = document.querySelector('.content-area');
    if (!area || !window.location.pathname.includes('/methodology')) return;

    const children = Array.from(area.children);
    if (!children.length) return;

    const page = document.createElement('div');
    page.className = 'methodology-page';

    const intro = document.createElement('header');
    intro.className = 'methodology-intro';

    let index = 0;
    while (index < children.length && !(children[index].tagName === 'H2' && children[index].id)) {
        intro.appendChild(children[index]);
        index++;
    }
    if (intro.children.length) page.appendChild(intro);

    const sections = document.createElement('div');
    sections.className = 'methodology-sections';

    while (index < children.length) {
        const heading = children[index];
        if (heading.tagName !== 'H2') {
            sections.appendChild(heading);
            index++;
            continue;
        }

        const box = document.createElement('section');
        box.className = 'methodology-box';
        if (heading.id) box.id = heading.id;
        box.appendChild(heading);
        index++;

        while (index < children.length && children[index].tagName !== 'H2') {
            box.appendChild(children[index]);
            index++;
        }
        sections.appendChild(box);
    }

    page.appendChild(sections);
    area.replaceChildren(page);
});

const directoryMounts = document.querySelectorAll('[data-directory-category]');
const featuredMount = document.querySelector('#featured-directory');

function cardTemplate(item) {
  return `
    <article class="card">
      <span class="badge">${item.type}</span>
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <a class="button" href="${item.href}">View Asset</a>
    </article>
  `;
}

async function loadDirectory() {
  const base = window.location.pathname.includes('/pages/') ? '..' : '.';

  try {
    const response = await fetch(`${base}/data/directory.json`);
    const items = await response.json();

    if (featuredMount) {
      featuredMount.innerHTML = items.slice(0, 6).map(cardTemplate).join('');
    }

    directoryMounts.forEach((mount) => {
      const category = mount.dataset.directoryCategory;
      const matches = items.filter((item) => item.category === category || item.type === category);
      mount.innerHTML = matches.length
        ? matches.map(cardTemplate).join('')
        : '<article class="card"><h2>No approved assets yet</h2><p>This category is ready for curated additions.</p></article>';
    });
  } catch (error) {
    const fallback = '<article class="card"><h2>Directory data pending</h2><p>Add approved items to directory/data/directory.json.</p></article>';
    if (featuredMount) featuredMount.innerHTML = fallback;
    directoryMounts.forEach((mount) => {
      mount.innerHTML = fallback;
    });
  }
}

loadDirectory();

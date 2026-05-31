const navMount = document.querySelector('#site-nav');

async function loadNavigation() {
  if (!navMount) return;

  const base = window.location.pathname.includes('/pages/') ? '..' : '.';

  try {
    const response = await fetch(`${base}/data/navigation.json`);
    const links = await response.json();

    navMount.innerHTML = links
      .map((link) => `<a href="${base}/${link.href}">${link.label}</a>`)
      .join('');
  } catch (error) {
    navMount.innerHTML = [
      ['index.html', 'Home'],
      ['pages/tools.html', 'Tools'],
      ['pages/agents.html', 'Agents'],
      ['pages/skills.html', 'Skills'],
      ['pages/playbooks.html', 'Playbooks'],
      ['pages/templates.html', 'Templates'],
      ['pages/submit.html', 'Submit']
    ]
      .map(([href, label]) => `<a href="${base}/${href}">${label}</a>`)
      .join('');
  }
}

loadNavigation();

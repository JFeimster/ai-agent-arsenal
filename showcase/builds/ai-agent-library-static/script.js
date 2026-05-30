document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('agent-grid');
  const searchInput = document.getElementById('search');
  let agents = [];

  // Fetch agent data
  fetch('agent-index.json')
    .then(response => {
      if (!response.ok) throw new Error('Canonical index unavailable');
      return response.json();
    })
    .catch(() => {
      console.warn('Falling back to static site-data/agents.json');
      return fetch('site-data/agents.json').then(response => response.json());
    })
    .then(data => {
      agents = data;
      renderAgents(agents);
    })
    .catch(error => {
      console.error('Error fetching agents:', error);
      gridContainer.innerHTML = '<p>Error loading agents. Please try again later.</p>';
    });

  // Render agent cards
  function renderAgents(agentsToRender) {
    gridContainer.innerHTML = '';

    if (agentsToRender.length === 0) {
      gridContainer.innerHTML = '<p>No agents found matching your search.</p>';
      return;
    }

    agentsToRender.forEach(agent => {
      const card = document.createElement('div');
      card.className = 'agent-card';

      card.innerHTML = `
        <div class="agent-header">
          <h2>${agent.name}</h2>
          <span class="agent-category">${agent.category}</span>
        </div>
        <div class="agent-body">
          <p><strong>Pain Solved:</strong> ${agent.pain_solved}</p>
          <p><strong>Buyer:</strong> ${agent.buyer}</p>
          <p><strong>Monetization:</strong> ${agent.monetization}</p>
        </div>
        <div class="agent-footer">
          <a href="${agent.file}" target="_blank" rel="noopener noreferrer" class="agent-link">View Spec &rarr;</a>
        </div>
      `;

      gridContainer.appendChild(card);
    });
  }

  // Handle search filtering
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredAgents = agents.filter(agent => {
      return agent.name.toLowerCase().includes(searchTerm) ||
             agent.category.toLowerCase().includes(searchTerm);
    });

    renderAgents(filteredAgents);
  });
});

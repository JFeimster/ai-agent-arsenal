// Sample Tool Database Array
    const toolsDatabase = [
      {
        id: "ecom-cash-flow",
        name: "Ecommerce Cash Flow Forecaster",
        platform: "AI Studio App",
        categories: ["Cash Flow", "Ecommerce Finance"],
        description: "Instantly predict revenue dips, inventory choke points, and marketing capital requirements using Gemini-1.5-Pro models.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--acid-green)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "get-my-funding",
        name: "Get My Funding Offer",
        platform: "CustomGPT",
        categories: ["Funding & Capital", "Affiliate Growth"],
        description: "A highly effective lead magnet CustomGPT for capital brokers. Dynamic lead qualification sequence that outputs full pitch files.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--orange)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "funding-pathfinder",
        name: "Funding Pathfinder GPT",
        platform: "Gemini Gem",
        categories: ["Business Credit", "Founder Ops", "Funding & Capital"],
        description: "Parses complex rule engines to find active non-dilutive lending avenues for complex corporate structures.",
        status: "Prototype",
        statusClass: "badge-proto",
        accent: "var(--magenta)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "realtime-analyzer",
        name: "Real-Time Cash Flow Analyzer",
        platform: "Static App",
        categories: ["Cash Flow", "Founder Ops"],
        description: "Zero-database analytics page for processing corporate banking ledger sheets and extracting true runway diagnostics.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--cyan)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "goal-tracker",
        name: "Funding Goal Tracker",
        platform: "Prompt System",
        categories: ["Funding & Capital", "Founder Ops"],
        description: "Precision-engineered prompt sequence designed to reverse-engineer business goals into capital milestones.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--yellow)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "mrr-to-money",
        name: "MRR to Money GPT",
        platform: "CustomGPT",
        categories: ["Cash Flow", "Founder Ops"],
        description: "Specialized dynamic model that helps SaaS founders trade monthly recurring revenue into immediate non-dilutive liquidity packages.",
        status: "Prototype",
        statusClass: "badge-proto",
        accent: "var(--magenta)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "vc-backup",
        name: "VC Backup Plan GPT",
        platform: "CustomGPT",
        categories: ["Funding & Capital", "Founder Ops"],
        description: "Alternative venture funding and emergency working capital roadmap generator when standard paths fail.",
        status: "Draft",
        statusClass: "badge-yellow",
        accent: "var(--yellow)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "bizcredit-builder",
        name: "BizCredit Builder GPT",
        platform: "Gemini Gem",
        categories: ["Business Credit", "Affiliate Growth"],
        description: "Engineered instruction set built to systematically optimize merchant profiles for major corporate lines of credit.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--acid-green)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "gpt-stack-builder",
        name: "GPT Stack Builder",
        platform: "Prompt System",
        categories: ["Founder Ops", "Affiliate Growth"],
        description: "Converts disorganized operator tasks into a structured system of connected GPT prompts, API triggers, and automation steps.",
        status: "Live",
        statusClass: "badge-live",
        accent: "var(--cyan)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      },
      {
        id: "flash-ui-portfolio",
        name: "Flash UI Portfolio",
        platform: "Vercel App",
        categories: ["Founder Ops", "Affiliate Growth"],
        description: "Instantly bundles your live custom agents into a high-octane brutalist landing page setup like this one.",
        status: "Needs Update",
        statusClass: "badge-danger",
        accent: "var(--red)",
        launchUrl: "#",
        repoUrl: "https://github.com"
      }
    ];

    // DOM Elements
    const directoryGrid = document.getElementById('directoryGrid');
    const searchInput = document.getElementById('dirSearch');
    const filterContainer = document.getElementById('filterContainer');

    let activeFilter = 'all';
    let searchQuery = '';

    // Render Function
    function renderDirectory() {
      // Filter list
      const filteredTools = toolsDatabase.filter(tool => {
        // Match Search Query
        const matchesSearch = 
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

        // Match Filter Category/Platform
        let matchesFilter = false;
        if (activeFilter === 'all') {
          matchesFilter = true;
        } else {
          // Check if platform matches or if any categories match
          matchesFilter = (tool.platform === activeFilter) || (tool.categories.includes(activeFilter));
        }

        return matchesSearch && matchesFilter;
      });

      // Clear Grid
      directoryGrid.innerHTML = '';

      // Check for empty state
      if (filteredTools.length === 0) {
        directoryGrid.innerHTML = `
          <div class="empty-state">
            <h3 class="empty-title">NO WEAPONS DEPLOYED</h3>
            <p>Your query didn't match any of the current arsenal modules. Try running a broader search command.</p>
          </div>
        `;
        return;
      }

      // Render cards
      filteredTools.forEach(tool => {
        const cardHtml = `
          <div class="tool-card" style="border-left: 5px solid ${tool.accent || 'var(--graphite)'}">
            <div class="card-top">
              <div class="card-header-row">
                <span class="platform-pill">${tool.platform}</span>
                <span class="status-badge ${tool.statusClass}">${tool.status}</span>
              </div>
              <h3 class="tool-name">${tool.name}</h3>
              <p class="tool-description">${tool.description}</p>
            </div>
            <div class="card-meta">
              ${tool.categories.map(cat => `<span class="meta-tag">${cat}</span>`).join('')}
            </div>
            <div class="card-actions">
              <a href="${tool.launchUrl}" class="btn-card-launch">Launch Tool</a>
              <a href="${tool.repoUrl}" class="btn-card-code" target="_blank">&lt;/&gt;</a>
            </div>
          </div>
        `;
        directoryGrid.insertAdjacentHTML('beforeend', cardHtml);
      });
    }

    // Filter Chips Event Listener
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-chip')) {
        // Toggle Active Class
        document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
        e.target.classList.add('active');

        // Set Active Filter value
        activeFilter = e.target.getAttribute('data-filter');
        renderDirectory();
      }
    });

    // Search Box Event Listener
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderDirectory();
    });

    // Initialize Directory Rendering on Page Load
    document.addEventListener('DOMContentLoaded', () => {
      renderDirectory();
    });
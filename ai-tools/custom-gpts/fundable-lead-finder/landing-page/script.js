(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const navToggle = $(".nav-toggle");
  const navMenu = $("#nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const year = $("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  $$(".reveal").forEach((element) => observer.observe(element));

  const baseScores = {
    hvac: 52,
    roofing: 52,
    trucking: 60,
    restoration: 52,
    landscaping: 45,
    auto: 45
  };

  const signalScores = {
    hiring: 12,
    expansion: 10,
    equipment: 8,
    receivables: 9,
    seasonal: 6,
    none: 0
  };

  const redFlagPenalties = {
    none: 0,
    thin: 12,
    new: 20,
    reviews: 25
  };

  const productAngles = {
    hvac: "working capital or equipment financing",
    roofing: "materials funding or receivables bridge",
    trucking: "receivables bridge or fuel-cost buffer",
    restoration: "receivables bridge or working capital",
    landscaping: "seasonal working capital or equipment financing",
    auto: "parts inventory or equipment financing"
  };

  const leadCopy = {
    hvac: "HVAC demand can spike fast while trucks, techs, and parts need cash upfront.",
    roofing: "Roofing gets cash-heavy when crews and materials move before checks clear.",
    trucking: "Fleet operators can look profitable while fuel, insurance, repairs, and broker pay timing squeeze cash.",
    restoration: "Restoration work can be strong on paper while insurance money takes its sweet time.",
    landscaping: "Seasonal ramp can make mowers, trailers, fuel, and payroll hit before the season pays.",
    auto: "Auto shops can get squeezed when parts, payroll, and bay upgrades hit before invoices settle."
  };

  const tierForScore = (score) => {
    if (score >= 85) {
      return {
        label: "Hot",
        emoji: "🔥",
        note: "Prioritize outreach now."
      };
    }

    if (score >= 70) {
      return {
        label: "Strong",
        emoji: "✅",
        note: "Add to the active sequence."
      };
    }

    if (score >= 55) {
      return {
        label: "Moderate",
        emoji: "🟡",
        note: "Worth nurture or enrichment."
      };
    }

    if (score >= 40) {
      return {
        label: "Low",
        emoji: "⚪",
        note: "Low-priority drip."
      };
    }

    return {
      label: "Poor",
      emoji: "❌",
      note: "Suppress or human-review first."
    };
  };

  const scoreBtn = $("#scoreBtn");
  const demoResult = $("#demoResult");

  if (scoreBtn && demoResult) {
    scoreBtn.addEventListener("click", () => {
      const industry = $("#industry")?.value || "hvac";
      const signal = $("#signal")?.value || "none";
      const redFlag = $("#redflag")?.value || "none";

      const rawScore =
        (baseScores[industry] || 45) +
        (signalScores[signal] || 0) -
        (redFlagPenalties[redFlag] || 0);

      const score = Math.max(1, Math.min(100, rawScore));
      const tier = tierForScore(score);

      const risk =
        redFlag === "none"
          ? "No obvious red flags selected."
          : "Selected red flag lowers priority and should be verified before outreach.";

      demoResult.innerHTML = `
        <span>Estimated score</span>
        <strong>${score}/100</strong>
        <p><b>${tier.emoji} ${tier.label} lead.</b> ${leadCopy[industry]} Best angle: ${productAngles[industry]}. ${risk} ${tier.note}</p>
      `;
    });
  }

  const leadForm = $("#leadForm");
  const formNote = $("#formNote");

  if (leadForm && formNote) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();

      formNote.textContent =
        "Demo captured locally. Wire this form to HubSpot, Tally, ConvertKit, Beehiiv, Airtable, or your CRM when ready.";

      leadForm.reset();
    });
  }
})();

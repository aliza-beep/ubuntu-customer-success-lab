const tickets = [
  {
    id: "NST-001",
    summary: "Ubuntu Pro status not visible on two pilot machines",
    impact: "Pilot validation delayed for two machines",
    severity: "S3",
    status: "Resolved",
    owner: "Customer Admin",
    action: "Confirm stable status after maintenance window",
    due: "6 Nov",
  },
  {
    id: "NST-002",
    summary: "Administrator requested a clearer evidence checklist",
    impact: "Extra time required to prepare useful tickets",
    severity: "S4",
    status: "Open",
    owner: "Simulated CSM",
    action: "Publish checklist and request feedback",
    due: "16 Nov",
  },
  {
    id: "NST-003",
    summary: "APT repository access failed behind approved proxy",
    impact: "Three pilot machines could not retrieve package indexes",
    severity: "S3",
    status: "Monitoring",
    owner: "Support Simulation",
    action: "Confirm next scheduled update succeeds",
    due: "15 Nov",
  },
  {
    id: "NST-004",
    summary: "Seven machines have no confirmed onboarding window",
    impact: "The 30-day adoption milestone may slip",
    severity: "S3",
    status: "Open",
    owner: "Customer Admin",
    action: "Assign owners and approve rollout windows",
    due: "20 Nov",
  },
  {
    id: "NST-005",
    summary: "Customer wants clearer fleet onboarding visibility",
    impact: "Manual tracking increases administration effort",
    severity: "S4",
    status: "Open",
    owner: "Simulated CSM",
    action: "Submit structured feedback for review",
    due: "18 Nov",
  },
];

const ticketBody = document.querySelector("#ticket-body");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

function ticketRow(ticket) {
  const statusClass = ticket.status.toLowerCase();
  return `
    <tr>
      <td><strong>${ticket.id}</strong></td>
      <td><strong>${ticket.summary}</strong><span>${ticket.impact}</span></td>
      <td><span class="severity ${ticket.severity.toLowerCase()}">${ticket.severity}</span></td>
      <td><span class="ticket-status ${statusClass}">${ticket.status}</span></td>
      <td><strong>${ticket.owner}</strong><span>${ticket.action}</span></td>
      <td>${ticket.due}</td>
    </tr>`;
}

function renderTickets(filter = "all") {
  const visibleTickets =
    filter === "all"
      ? tickets
      : tickets.filter((ticket) => ticket.status.toLowerCase() === filter);

  ticketBody.innerHTML = visibleTickets.map(ticketRow).join("");
  emptyState.hidden = visibleTickets.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderTickets(button.dataset.filter);
  });
});

const healthDialog = document.querySelector("#health-dialog");
document.querySelector('[data-dialog="health-dialog"]').addEventListener("click", () => {
  healthDialog.showModal();
});

document.querySelector("[data-close-dialog]").addEventListener("click", () => {
  healthDialog.close();
});

healthDialog.addEventListener("click", (event) => {
  if (event.target === healthDialog) {
    healthDialog.close();
  }
});

const onboardedElement = document.querySelector("#onboarded-count");
const journeyCount = document.querySelector("#journey-count");
const journeyRemaining = document.querySelector("#journey-remaining");
const riskRemaining = document.querySelector("#risk-remaining");
const riskDetail = document.querySelector("#risk-detail");
const progressBar = document.querySelector("#progress-bar");
const progressPercent = document.querySelector("#progress-percent");
const remainingCount = document.querySelector("#remaining-count");
const simulationNote = document.querySelector("#simulation-note");
const simulateButton = document.querySelector("#simulate-progress");

let onboarded = Number(sessionStorage.getItem("simulatedOnboarded") || 18);

function renderProgress() {
  const percentage = Math.round((onboarded / 25) * 100);
  const remaining = 25 - onboarded;

  onboardedElement.textContent = onboarded;
  journeyCount.textContent = onboarded;
  journeyRemaining.textContent = remaining;
  riskRemaining.textContent = remaining;
  riskDetail.textContent =
    remaining === 0
      ? "The simulated rollout is complete; customer confirmation and value review remain."
      : `${remaining} machine${remaining === 1 ? "" : "s"} still require an approved owner or rollout window.`;
  progressBar.style.width = `${percentage}%`;
  progressPercent.textContent = `${percentage}% complete`;
  remainingCount.textContent = `${remaining} remaining`;
  simulateButton.disabled = onboarded >= 25;

  if (onboarded > 18) {
    simulationNote.textContent = `Simulation: ${onboarded}/25 machines onboarded. Reloading the tab keeps session progress; closing it resets the scenario.`;
  }
}

simulateButton.addEventListener("click", () => {
  if (onboarded < 25) {
    onboarded += 1;
    sessionStorage.setItem("simulatedOnboarded", String(onboarded));
    renderProgress();
  }
});

renderTickets();
renderProgress();


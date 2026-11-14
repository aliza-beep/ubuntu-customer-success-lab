# Ubuntu Customer Success Operations Lab

An independent, AI-assisted portfolio case study demonstrating how a graduate Customer Success Manager could support a fictional software company adopting Ubuntu Pro across 25 Ubuntu machines.

> **Portfolio disclosure:** This is a simulated learning project created by Aliza Sharif. It is not Canonical employment, customer work, or a claim of professional administration experience. Company names, tickets, metrics, and customer data are fictional.

## Scenario

Northstar Apps is a fictional growing software company with 25 Ubuntu machines. The customer wants to improve security coverage, standardise support processes, and give leadership clearer visibility of adoption risks. In the simulation, the Customer Success Manager coordinates onboarding, basic system checks, documentation, ticket follow-up, risk identification, feedback, and escalation.

## Business objectives

- Enrol all 25 machines in the Ubuntu Pro adoption programme.
- Establish a repeatable onboarding and support process.
- Identify technical and engagement risks early.
- Reduce time to first value by prioritising security coverage and clear ownership.
- Create customer-facing reporting that Sales, Support, Product, and the customer can understand.

## Current simulated status

| Measure | Status |
|---|---:|
| Machines in scope | 25 |
| Machines onboarded | 18 |
| Onboarding progress | 72% |
| Customer health score | 76/100 — Monitor |
| Open tickets | 3 |
| Critical tickets | 0 |
| Primary risk | Seven machines not yet onboarded |

## Portfolio contents

- `scripts/system-health-check.sh` — read-only system health summary.
- `scripts/collect-support-information.sh` — packages non-secret diagnostic evidence for a support ticket.
- `documentation/ubuntu-onboarding-guide.md` — staged onboarding and success plan.
- `documentation/troubleshooting-knowledge-base.md` — evidence-based troubleshooting articles.
- `documentation/escalation-matrix.md` — severity, ownership, communication, and escalation rules.
- `documentation/customer-communication-plan.md` — touchpoints, stakeholders, and sample messages.
- `documentation/customer-health-scoring-model.md` — transparent 100-point health model.
- `tickets/sample-support-tickets.csv` — five fictional support cases.
- `campaigns/ubuntu-pro-adoption-campaign.md` — three-touch digital adoption campaign.
- `feedback/product-feedback-log.csv` — customer feedback formatted for Product review.
- `reports/monthly-customer-success-report.md` — executive-style customer report.
- `reports/lab-system-health-evidence.md` — sanitised evidence from Aliza's WSL lab validation.
- `presentation/five-minute-demo.md` — portfolio presentation talk track.
- `dashboard/` — responsive interactive customer health dashboard.

## Run the health check

From Ubuntu or WSL, move into the repository and run:

```bash
chmod +x scripts/*.sh
./scripts/system-health-check.sh
```

The script only reads system information. It does not install packages or change system settings.

To collect a support bundle:

```bash
./scripts/collect-support-information.sh
```

The bundle is saved locally as a compressed archive. Review its contents before sharing it because diagnostic information may identify the machine, user accounts, network interfaces, or installed software.

## Open the dashboard

Open `dashboard/index.html` in a browser. The dashboard supports:

- health-score component inspection;
- ticket and risk filtering;
- onboarding progress visibility;
- action ownership and due dates;
- a simulated progress update stored only in the browser session.

## Customer Success approach

The project separates three responsibilities:

1. **Customer Success:** clarify outcomes, coordinate onboarding, monitor adoption, communicate risks, and maintain the success plan.
2. **Support/Engineering:** investigate defects and complex technical failures using reproducible evidence.
3. **Customer:** provide access, nominate owners, test agreed actions, and confirm business impact.

The simulated CSM does not guess at root causes or perform unsafe production changes. Issues are documented, prioritised, routed to the correct owner, and followed through to customer confirmation.

## Success criteria

- 25/25 machines onboarded.
- No overdue high-severity ticket without an owner and next update.
- Health score of at least 85.
- Customer administrators can find onboarding and support guidance without assistance.
- Product feedback contains context, impact, evidence, and a requested outcome.

## Skills demonstrated

Ubuntu command-line fundamentals, evidence collection, Bash scripting, ticket triage, onboarding, documentation, customer health scoring, risk management, escalation, lifecycle campaigns, product feedback, cross-functional coordination, executive reporting, and presentation.


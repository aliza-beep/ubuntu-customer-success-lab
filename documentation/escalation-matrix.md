# Escalation Matrix

## Guiding principle

Severity reflects customer impact and urgency, not how worried the reporter feels. The CSM coordinates communication and ownership; qualified technical teams determine root cause and remediation.

| Severity | Example impact | Initial response target* | Update rhythm | Primary route |
|---|---|---:|---|---|
| S1 Critical | Widespread production outage, severe security exposure, or major business stoppage | 15 minutes | Every 30 minutes | Emergency Support path and leadership |
| S2 High | Important service degraded, multiple users affected, no acceptable workaround | 1 hour | Every 2 hours | Support lead and CSM |
| S3 Medium | Limited impact, workaround exists, or onboarding is blocked for part of the fleet | 4 business hours | Daily | Standard Support queue and CSM |
| S4 Low | General question, documentation improvement, or minor inconvenience | 1 business day | As milestones change | Standard queue or knowledge base |

\*Targets are fictional portfolio assumptions, not Canonical service-level commitments.

## Required escalation information

- Customer and affected environment.
- Business impact in plain language.
- Start time, timezone, and current status.
- Scope: users, machines, regions, or services affected.
- Expected versus actual behaviour.
- Exact errors, evidence, and reproduction steps.
- Recent changes and actions already attempted.
- Workaround availability.
- Technical owner, communication owner, and next update time.

## Ownership model

| Activity | Customer | CSM | Support/Engineering | Sales |
|---|---|---|---|---|
| Confirm business impact | Responsible | Supports | Consulted | Informed |
| Set ticket severity | Consulted | Coordinates | Accountable | Informed |
| Diagnose technical cause | Provides access/evidence | Informed | Responsible | Informed |
| Maintain customer updates | Receives/confirms | Responsible | Provides technical facts | Consulted |
| Approve production change | Accountable | Informed | Advises/executes as agreed | Informed |
| Review commercial scope | Consulted | Coordinates | Consulted | Responsible |

## Escalation message template

**Subject:** `[Severity] Customer — service/issue — status`

- Impact:
- Started:
- Current scope:
- Evidence:
- Actions completed:
- Current owner:
- Decision or help required:
- Next customer update:

## Closure requirements

- Customer confirms service or workflow is acceptable.
- Root cause or best-supported explanation is documented.
- Follow-up actions have owners and dates.
- Reusable learning is added to documentation.
- Risk and health score are updated.


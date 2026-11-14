# Lab System Health Evidence

**Evidence date:** 14 November 2026  
**Environment:** Ubuntu 26.04.1 LTS running through WSL 2  
**Collected by:** Aliza Sharif  
**Purpose:** Personal lab validation for an independent Customer Success portfolio

## Executive summary

The read-only health check completed successfully. The lab showed no failed services, low memory and disk utilisation, and working network interfaces. Five package updates were available. Ubuntu Pro-related services were discoverable, but the machine was not attached to an Ubuntu Pro subscription.

## Sanitised results

| Check | Result | Interpretation |
|---|---|---|
| Operating system | Ubuntu 26.04.1 LTS | Supported learning environment running through WSL 2 |
| Kernel type | Microsoft WSL 2 kernel | Results should not be presented as conventional Ubuntu Server behaviour |
| Uptime | Approximately one minute | System had recently started when evidence was collected |
| Memory | 5.7 GiB total; 477 MiB used; 5.3 GiB available | No immediate memory pressure |
| Swap | 2.0 GiB total; none used | No observed swap pressure |
| Root filesystem | Approximately 1% used | No immediate capacity concern |
| Failed services | 0 | Positive service-health signal |
| Pending package updates | 5 | Routine maintenance item requiring an approved change decision |
| Ubuntu Pro attachment | Not attached | Subscription onboarding remains simulated |

## Ubuntu Pro interpretation

The `pro status --all` check showed that ESM Apps, ESM Infrastructure, and Landscape were available in the environment. Availability does not mean that a service is enabled. The machine explicitly reported that it was not attached to an Ubuntu Pro subscription. No subscription token or credential was used in this lab.

## Support-bundle validation

The support-information script created a compressed archive of approximately 2.6 KiB containing:

- operating-system and kernel information;
- uptime, memory, and disk evidence;
- network interfaces and routes;
- failed-service and recent-error output;
- an installed-package list;
- a privacy and review notice.

The archive was inspected by listing its contents without uploading it. Raw evidence remains local because it contains machine-identifying and network information. The repository `.gitignore` excludes generated support bundles.

## Environment-specific observation

The archive appeared with broad executable-style permissions because the repository is stored on a Windows-mounted `/mnt/c` filesystem. Permission presentation on this mount should not be treated as representative of a normal Linux-native filesystem. This distinction should be stated during a demonstration.

## Recommended next actions

1. Keep raw diagnostic bundles out of GitHub.
2. Review the five available updates before any change.
3. Do not attach a subscription as part of this simulation.
4. Use only sanitised findings in portfolio documentation and screenshots.


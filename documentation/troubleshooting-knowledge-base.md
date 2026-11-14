# Troubleshooting Knowledge Base

These articles demonstrate a safe, evidence-based approach. They do not replace official product documentation or qualified Support guidance.

## Troubleshooting method

1. **Clarify impact:** who is affected, what stopped working, and when?
2. **Define expected behaviour:** what should have happened?
3. **Collect evidence:** exact error, timestamps, version, recent changes, and reproduction steps.
4. **Check scope:** one user, one machine, a group, or the entire service?
5. **Test the least risky explanation:** prefer read-only checks first.
6. **Document results:** record commands, outputs, decisions, and ownership.
7. **Resolve or escalate:** include business impact and evidence.
8. **Confirm with the customer:** technical recovery is not closure until impact is confirmed.

## KB-001: APT cannot download package information

**Symptoms:** `apt update` reports name-resolution, connection, repository, or signature errors.

**Safe checks:**

```bash
date
ip route
getent hosts archive.ubuntu.com
sudo apt update
```

**Interpretation:**

- No route may indicate a local network or WSL connectivity problem.
- Name lookup failure suggests DNS investigation.
- A single repository failure may point to a repository configuration issue.
- Signature or certificate errors require careful review of time, repository origin, and official guidance; do not bypass verification.

**Escalate when:** multiple machines are affected, an official repository appears unavailable, security verification fails, or a production deadline is at risk.

## KB-002: Disk usage is high

**Symptoms:** applications cannot write files, updates fail, or `/` is near capacity.

**Safe checks:**

```bash
df -h
du -h --max-depth=1 "$HOME" 2>/dev/null | sort -h
```

Do not delete logs, packages, or customer files without an approved owner, backup understanding, and change process.

**Escalate when:** the filesystem is full, the cause is unknown, critical services are affected, or deletion could risk customer data.

## KB-003: A service is not running

**Safe checks on a systemd machine:**

```bash
systemctl --failed
systemctl status SERVICE_NAME --no-pager
journalctl -u SERVICE_NAME -n 50 --no-pager
```

Replace `SERVICE_NAME` only with the confirmed service. Some WSL environments may not expose normal systemd behaviour.

**Escalate when:** restarting would affect production, logs show repeated crashes, data integrity is uncertain, or the service is security-sensitive.

## KB-004: Ubuntu Pro status is unexpected

**Safe checks:**

```bash
pro status
pro --version
```

Record the Ubuntu version, exact status, timestamp, machine role, expected entitlement, and recent changes. Never paste subscription credentials or tokens into a public repository or ticket.

**Escalate when:** entitlement cannot be verified through authorised channels, several machines show the same failure, or security coverage is at risk.

## KB-005: A command works differently in WSL

WSL provides an Ubuntu user space integrated with Windows, but it is not identical to a conventional Ubuntu server. Hardware, networking, boot, and service-management behaviour may differ.

Capture:

```bash
uname -a
cat /etc/os-release
printf '%s\n' "${WSL_DISTRO_NAME:-Not detected}"
```

Document that the test occurred in WSL and avoid presenting it as proof of production-server behaviour.


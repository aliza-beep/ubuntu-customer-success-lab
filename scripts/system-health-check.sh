#!/usr/bin/env bash

# Ubuntu Customer Success Operations Lab
# Read-only health summary for learning and simulated support triage.

set -u

section() {
  printf '\n=== %s ===\n' "$1"
}

run_or_note() {
  local label="$1"
  shift
  printf '%s\n' "$label"
  if ! "$@" 2>&1; then
    printf 'Unable to collect this item. The command may be unavailable or require different permissions.\n'
  fi
}

printf 'Ubuntu Customer Success - System Health Check\n'
printf 'Generated: %s\n' "$(date --iso-8601=seconds 2>/dev/null || date)"

section "Identity"
printf 'User: %s\n' "$(whoami)"
printf 'Hostname: %s\n' "$(hostname)"
printf 'Current directory: %s\n' "$(pwd)"

section "Operating system"
if [[ -r /etc/os-release ]]; then
  grep -E '^(PRETTY_NAME|VERSION_ID)=' /etc/os-release | sed 's/^/  /'
else
  printf '  /etc/os-release is unavailable.\n'
fi
run_or_note "Kernel:" uname -r

section "Uptime and load"
run_or_note "System uptime:" uptime -p
run_or_note "Load averages:" uptime

section "Memory"
run_or_note "Memory usage:" free -h

section "Disk"
run_or_note "Root filesystem usage:" df -h /

section "Processes"
printf 'Top processes by memory usage:\n'
if command -v ps >/dev/null 2>&1; then
  ps -eo pid,comm,%cpu,%mem --sort=-%mem | head -n 6
else
  printf 'The ps command is unavailable.\n'
fi

section "Network"
if command -v ip >/dev/null 2>&1; then
  ip -brief address 2>&1
else
  printf 'The ip command is unavailable.\n'
fi

section "Failed services"
if command -v systemctl >/dev/null 2>&1; then
  systemctl --failed --no-pager 2>&1 || printf 'systemd information is unavailable in this environment.\n'
else
  printf 'systemctl is unavailable. This is common in some WSL configurations.\n'
fi

section "Available package updates"
if command -v apt >/dev/null 2>&1; then
  update_count=$(apt list --upgradable 2>/dev/null | tail -n +2 | wc -l | tr -d ' ')
  printf 'Upgradable packages: %s\n' "$update_count"
else
  printf 'APT is unavailable.\n'
fi

section "Ubuntu Pro"
if command -v pro >/dev/null 2>&1; then
  pro status 2>&1 || printf 'Ubuntu Pro status could not be read.\n'
else
  printf 'The pro client is not installed or not on PATH.\n'
fi

printf '\nHealth check complete. Review warnings before taking action.\n'


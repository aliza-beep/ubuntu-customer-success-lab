#!/usr/bin/env bash

# Collects a small, non-secret diagnostic bundle for a simulated support ticket.
# Always review the files before sharing them outside your organisation.

set -u

timestamp=$(date +%Y%m%d-%H%M%S)
bundle_dir="support-information-${timestamp}"
archive_name="${bundle_dir}.tar.gz"

mkdir -p "$bundle_dir"

capture() {
  local output_file="$1"
  shift
  {
    printf 'Command:'
    printf ' %q' "$@"
    printf '\nCollected: %s\n\n' "$(date --iso-8601=seconds 2>/dev/null || date)"
    "$@" 2>&1 || printf '\nCommand exited with an error or is unavailable.\n'
  } >"$bundle_dir/$output_file"
}

capture identity.txt sh -c 'printf "User: %s\nHostname: %s\n" "$(whoami)" "$(hostname)"'
capture os-release.txt sh -c 'cat /etc/os-release 2>/dev/null || true; uname -a'
capture uptime.txt uptime
capture memory.txt free -h
capture disk.txt df -h
capture interfaces.txt sh -c 'command -v ip >/dev/null 2>&1 && ip -brief address || echo "ip command unavailable"'
capture routes.txt sh -c 'command -v ip >/dev/null 2>&1 && ip route || echo "ip command unavailable"'
capture failed-services.txt sh -c 'command -v systemctl >/dev/null 2>&1 && systemctl --failed --no-pager || echo "systemd data unavailable"'
capture recent-errors.txt sh -c 'command -v journalctl >/dev/null 2>&1 && journalctl -p err -n 50 --no-pager || echo "journal data unavailable"'
capture packages.txt sh -c 'dpkg-query -W -f="${binary:Package}\t${Version}\n" 2>/dev/null | head -n 500'

cat >"$bundle_dir/README.txt" <<'NOTICE'
This diagnostic bundle was created for the Ubuntu Customer Success Operations Lab.

Review every file before sharing it. Diagnostic data can contain hostnames, usernames,
network information, installed packages, and log messages. This script intentionally
does not collect password files, private keys, shell history, environment variables,
or file contents from user home directories.
NOTICE

tar -czf "$archive_name" "$bundle_dir"

printf 'Support bundle created: %s\n' "$archive_name"
printf 'Review the extracted files before sharing them with Support.\n'


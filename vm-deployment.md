# Realm Financial Services — VM Deployment Guide

## VM Infrastructure

- **Provider:** Google Cloud Platform (GCP)
- **Project:** `outstanding-map-470302-c4`
- **Instance:** `instance-20260129-132856`
- **Zone:** `us-central1-a`
- **Machine type:** `e2-micro` (2 vCPUs, 1 GB RAM)
- **OS:** Debian 12 (Bookworm)
- **Static IP:** `34.9.84.1`
- **Disk:** 10 GB standard persistent (runs tight — was at 97% after initial deploy)
- **Swap:** 2 GB file at `/swapfile` (permanent via `/etc/fstab`) — required for `npm run build`

## What's on this VM

This VM hosts **three sites**:

| Site | Domain | Port | Process | Nginx config |
|---|---|---|---|---|
| InstaKlean (car-cleaning) | instakleanbk.com | 5000 | Gunicorn (systemd: `car-cleaning`) | `/etc/nginx/sites-enabled/car-cleaning` |
| Realm Financial | realmfinancialservices.com | 3001 | Next.js via PM2 (`realm`) | `/etc/nginx/sites-enabled/realm-financial` |
| Biz Plan (static) | fallback (default_server) | — | Static HTML | `/etc/nginx/sites-enabled/biz-plan` |

## SSH Access

```bash
gcloud compute ssh instance-20260129-132856 --zone=us-central1-a
```

Or from Google Cloud Console browser SSH.

If SSH hangs, the VM may be stopped:
```bash
gcloud compute instances start instance-20260129-132856 --zone=us-central1-a
```

If SSH keys expire, re-register:
```bash
gcloud compute os-login ssh-keys add --key-file=C:\Users\User\.ssh\google_compute_engine.pub
```

## Realm Financial — App Details

- **Local project:** `C:\Users\User\Desktop\realm-financial`
- **GitHub repo:** `https://github.com/shaulkadin99-jpg/realm-financial`
- **VM app directory:** `/home/User/realm-financial/`
- **Tech stack:** Next.js 16 (App Router) + React + Tailwind CSS
- **Node version on VM:** v20.20.0
- **PM2 process name:** `realm`
- **Port:** 3001

### Environment Variables

The contact form requires a `.env` file at `/home/User/realm-financial/.env`:
```
GMAIL_USER=<gmail address>
GMAIL_APP_PASSWORD=<gmail app password>
CONTACT_TO=<recipient email>
```

## DNS & SSL

- **Domain:** `realmfinancialservices.com` (registered/managed via Cloudflare)
- **DNS:** A records for `@` and `www` → `34.9.84.1` (Cloudflare proxied, orange cloud)
- **SSL:** Handled by Cloudflare edge (SSL mode: Full). On the VM, Nginx borrows the instakleanbk.com Let's Encrypt cert for the TLS handshake — this works because Cloudflare terminates the real SSL.
- **Note:** If Cloudflare SSL mode is set to "Full (strict)" it will fail. Must be "Full" only.

## Nginx Config

Located at `/etc/nginx/sites-available/realm-financial` (symlinked to `sites-enabled`).

Listens on ports 80 and 443, proxies to `127.0.0.1:3001`.

## Deployment Workflow

### Standard deploy (after pushing changes):

```bash
# 1. Push from local
cd ~/Desktop/realm-financial
git add <files>
git commit -m "description"
git push

# 2. Pull and rebuild on VM
gcloud compute ssh instance-20260129-132856 --zone=us-central1-a --command="cd ~/realm-financial && git pull && npm run build && pm2 restart realm"
```

### If dependencies changed (package.json):

```bash
gcloud compute ssh instance-20260129-132856 --zone=us-central1-a --command="cd ~/realm-financial && git pull && npm install && npm run build && pm2 restart realm"
```

### Frontend-only changes still need a rebuild (Next.js pre-renders pages).

## PM2 Commands

```bash
# Check status
pm2 list

# View logs
pm2 logs realm --lines 50

# Restart
pm2 restart realm

# Save process list (do this after any pm2 start/restart)
pm2 save

# PM2 auto-starts on boot via systemd service: pm2-User
```

## Nginx Commands

```bash
# Test config
sudo nginx -t

# Reload (after config changes)
sudo systemctl reload nginx

# View realm config
cat /etc/nginx/sites-enabled/realm-financial
```

## Known Issues & Notes

1. **Memory:** The e2-micro has only 1 GB RAM. The 2 GB swap file at `/swapfile` is essential — without it, `npm run build` will hang indefinitely. Do not remove the swap.

2. **Disk space:** The 10 GB disk runs very tight (~97% after deploy). Monitor with `df -h /`. If it fills up, clean with:
   ```bash
   sudo apt-get clean
   npm cache clean --force
   ```

3. **Port conflicts:** If PM2 shows `errored` status with `EADDRINUSE`, kill the zombie process:
   ```bash
   sudo fuser -k 3001/tcp
   pm2 restart realm
   pm2 save
   ```

4. **SSL cert sharing:** The realm Nginx config borrows the instakleanbk.com Let's Encrypt cert. If that cert expires or is removed, get a proper cert:
   ```bash
   sudo certbot --nginx -d realmfinancialservices.com -d www.realmfinancialservices.com
   ```

5. **VM restarts:** After a VM restart, PM2 auto-starts the realm app. The car-cleaning app uses systemd (`sudo systemctl start car-cleaning`). Both should come up automatically.

## Quick Reference

| Action | Command |
|---|---|
| SSH in | `gcloud compute ssh instance-20260129-132856 --zone=us-central1-a` |
| Start VM | `gcloud compute instances start instance-20260129-132856 --zone=us-central1-a` |
| Stop VM | `gcloud compute instances stop instance-20260129-132856 --zone=us-central1-a` |
| Deploy realm | `git push` then SSH: `cd ~/realm-financial && git pull && npm run build && pm2 restart realm` |
| Check realm logs | `pm2 logs realm --lines 50` |
| Check realm status | `pm2 list` |
| Check nginx | `sudo nginx -t && sudo systemctl reload nginx` |
| Check disk | `df -h /` |
| Check memory | `free -h` |

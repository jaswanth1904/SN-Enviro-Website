# 🛠️ External Tools & Skills Reference Guide

This document contains the exact installation commands, workflows, and local configurations for the enterprise auditing, security, pentesting, and hosting tools configured for this project. These tools can also be copied and installed into any other project.

---

## A. Cloudflare Security Audit Harness
* **Repository**: [`cloudflare/security-audit-skill`](https://github.com/cloudflare/security-audit-skill)
* **Status**: ✅ **Installed in this project** at `.agents/skills/security-audit/`
* **Install Command (in any project)**:
  ```bash
  npx skills add cloudflare/security-audit-skill
  ```
* **What it does**:
  Multi-phase automated security scanner that tests for authentication bypasses, sensitive data leakage, improper role enforcement, injection vectors, and missing security headers.
* **Local Files**:
  * [`.agents/skills/security-audit/SKILL.md`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/security-audit/SKILL.md)
  * [`.agents/skills/security-audit/HUNTING.md`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/security-audit/HUNTING.md)
  * [`.agents/skills/security-audit/RECONNAISSANCE.md`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/security-audit/RECONNAISSANCE.md)
  * [`.agents/skills/security-audit/WEB-PROTOCOL-AND-AUTH.md`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/security-audit/WEB-PROTOCOL-AND-AUTH.md)
  * [`.agents/skills/security-audit/validate-findings.cjs`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/security-audit/validate-findings.cjs)
* **How to run / use**:
  * Ask your AI coding assistant: `"Run security-audit on backend"`
  * Or execute locally:
    ```bash
    node .agents/skills/security-audit/validate-findings.cjs
    ```

---

## B. Hallmark Enterprise Design Skill
* **Repository**: [`nutlope/hallmark`](https://github.com/nutlope/hallmark)
* **Status**: ✅ **Installed in this project** at `.agents/skills/hallmark/`
* **Install Command (in any project)**:
  ```bash
  npx skills add nutlope/hallmark
  ```
* **What it does**:
  High-end design system auditor that transforms generic UI components into sleek, modern, enterprise aesthetics (similar to Linear or Stripe) with responsive micro-animations, glassmorphism, and cohesive typography.
* **Local Files**:
  * [`.agents/skills/hallmark/SKILL.md`](file:///c:/Users/Jaswanth/Desktop/SN-Enviro-Website/.agents/skills/hallmark/SKILL.md)
* **How to run / use**:
  * In chat with your AI assistant:
    ```
    /hallmark audit <path-to-component>
    /hallmark redesign <path-to-component>
    ```

---

## C. Strix Autonomous AI Pentesting
* **Repository**: [`usestrix/strix`](https://github.com/usestrix/strix) | Website: [strix.ai](https://www.strix.ai/)
* **Status**: ⚡ **Ready to Run via Docker**
* **Command to run against your local server**:
  ```bash
  docker run -it --rm ghcr.io/usestrix/strix:latest scan --target http://localhost:5000
  ```
* **What it does**:
  Autonomous AI penetration testing agents that dynamically attempt exploits, probe for broken access control and injection vectors, and validate vulnerabilities with zero false positives.
  > [!NOTE]
  > Always run Strix scans against your isolated local test server (`http://localhost:5000`), never against production servers.

---

## D. Coolify (Self-Hosted PaaS Alternative to Heroku / Vercel / Render)
* **Website**: [coolify.io](https://coolify.io/) | GitHub: [`coollabsio/coolify`](https://github.com/coollabsio/coolify)
* **Status**: 🚀 **Production / Staging Deployment Ready**
* **One-Line Installation on any Ubuntu VPS (e.g., Hostinger, Hetzner, AWS EC2)**:
  ```bash
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
  ```
* **What it does**:
  * Completely eliminates backend sleep issues and cold-starts on free-tier platforms.
  * Keeps Node.js daemons, MongoDB, and cron backup jobs continuously active 24/7/365.
  * Automatically issues and renews Let's Encrypt SSL certificates.
  * Provides zero-downtime Git push deployments.

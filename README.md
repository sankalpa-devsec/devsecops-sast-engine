# 🔬 Automated SAST Security Pipeline (Semgrep)

[![SAST Security Pipeline](https://github.com/sankalpa-devsec/devsecops-sast-engine/actions/workflows/sast-scan.yml/badge.svg)](https://github.com/sankalpa-devsec/devsecops-sast-engine/actions/workflows/sast-scan.yml)
![Security](https://img.shields.io/badge/Security-SAST%20Semgrep-orange)
![Ruleset](https://img.shields.io/badge/Ruleset-OWASP%20Top%2010-blue)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)

An automated Static Application Security Testing (SAST) CI pipeline engineered with Semgrep to enforce secure coding standards across the software development lifecycle.

---

## 🎯 Architecture

* **Trigger**: Push / PR to main branch
* **Tool**: Semgrep SAST Scanner
* **Rule Profile**: OWASP Top 10 Security Ruleset
* **Security Gate Policy**: Fail-fast on critical vulnerabilities (Exit Code 1)

---

## 🛡️ Vulnerabilities Covered & Remediated

* **CWE-95 (Code Injection):** Prohibits dynamic evaluation (`eval`) of untrusted input.
* **Modern URL Parsing:** Eliminates legacy Node.js query parsing flaws.
* **Input Validation:** Enforces strict parameter mapping and type safety.

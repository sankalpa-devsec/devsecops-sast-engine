# 🔬 Automated SAST Security Pipeline (Semgrep)


An automated Static Application Security Testing (SAST) CI pipeline engineered with Semgrep.

## 🎯 Architecture
- **Trigger**: Push / PR to main
- **Tool**: Semgrep SAST Scanner
- **Rule Profile**: OWASP Top 10
- **Policy**: Block on vulnerabilities (Exit code 1)

## 🛡️ Vulnerabilities Covered
- CWE-95: Code Injection (Eval misuse)
- Insecure URL Parsing
- Missing Input Sanitization

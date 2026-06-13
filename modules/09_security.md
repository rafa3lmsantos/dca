# Lição 9. Security

> Fonte: Dynatrace University — Associate Certification Learning Path | Lição 9 de 12

---

> *"Security is an integral aspect of the Dynatrace Platform, ensuring that application and infrastructure monitoring is conducted within a safe and protected environment."*

## Foco desta Lição

- Entender as medidas de segurança do Dynatrace
- Usar o Davis Security Advisor
- Identificar Third-Party Vulnerabilities
- Endereçar Code-Level Vulnerabilities
- Realizar Security Investigations
- Responder a Security Notifications

---

## Security (Visão Geral)

O Dynatrace incorpora medidas robustas de segurança:
- **Criptografia**
- **Controles de acesso**
- **Conformidade com padrões da indústria**

A plataforma monitora continuamente vulnerabilidades e ameaças em potencial para endereçar riscos de segurança de forma proativa e manter resiliência contra ataques.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Application Security | [docs.dynatrace.com/.../application-security](https://docs.dynatrace.com/docs/secure/application-security) |
| Dynatrace Hub: Application Security | [dynatrace.com/hub/?filter=application-security](https://www.dynatrace.com/hub/?filter=application-security) |

---

## Third-Party Vulnerabilities

Vulnerabilidades de terceiros são **fraquezas em sistemas, software ou processos de fornecedores externos** que podem ser exploradas para comprometer a segurança de uma organização.

Características:
- Frequentemente **fora do controle direto** da organização — mais difíceis de detectar e mitigar
- Fontes comuns: falhas de software, protocolos de segurança inadequados, falta de visibilidade nas práticas do fornecedor

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Third-Party Vulnerabilities | [docs.dynatrace.com/.../third-party-vulnerabilities](https://docs.dynatrace.com/docs/secure/application-security/vulnerability-analytics/third-party-vulnerabilities) |

---

## Davis Security Advisor

O **Davis Security Advisor** é exibido na página de Third-Party Vulnerabilities, **acima da lista de vulnerabilidades**. Recomenda os **fixes que mais melhorariam a segurança geral** do ambiente.

| Recurso | Link |
|---------|------|
| Davis Security Advisor Calculations | [docs.dynatrace.com/.../davis-security-advisor](https://docs.dynatrace.com/docs/secure/application-security/vulnerability-analytics/third-party-vulnerabilities/davis-security-advisor) |
| Davis Security Score Calculations | [docs.dynatrace.com/.../davis-security-score](https://docs.dynatrace.com/docs/secure/application-security/vulnerability-analytics/third-party-vulnerabilities/davis-security-score) |

---

## Code-Level Vulnerabilities

Vulnerabilidades de nível de código são **falhas no código-fonte** que podem ser exploradas para comprometer a segurança.

Origens comuns:
- Erros de codificação
- Bibliotecas inseguras
- Práticas de segurança inadequadas

Consequências possíveis: vazamentos de dados, falhas do sistema, acesso não autorizado.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Code-Level Vulnerabilities | [docs.dynatrace.com/.../code-level-vulnerabilities](https://docs.dynatrace.com/docs/secure/application-security/vulnerability-analytics/code-level-vulnerabilities) |

---

## Security Investigator

O **Security Investigator** foi projetado para simplificar investigações baseadas em evidências sobre dados no **Grail**. Possui:
- Funcionalidades assistidas e automações
- Suporte à resolução de investigações com **logs, métricas e traces**

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Security Investigator | [docs.dynatrace.com/.../investigations](https://docs.dynatrace.com/docs/secure/investigations) |

---

## Vulnerabilities (app)

O app **Vulnerabilities** permite detectar, visualizar, analisar, monitorar e corrigir vulnerabilidades na stack de aplicações. Identifica:
- Vulnerabilidades **code-level**
- Vulnerabilidades **third-party**
- Vulnerabilidades **runtime**

Exibe todos os problemas em uma **visão combinada e priorizada**.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Vulnerabilities | [docs.dynatrace.com/.../vulnerabilities](https://docs.dynatrace.com/docs/secure/vulnerabilities) |

---

## Call to Action

> Use o [Dynatrace Playground](https://www.dynatrace.com/trial/) para completar:

1. **Explore as vulnerabilidades detectadas.** Quais são as vulnerabilidades críticas? Você consegue ver como o Dynatrace detecta se dados sensíveis estão conectados à detecção?

2. **Considere o processo da sua organização** quando alguém (ou uma ferramenta) detecta uma vulnerabilidade. Existe um processo automático para criar itens acionáveis ou tickets? Como o Dynatrace pode se integrar a uma ferramenta como essa?

---

## Pontos-Chave para a Prova

- Dynatrace Security usa: **criptografia, controles de acesso e conformidade com padrões**
- **Third-party vulnerabilities** = fraquezas em fornecedores externos — fora do controle direto da org
- **Davis Security Advisor** fica acima da lista de vulnerabilidades e recomenda os **fixes de maior impacto**
- **Davis Security Score** = pontuação de segurança calculada pelo Davis AI
- **Code-level vulnerabilities** = falhas no código-fonte (coding errors, insecure libraries)
- **Security Investigator** = investigações baseadas em evidências no Grail (logs + métricas + traces)
- App **Vulnerabilities** = visão unificada e priorizada de code-level + third-party + runtime
- Dynatrace pode integrar com ferramentas de ticketing para automatizar respostas a vulnerabilidades

## Notas Pessoais

<!-- Suas anotações aqui -->

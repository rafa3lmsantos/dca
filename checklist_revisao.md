# Checklist de Revisão — Dynatrace Certified Associate (DCA)

> Marque cada item conforme for estudando e praticando.

---

## Tópicos do Exame

### Infrastructure Observability *(Lições 4, 11, 12)*
- [ ] Entendo o que é monitoramento de infraestrutura no Dynatrace
- [ ] Sei o que o OneAgent faz e quando usar a Logs Ingestion API
- [ ] Conheço o que o VMware Monitor Hub coleta (clusters, hosts, VMs, datastores, discos)
- [ ] Entendo Cloud Integrations
- [ ] Sei navegar pelo Smartscape e entender a topologia do ambiente

### Foundational Platform Capabilities *(Lição 3)*
- [ ] Conheço os 4 pilares: Observability, Security, Automation, Integration
- [ ] Entendo o objetivo central: prever, prevenir e resolver problemas
- [ ] Sei o que é o Dynatrace Hub e para que serve
- [ ] Conheço os recursos de suporte: Documentation, Hub, Support Center, Community

### Synthetics *(Lição 6)*
- [ ] Entendo o que é Synthetic Monitoring e como funciona (scripts automatizados)
- [ ] Sei a diferença entre Synthetic Monitoring e RUM
- [ ] Sei que Synthetic é proativo (antes de impactar usuários reais)

### Log Investigation *(Lições 7, 11, 12)*
- [ ] Entendo o que é Log Ingestion e onde os logs são armazenados (Grail)
- [ ] Sei quando usar OneAgent vs Logs Ingestion API
- [ ] Consigo escrever uma query DQL básica para buscar logs com erro
- [ ] Entendo a estratégia de filtrar e parsear para grandes volumes de logs
- [ ] Conheço Log Content Analysis

### Reporting and Analysis *(Lição 7)*
- [ ] Entendo Dashboard Reports e como assinar relatórios por e-mail
- [ ] Sei o que é User Analytics (bounce rate, landing pages, exit pages, conversion)
- [ ] Entendo Session Segmentation (session/visit/click path)
- [ ] Conheço Performance Analysis
- [ ] Sei a diferença entre métricas Grail (nova) e Classic (legada)

### Security *(Lição 9)*
- [ ] Conheço os 3 tipos de vulnerabilidade: code-level, third-party, runtime
- [ ] Entendo onde o Davis Security Advisor aparece e o que recomenda
- [ ] Sei o que é o Davis Security Score
- [ ] Entendo o que é o Security Investigator e como usa Grail
- [ ] Conheço o app Vulnerabilities (visão unificada e priorizada)
- [ ] Sei que Dynatrace integra com ferramentas de ticketing

### User Experience Monitoring *(Lição 6)*
- [ ] Entendo o que é DEM (Digital Experience Monitoring)
- [ ] Sei o que é RUM e que monitora interações de usuários reais em tempo real
- [ ] Entendo como RUM alimenta o Business Analytics
- [ ] Sei que DEM cobre web, mobile e outros touchpoints digitais

### Business Analytics *(Lição 6)*
- [ ] Entendo o que são Business Events e o comando `fetch bizevents`
- [ ] Sei como Business Analytics conecta performance de apps a métricas de negócio
- [ ] Entendo que permite colaboração entre times de TI e negócio

### Traces *(Lições 4, 11)*
- [ ] Entendo o que são traces e spans no Dynatrace
- [ ] Sei consultar spans com `fetch spans`
- [ ] Consigo filtrar spans por status code HTTP ou duração

### Kubernetes Infrastructure *(Lição 4)*
- [ ] Sei que o Dynatrace tem um app específico para Kubernetes
- [ ] Entendo namespaces e workloads no contexto do Kubernetes
- [ ] Sei que o Kubernetes app descobre clusters automaticamente

### Automation *(Lição 10)*
- [ ] Entendo o que é o AutomationEngine
- [ ] Sei que oferece ferramentas no-code e low-code
- [ ] Entendo que Workflows são o mecanismo central de automação
- [ ] Sei que abrange observabilidade, segurança e dados de negócio

### Dashboards *(Lição 5)*
- [ ] Sei a diferença entre Notebooks e Dashboards
- [ ] Entendo que Dashboards são para monitoramento contínuo em tempo real
- [ ] Entendo que Notebooks são para exploração interativa customizada
- [ ] Sei que ambos suportam DQL queries

---

## Habilidades Práticas no Playground

- [ ] Naveguei pelo Smartscape e identifiquei componentes e dependências
- [ ] Explorei o app Kubernetes e vi namespaces e workloads de um cluster
- [ ] Usei o app Databases e exportei dados para um Notebook
- [ ] Explorei o app Problems e vi o que Dynatrace detecta automaticamente
- [ ] Executei `fetch bizevents` em um Notebook e analisei os dados
- [ ] Explorei as vulnerabilidades detectadas (críticas + dados sensíveis)
- [ ] Criei um workflow básico usando o Workflows Quick Start Guide
- [ ] Executei queries DQL com filtros, ordenação e agregação
- [ ] Busquei métricas com prefixo `log.` no app Metrics

---

## Sobre o Exame

- [ ] Li o Exam Preparation Guide completo
- [ ] Entendo a estrutura: Parte 1 (60 questões, 2h) + Parte 2 (10–15 práticas, 1h)
- [ ] Sei que a Parte 2 é **open book**
- [ ] Tenho o Google Chrome instalado com a extensão do ProctorU
- [ ] Testei meu equipamento no site do ProctorU
- [ ] Preparei um espaço de trabalho sem interrupções (mesa limpa, câmera, microfone)
- [ ] Sei que posso fazer até 4 tentativas por ano (14 dias de espera entre elas)
- [ ] Agendei meu exame na Dynatrace University

---

## Revisão Final (dias antes da prova)

- [ ] Reli os "Pontos-Chave para a Prova" de todas as 12 lições
- [ ] Revisei o Glossário de Termos
- [ ] Pratiquei queries DQL com o Cheat Sheet
- [ ] Fiz o Simulado completo e revisei os erros no gabarito
- [ ] Bookmarkei: [docs.dynatrace.com](https://docs.dynatrace.com) e o [DQL Cheat Sheet](dql_cheat_sheet.md) para uso durante a prova prática

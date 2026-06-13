# Lição 11. Ingestion

> Fonte: Dynatrace University — Associate Certification Learning Path | Lição 11 de 12

---

> *"Ingestion serves as a foundational element within the Dynatrace Platform, facilitating the seamless acquisition and integration of critical data streams from diverse sources across complex IT environments."*

## Foco desta Lição

- Entender mecanismos de ingestão
- Analisar Log Ingestion
- Explorar Cloud Integrations
- Monitorar com VMware Monitor Hub

---

## Ingestion (Visão Geral)

O Dynatrace coleta **métricas, logs, traces e outros dados** para fornecer uma visão completa da performance e comportamento do sistema.

Isso permite:
- Monitoramento em tempo real
- Análise e gerenciamento proativo de aplicações e infraestrutura
- Detecção de problemas e otimização de performance

---

## Log Ingestion

**Log Ingestion** é o processo de coletar dados de log de diversas fontes dentro de uma infraestrutura.

| Aspecto | Detalhe |
|---------|---------|
| **Armazenamento** | Logs armazenados no **Grail data lakehouse** |
| **Uso** | Análise, automação e monitoramento |
| **Agente** | **OneAgent** descobre logs automaticamente e oferece gerenciamento centralizado |
| **Alternativa** | Em ambientes serverless ou sem OneAgent: usar a **Logs Ingestion API** |

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Log Ingestion | [docs.dynatrace.com/.../lma-log-ingestion](https://docs.dynatrace.com/docs/analyze-explore-automate/logs/lma-log-ingestion) |

---

## Cloud Integrations

Integração com plataformas de cloud para ingestão de dados de ambientes cloud.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Cloud Integrations | [docs.dynatrace.com/.../cloud-platform-monitoring](https://docs.dynatrace.com/docs/observe/infrastructure-observability/cloud-platform-monitoring) |

---

## VMware Monitor Hub

O **VMware Monitor Hub** habilita a ingestão de métricas e logs de ambientes **VMware vSphere**. Conecta-se ao **vCenter** para coletar dados sobre:
- Clusters
- Hosts
- VMs
- Datastores
- Discos

Auxiliando no monitoramento de saúde e performance do ambiente VMware.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: VMware vSphere Monitoring | [docs.dynatrace.com/.../vmware-vsphere-monitoring](https://docs.dynatrace.com/docs/observe/infrastructure-observability/vmware-vsphere-monitoring) |

---

## Pontos-Chave para a Prova

- Ingestão coleta: **métricas, logs, traces e outros dados**
- Logs são armazenados no **Grail data lakehouse**
- **OneAgent** simplifica a ingestão de logs com descoberta automática
- Em ambientes **serverless ou sem OneAgent** → usar a **Logs Ingestion API**
- **VMware Monitor Hub** conecta ao **vCenter** e coleta dados de clusters, hosts, VMs, datastores e discos
- **Cloud Integrations** permite ingestão de dados de plataformas cloud

## Notas Pessoais

<!-- Suas anotações aqui -->

# Lição 6. Business Analytics and DEM

> Fonte: Dynatrace University — Associate Certification Learning Path | Lição 6 de 12

---

> *"Business Analytics and Digital Experience Monitoring (DEM) provide a unified and visually engaging interface for tracking and analyzing key performance indicators and user experience metrics."*

## Foco desta Lição

- Entender Business Analytics & DEM
- Usar Business Events
- Entender Real User Monitoring (RUM)
- Implementar Synthetic Monitoring

---

## Business Analytics & DEM (Visão Geral)

O Dynatrace combina dados de diversas fontes em visualizações em tempo real de fácil leitura, ajudando empresas a entender a performance dos sistemas e as interações dos clientes.

**Business Analytics** conecta performance de aplicações e experiência do usuário a métricas de negócio — permitindo que times de negócio e TI colaborem com insights compartilhados.

---

## Business Analytics

Conecta performance de aplicações e experiência do usuário a **métricas de negócio**, habilitando colaboração em tempo real entre times de negócio e TI. Utiliza **Business Events** para atingir a precisão que os casos de uso de negócio exigem.

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Business Analytics | [docs.dynatrace.com/.../business-observability](https://docs.dynatrace.com/docs/observe/business-observability) |

---

## Business Events

Business Events são fundamentais para Business Analytics e DEM. Eles:
- Vinculam performance de aplicações e experiência do usuário a métricas de negócio
- Fornecem insights precisos para melhor tomada de decisão
- Monitoram interações de usuário, rastreiam performance e identificam tendências

> **DQL prático:** `fetch bizevents` — retorna os business events disponíveis no tenant.

---

## Digital Experience Monitoring (DEM)

**DEM** monitora interações de usuários em **web, mobile e outros touchpoints digitais**, garantindo que as aplicações estejam disponíveis, funcionais e com boa performance.

Componentes-chave do DEM:
- **Real User Monitoring (RUM)**
- **Synthetic Monitoring**

| Recurso | Link |
|---------|------|
| Dynatrace Docs: Digital Experience Monitoring | [docs.dynatrace.com/.../digital-experience](https://docs.dynatrace.com/docs/observe/digital-experience) |

---

## Real User Monitoring (RUM)

**RUM** rastreia e analisa interações reais de usuários dentro das aplicações em tempo real.

- Fornece insights sobre comportamento do usuário e métricas de performance
- Integrado ao framework DEM
- Dados de performance alimentam o Business Analytics para uma visão holística da experiência digital

| Tipo | Recurso | Link |
|------|---------|------|
| Blog (~8 min) | What is Real User Monitoring (RUM)? | [dynatrace.com/knowledge-base/real-user-monitoring](https://www.dynatrace.com/knowledge-base/real-user-monitoring/) |
| Documentação | Define Applications for RUM | [docs.dynatrace.com/.../define-your-applications](https://docs.dynatrace.com/docs/observe/digital-experience/web-applications/initial-setup/define-your-applications-via-the-my-web-application-placeholder) |

---

## Synthetic Monitoring

**Synthetic Monitoring** simula interações de usuários com aplicações usando **scripts automatizados**, identificando problemas de performance antes que afetem usuários reais.

- Testes proativos que fornecem dados valiosos para o Business Analytics
- Ajuda a entender como a performance impacta métricas-chave

| Tipo | Recurso | Link |
|------|---------|------|
| Documentação | Dynatrace Docs: Synthetic Monitoring | [docs.dynatrace.com/.../synthetic-monitoring](https://docs.dynatrace.com/docs/observe/digital-experience/synthetic-monitoring) |
| Blog (~10 min) | What is Synthetic Monitoring? | [dynatrace.com/news/blog/what-is-synthetic-monitoring](https://www.dynatrace.com/news/blog/what-is-synthetic-monitoring/) |

---

## Call to Action

> Complete no [Dynatrace Playground](https://www.dynatrace.com/trial/) ou no seu próprio tenant:

1. **Explore o app "Problems"** e observe o que o Dynatrace detecta automaticamente. O que ele destaca ao clicar em um problema?

2. **Adicione uma seção a um Notebook** com a query `fetch bizevents`. Que tipo de dado é retornado?

---

## Pontos-Chave para a Prova

- **DEM** = Digital Experience Monitoring, composto por **RUM + Synthetic Monitoring**
- **RUM** monitora interações de usuários **reais** em tempo real
- **Synthetic Monitoring** usa **scripts automatizados** para simular usuários — proativo, antes de impactar usuários reais
- **Business Events** são o elo entre performance de apps/UX e métricas de negócio
- DQL para business events: `fetch bizevents`
- Business Analytics permite colaboração entre **times de negócio e TI** com dados compartilhados
- O app **"Problems"** mostra detecções automáticas do Dynatrace

## Notas Pessoais

<!-- Suas anotações aqui -->

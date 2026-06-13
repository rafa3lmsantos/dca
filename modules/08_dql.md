# Lição 8. DQL (Dynatrace Query Language)

> Fonte: Dynatrace University — Associate Certification Learning Path | Lição 8 de 12

---

> *"DQL (Dynatrace Query Language) is a fundamental component of the Dynatrace Platform, empowering users with advanced capabilities to query, analyze, and visualize vast amounts of performance data."*

## Foco desta Lição

- Entender DQL
- Executar DQL Queries
- Criar DQL Queries simples

---

## O que é DQL?

**DQL (Dynatrace Query Language)** é uma linguagem poderosa para explorar dados na plataforma Dynatrace.

### Características fundamentais

| Característica | Detalhe |
|---------------|---------|
| **Armazenamento** | Dados armazenados no **Dynatrace Grail** |
| **Tipo de dado** | Processamento de dados de eventos arbitrários |
| **Schema** | **Não requer** descrição prévia do schema dos dados (diferente de SQL/tabelas relacionais) |

### O que você pode fazer com DQL

- Identificar tendências (*spot trends*)
- Encontrar anomalias e outliers
- Realizar modelagem estatística
- Entender o comportamento do sistema

---

## Recursos

| Tipo | Recurso | Link |
|------|---------|------|
| Documentação | Dynatrace Query Language | [docs.dynatrace.com/.../dynatrace-query-language](https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language) |
| Guia prático | How to Use DQL Queries | [docs.dynatrace.com/.../dql-guide](https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language/dql-guide) |

---

## Exemplos de Queries DQL

```dql
// Buscar business events
fetch bizevents

// Buscar logs
fetch logs

// Buscar spans (traces)
fetch spans

// Buscar métricas
fetch metrics
```

---

## Call to Action

1. **Complete o "Beginners Exercise"** e pratique o uso de comandos básicos com a linguagem DQL.

> Acesse pelo Dynatrace Playground ou pelo seu tenant para praticar diretamente na plataforma.

---

## Pontos-Chave para a Prova

- DQL é um **componente fundamental** da plataforma Dynatrace
- Os dados ficam no **Grail** — o storage nativo do Dynatrace
- DQL **não requer schema prévio** — diferente de bancos de dados relacionais como SQL
- Permite: identificar tendências, anomalias, outliers e entender comportamento do sistema
- Comandos base: `fetch logs`, `fetch spans`, `fetch metrics`, `fetch bizevents`
- DQL é usado em **Notebooks e Dashboards**
- A seção prática do exame é **open book** — você pode consultar a documentação DQL durante o exame

## Notas Pessoais

<!-- Suas anotações aqui -->

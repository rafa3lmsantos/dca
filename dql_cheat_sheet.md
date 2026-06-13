# DQL Cheat Sheet — Dynatrace Query Language

> Referência rápida para uso durante a parte prática do exame (seção open book).

---

## Sintaxe Geral

```
fetch <tipo-de-dado>
| <comando1>
| <comando2>
| ...
```

Cada linha após o `fetch` é um **pipe** (`|`) que transforma o resultado anterior.

---

## Tipos de Dados (fetch)

| Comando | O que busca |
|---------|-------------|
| `fetch logs` | Registros de log |
| `fetch spans` | Spans de trace distribuído |
| `fetch metrics` | Métricas da plataforma |
| `fetch bizevents` | Business events |
| `fetch events` | Eventos da plataforma |
| `fetch dt.entity.host` | Entidades do tipo Host |
| `fetch dt.entity.service` | Entidades do tipo Service |
| `fetch dt.entity.process_group` | Entidades do tipo Process Group |

---

## Filtros

```dql
fetch logs
| filter loglevel == "ERROR"

fetch logs
| filter contains(content, "timeout")

fetch logs
| filter loglevel == "ERROR" and service.name == "checkout"

fetch spans
| filter http.status_code >= 500

fetch bizevents
| filter event.type == "com.example.purchase"
```

**Operadores de filtro:**
- Igualdade: `==`, `!=`
- Comparação: `>`, `>=`, `<`, `<=`
- Texto: `contains()`, `startsWith()`, `endsWith()`, `matchesPhrase()`
- Lógicos: `and`, `or`, `not`

---

## Seleção de Campos

```dql
fetch logs
| fields timestamp, loglevel, content, service.name

fetch spans
| fields timestamp, span.name, duration, http.status_code
```

---

## Ordenação e Limite

```dql
fetch logs
| sort timestamp desc
| limit 100

fetch spans
| sort duration desc
| limit 50
```

---

## Agregações (summarize)

```dql
// Contar registros
fetch logs
| summarize count()

// Contar por campo
fetch logs
| summarize count(), by: {loglevel}

// Média de duração por serviço
fetch spans
| summarize avg(duration), by: {service.name}

// Máximo de duração
fetch spans
| summarize max(duration), by: {span.name}

// Múltiplas agregações
fetch spans
| summarize count(), avg(duration), max(duration), by: {service.name}
```

**Funções de agregação:**
`count()`, `sum()`, `avg()`, `min()`, `max()`, `percentile(campo, p)`

---

## Séries Temporais (makeTimeseries)

```dql
fetch logs
| makeTimeseries count(), by: {loglevel}, interval: 5m

fetch metrics, from: now()-1h
| filter metric.key == "dt.host.cpu.usage"
| makeTimeseries avg(value), by: {host.name}
```

---

## Intervalo de Tempo

```dql
// Últimas X horas/minutos
fetch logs, from: now()-1h
fetch logs, from: now()-30m
fetch logs, from: now()-24h

// Intervalo específico
fetch logs, from: "2024-01-01T00:00:00Z", to: "2024-01-01T23:59:59Z"
```

---

## Exemplos Práticos por Caso de Uso

### Buscar logs de erro
```dql
fetch logs
| filter loglevel == "ERROR"
| fields timestamp, content, service.name
| sort timestamp desc
| limit 100
```

### Buscar logs com palavra-chave
```dql
fetch logs
| filter contains(content, "OutOfMemoryError")
| sort timestamp desc
```

### Top serviços com mais erros
```dql
fetch spans
| filter http.status_code >= 500
| summarize error_count = count(), by: {service.name}
| sort error_count desc
```

### Latência média por serviço (última hora)
```dql
fetch spans, from: now()-1h
| summarize avg_duration = avg(duration), by: {service.name}
| sort avg_duration desc
```

### Business events por tipo
```dql
fetch bizevents
| summarize count(), by: {event.type}
| sort count() desc
```

### Buscar métricas de CPU por host
```dql
fetch metrics
| filter metric.key == "dt.host.cpu.usage"
| fields host.name, value, timestamp
| sort value desc
```

### Métricas com prefixo "log."
```dql
fetch metrics
| filter startsWith(metric.key, "log.")
| summarize count(), by: {metric.key}
```

### Entidades do tipo Host
```dql
fetch dt.entity.host
| fields entity.name, host.osType, host.cpuCores
```

---

## Campos Comuns por Tipo de Dado

### logs
| Campo | Descrição |
|-------|-----------|
| `timestamp` | Momento do log |
| `loglevel` | Nível (ERROR, WARN, INFO, DEBUG) |
| `content` | Mensagem do log |
| `service.name` | Serviço de origem |
| `host.name` | Host de origem |

### spans
| Campo | Descrição |
|-------|-----------|
| `timestamp` | Momento do span |
| `span.name` | Nome da operação |
| `duration` | Duração em microssegundos |
| `http.status_code` | Código HTTP |
| `service.name` | Serviço |
| `trace_id` | ID do trace |

### bizevents
| Campo | Descrição |
|-------|-----------|
| `timestamp` | Momento do evento |
| `event.type` | Tipo do business event |
| `event.provider` | Origem do evento |

---

## Dicas para o Exame (Parte Prática)

- A seção prática é **open book** — você pode consultar esta referência
- Comece sempre com `fetch <tipo>` e vá adicionando pipes
- Use `| limit 10` para testar a query antes de remover o limite
- `now()-1h`, `now()-24h` são os intervalos mais comuns nas questões
- Prefixo `log.` nas métricas = métricas derivadas de logs

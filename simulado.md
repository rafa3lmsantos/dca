# Simulado — Dynatrace Certified Associate (DCA)

> Baseado nos tópicos e formato do exame oficial.
> **Parte 1:** 130 questões escritas | **Parte 2:** 15 questões práticas/conceituais

---

## Instruções

- **Parte 1:** Selecione a melhor resposta (multiple-choice) ou todas as respostas corretas (multiple-response — identificadas com ★)
- **Multiple-response ★:** Pontuação parcial por acerto; incorretas deduzem o mesmo percentual, mas não geram pontuação negativa total
- Tempo sugerido: 2h para Parte 1, 1h para Parte 2
- Confira o **Gabarito Comentado** ao final após terminar

---

# PARTE 1 — Questões Escritas

## Foundational Platform Capabilities

**Q1.** O que melhor descreve o Dynatrace?

A) Uma ferramenta exclusiva para monitoramento de logs  
B) Uma software intelligence platform que fornece observabilidade unificada para monitoramento, análise e segurança  
C) Um sistema de gerenciamento de banco de dados  
D) Uma plataforma de desenvolvimento de software  

---

**Q2.** Quais são os 4 pilares principais da plataforma Dynatrace?

A) Monitoring, Logging, Tracing, Alerting  
B) Observability, Security, Automation, Integration  
C) Performance, Availability, Capacity, Cost  
D) Discovery, Analysis, Reporting, Remediation  

---

**Q3.** O que é o Dynatrace Hub?

A) Um dashboard para monitoramento de infraestrutura  
B) Um marketplace para apps, extensões e tecnologias que ampliam a plataforma  
C) Uma ferramenta de gerenciamento de usuários  
D) O repositório de logs do Dynatrace  

---

**Q4. ★** Quais recursos estão disponíveis no Dynatrace Support Center? (Selecione TODOS que se aplicam)

A) Documentação oficial  
B) Discussões da comunidade  
C) Cursos on-demand  
D) Treinamentos ao vivo  
E) Agendamento do exame de certificação  

---

**Q5.** Qual é o objetivo central do Dynatrace em relação a problemas?

A) Registrar todos os eventos após ocorrerem  
B) Alertar equipes via e-mail quando um problema é detectado  
C) Prever, prevenir e resolver problemas antes de impactar clientes  
D) Criar relatórios mensais de performance  

---

## Infrastructure Observability

**Q6.** O que é o OneAgent?

A) Um dashboard para visualização de métricas  
B) O agente de coleta de dados do Dynatrace, instalado nos hosts monitorados  
C) Uma API para exportação de dados  
D) O motor de IA do Dynatrace  

---

**Q7.** Em qual situação deve-se usar a Logs Ingestion API em vez do OneAgent?

A) Quando há muitos hosts para monitorar  
B) Em ambientes serverless ou onde a instalação do OneAgent não é possível  
C) Quando os logs são muito grandes  
D) Quando se quer maior velocidade de ingestão  

---

**Q8.** Quais dados o VMware Monitor Hub coleta do vCenter? ★ (Selecione TODOS que se aplicam)

A) Clusters  
B) Hosts  
C) VMs  
D) Datastores  
E) Discos  

---

**Q9.** O Dynatrace coleta dados de quais camadas da stack tecnológica?

A) Apenas da camada de infraestrutura  
B) Apenas de aplicações web  
C) De todas as camadas, desde a interface do usuário até processos de backend  
D) Apenas de bancos de dados  

---

**Q10.** O que é o Smartscape?

A) Um repositório de scripts de automação  
B) Uma visualização interativa em tempo real da topologia do ambiente, com componentes e dependências  
C) Uma ferramenta de análise de código  
D) Um dashboard de métricas de negócio  

---

## DQL

**Q11.** Qual é o comando DQL para buscar business events?

A) `get bizevents`  
B) `fetch bizevents`  
C) `query bizevents`  
D) `select bizevents`  

---

**Q12.** Qual é a principal diferença entre DQL e SQL?

A) DQL é mais lento que SQL  
B) DQL só funciona com dados de logs  
C) DQL não requer descrição prévia do schema dos dados  
D) DQL usa sintaxe idêntica ao SQL  

---

**Q13.** Onde os dados consultados via DQL estão armazenados?

A) Em bancos de dados relacionais externos  
B) No Dynatrace Grail  
C) Em arquivos locais nos hosts monitorados  
D) No AWS S3  

---

**Q14.** Qual comando DQL busca registros de trace distribuído?

A) `fetch traces`  
B) `fetch logs`  
C) `fetch spans`  
D) `fetch events`  

---

**Q15.** Qual pipe DQL é usado para filtrar resultados?

A) `| where`  
B) `| filter`  
C) `| select`  
D) `| condition`  

---

**Q16.** Qual comando retorna os 10 spans com maior duração?

A) `fetch spans | filter duration > 0 | limit 10`  
B) `fetch spans | sort duration desc | limit 10`  
C) `fetch spans | max(duration) | limit 10`  
D) `fetch spans | top 10 duration`  

---

**Q17.** O que o comando `| summarize count(), by: {loglevel}` faz?

A) Lista todos os logs agrupados por nível  
B) Conta o número de registros agrupados por nível de log  
C) Filtra logs pelo nível especificado  
D) Ordena os logs por nível  

---

## Notebooks & Dashboards

**Q18.** Qual é a principal diferença entre Notebooks e Dashboards no Dynatrace?

A) Notebooks são para monitoramento contínuo; Dashboards para exploração ad-hoc  
B) Notebooks permitem exploração interativa customizada; Dashboards fornecem monitoramento contínuo em tempo real  
C) Notebooks são pagos; Dashboards são gratuitos  
D) Não há diferença funcional  

---

**Q19.** Qual recurso do Dynatrace permite criar documentos interativos com queries DQL, análises e visualizações?

A) Dashboards  
B) Reports  
C) Notebooks  
D) Smartscape  

---

**Q20.** Os Dashboards no Dynatrace funcionam como:

A) Repositório de scripts de automação  
B) Hub centralizado para tomada de decisão com visualizações em tempo real  
C) Ferramenta de deployment de aplicações  
D) Sistema de tickets para incidentes  

---

## Business Analytics & DEM

**Q21.** O que é DEM?

A) Dynatrace Entity Management  
B) Digital Experience Monitoring — monitoramento de interações de usuários em web, mobile e outros touchpoints  
C) Data Export Module  
D) Dynamic Event Management  

---

**Q22.** Quais são os dois componentes principais do DEM? ★

A) Logs e Metrics  
B) Real User Monitoring (RUM) e Synthetic Monitoring  
C) Dashboards e Notebooks  
D) OneAgent e AutomationEngine  

---

**Q23.** Como o Synthetic Monitoring difere do Real User Monitoring (RUM)?

A) Synthetic usa dados de usuários reais; RUM usa scripts automatizados  
B) RUM usa dados de usuários reais em tempo real; Synthetic usa scripts automatizados para simular usuários  
C) São idênticos em funcionamento  
D) Synthetic é mais caro e menos preciso  

---

**Q24.** O que são Business Events?

A) Alertas gerados quando uma aplicação tem problemas  
B) Eventos que vinculam performance de aplicações e experiência do usuário a métricas de negócio  
C) Logs de transações de banco de dados  
D) Relatórios mensais de negócio  

---

**Q25.** Qual query DQL é usada para explorar business events?

A) `fetch events | filter type == "business"`  
B) `fetch bizevents`  
C) `get business.events`  
D) `fetch logs | filter category == "bizevents"`  

---

**Q26.** O RUM rastreia quais tipos de métricas? ★ (Selecione TODOS que se aplicam)

A) Comportamento do usuário  
B) Performance de aplicações  
C) Capacidade de discos físicos  
D) Dados integrados ao framework DEM  

---

## Data, Reporting & Analysis

**Q27.** O que o Davis AI faz?

A) Gera relatórios mensais de performance  
B) Vincula eventos e fornece contexto para identificar a causa raiz de problemas  
C) Automatiza deploys de aplicações  
D) Gerencia usuários e permissões  

---

**Q28.** Como funcionam os Dashboard Reports?

A) São dashboards com atualização a cada 30 minutos  
B) São relatórios entregues por e-mail (semanal/mensal) com visualizações de aplicações e infraestrutura  
C) São PDFs gerados manualmente pelo usuário  
D) São notificações push no celular  

---

**Q29.** O que é Session Segmentation?

A) Divisão de usuários por faixa etária  
B) Análise da jornada do usuário (session/visit/click path) dividida em partes menores  
C) Segmentação de logs por sessão de servidor  
D) Agrupamento de métricas por período de tempo  

---

**Q30.** Qual métrica NÃO é rastreada pelo User Analytics?

A) Bounce rate  
B) Conversion rate  
C) CPU usage por host  
D) Exit pages  

---

**Q31.** Qual é a diferença entre métricas Grail e Classic?

A) Grail é a camada legada; Classic é a nova  
B) Grail é a nova camada de métricas; Classic é a camada legada  
C) São equivalentes e intercambiáveis  
D) Classic só funciona com OneAgent; Grail com qualquer agente  

---

## Security

**Q32.** Onde o Davis Security Advisor é exibido na interface do Dynatrace?

A) No menu principal, como um app separado  
B) Na página de Third-Party Vulnerabilities, acima da lista de vulnerabilidades  
C) No Smartscape, junto às entidades  
D) No app Dashboards  

---

**Q33.** O que são Code-Level Vulnerabilities?

A) Vulnerabilidades em sistemas de terceiros  
B) Falhas no código-fonte que podem ser exploradas para comprometer a segurança  
C) Problemas de performance em tempo de execução  
D) Configurações incorretas de firewall  

---

**Q34.** O app Vulnerabilities do Dynatrace identifica quais tipos de vulnerabilidades? ★

A) Code-level  
B) Third-party  
C) Runtime  
D) Network (rede física)  

---

**Q35.** O que é o Security Investigator?

A) Um dashboard de alertas de segurança  
B) Ferramenta para investigações baseadas em evidências no Grail, usando logs, métricas e traces  
C) Um sistema de firewall integrado  
D) Uma API para integração com SIEMs externos  

---

**Q36.** O que diferencia Third-Party Vulnerabilities de Code-Level Vulnerabilities?

A) Third-party são mais fáceis de corrigir  
B) Third-party são fraquezas em fornecedores externos (fora do controle direto da org); Code-level são falhas no próprio código  
C) Code-level afeta apenas bancos de dados  
D) Não há diferença prática  

---

## Automation

**Q37.** O que é o AutomationEngine?

A) Um motor de busca para logs  
B) Motor de automação do Dynatrace que usa IA para automatizar workflows  
C) Uma ferramenta de deployment de aplicações  
D) Um sistema de agendamento de relatórios  

---

**Q38.** Quais áreas são cobertas pela automação do AutomationEngine? ★

A) Observabilidade  
B) Segurança  
C) Dados de negócio  
D) Gerenciamento de usuários  

---

**Q39.** Que tipo de ferramentas o AutomationEngine oferece para criar processos automatizados?

A) Apenas ferramentas que requerem programação avançada  
B) Ferramentas no-code e low-code  
C) Apenas scripts Python  
D) Apenas integrações via API REST  

---

**Q40.** Qual é o mecanismo central de automação da plataforma Dynatrace?

A) AutomationEngine Scheduler  
B) Workflows  
C) Davis Tasks  
D) Runbooks  

---

## Ingestion

**Q41.** Onde os logs ingeridos pelo Dynatrace são armazenados?

A) Em servidores locais nos hosts monitorados  
B) No Grail data lakehouse  
C) Em bancos de dados relacionais externos  
D) No Dynatrace Hub  

---

**Q42.** Qual tecnologia de ingestion descobre logs automaticamente e oferece gerenciamento centralizado?

A) Logs Ingestion API  
B) Cloud Integrations  
C) OneAgent  
D) VMware Monitor Hub  

---

**Q43.** O Dynatrace coleta quais tipos de dados durante a ingestão? ★

A) Métricas  
B) Logs  
C) Traces  
D) Business events  

---

## Kubernetes

**Q44.** O app Kubernetes no Dynatrace permite visualizar:

A) Apenas métricas de CPU e memória dos nodes  
B) Clusters, namespaces e workloads de forma integrada  
C) Apenas pods com status de erro  
D) Apenas deployments em produção  

---

## Exam Structure

**Q45.** Quantas questões tem a Parte 1 do exame DCA?

A) 40  
B) 50  
C) 60  
D) 80  

---

**Q46.** A Parte 2 (prática) do exame DCA é:

A) Fechada — sem consulta a materiais externos  
B) Open book — documentação pode ser consultada  
C) Realizada em papel  
D) Opcional  

---

**Q47.** Quantas vezes por ano você pode tentar o exame DCA?

A) 2 vezes  
B) 3 vezes  
C) 4 vezes  
D) Ilimitado  

---

**Q48.** Qual é o tempo de espera mínimo entre tentativas do exame DCA?

A) 7 dias  
B) 14 dias  
C) 30 dias  
D) 60 dias  

---

**Q49.** Por quanto tempo a certificação DCA é válida?

A) 1 ano  
B) 2 anos  
C) 3 anos  
D) Vitalícia  

---

**Q50.** Onde o badge da certificação DCA fica disponível após aprovação?

A) Apenas no e-mail de confirmação  
B) No Dashboard da Dynatrace University e para download via Credly  
C) Apenas no perfil do LinkedIn  
D) É enviado por correio  

---

## Multiple-Response — Questões Compostas ★

**Q51. ★** Quais afirmações sobre DQL estão corretas? (Selecione TODAS)

A) Dados são armazenados no Grail  
B) Requer definição prévia de schema  
C) Permite identificar anomalias e outliers  
D) É usado em Notebooks e Dashboards  
E) É baseado na sintaxe SQL  

---

**Q52. ★** Quais são características do Synthetic Monitoring?

A) Usa scripts automatizados para simular usuários  
B) Monitora usuários reais em tempo real  
C) É proativo — detecta problemas antes de impactar usuários reais  
D) É um componente do DEM  
E) Substitui completamente o RUM  

---

**Q53. ★** O que o Dynatrace usa para garantir segurança na plataforma?

A) Criptografia  
B) Controles de acesso  
C) Conformidade com padrões da indústria  
D) Monitoramento contínuo de vulnerabilidades  

---

**Q54. ★** Quais são tipos de entidade no Dynatrace?

A) Hosts  
B) Process Groups  
C) Services  
D) Applications  
E) Datastores  

---

**Q55. ★** Quais afirmações sobre o OneAgent são corretas?

A) Coleta métricas, logs e traces  
B) Descobre processos e serviços automaticamente  
C) Deve ser instalado em cada host monitorado  
D) É a única forma de ingerir logs no Dynatrace  
E) Oferece gerenciamento centralizado de logs  

---

**Q56. ★** Quais recursos o Dynatrace Hub oferece?

A) Apps de observabilidade  
B) Extensões para a plataforma  
C) Integração com cloud platforms  
D) Suporte a ambientes multi-cloud  
E) Hospedagem de aplicações dos clientes  

---

**Q57. ★** O que o app Vulnerabilities do Dynatrace permite fazer?

A) Detectar vulnerabilidades  
B) Visualizar vulnerabilidades  
C) Analisar vulnerabilidades  
D) Corrigir vulnerabilidades automaticamente sem interação humana  
E) Monitorar vulnerabilidades continuamente  

---

**Q58. ★** Quais afirmações sobre Dashboard Reports são corretas?

A) Podem ser assinados para entrega semanal  
B) Podem ser assinados para entrega mensal  
C) São enviados por e-mail  
D) Incluem visualizações interativas de aplicações e infraestrutura  
E) Substituem completamente os Dashboards na plataforma  

---

**Q59. ★** O que o Session Segmentation analisa?

A) Caminhos típicos dos usuários  
B) Pontos de abandono (drop-off points)  
C) Sessões de alto engajamento  
D) Performance de servidores durante as sessões  
E) Conversões e vendas  

---

**Q60. ★** Quais pré-requisitos de sistema são necessários para o exame DCA?

A) Desktop ou laptop conectado à fonte de energia  
B) Webcam portátil e microfone  
C) Google Chrome com pop-up blocker desativado  
D) Monitor único (ou laptop com tela externa — tela do laptop fechada)  
E) Fones de ouvido/headset  

---

---

## Dynatrace Platform & AI

**Q61.** O Davis AI é descrito como um mecanismo de IA "causal". O que isso significa na prática?

A) Ele prevê problemas usando machine learning estatístico  
B) Ele determina a causa raiz correlacionando eventos e dependências em vez de apenas detectar sintomas  
C) Ele usa modelos de linguagem para analisar logs  
D) Ele executa scripts de automação quando detecta anomalias  

---

**Q62.** Qual é a principal vantagem da abordagem "full-stack" do Dynatrace?

A) Monitorar apenas a camada de infraestrutura com precisão máxima  
B) Ter visibilidade unificada de toda a stack — desde a experiência do usuário até o código e infraestrutura  
C) Reduzir o número de agentes instalados nos hosts  
D) Centralizar alertas de múltiplas ferramentas de terceiros  

---

**Q63.** O que o Dynatrace chama de "Smartscape"?

A) Um repositório de dashboards pré-construídos  
B) Um mapa topológico em tempo real que mostra automaticamente entidades e suas dependências  
C) Uma ferramenta de planejamento de capacidade  
D) O motor de queries DQL  

---

**Q64.** Como o Dynatrace descobre e mapeia automaticamente os componentes do ambiente?

A) Por meio de varreduras de rede agendadas manualmente  
B) Através do OneAgent, que instrumenta automaticamente processos e serviços  
C) Importando inventário de uma CMDB externa  
D) Requer configuração manual de cada serviço  

---

**Q65.** O que é o Grail no contexto do Dynatrace?

A) O motor de alertas da plataforma  
B) O data lakehouse nativo do Dynatrace para armazenar e consultar métricas, logs, traces e eventos  
C) O marketplace de extensões  
D) O módulo de segurança da plataforma  

---

**Q66. ★** Quais tipos de dados são armazenados no Grail?

A) Logs  
B) Métricas  
C) Traces (spans)  
D) Business events  
E) Arquivos de configuração de infraestrutura  

---

## DQL — Aprofundamento

**Q67.** Qual pipe DQL é usado para criar agregações ao longo do tempo (time series)?

A) `| summarize`  
B) `| makeTimeseries`  
C) `| timechart`  
D) `| groupByTime`  

---

**Q68.** Qual query DQL retorna logs dos últimos 30 minutos?

A) `fetch logs | filter timestamp > now()-30m`  
B) `fetch logs, from: now()-30m`  
C) `fetch logs | limit 30m`  
D) `fetch logs | time 30m`  

---

**Q69.** Ao usar `| summarize count(), by: {service.name}`, o que a cláusula `by:` faz?

A) Filtra resultados pelo service.name  
B) Agrupa os resultados por service.name antes de contar  
C) Ordena os resultados pelo service.name  
D) Seleciona apenas o campo service.name no resultado  

---

**Q70.** Qual função DQL calcula o percentil 95 de duração dos spans?

A) `avg(duration)`  
B) `max(duration)`  
C) `percentile(duration, 95)`  
D) `p95(duration)`  

---

**Q71.** Como filtrar logs que contenham a palavra "exception" no conteúdo?

A) `| filter content == "exception"`  
B) `| filter contains(content, "exception")`  
C) `| filter content like "exception"`  
D) `| filter search(content, "exception")`  

---

**Q72.** O que o pipe `| fields` faz em uma query DQL?

A) Filtra registros por valor de campo  
B) Seleciona quais campos serão retornados no resultado  
C) Cria novos campos calculados  
D) Remove campos duplicados  

---

**Q73.** Qual é a sintaxe correta para buscar spans com erro HTTP 5xx?

A) `fetch spans | filter http.status_code == "5xx"`  
B) `fetch spans | filter http.status_code >= 500`  
C) `fetch spans | filter error == true`  
D) `fetch spans | filter status == "error"`  

---

**Q74.** Como limitar uma query DQL para retornar apenas 20 resultados?

A) `| top 20`  
B) `| limit 20`  
C) `| take 20`  
D) `| first 20`  

---

**Q75. ★** Quais afirmações sobre DQL são corretas?

A) O comando base é `fetch`  
B) Pipes (`|`) transformam o resultado anterior  
C) DQL requer schema definido antecipadamente  
D) Pode ser usado em Notebooks e Dashboards  
E) Só funciona com dados de logs  

---

**Q76.** Qual query busca entidades do tipo Service no Dynatrace?

A) `fetch services`  
B) `fetch dt.entity.service`  
C) `fetch entities | filter type == "service"`  
D) `get dt.services`  

---

**Q77.** Qual operador DQL é usado para combinar múltiplos filtros com lógica AND?

A) `&&`  
B) `+`  
C) `and`  
D) `&`  

---

## Logs & Log Management

**Q78.** O que é Log Content Analysis no Dynatrace?

A) Uma ferramenta para analisar o código-fonte em busca de vulnerabilidades  
B) Acesso direto ao conteúdo de logs de processos mission-critical, com capacidade de filtrar e parsear  
C) Um relatório automatizado de logs gerado semanalmente  
D) Uma integração com ferramentas de SIEM externas  

---

**Q79.** Qual é a estratégia recomendada para lidar com grandes volumes de dados de log?

A) Aumentar o limite de retenção de logs  
B) Filtrar e parsear os registros relevantes  
C) Exportar todos os logs para um storage externo  
D) Desativar a ingestão de logs de baixa prioridade  

---

**Q80.** Onde os logs são armazenados no Dynatrace moderno?

A) Em arquivos locais nos hosts monitorados  
B) Em um banco de dados relacional dedicado  
C) No Grail data lakehouse  
D) No Dynatrace Hub  

---

**Q81.** Quais fontes o OneAgent usa para descobrir logs automaticamente? ★

A) Arquivos de log no sistema de arquivos  
B) Logs de stdout/stderr de processos  
C) Logs de containers (Docker, Kubernetes)  
D) Logs de eventos do sistema operacional  

---

## Traces & Distributed Tracing

**Q82.** O que é um "span" no contexto de distributed tracing?

A) Uma métrica de performance de host  
B) A unidade básica de trabalho em um trace — representa uma operação ou chamada individual  
C) Um evento de segurança detectado pelo Dynatrace  
D) Um registro de log de aplicação  

---

**Q83.** O que é um "trace" no Dynatrace?

A) Uma linha de log de erro  
B) A coleção completa de spans que representa uma request do início ao fim  
C) Um gráfico de métricas ao longo do tempo  
D) Um evento de deploy de aplicação  

---

**Q84.** Qual campo de span é usado para identificar o protocolo HTTP da chamada?

A) `span.protocol`  
B) `http.status_code`  
C) `http.method`  
D) `span.type`  

---

**Q85.** Por que distributed tracing é importante em arquiteturas de microsserviços?

A) Porque reduz o número de logs gerados  
B) Porque permite rastrear uma request através de múltiplos serviços e identificar gargalos  
C) Porque substitui o monitoramento de infraestrutura  
D) Porque é o único método de detectar erros em produção  

---

## Security — Aprofundamento

**Q86.** Qual é a diferença entre uma vulnerabilidade "third-party" e uma "runtime"?

A) São idênticas — apenas nomes diferentes para o mesmo conceito  
B) Third-party = fraqueza em bibliotecas/fornecedores externos; Runtime = vulnerabilidade ativa sendo explorada em tempo de execução  
C) Runtime afeta apenas bancos de dados  
D) Third-party é detectada pelo OneAgent; Runtime pela API  

---

**Q87.** O que o Davis Security Score representa?

A) O número total de vulnerabilidades detectadas  
B) Uma pontuação calculada pelo Davis AI para indicar o risco global do ambiente e priorizar fixes  
C) A velocidade de resposta do time de segurança  
D) O percentual de vulnerabilidades já corrigidas  

---

**Q88.** Por que vulnerabilidades third-party são consideradas "mais difíceis de detectar e mitigar"?

A) Porque são mais complexas tecnicamente  
B) Porque frequentemente estão fora do controle direto da organização e dependem de atualizações de fornecedores  
C) Porque o Dynatrace não as detecta automaticamente  
D) Porque requerem análise manual de código  

---

**Q89.** Qual funcionalidade do Dynatrace permite criar tickets automaticamente em ferramentas como Jira quando uma vulnerabilidade é detectada?

A) Davis Security Advisor  
B) AutomationEngine com Workflows  
C) Security Investigator  
D) Vulnerabilities app  

---

**Q90. ★** Quais são características do Security Investigator?

A) Realiza investigações baseadas em evidências  
B) Opera sobre dados no Grail  
C) Usa logs, métricas e traces na investigação  
D) Possui funcionalidades assistidas por IA  
E) Substitui o app Vulnerabilities  

---

## Automation — Aprofundamento

**Q91.** Qual é a diferença entre "no-code" e "low-code" no contexto do AutomationEngine?

A) No-code usa apenas cliques na interface; low-code permite configuração via YAML/scripts simples  
B) São termos equivalentes sem diferença prática  
C) No-code é para times de negócio; low-code é exclusivo para desenvolvedores  
D) Low-code requer programação avançada em Python  

---

**Q92.** O que um Workflow no Dynatrace pode fazer quando acionado por um problema detectado pelo Davis AI? ★

A) Enviar notificação para um canal de comunicação (ex: Slack, Teams)  
B) Criar automaticamente um ticket no sistema de ITSM  
C) Executar um script de remediação automática  
D) Desligar o host afetado  
E) Escalar alertas para o gerente  

---

**Q93.** Qual é um exemplo de tarefa que o AutomationEngine pode automatizar?

A) Análise manual de logs por um engenheiro  
B) Detecção de anomalias e notificação automática do time responsável  
C) Atualização de sistema operacional com aprovação manual  
D) Configuração inicial do OneAgent em novos hosts  

---

## Monitoring & Observability — Aprofundamento

**Q94.** O que significa "observabilidade" no contexto do Dynatrace?

A) A capacidade de monitorar apenas métricas de CPU e memória  
B) A capacidade de entender o estado interno de um sistema a partir de seus outputs (métricas, logs, traces)  
C) A instalação de agentes em todos os hosts  
D) O número de dashboards disponíveis na plataforma  

---

**Q95.** Os "3 pilares da observabilidade" são:

A) CPU, Memória, Disco  
B) Logs, Metrics, Traces  
C) Hosts, Services, Applications  
D) Alertas, Dashboards, Reports  

---

**Q96.** O que é um "Problem" no Dynatrace?

A) Um log de erro detectado pelo OneAgent  
B) Um incidente identificado automaticamente pelo Davis AI, correlacionando eventos e impactos  
C) Uma configuração incorreta de infraestrutura  
D) Um alerta manual criado por um operador  

---

**Q97.** Qual app do Dynatrace é o ponto central para ver problemas detectados automaticamente?

A) Dashboards  
B) Notebooks  
C) Problems  
D) Smartscape  

---

**Q98.** O que são "anomaly detection settings" no Dynatrace?

A) Configurações para definir quais usuários podem acessar a plataforma  
B) Regras que definem os limiares a partir dos quais o Davis AI considera um comportamento anômalo  
C) Configurações de retenção de dados  
D) Parâmetros de instalação do OneAgent  

---

**Q99. ★** Quais são os benefícios do monitoramento contínuo no Dynatrace?

A) Detecção de anomalias em tempo real  
B) Rastreamento de tendências de performance ao longo do tempo  
C) Identificação de problemas antes de impactar usuários  
D) Eliminação completa de incidentes em produção  

---

## Business Analytics & DEM — Aprofundamento

**Q100.** Qual é o papel dos Business Events na plataforma Dynatrace?

A) Substituir logs de aplicação  
B) Vincular eventos técnicos de performance a impactos de negócio mensuráveis  
C) Automatizar deploys de releases  
D) Gerar relatórios de SLA mensalmente  

---

**Q101.** O que é "User Journey Analysis" no Dynatrace?

A) Análise do caminho do usuário pela interface do Dynatrace  
B) Rastreamento e análise da sequência de interações de um usuário dentro de uma aplicação (click path)  
C) Análise de performance do time de operações  
D) Relatório de jornada de aprendizado na Dynatrace University  

---

**Q102.** Qual métrica indica que usuários estão saindo rapidamente de uma página sem interagir?

A) Conversion rate  
B) Exit page  
C) Bounce rate  
D) Session duration  

---

**Q103.** Como o RUM alimenta o Business Analytics?

A) Enviando relatórios mensais automaticamente  
B) Integrando dados de performance de aplicação e comportamento do usuário real nas análises de negócio  
C) Criando dashboards automáticos de KPIs  
D) Substituindo os Business Events  

---

**Q104.** O Synthetic Monitoring pode ser usado para: ★

A) Monitorar disponibilidade 24/7 mesmo sem tráfego real  
B) Validar SLAs de performance  
C) Detectar problemas antes do lançamento de features  
D) Substituir completamente o RUM em ambientes de produção  

---

## Kubernetes & Cloud

**Q105.** Qual é a vantagem do Dynatrace para ambientes Kubernetes?

A) Elimina a necessidade de usar o kubectl  
B) Descobre automaticamente pods, namespaces e workloads sem configuração manual  
C) Substitui o Kubernetes como orquestrador  
D) Requer configuração manual de cada pod para monitoramento  

---

**Q106.** O que é um "namespace" no contexto do Kubernetes monitorado pelo Dynatrace?

A) Uma partição lógica dentro de um cluster Kubernetes que agrupa recursos relacionados  
B) O nome do cluster Kubernetes  
C) Um tipo de métrica específica do Kubernetes  
D) Um alias para um pod em execução  

---

**Q107.** Qual é o mecanismo recomendado para monitorar Kubernetes com Dynatrace?

A) Instalar o OneAgent diretamente em cada pod  
B) Usar o Dynatrace Operator para deployment no cluster  
C) Configurar manualmente o scraping de métricas via Prometheus  
D) Usar apenas a Logs Ingestion API  

---

**Q108. ★** Quais integrações de cloud estão disponíveis no Dynatrace?

A) AWS  
B) Azure  
C) Google Cloud Platform (GCP)  
D) IBM Cloud  

---

## Entities & Topology

**Q109.** Qual é a hierarquia correta de entidades no Dynatrace, do nível mais baixo ao mais alto?

A) Host → Process Group → Service → Application  
B) Application → Service → Process Group → Host  
C) Service → Host → Application → Process Group  
D) Process Group → Host → Service → Application  

---

**Q110.** O que diferencia um "Service" de uma "Application" no Dynatrace?

A) Services são monitorados por agentes; Applications são monitoradas manualmente  
B) Services representam componentes de backend (APIs, microsserviços); Applications representam a perspectiva do usuário final  
C) São sinônimos na plataforma  
D) Applications só existem em ambientes cloud  

---

**Q111.** O que o Smartscape mostra quando você clica em uma entidade?

A) Apenas as métricas daquela entidade  
B) As dependências upstream e downstream daquela entidade no ambiente  
C) O código-fonte do serviço  
D) Os logs das últimas 24 horas  

---

**Q112.** Por que é importante saber diferenciar "Hosts" de "Process Groups" no exame?

A) Não há diferença prática entre eles  
B) Porque o exame testa a capacidade de navegar pela topologia e analisar dados no nível correto de entidade  
C) Porque Hosts são gratuitos e Process Groups são pagos  
D) Porque Process Groups só existem em ambientes Windows  

---

## Data & Metrics — Aprofundamento

**Q113.** Qual é a diferença entre "Built-in Metrics on Grail" e "Metrics Classic"?

A) Grail metrics são métricas legadas; Classic são as novas  
B) Grail metrics fazem parte da nova arquitetura de dados; Classic são métricas da plataforma legada  
C) São idênticas — apenas nomes de interface diferentes  
D) Classic metrics são coletadas pelo OneAgent; Grail metrics por APIs externas  

---

**Q114.** Qual prefixo de métrica é usado para métricas derivadas de logs?

A) `logs.`  
B) `log.`  
C) `lma.`  
D) `grail.logs.`  

---

**Q115.** O que é "Performance Analysis" no contexto de uma aplicação web no Dynatrace?

A) Uma análise automática de código-fonte em busca de gargalos  
B) A seção da página de visão geral da aplicação que mostra métricas detalhadas de performance (response time, error rate, throughput)  
C) Um relatório gerado pelo Davis AI semanalmente  
D) Uma ferramenta de profiling de JVM  

---

**Q116.** A Dashboards API permite: ★

A) Criar dashboards programaticamente  
B) Exportar dados de dashboards para sistemas externos  
C) Integrar dados do Dynatrace com outras ferramentas via OAuth  
D) Gerenciar permissões de dashboards  

---

## Exam Details & Certification

**Q117.** O que acontece se você não passar no exame DCA na 4ª tentativa?

A) Você é banido permanentemente de tentar novamente  
B) Deve aguardar 12 meses a partir da data da 1ª tentativa dentro do período de 12 meses  
C) Deve fazer um curso obrigatório antes de tentar novamente  
D) Pode tentar novamente após 30 dias  

---

**Q118.** Durante o exame DCA, a verificação de identidade requer comunicação em qual idioma?

A) No idioma escolhido para as questões  
B) Inglês, independentemente do idioma das questões  
C) Qualquer idioma suportado pelo ProctorU  
D) Não há verificação de identidade verbal  

---

**Q119.** O que é o "Dynatrace Essentials Learning Path" no contexto da certificação DCA?

A) Um curso obrigatório para fazer o exame  
B) Um percurso de aprendizado recomendado como preparação antes de iniciar o Associate Learning Path  
C) O nome oficial do Associate Learning Path  
D) Um programa de certificação separado  

---

**Q120. ★** Quais ações são recomendadas como "Preparação Obrigatória" para o exame DCA?

A) Completar todos os cursos do Associate Certification Learning Plan  
B) Ter prática hands-on com a plataforma (Playground ou tenant próprio)  
C) Agendar o exame com antecedência mínima de 6 meses  
D) Completar atividades e knowledge checks de cada seção  

---

**Q121.** Como funciona a pontuação de questões multiple-response no exame DCA?

A) Pontuação toda ou nada — precisa acertar todas as opções  
B) Pontuação parcial por acerto; a mesma porcentagem é deduzida por resposta incorreta, mas sem pontuação negativa total  
C) Respostas incorretas não deduzem pontos  
D) Cada questão vale 1 ponto independentemente do número de opções  

---

**Q122.** Qual é a duração total recomendada para o exame DCA?

A) 1 hora  
B) 2 horas  
C) 3 horas (2h Parte 1 + 1h Parte 2)  
D) 4 horas  

---

**Q123.** O Dynatrace Playground é:

A) Um ambiente de desenvolvimento para criar extensões  
B) Um sandbox público com dados de amostra disponível sem instalação de software  
C) Um simulador do exame DCA  
D) Um ambiente de testes disponível apenas para clientes pagantes  

---

## Ingestion & Integration — Aprofundamento

**Q124.** O VMware Monitor Hub conecta-se a qual componente do VMware para coletar dados?

A) VMware NSX  
B) vCenter  
C) vSAN  
D) VMware Horizon  

---

**Q125.** Qual é a função do Dynatrace como "software intelligence platform" em ambientes multi-cloud?

A) Gerenciar deploys entre clouds diferentes  
B) Fornecer visibilidade unificada e automação em múltiplos ambientes cloud simultaneamente  
C) Substituir ferramentas nativas de cloud como CloudWatch e Azure Monitor  
D) Centralizar billing de múltiplas contas cloud  

---

**Q126. ★** Qual das opções abaixo são mecanismos de ingestão de dados suportados pelo Dynatrace?

A) OneAgent (instalado nos hosts)  
B) Logs Ingestion API (para ambientes serverless)  
C) Cloud Integrations (para plataformas cloud)  
D) VMware Monitor Hub (para ambientes VMware)  
E) Manual upload via interface web  

---

**Q127.** Por que o Grail é chamado de "data lakehouse"?

A) Porque armazena apenas dados não estruturados  
B) Porque combina características de data lake (armazenamento flexível e escalável) com data warehouse (consultas analíticas eficientes)  
C) Porque foi desenvolvido em parceria com a Apache  
D) Porque replica dados em múltiplas regiões geográficas  

---

## Cenários e Aplicação Prática

**Q128.** Um serviço de pagamentos começa a apresentar lentidão. Qual sequência de ações no Dynatrace faz mais sentido?

A) Criar um Dashboard → Verificar logs → Abrir ticket  
B) Verificar o app Problems → Analisar o serviço no Smartscape → Usar DQL para correlacionar traces e logs  
C) Reiniciar o host → Monitorar por 30 minutos → Criar relatório  
D) Exportar todos os dados via API → Analisar offline  

---

**Q129.** Um desenvolvedor quer entender como usuários navegam pelo checkout do e-commerce. Qual funcionalidade usar?

A) Smartscape  
B) Session Segmentation e User Journey Analysis  
C) Davis Security Advisor  
D) AutomationEngine  

---

**Q130.** O time de segurança quer saber quais vulnerabilidades críticas estão presentes e qual corrigir primeiro. Quais ferramentas usar? ★

A) App Vulnerabilities (para visão geral priorizada)  
B) Davis Security Advisor (para recomendação do fix de maior impacto)  
C) Davis Security Score (para entender o risco global)  
D) Security Investigator (para investigação de incidente específico)  

---

# PARTE 2 — Questões Práticas/Conceituais

**P1.** Você precisa investigar erros em um serviço de checkout nas últimas 2 horas. Escreva uma query DQL para buscar logs de nível ERROR do serviço "checkout" e ordenar do mais recente para o mais antigo.

---

**P2.** Um cliente reporta lentidão em uma aplicação. Descreva os passos que você seguiria no Dynatrace para identificar a causa raiz, mencionando quais apps ou funcionalidades usaria.

---

**P3.** Escreva uma query DQL que retorne os 5 serviços com maior número de spans com status HTTP 500 na última hora.

---

**P4.** Qual é a diferença entre usar o app "Vulnerabilities" e o "Security Investigator"? Quando você usaria cada um?

---

**P5.** Escreva uma query DQL que conte quantos business events de cada tipo (`event.type`) ocorreram nas últimas 24 horas, ordenados do mais frequente para o menos frequente.

---

**P6.** Um time de negócio quer receber relatórios semanais de performance da aplicação. Qual funcionalidade do Dynatrace você recomendaria e como funciona?

---

**P7.** Explique a diferença entre as entidades Hosts, Process Groups, Services e Applications no Dynatrace. Dê um exemplo do mundo real para cada uma.

---

**P8.** Como o Dynatrace pode ajudar a automatizar a resposta quando uma vulnerabilidade crítica é detectada? Quais ferramentas da plataforma estariam envolvidas?

---

**P9.** Escreva uma query DQL para buscar métricas de uso de CPU (`dt.host.cpu.usage`) por host, mostrando o valor médio, ordenado do maior para o menor.

---

**P10.** Qual é a diferença entre Real User Monitoring (RUM) e Synthetic Monitoring? Em qual cenário cada um é mais valioso?

---

**P11.**
```dql
fetch spans, from: now()-6h
| filter service.name == "payment-service" and duration > 2000000
| sort duration desc
```

**P12.** Fluxo completo:
1. **OneAgent** coleta métricas, logs e traces continuamente do host/serviço
2. Dados são enviados ao **Grail** em tempo real
3. **Davis AI** analisa o comportamento em busca de desvios do baseline normal
4. Quando um padrão anômalo é detectado (ex: aumento de latência acima do threshold), Davis AI correlaciona com outros eventos e dependências
5. Davis AI abre um **Problem** automaticamente, identificando a causa raiz e o impacto
6. O Problem aparece no app **Problems** com contexto completo: entidades afetadas, linha do tempo, causa raiz sugerida e impacto

**P13.** Recomendar **Synthetic Monitoring**. Motivo: cria scripts que simulam usuários acessando o site em intervalos regulares (ex: a cada 1 minuto), 24/7 — incluindo períodos sem tráfego real. Detecta indisponibilidade ou degradação de performance imediatamente, antes que qualquer usuário real seja impactado. Ideal para monitoramento de SLA e disponibilidade contínua.

**P14.**
```dql
fetch logs, from: now()-24h
| filter service.name == "api-gateway"
| summarize count(), by: {loglevel}
| sort count() desc
```

**P15.** Processo recomendado:
1. Abrir um **Notebook** novo para a investigação
2. Adicionar seção com query DQL para identificar o serviço com maior latência: `fetch spans | summarize avg(duration), by: {service.name} | sort avg(duration) desc`
3. Aprofundar no serviço afetado: `fetch spans | filter service.name == "X" | sort duration desc | limit 20`
4. Correlacionar com logs do mesmo período: `fetch logs | filter service.name == "X" and loglevel == "ERROR"`
5. Adicionar visualizações (gráficos de time series) para mostrar a evolução da latência
6. Documentar conclusões e causa raiz em texto no próprio Notebook
7. **Compartilhar o Notebook** com o time de negócio — eles podem visualizar os dados e conclusões sem precisar escrever queries

---

---

**P11.** Escreva uma query DQL que busque spans de um serviço chamado "payment-service" com duração maior que 2 segundos (2.000.000 microssegundos) nas últimas 6 horas.

---

**P12.** Explique o que acontece passo a passo quando o OneAgent detecta uma anomalia até o momento em que um engenheiro vê o problema no app Problems.

---

**P13.** Um cliente quer monitorar a disponibilidade de seu site 24 horas por dia, inclusive às 3h da manhã quando não há usuários reais. Qual funcionalidade do Dynatrace recomendaria e por quê?

---

**P14.** Escreva uma query DQL que retorne a contagem de logs por nível (loglevel) do serviço "api-gateway" nas últimas 24 horas, ordenada da contagem mais alta para a mais baixa.

---

**P15.** Descreva como você usaria Notebooks e DQL para investigar um problema de performance em produção e compartilhar os resultados com o time de negócio.

---

# GABARITO COMENTADO

## Parte 1

| Q | Resposta | Tópico |
|---|---------|--------|
| Q1 | B | Foundational |
| Q2 | B | Foundational |
| Q3 | B | Foundational |
| Q4 | A, B, C, D ★ | Foundational |
| Q5 | C | Foundational |
| Q6 | B | Infrastructure |
| Q7 | B | Infrastructure |
| Q8 | A, B, C, D, E ★ | Infrastructure |
| Q9 | C | Infrastructure |
| Q10 | B | Infrastructure |
| Q11 | B | DQL |
| Q12 | C | DQL |
| Q13 | B | DQL |
| Q14 | C | DQL |
| Q15 | B | DQL |
| Q16 | B | DQL |
| Q17 | B | DQL |
| Q18 | B | Notebooks/Dashboards |
| Q19 | C | Notebooks/Dashboards |
| Q20 | B | Notebooks/Dashboards |
| Q21 | B | DEM |
| Q22 | B ★ | DEM |
| Q23 | B | DEM |
| Q24 | B | Business Analytics |
| Q25 | B | DQL |
| Q26 | A, B, D ★ | DEM/RUM |
| Q27 | B | Data/Analysis |
| Q28 | B | Reporting |
| Q29 | B | Reporting |
| Q30 | C | User Analytics |
| Q31 | B | Metrics |
| Q32 | B | Security |
| Q33 | B | Security |
| Q34 | A, B, C ★ | Security |
| Q35 | B | Security |
| Q36 | B | Security |
| Q37 | B | Automation |
| Q38 | A, B, C ★ | Automation |
| Q39 | B | Automation |
| Q40 | B | Automation |
| Q41 | B | Ingestion |
| Q42 | C | Ingestion |
| Q43 | A, B, C, D ★ | Ingestion |
| Q44 | B | Kubernetes |
| Q45 | C | Exam |
| Q46 | B | Exam |
| Q47 | C | Exam |
| Q48 | B | Exam |
| Q49 | B | Exam |
| Q50 | B | Exam |
| Q51 | A, C, D ★ | DQL |
| Q52 | A, C, D ★ | Synthetics |
| Q53 | A, B, C, D ★ | Security |
| Q54 | A, B, C, D ★ | Entities |
| Q55 | A, B, C, E ★ | OneAgent |
| Q56 | A, B, C, D ★ | Hub |
| Q57 | A, B, C, E ★ | Security |
| Q58 | A, B, C, D ★ | Reporting |
| Q59 | A, B, C ★ | Session Segmentation |
| Q60 | A, B, C, D ★ | Exam Prep |

---

### Q61–Q130

| Q | Resposta | Tópico |
|---|---------|--------|
| Q61 | B | Davis AI |
| Q62 | B | Platform |
| Q63 | B | Smartscape |
| Q64 | B | OneAgent |
| Q65 | B | Grail |
| Q66 | A, B, C, D ★ | Grail |
| Q67 | B | DQL |
| Q68 | B | DQL |
| Q69 | B | DQL |
| Q70 | C | DQL |
| Q71 | B | DQL |
| Q72 | B | DQL |
| Q73 | B | DQL |
| Q74 | B | DQL |
| Q75 | A, B, D ★ | DQL |
| Q76 | B | DQL |
| Q77 | C | DQL |
| Q78 | B | Logs |
| Q79 | B | Logs |
| Q80 | C | Logs/Grail |
| Q81 | A, B, C, D ★ | OneAgent |
| Q82 | B | Traces |
| Q83 | B | Traces |
| Q84 | C | Traces |
| Q85 | B | Traces |
| Q86 | B | Security |
| Q87 | B | Security |
| Q88 | B | Security |
| Q89 | B | Automation+Security |
| Q90 | A, B, C, D ★ | Security |
| Q91 | A | Automation |
| Q92 | A, B, C ★ | Automation |
| Q93 | B | Automation |
| Q94 | B | Observability |
| Q95 | B | Observability |
| Q96 | B | Problems |
| Q97 | C | Problems |
| Q98 | B | Davis AI |
| Q99 | A, B, C ★ | Monitoring |
| Q100 | B | Business Analytics |
| Q101 | B | DEM |
| Q102 | C | User Analytics |
| Q103 | B | RUM |
| Q104 | A, B, C ★ | Synthetics |
| Q105 | B | Kubernetes |
| Q106 | A | Kubernetes |
| Q107 | B | Kubernetes |
| Q108 | A, B, C, D ★ | Cloud |
| Q109 | A | Entities |
| Q110 | B | Entities |
| Q111 | B | Smartscape |
| Q112 | B | Entities |
| Q113 | B | Metrics |
| Q114 | B | Metrics |
| Q115 | B | Performance |
| Q116 | A, B, C, D ★ | API |
| Q117 | B | Exam |
| Q118 | B | Exam |
| Q119 | B | Exam |
| Q120 | A, B, D ★ | Exam Prep |
| Q121 | B | Exam |
| Q122 | C | Exam |
| Q123 | B | Playground |
| Q124 | B | VMware |
| Q125 | B | Multi-cloud |
| Q126 | A, B, C, D ★ | Ingestion |
| Q127 | B | Grail |
| Q128 | B | Scenario |
| Q129 | B | Scenario |
| Q130 | A, B, C, D ★ | Security scenario |

---

## Parte 2 — Respostas Comentadas

**P1.**
```dql
fetch logs, from: now()-2h
| filter loglevel == "ERROR" and service.name == "checkout"
| sort timestamp desc
```

**P2.** Passos recomendados:
1. Abrir o app **Problems** — ver se o Dynatrace já detectou automaticamente o problema
2. Clicar no problema para ver a **causa raiz identificada pelo Davis AI**
3. Usar o **Smartscape** para entender as dependências do serviço afetado
4. Ir ao app **Services** para ver métricas de response time e error rate
5. Usar **Notebooks** para aprofundar a análise com DQL (`fetch spans | filter service.name == "..."`)
6. Verificar **logs** do período com `fetch logs | filter ...`

**P3.**
```dql
fetch spans, from: now()-1h
| filter http.status_code == 500
| summarize error_count = count(), by: {service.name}
| sort error_count desc
| limit 5
```

**P4.**
- **App Vulnerabilities:** Visão consolidada e priorizada de todas as vulnerabilidades (code-level, third-party, runtime) — usar para *monitoramento e triagem* contínua
- **Security Investigator:** Para *investigações aprofundadas* baseadas em evidências no Grail, correlacionando logs, métricas e traces de um incidente específico

**P5.**
```dql
fetch bizevents, from: now()-24h
| summarize count(), by: {event.type}
| sort count() desc
```

**P6.** Recomendar **Dashboard Reports**: criar um Dashboard com as métricas relevantes e assinar relatórios semanais para entrega automática por e-mail. O time de negócio receberá visualizações de performance sem precisar acessar a plataforma.

**P7.**
- **Host:** Servidor físico ou virtual (ex: servidor Linux na AWS)
- **Process Group:** Grupo de processos da mesma tecnologia (ex: todas as instâncias do Tomcat naquele host)
- **Service:** Serviço de aplicação exposto (ex: API de checkout)
- **Application:** Aplicação monitorada do ponto de vista do usuário final (ex: site de e-commerce)

**P8.** Ferramentas envolvidas:
1. **App Vulnerabilities / Security Investigator** → detecta e analisa a vulnerabilidade
2. **Davis Security Advisor** → prioriza o fix de maior impacto
3. **AutomationEngine + Workflows** → cria automaticamente tickets no sistema de ticketing (ex: Jira, ServiceNow) e notifica o time responsável

**P9.**
```dql
fetch metrics
| filter metric.key == "dt.host.cpu.usage"
| summarize avg_cpu = avg(value), by: {host.name}
| sort avg_cpu desc
```

**P10.**
- **RUM:** Monitora usuários *reais* em tempo real — ideal para entender comportamento e performance real do usuário final após a aplicação estar em produção
- **Synthetic Monitoring:** Usa scripts *automatizados* para simular usuários — ideal para testes proativos antes de impactar usuários, monitoramento de disponibilidade 24/7 e validação de SLAs mesmo sem tráfego real

export type ModuleStatus = 'not_started' | 'in_progress' | 'done'

export interface Module {
  id: string
  title: string
  description: string
  docsUrl: string
  mdPath: string
  tags: string[]
}

export const MODULES: Module[] = [
  {
    id: '00',
    title: 'Guia de Preparação Oficial',
    description: 'Estrutura do exame, formato das questões, requisitos de sistema e validade da certificação.',
    docsUrl: 'https://docs.dynatrace.com/docs/get-started/dynatrace-certifications',
    mdPath: '00_exam_preparation_guide',
    tags: ['exame', 'certificação'],
  },
  {
    id: '01',
    title: 'Bem-vindo(a)',
    description: 'Objetivos do learning path, visão geral da plataforma Dynatrace e o que esperar da certificação.',
    docsUrl: 'https://docs.dynatrace.com/docs/get-started',
    mdPath: '01_bem_vindo',
    tags: ['introdução'],
  },
  {
    id: '02',
    title: 'Instructions',
    description: 'Pré-requisitos técnicos, detalhes do exame (60 + 10-15 questões), ProctorU e acessibilidade.',
    docsUrl: 'https://docs.dynatrace.com/docs/get-started/dynatrace-certifications',
    mdPath: '02_instructions',
    tags: ['exame', 'proctoring'],
  },
  {
    id: '03',
    title: 'The Dynatrace Platform',
    description: 'Quatro pilares da plataforma: Observability, Security, Automation e Integration. Navegação na UI.',
    docsUrl: 'https://docs.dynatrace.com/docs/get-started/dynatrace-overview',
    mdPath: '03_dynatrace_platform',
    tags: ['plataforma', 'pilares'],
  },
  {
    id: '04',
    title: 'Monitoring & Infrastructure Observability',
    description: 'OneAgent, descoberta automática, métricas, logs e traces de todas as camadas de infraestrutura.',
    docsUrl: 'https://docs.dynatrace.com/docs/observe/infrastructure-monitoring',
    mdPath: '04_monitoring_infrastructure_observability',
    tags: ['infraestrutura', 'oneagent', 'kubernetes'],
  },
  {
    id: '05',
    title: 'Notebooks & Dashboards',
    description: 'Notebooks para exploração ad-hoc vs Dashboards para monitoramento contínuo. Integração com DQL.',
    docsUrl: 'https://docs.dynatrace.com/docs/observe/dashboards-and-notebooks',
    mdPath: '05_notebooks_dashboards',
    tags: ['notebooks', 'dashboards', 'dql'],
  },
  {
    id: '06',
    title: 'Business Analytics & DEM',
    description: 'Business Events, Digital Experience Monitoring, RUM e Synthetic Monitoring.',
    docsUrl: 'https://docs.dynatrace.com/docs/observe/digital-experience',
    mdPath: '06_business_analytics_dem',
    tags: ['rum', 'synthetic', 'business events', 'dem'],
  },
  {
    id: '07',
    title: 'Data, Reporting & Analysis',
    description: 'Davis AI, Dashboard Reports, User Analytics, Session Segmentation e métricas Grail vs Classic.',
    docsUrl: 'https://docs.dynatrace.com/docs/observe/davis-ai',
    mdPath: '07_data_reporting_analysis',
    tags: ['davis ai', 'relatórios', 'análise', 'grail'],
  },
  {
    id: '08',
    title: 'DQL',
    description: 'Dynatrace Query Language: sintaxe, comandos fetch, filtros, agregações e casos de uso no Grail.',
    docsUrl: 'https://docs.dynatrace.com/docs/discover-dynatrace/references/dynatrace-query-language',
    mdPath: '08_dql',
    tags: ['dql', 'grail', 'queries'],
  },
  {
    id: '09',
    title: 'Security',
    description: 'Vulnerabilidades de terceiros, Davis Security Advisor, vulnerabilidades de código e Security Investigator.',
    docsUrl: 'https://docs.dynatrace.com/docs/secure/application-security',
    mdPath: '09_security',
    tags: ['segurança', 'vulnerabilidades', 'davis security'],
  },
  {
    id: '10',
    title: 'Automation',
    description: 'AutomationEngine, Workflows no-code/low-code, detecção de anomalias e otimização automática.',
    docsUrl: 'https://docs.dynatrace.com/docs/deliver/workflow-automation',
    mdPath: '10_automation',
    tags: ['automação', 'workflows', 'automationengine'],
  },
  {
    id: '11',
    title: 'Ingestion',
    description: 'Ingestão de métricas, logs e traces. OneAgent, Logs API, integrações cloud e VMware.',
    docsUrl: 'https://docs.dynatrace.com/docs/ingest-from',
    mdPath: '11_ingestion',
    tags: ['ingestão', 'logs', 'oneagent', 'cloud'],
  },
  {
    id: '12',
    title: 'Other: Topology, Logs & Hub',
    description: 'Smartscape, Log Management & Analytics, Dynatrace Hub e tipos de entidades monitoradas.',
    docsUrl: 'https://docs.dynatrace.com/docs/observe/smartscape',
    mdPath: '12_other',
    tags: ['smartscape', 'logs', 'hub', 'topologia'],
  },
]

# Dynatrace Certified Associate (DCA) — Guia de Estudos

Guia de estudos construído a partir do treinamento oficial da **Dynatrace University**, organizado por módulos conforme a estrutura do curso.

## Web App (React)

O diretório `app/` contém uma aplicação web interativa com:
- Navegação pelos 13 módulos com rastreamento de progresso
- Visualização dos módulos em markdown
- Flashcards com flip 3D (Acertei / Errei)
- Geração de flashcards via **Gemini AI** a partir da documentação oficial

### Rodando localmente

```bash
cd app
cp .env.example .env        # adicione sua Gemini API key
npm install
npm run dev
```

### Deploy no GitHub Pages

1. Crie um repositório no GitHub e faça push desta pasta
2. Em **Settings → Secrets → Actions**, adicione o secret `VITE_GEMINI_API_KEY` com sua chave
3. Em **Settings → Pages**, selecione **GitHub Actions** como source
4. O deploy acontece automaticamente a cada push na branch `main`

> O arquivo `app/.env` está no `.gitignore` e **nunca será commitado**.

---

## Sobre a Certificação

A **Dynatrace Certified Associate (DCA)** valida conhecimentos fundamentais sobre a plataforma Dynatrace, cobrindo monitoramento de aplicações, infraestrutura, análise de problemas e uso das ferramentas nativas.

---

## Módulos

> O índice abaixo é atualizado a cada novo módulo inserido.

| # | Módulo | Status |
|---|--------|--------|
| 0 | [Guia de Preparação Oficial](modules/00_exam_preparation_guide.md) | ✅ Completo |
| 1 | [Bem-vindo(a)](modules/01_bem_vindo.md) | ✅ Completo |
| 2 | [Instructions](modules/02_instructions.md) | ✅ Completo |
| 3 | [The Dynatrace Platform](modules/03_dynatrace_platform.md) | ✅ Completo |
| 4 | [Monitoring & Infrastructure Observability](modules/04_monitoring_infrastructure_observability.md) | ✅ Completo |
| 5 | [Notebooks & Dashboards](modules/05_notebooks_dashboards.md) | ✅ Completo |
| 6 | [Business Analytics and DEM](modules/06_business_analytics_dem.md) | ✅ Completo |
| 7 | [Data, Reporting & Analysis](modules/07_data_reporting_analysis.md) | ✅ Completo |
| 8 | [DQL (Dynatrace Query Language)](modules/08_dql.md) | ✅ Completo |
| 9 | [Security](modules/09_security.md) | ✅ Completo |
| 10 | [Automation](modules/10_automation.md) | ✅ Completo |
| 11 | [Ingestion](modules/11_ingestion.md) | ✅ Completo |
| 12 | [Other — Topology, Logs & Hub](modules/12_other.md) | ✅ Completo |

---

## Materiais de Revisão

| Material | Descrição |
|----------|-----------|
| [Glossário de Termos](glossario.md) | Todos os termos-chave em ordem alfabética com definições |
| [DQL Cheat Sheet](dql_cheat_sheet.md) | Referência rápida de DQL — comandos, filtros, exemplos (open book) |
| [Checklist de Revisão](checklist_revisao.md) | Acompanhe seu progresso por tópico do exame |
| [Simulado](simulado.md) | 60 questões escritas + 10 práticas no formato do exame real |

## Materiais Locais

| Tipo | Arquivo |
|------|---------|
| Vídeo | [Caminho de Aprendizagem para Certificação de Associado.mp4](Vídeos/Caminho%20de%20Aprendizagem%20para%20Certificação%20de%20Associado.mp4) |

## Recursos Oficiais

| Recurso | Link |
|---------|------|
| Dynatrace University | [university.dynatrace.com](https://university.dynatrace.com) |
| Documentação Oficial | [docs.dynatrace.com](https://docs.dynatrace.com) |
| Dynatrace Hub | [dynatrace.com/hub](https://www.dynatrace.com/hub/) |
| Dynatrace Community | [community.dynatrace.com](https://community.dynatrace.com) |
| Dynatrace Support Center | [support.dynatrace.com](https://support.dynatrace.com/) |

# Auditoria do site: THGO Plus

**URL:** https://www.thgoplus.com.br/ (o domínio sem www redireciona por HTTP 301).  
**Data:** 2026-11-10, America/Sao_Paulo.  
**Estado:** baseline parcial, com inspeção HTTP/HTML concluída; inspeção visual e medições de performance pendentes.  
**Escopo:** home, Empresa, Serviços, Clientes, Testemunhos, Contato, Blog, Política de Privacidade e Termos de Uso. As nove URLs responderam HTTP 200. Também foram consultados robots.txt e sitemap.xml, sem acesso administrativo.  
**Ferramentas:** curl, parser HTML em Python e Playwright instalado; tentativas com Chromium e Firefox. Nenhum formulário foi enviado, contato iniciado ou conteúdo do site alterado.

**Limitações:** Chromium e Firefox encerraram com SIGABRT antes de abrir uma página. Portanto não existem capturas válidas, DOM renderizado, teste de menus, teclado, foco, nomes acessíveis calculados, console, recursos de rede em runtime ou responsividade verificada. Viewports previstos: desktop **1440 × 900** e mobile **390 × 844**, ambos **não executados**. PageSpeed Insights retornou HTTP 429 por cota nos dois dispositivos. Não há conclusão de conformidade WCAG, ranking, receita ou taxa de conversão. RTK.md, referenciado nas instruções recebidas, não foi localizado no projeto nem nos ancestrais consultados.

## Resumo executivo

O conteúdo apresenta claramente a atuação em consultoria, mentoria, vendas e governança para empresas. A página Empresa documenta a trajetória da fundadora; Testemunhos oferece relatos atribuídos a pessoas e organizações; os serviços possuem descrições que ajudam a entender o escopo da contratação. O acesso HTTP às páginas da amostra funcionou.

A base técnica contém problemas concretos: todas as páginas testadas declaram `user-scalable=no`, não têm meta description nem landmark principal no HTML entregue, e referenciam favicons em localhost. A home não possui H1. O contato oferece telefone e e-mail em texto, mas sem os respectivos links diretos. A prioridade é remover a restrição de zoom e melhorar estrutura semântica e contato; performance e aparência devem ser avaliadas em navegador funcional antes de decidir sobre redesign ou otimizações de recursos.

Não foram classificados achados High: não há evidência suficiente de tarefa importante bloqueada na página renderizada. Medium indica fricção ou exclusão relevante; Low indica problema pontual ou polimento.

## Tecnologias identificadas

| Categoria | Tecnologia | Evidência e URL | Confiança e limitações |
|---|---|---|---|
| CMS | WordPress | Header `x-redirect-by: WordPress` no domínio sem www; links `api.w.org`, `/wp-json/` e recursos `/wp-includes/` no HTML da home | Confirmado por sinais independentes; versão do núcleo não determinada |
| Tema | Bridge | Recursos da home em `https://www.thgoplus.com.br/wp-content/themes/bridge/style.css` e `/themes/bridge/css/stylesheet.min.css` | Confirmado como tema/recurso entregue, versão não determinada |
| Construtor de páginas | WPBakery Page Builder | Meta generator explícita na home e `/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=8.3` | Confirmado; `8.3` é versão declarada no parâmetro do recurso, não uma validação da instalação |
| Biblioteca frontend | jQuery | `https://www.thgoplus.com.br/wp-includes/js/jquery/jquery.min.js?ver=3.7.1` | Referência confirmada; execução e versão interna do arquivo não verificadas |
| Consentimento | Complianz | `/wp-content/plugins/complianz-gdpr/` e marcação `cmplz-cookiebanner` | Confirmado no HTML; comportamento e bloqueio de cookies não testados |
| Formulário | Ninja Forms | Contêiner `nf-form-2-cont` e referências a Ninja Forms em Contato | Identificação provável; renderização e envio não verificados |
| Contato flutuante | Joinchat | `/wp-content/plugins/creame-whatsapp-me/public/css/joinchat.min.css?ver=5.2.3` e texto WhatsApp | Recurso confirmado; abertura e destino não testados |
| Servidor HTTP | Apache | Header `server: Apache` da home | Header observado; não identifica empresa de hospedagem nem arquitetura interna |
| Framework de aplicação frontend | Não determinado | Não foi reunida evidência suficiente para identificar React, Vue ou outro framework | Não presumir ausência de framework pela ausência de assinatura |

## Performance

URL solicitada ao PageSpeed: `https://www.thgoplus.com.br/`, em 2026-11-10, estratégias mobile e desktop, categorias performance, accessibility, best-practices e seo.

| Dispositivo | Lighthouse (quatro categorias) | LCP | TBT | CLS | Tipo de dado |
|---|---|---|---|---|---|
| Mobile | Não disponível — HTTP 429 | Não medido | Não medido | Não medido | Nenhum resultado de laboratório |
| Desktop | Não disponível — HTTP 429 | Não medido | Não medido | Não medido | Nenhum resultado de laboratório |

**CrUX:** existência de dados de campo não verificada. A falha de cota não demonstra ausência de CrUX. As respostas originais estão em [mobile](evidencias-2026-11-10/psi-mobile.json) e [desktop](evidencias-2026-11-10/psi-desktop.json).

A home referencia 38 scripts externos e 19 folhas de estilo no HTML. É um inventário de tags, não de transferências reais ou recursos únicos, e não demonstra lentidão. Recomenda-se medir bytes, cache, bloqueio de renderização e recursos não utilizados antes de remover plugins ou alterar carregamento. Sem Lighthouse, nenhuma oportunidade foi quantificada.

## Achados prioritários

### Medium — Restrição explícita de zoom em toda a amostra

- **Evidência:** as nove páginas contêm `<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">`. Ver [resumo técnico](evidencias-2026-11-10/summary.json).
- **Impacto:** pede ao navegador que restrinja ampliação, podendo prejudicar pessoas com baixa visão nos navegadores que respeitam a diretiva. O comportamento efetivo não foi testado.
- **Recomendação:** remover `user-scalable=no`; validar zoom de 200% e reflow equivalente a 320 CSS px, incluindo menu, consentimento e contato.
- **Prioridade:** Medium por potencial exclusão em uma função básica de leitura.

### Medium — Estrutura principal de leitura incompleta

- **Evidência:** nenhum `<main>` ou `role="main"` nas nove respostas HTML. A home não tem H1; em Serviços há H1 seguido de H3 e dois H3 vazios. Arquivos [home](evidencias-2026-11-10/home.html) e [serviços](evidencias-2026-11-10/servicos.html).
- **Impacto:** estrutura menos útil para navegação por landmarks e títulos em tecnologias assistivas. A apresentação visual e a árvore de acessibilidade final não foram examinadas.
- **Recomendação:** criar um landmark principal; dar à home H1 que expresse sua proposta; organizar serviços em H2 e subtópicos em H3; remover títulos vazios. Rever o H5 de contato no rodapé e o H3 “Publicações” que antecede o conteúdo no código.
- **Prioridade:** Medium por afetar orientação e navegação da amostra.

### Medium — Telefone e e-mail exigem ação manual

- **Evidência:** o HTML de [Contato](evidencias-2026-11-10/contato.html) fornece telefone `55 11 4116-0221` e `contato@thgoplus.com.br`, mas não contém links `tel:` ou `mailto:`. O mesmo ocorre no rodapé da home.
- **Impacto:** o visitante pode precisar copiar ou digitar os contatos. Não foi possível verificar eventual detecção automática do navegador ou o componente de WhatsApp.
- **Recomendação:** criar links explícitos com nomes claros, por exemplo `tel:+551141160221` e `mailto:contato@thgoplus.com.br`, e validar os destinos do WhatsApp.
- **Prioridade:** Medium por fricção direta na jornada de contratação.

### Medium — Falta de meta description nas nove páginas

- **Evidência:** nenhuma tag `meta name="description"` nos HTML coletados; canonicals existem nas páginas examinadas.
- **Impacto:** perde-se controle editorial sobre a descrição sugerida aos buscadores. Isso não comprova queda de ranking; o buscador pode gerar seu próprio trecho.
- **Recomendação:** escrever descrições específicas para cada página, começando por home, Serviços e Contato, explicando público, oferta e próximo passo.
- **Prioridade:** Medium por abranger páginas centrais de descoberta e decisão.

### Low — Favicons apontam para localhost

- **Evidência:** duas referências por página a `https://localhost/thgo-plus/wp-content/uploads/2019/02/favicon.png`, incluindo na [home](evidencias-2026-11-10/home.html).
- **Impacto:** o endereço aponta para o computador do visitante, não para o site público. É uma configuração de recurso inválida para produção; a falha de carregamento não foi capturada em navegador.
- **Recomendação:** substituir pelos recursos HTTPS no domínio público e verificar os ícones nas diferentes plataformas.
- **Prioridade:** Low, pois o recurso identificado é o favicon, sem evidência de bloqueio de conteúdo ou contratação.

### Low — Revisão editorial e informações de atualização

- **Evidência:** título da home contém “Consleho Consultivo”; texto de livros contém “Alta Perfromance”; rodapé traz `© 2020`. Fonte: [home](evidencias-2026-11-10/home.html).
- **Impacto:** erros pontuais podem enfraquecer percepção de cuidado. A data do copyright não demonstra abandono: o blog também apresenta artigos sobre 2026.
- **Recomendação:** corrigir grafia e revisar títulos, chamadas e datas de manutenção com o responsável pelo conteúdo.
- **Prioridade:** Low por ser polimento editorial localizado.

## Pontos fortes

- Nove páginas essenciais acessíveis por HTTP 200; domínio sem www converge para o domínio canônico.
- `lang="pt-BR"` presente nas nove páginas; canonicals individuais observados na amostra.
- Navegação no HTML aponta para Empresa, Serviços, Clientes, Testemunhos, Publicações, Vagas e Contato.
- Serviços descreve modalidades de atendimento, incluindo conselho consultivo, mentoria e assessoria à LGPD; Empresa contextualiza fundação e trajetória da fundadora.
- Testemunhos contém relatos atribuídos a pessoas e organizações. São declarações publicadas pelo site, sem validação externa nesta auditoria.
- Contato publica horário, telefone, e-mail e endereço de contato sobre privacidade. Termos e Política de Privacidade estão acessíveis; sua adequação jurídica não foi avaliada.
- robots.txt declara sitemaps, permite rastreamento público e restringe `/wp-admin/`; sitemap.xml respondeu HTTP 200. Não foi realizada validação completa das URLs do sitemap.
- Todas as imagens da amostra têm atributo `alt`; há valores vazios (20 de 29 imagens em Empresa e 10 de 16 no Blog). Isso exige revisão contextual: imagem decorativa pode ter alt vazio corretamente; imagem informativa deve ter alternativa útil. Não há conclusão de qualidade das alternativas sem inspeção visual.

## Evidências visuais

**Nenhuma captura foi produzida com sucesso.** Não há imagem de desktop ou mobile a incorporar. Os logs [Chromium](evidencias-2026-11-10/browser-launch.log) e [Firefox](evidencias-2026-11-10/firefox-launch.log) registram as falhas. A ausência de capturas limita a auditoria; os arquivos HTML não substituem evidência visual.

## Validações pendentes para concluir a baseline

| Verificação | Estado e condição de conclusão |
|---|---|
| Desktop 1440 × 900 e mobile 390 × 844 | Capturar viewport e página completa de home, Serviços e Contato; demais páginas conforme particularidades |
| Menu, submenus, links internos e âncoras | Exercitar com mouse, toque e teclado, sem enviar formulários |
| Foco, ordem de tabulação e nomes acessíveis | Inspecionar DOM renderizado, árvore de acessibilidade e visibilidade do foco |
| Contraste | Medir cores computadas e fundo efetivo, registrar pares e razões; comparar com 4,5:1 para texto comum, 3:1 para texto grande e 3:1 para componentes aplicáveis. Nenhum par foi medido nesta execução |
| Reflow, zoom e movimento reduzido | Testar zoom, overflow horizontal e `prefers-reduced-motion`, incluindo carrosséis e contadores |
| Formulário | Verificar campos, labels, obrigatoriedade e mensagens sem envio; o HTML inicial depende de JavaScript e não permite concluir que o formulário funciona ou falha |
| Contador de satisfação | HTML inicial contém `0%`; verificar valor final após animação antes de tratar como erro público |
| Consentimento e WhatsApp | Verificar sobreposição, controles, teclado e destinos; placeholders no HTML do plugin não comprovam texto incorreto renderizado |
| Performance | Reexecutar PageSpeed nas duas estratégias com cota disponível; registrar ambiente, data, quatro scores, LCP/TBT/CLS e estado do CrUX separadamente |

## Inventário de evidências e reprodução

Pasta: [evidencias-2026-11-10](evidencias-2026-11-10/).

- `home`, `a-empresa`, `servicos`, `clientes`, `testemunhos`, `contato`, `blog`, `politica-privacidade`, `termos-de-uso`: pares `.html` (resposta) e `.json` (tags e texto extraídos). Cada JSON registra URL e status HTTP. Headers nesses JSON estão vazios; os cabeçalhos reais da home estão em `home-headers.txt`.
- `summary.json`: matriz de H1, meta description, landmark principal, viewport e referências localhost.
- `robots.txt` e `sitemap.xml`: respostas públicas preservadas.
- `psi-mobile.json`, `psi-desktop.json`: erros originais do PageSpeed, sem métricas.
- `browser-launch.log`, `firefox-launch.log`: evidências dos bloqueios de execução visual.
- `collect.py`: coletor somente leitura; executar com `python3 auditorias/evidencias-2026-11-10/collect.py`. Uma nova execução sobrescreve os HTML/JSON daquela pasta; para comparação futura usar outra pasta datada.

Este documento permite comparar a estrutura e o conteúdo observados nesta data. Não constitui baseline visual ou de desempenho concluída.

## Reteste após instalação local do Playwright — 2026-11-10

A instalação local foi confirmada: `playwright` e `@playwright/test` são resolvidos em `node_modules` do projeto, com `@playwright/test` declarado em `^1.65.0`. O Chromium esperado agora foi localizado em `chromium_headless_shell-1254`, eliminando o erro anterior de executável ausente.

A nova tentativa usou `require('playwright').chromium.launch()` com viewport planejado de 1440 × 900. O processo encerrou antes de criar a página, com erro fatal `bootstrap_check_in … MachPortRendezvousServer … Permission denied (1100)`. Isso indica bloqueio de permissão na inicialização do navegador neste ambiente de execução, e não falta de instalação ou falha do site. O ambiente atual não permite solicitar execução fora das restrições.

Evidência: [log integral do reteste](evidencias-2026-11-10/reteste-playwright.log). Nenhuma captura foi gerada e nenhuma interação ou medição visual foi concluída; as limitações anteriores permanecem. O PageSpeed não foi reexecutado neste reteste de instalação do navegador.

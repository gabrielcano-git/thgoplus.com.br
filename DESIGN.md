# Design — THGO Plus

Referência: [thgoplus.com.br](https://thgoplus.com.br/)  
Levantamento: 10 de novembro de 2026.

## Objetivo e escopo

Este documento registra a identidade e os padrões de interface encontrados na página inicial do site da THGO Plus, para orientar a criação e a manutenção de páginas coerentes com a marca.

A análise foi feita sobre o HTML público e as folhas de estilo carregadas pelo site. Os valores marcados como **observados** foram extraídos dessas fontes. Orientações para evolução estão identificadas como **recomendações**. Não houve validação por captura de tela ou navegação interativa, pois o navegador estava indisponível; dimensões finais, recortes e comportamento em execução precisam de conferência visual. As páginas internas não foram inspecionadas individualmente.

## Direção visual

A THGO Plus se apresenta como uma consultoria empresarial especializada em mentoria, vendas, estruturação de negócios e governança corporativa. A linguagem da interface deve transmitir clareza, experiência e proximidade profissional.

A composição encontrada combina:

- Azul institucional em títulos, navegação e botões.
- Laranja como destaque de interação e chamada para contato.
- Fundos brancos e cinza muito claro.
- Títulos leves e amplos, com textos de apoio discretos.
- Fotografias em banners e blocos institucionais.
- Seções com bastante espaço vertical, intercaladas por faixas de destaque.

**Recomendação:** manter essa direção institucional, com hierarquia tipográfica clara e decoração contida. Evitar acrescentar gradientes, sombras fortes ou outras cores de destaque sem uma necessidade de comunicação.

## Paleta de cores

Valores observados no CSS personalizado e no HTML da home:

| Papel | Cor | Aplicação encontrada |
| --- | --- | --- |
| Azul institucional | `#0E476D` | Títulos, navegação, botões e fundo de submenus |
| Laranja de destaque | `#E75012` | Hover, item ativo, seleção de texto e faixa de contato |
| Branco | `#FFFFFF` | Fundo principal, texto dos botões e dos submenus |
| Cinza de superfície | `#F6F6F6` | Rodapé superior e fundo de seção |
| Texto escuro | `#292929` | Títulos do banner, títulos do rodapé e links do rodapé |
| Texto secundário | `#777777` | Parágrafos e informações auxiliares |
| Cinza de indicador | `#AAABAD` | Indicadores inativos do carrossel |

A cor predominante de ação é o azul. O laranja marca mudanças de estado e a chamada final. Os presets genéricos do WordPress presentes no HTML não constituem a paleta da marca.

## Tipografia

Famílias observadas: **Raleway** para títulos e **Hind Siliguri** para corpo, navegação e controles. Ambas usam `sans-serif` como fallback.

| Elemento | Família | Tamanho / entrelinha | Peso | Cor |
| --- | --- | --- | --- | --- |
| Título do slide | Raleway | 80 / 60 px | 500 | `#292929` |
| Apoio do slide | Hind Siliguri | 28 / 40 px | 300 | `#292929` |
| Título de página `.title h1` | Raleway | 55 / 50 px | 400 | Azul |
| Título de seção `h2` | Raleway | 33 / 45 px | 300 | Azul |
| Subtítulo `h3` | Raleway | 25 / 30 px | 300 | Azul |
| `h5` padrão | Hind Siliguri | 15 / 26 px | 300 | Azul |
| Parágrafo | Hind Siliguri | 15 / 25 px | 300 | `#777777` |
| Menu desktop | Hind Siliguri | 16 / 25 px | 600 | Azul |
| Menu mobile | Hind Siliguri | 15 / 25 px | 500 | `#292929` |
| Botão padrão | Hind Siliguri | 15 / 55 px | 500 | Branco |

Os títulos e botões usam predominantemente capitalização natural, sem transformação para caixa alta. O espaçamento entre letras é de `0px` nas regras personalizadas citadas.

**Recomendações para evolução:**

- Ajustar títulos longos de forma fluida no celular; os 80 px do banner são uma declaração de origem, não uma medida universal.
- Rever a entrelinha de 60 px para títulos de 80 px quando houver quebra em mais de uma linha.
- Preservar a distinção entre Raleway nos títulos e Hind Siliguri no texto.
- Validar legibilidade do peso 300 e contraste em cada combinação de fundo e texto.

## Estrutura da página inicial

Sequência observada no HTML:

1. **Cabeçalho:** logotipo, navegação principal e submenus.
2. **Banner principal:** carrossel com três temas — Conselho Consultivo, Gestão e Estruturação de Negócios e Mentoria em Vendas.
3. **Apresentação de soluções:** quatro blocos textuais sobre conselho consultivo, estruturação do negócio, vendas e novos negócios.
4. **Faixa institucional com indicadores:** proposta de valor, satisfação dos clientes e contadores.
5. **Três blocos de encaminhamento:** Sobre Nós, Serviços e Fale Conosco, com imagens, texto e botão.
6. **Coautorias:** apresentação dos livros e informações para contato.
7. **Chamada final:** “Fale conosco agora mesmo!” e botão “Contato”.
8. **Rodapé:** marca, proposta de valor, contato, links legais e créditos.

Os números presentes no HTML e os valores iniciais de animações não devem ser interpretados como métricas atuais verificadas da empresa.

## Layout e espaçamento

### Padrões observados

- Uso de seções de largura total e conteúdo organizado em áreas de grade (`grid_section`).
- Bloco de encaminhamento em três colunas no HTML, usando a grade do WPBakery.
- Seções principais com padding superior de `120px` e inferior entre `70px` e `79px` nas classes personalizadas da home.
- Uma seção com padding superior de `40px` e fundo `#F6F6F6`.
- Chamada final com `40px` de padding superior e inferior.
- Rodapé superior com padding de `60px 70px 60px 35px`.
- Rodapé inferior branco, com `10px` no topo e `10px` na base definidos em seus respectivos contêineres.

A largura final dos contêineres e os espaçamentos herdados do tema não foram medidos em execução.

### Recomendações

- Alinhar títulos, parágrafos e botões ao mesmo eixo dentro de cada bloco.
- Manter o ritmo de seções amplas no desktop e reduzir o espaço vertical no celular.
- Empilhar colunas na ordem de leitura quando o espaço horizontal for insuficiente.
- Evitar alturas fixas em blocos de texto e preservar espaço para títulos longos.

## Componentes

### Cabeçalho e navegação

O CSS define fundo transparente para o cabeçalho inicial e fundo branco para o estado de rolagem. No estado `.scrolled`, a área do logotipo e a entrelinha dos links usam `70px`. A confirmação do acionamento desse estado depende de teste em navegador.

Os links são azuis, com hover e estado ativo em laranja. O padding personalizado dos itens desktop é de `4px 12px`. Os submenus têm fundo azul e texto branco, com hover laranja.

A navegação contém Home, Empresa, Serviços, Clientes, Publicações, Vagas e Contato. Testemunhos está subordinado a Clientes; Blog, Mídia e Palestras e Eventos estão subordinados a Publicações.

### Logotipo

O HTML referencia a versão comemorativa `10-Anos.png` como logotipo normal e mobile. As variantes light, dark e sticky apontam para `logo.png` de 2019.

**Recomendação:** confirmar qual versão deve ser utilizada em novas páginas. Preservar proporção, legibilidade e área livre ao redor da marca; não recriar o logotipo com texto ou ícones.

### Botões

| Propriedade | Padrão observado |
| --- | --- |
| Fundo | Azul `#0E476D` |
| Texto | Branco, Hind Siliguri, 15 px, peso 500 |
| Altura padrão | 55 px |
| Padding horizontal | 33 px |
| Raio | 4 px |
| Borda | 0 px |
| Hover | Fundo laranja `#E75012`, texto branco |
| Variante pequena | 45 px de altura, padding horizontal de 30 px |

Rótulos encontrados: “Veja Mais” e “Contato”. **Recomendação:** em novos blocos, preferir rótulos que identifiquem o destino quando o contexto não for suficiente. Garantir foco visível por teclado.

### Carrossel principal

O HTML configura um carrossel de tela cheia, com início automático, intervalo declarado de `6000ms` e parallax habilitado. As imagens são aplicadas como fundos e também aparecem em elementos de imagem.

Os indicadores são círculos de `10px`, cinza quando inativos e azuis quando ativos. As setas têm ícones de `35px`, azuis, com hover laranja. O CSS declara contêineres visuais das setas com largura e altura zero; isso não comprova a área de clique final.

**Recomendação:** oferecer pausa, operação por teclado, nomes acessíveis para os controles e respeito a `prefers-reduced-motion`. Validar recorte das fotos e contraste do texto em cada slide.

### Blocos com imagem

Sobre Nós, Serviços e Fale Conosco usam imagens de origem com `600 × 395px`, seguidas de conteúdo e ação. A proporção de referência é aproximadamente `1,52:1`.

**Recomendação:** manter proporção consistente entre imagens da mesma linha e evitar sombras ou bordas que concorram com a fotografia.

### Indicadores e faixa institucional

A faixa utiliza a imagem `parlax-azul.jpg`. Os contadores têm texto branco, Hind Siliguri de `33px`, peso 300; as legendas usam `15px`, também brancas. A intenção é destacar experiência e abrangência de atendimento.

**Recomendação:** apresentar valores finais legíveis mesmo sem animação e publicar apenas números confirmados pelo responsável pelo conteúdo.

### Contato, consentimento e rodapé

A chamada final usa fundo laranja e texto com tamanho declarado de `25px`, peso 300. O site inclui WhatsApp flutuante via Joinchat e gerenciamento de cookies via Complianz.

O rodapé superior usa cinza claro, textos secundários cinza e títulos escuros. Os títulos do rodapé recebem Hind Siliguri de `25px / 30px`, peso 300, por sobrescrita inline.

**Recomendação:** garantir que WhatsApp e consentimento não cubram conteúdo ou controles em telas pequenas. Manter links legais acessíveis e conferir dados de contato antes de reutilizá-los.

## Imagens e ativos de referência

URLs encontradas na home, relativas a `https://www.thgoplus.com.br/wp-content/uploads/`:

| Ativo | Caminho |
| --- | --- |
| Marca comemorativa | `2025/01/10-Anos.png` |
| Marca base | `2019/02/logo.png` |
| Conselho Consultivo | `2019/03/banner5.jpg` |
| Gestão e Estruturação | `2016/07/home-slide-2.jpg` |
| Mentoria em Vendas | `2016/07/home-slide-3.jpg` |
| Imagem institucional | `2019/02/img2.jpg` |
| Blocos de encaminhamento | `2016/07/home-image-2.jpg`, `home-image-3.jpg`, `home-image-4.jpg` |
| Fundo da faixa de indicadores | `2019/02/parlax-azul.jpg` |
| Coautorias | `2020/02/livro-thgo-plus.jpg` |

Os caminhos registram os ativos existentes; não houve avaliação visual individual dessas imagens nem verificação de direitos de reutilização.

## Responsividade

Regras personalizadas observadas:

- Até `1000px`: fundo do cabeçalho passa a branco.
- Até `480px`: logotipo recebe altura declarada de `80px`.
- Até `480px`: padding lateral do rodapé de largura total passa a `10px`.
- Seções parallax recebem altura automática e mínimo de `400px` nas faixas móveis declaradas pelo CSS.

Esses pontos não representam um mapa completo dos breakpoints do tema. **Recomendação:** conferir a página em 360, 390, 768, 1024 e 1440 px, validando menu, textos longos, recortes, ordem das colunas e ausência de rolagem horizontal.

## Tokens para implementação

Nomes propostos a partir dos valores observados; não são variáveis existentes no site.

```css
:root {
  --color-brand: #0e476d;
  --color-accent: #e75012;
  --color-background: #ffffff;
  --color-surface: #f6f6f6;
  --color-text-strong: #292929;
  --color-text-muted: #777777;
  --color-indicator: #aaabad;
  --font-heading: 'Raleway', sans-serif;
  --font-body: 'Hind Siliguri', sans-serif;
  --button-radius: 4px;
  --button-height: 55px;
  --button-height-small: 45px;
}
```

## Critérios para novas telas

- Reutilizar azul, laranja e superfícies neutras nos papéis descritos.
- Manter as duas famílias tipográficas e a capitalização natural.
- Organizar cada seção em título, explicação e ação contextual.
- Preservar o espaço em branco e a hierarquia entre conteúdo e fotografia.
- Garantir contraste, foco visível, zoom e leitura em telas pequenas.
- Tratar correções de acessibilidade como evolução: o HTML atual inclui `user-scalable=no`, que não deve ser reproduzido.
- Validar visualmente desktop e celular antes de considerar uma implementação fiel.

## Fontes técnicas

- [Página inicial](https://www.thgoplus.com.br/): estrutura, conteúdo, estilos inline e referências de imagens.
- [CSS dinâmico do tema](https://www.thgoplus.com.br/wp-content/themes/bridge/css/style_dynamic.css): paleta, tipografia e componentes.
- [CSS dinâmico responsivo](https://www.thgoplus.com.br/wp-content/themes/bridge/css/style_dynamic_responsive.css): ajustes por largura.

A implementação de origem usa WordPress, tema Bridge/Qode e WPBakery. Este guia descreve a identidade encontrada sem exigir a adoção dessas ferramentas.

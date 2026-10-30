# Portfólio — Luiz Felipe

Site pessoal de uma página: apresentação, projeto em destaque e contato.

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `index.html` | Estrutura das três seções (Sobre, Projeto, Contato) |
| `style.css` | Tema escuro, grade animada, blobs de luz, responsivo |
| `script.js` | Texto digitado, contadores, menu do celular, seção ativa |
| `guiche-hospitalar.png` | Imagem do Sistema de TV \| Guichê |
| `favicon.svg` / `favicon-32.png` / `favicon.ico` / `favicon-180.png` | Ícone "LZ" da aba do navegador |

## Como abrir

Dê dois cliques em `index.html`, ou rode um servidor local:

```bash
python3 -m http.server 8080
# depois abra http://localhost:8080
```

## Visual

- Fundo escuro com grade em movimento e duas manchas de luz (ciano e azul).
- Menu flutuante que fica sólido ao rolar e acende a seção em que você está.
- Menu próprio para celular (três riscos).
- Fontes: Space Grotesk (títulos) e DM Sans (texto).
- Bibliotecas: Animate.css, AOS (elementos entram conforme a página desce) e Remix Icon.
- Respeita "menos movimento" do sistema (`prefers-reduced-motion`).

## Conteúdo que precisa da sua conferência

- Os números "10+ projetos", "100% responsivo" e "24h resposta" são exemplos — troque pelos reais.
- A lista de recursos do Guichê (alerta sonoro, histórico, tela grande, responsivo) foi deduzida da imagem.
- O link do GitHub ainda aponta para `https://github.com/`. Troque pelo seu perfil.
- Fontes e bibliotecas vêm da internet: sem conexão, o site abre com visual simples.

## Observações

- O nome "Luiz Felipe" é estático, sem animação.
- Não há logo/monograma dentro da página — o "LZ" aparece só na aba do navegador.
- Não há seção de serviços.

# Portfólio — Antonio Átila Menezes Ferreira

Site estático (HTML, CSS e JavaScript puro) com foco em **Programação · Automação · Escrita técnica**.
Visual moderno, responsivo e otimizado para abertura via **QR Code no currículo** (excelente em celular).

## Arquivos

```text
portfolio-atila-minimalista/
├── index.html        # conteúdo do site
├── style.css         # design system / estilos
├── script.js         # menu, scroll-reveal e contador animado
├── README.md
└── assets/
    ├── atila.jpg       # foto (hero)
    ├── atila-mini.jpg  # foto pequena (topo)
    └── favicon.svg
```

## Conteúdo já preenchido

- Posicionamento: Programação, Automação (Linux/Shell Script), dados e escrita técnica.
- Contatos reais: WhatsApp **(85) 99414-2706**, e-mail **atilaferreira243@gmail.com**, Lattes.
- Experiência, formação, competências, projetos e artigos do currículo mais atual.

> GitHub e LinkedIn não foram incluídos (a pedido). Para adicionar depois, basta criar
> novos botões na seção `#contato` do `index.html`.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta (incluindo `assets/`).
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione a branch `main` e a pasta `/root`.
5. Salve e aguarde o link ser gerado. Use esse link no QR Code.

Também funciona em **Netlify** e **Vercel** (arrastar a pasta) sem nenhum build.

## Gerar o QR Code

Depois de publicado, gere o QR Code apontando para o link final
(ex.: em qr-code-generator.com ou via `qrencode -o qr.png "URL"`).

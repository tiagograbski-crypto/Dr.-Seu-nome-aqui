# Assets — Imagens do site

Estrutura oficial de arquivos estáticos servidos em `/images/`.

```
public/images/
├── hero/
│   └── hero-cover.jpg          # Capa principal do hero (mobile + desktop)
├── especialista/
│   └── portrait.jpg            # Retrato da diretora clínica
└── portfolio/
    ├── 01-toxina-botulinica/
    │   ├── antes.jpg
    │   └── depois.jpg
    ├── 02-arquitetura-labial/
    │   ├── antes.jpg
    │   └── depois.jpg
    └── 03-banco-colageno/
        ├── antes.jpg
        └── depois.jpg
```

Pastas locais (não versionadas):

```
public/images/_drafts/          # Rascunhos e alternativas de fotos
```

## Convenções

| Regra | Detalhe |
|-------|---------|
| **Formato** | JPG para fotos; WebP opcional no futuro |
| **Nomenclatura** | Pastas numeradas `01-`, `02-`… + slug descritivo |
| **Antes/depois** | Sempre `antes.jpg` e `depois.jpg` dentro da pasta do procedimento |
| **Config** | Caminhos centralizados em `src/config/images.ts` |
| **Não commitar** | Rascunhos ou alternativas — use `_drafts/` local |

## Tamanhos recomendados

| Asset | Largura sugerida | Proporção |
|-------|-----------------|-----------|
| Hero background | 2000px | 16:9 ou wider |
| Portrait especialista | 1200px | 4:5 |
| Portfolio antes/depois | 800px | 3:4 |

## Referência no código

- `src/config/images.ts` — paths de todos os assets
- `src/config/site.ts` — hero e portrait via `IMAGES`
- `src/data/content.ts` — portfolio via `IMAGES.portfolio.*`

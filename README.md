# GEAGRO · Sitio web

Landing de **GEAGRO**, el software de gestión agropecuaria de la Cooperativa GENEOS (Tandil).

## Páginas

- `index.html`: página principal (portada, cómo funciona, versiones, nosotros, preguntas frecuentes, brochure y demo)
- `cereales/index.html`: GEAGRO CEREALES, software agrícola para la gestión de campos, campañas y acopio
- `vid/index.html`: GEAGRO VID, software de gestión de viñedos

## Estructura

```
assets/
  css/geagro-landing.css   estilos
  js/geagro-landing.js     menú, dropdown de versiones, FAQ y formulario de demo
  icons/                   logos, íconos y favicons
  img/web/                 fotos y fondos optimizados (jpg + webp)
  docs/Brochure-GEAGRO.pdf
robots.txt, sitemap.xml, favicon.ico
```

Es HTML, CSS y JS sin dependencias ni proceso de build: se puede publicar tal cual en cualquier hosting estático o en GitHub Pages.

## Antes de publicar

- Publicado con GitHub Pages en https://sorensenclara.github.io/geagro-web/. Si más adelante se usa un dominio propio, reemplazar esa URL en `index.html`, `cereales/index.html`, `vid/index.html`, `robots.txt` y `sitemap.xml`, y agregar el archivo `CNAME`.
- El formulario de demo hoy arma el mensaje y abre WhatsApp. Cuando exista el endpoint (Django), cambiarlo en `assets/js/geagro-landing.js`.

# GEAGRO · Sitio web

Landing de **GEAGRO**, el software de gestión agropecuaria de la Cooperativa GENEOS (Tandil).

## Páginas

- `index.html`: página principal (portada, cómo funciona, versiones, nosotros, preguntas frecuentes, brochure y demo)
- `cereales/index.html`: GEAGRO CEREALES, software agrícola para la gestión de campos, campañas y acopio
- `vid/index.html`: GEAGRO VID, software de gestión de viñedos

## Estructura

```
index.html                 página principal
cereales/index.html        GEAGRO CEREALES
vid/index.html             GEAGRO VID
campo/index.html           redirección de la dirección anterior hacia /cereales/
404.html                   página de error (GitHub Pages la usa en cualquier ruta inexistente)
robots.txt, sitemap.xml, favicon.ico

assets/
  css/geagro-landing.css   estilos (un solo archivo)
  js/geagro-landing.js     menú, dropdown de versiones, FAQ y formulario de demo
  fonts/                   Titillium Web 400/600/700 en WOFF2 (licencia SIL OFL incluida)
  docs/                    brochures: general, CEREALES y VID
  images/
    shared/                portada, CTA principal, foto de la cita, imagen para redes
    cereales/              fondo y panel de GEAGRO CEREALES, imagen para redes
    vid/                   fondo y panel de GEAGRO VID, imagen para redes
    backgrounds/           fondos de secciones y de los CTA
  icons/
    brand/                 logos e isologos (GEAGRO, CEREALES, VID, GENEOS)
    favicon/               favicons y site.webmanifest
    cereales/  vid/        íconos de módulos de cada versión
    shared/                íconos comunes
    proceso/  nosotros/    íconos de los procesos y de la sección Nosotros
```

Las imágenes de portada tienen versiones AVIF y WebP (escritorio y celular) con JPG de respaldo.
El material original (videos, fotos en alta, PNG de diseño) vive en `_originales/`, que está fuera del repositorio.

## Antes de publicar

- Publicado con GitHub Pages en https://sorensenclara.github.io/geagro-web/. Si más adelante se usa un dominio propio, reemplazar esa URL en `index.html`, `cereales/index.html`, `vid/index.html`, `robots.txt` y `sitemap.xml`, y en `404.html` y `campo/index.html` cambiar `/geagro-web/` por `/`, y agregar el archivo `CNAME`.
- El formulario de demo hoy arma el mensaje y abre WhatsApp. Cuando exista el endpoint (Django), cambiarlo en `assets/js/geagro-landing.js`.

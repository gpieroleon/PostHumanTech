# Post Human Technologies

Sitio web del estudio de desarrollo web **Post Human Technologies**.
Diseño moderno oscuro, animaciones CSS-first (patrón DANTI), multi-idioma
ES / EN / IT / PT y doble oferta: plantillas premium o desarrollo a medida.

## Estructura

```
├── index.html          # única página (secciones con anclas)
├── css/
│   └── style.css       # tema + tokens + reveals + marquee + responsive
├── js/
│   ├── i18n.js         # diccionario inline ES/EN/IT/PT (funciona en file://)
│   ├── main.js         # Lenis, reveals, contadores, menú, formulario
│   └── vendor/
│       └── lenis.min.js
└── assets/             # logos editados y favicons
```

## Cómo verlo

Abre `index.html` directamente en el navegador (todo es estático, sin build)
o sirve la carpeta:

```sh
python3 -m http.server 8080
# http://localhost:8080
```

## Idiomas

Español por defecto; conmutador ES / EN / IT / PT en la barra de navegación
y en el menú móvil. La elección persiste en `localStorage`.

## Notas

- El logo deriva del original "Post Human — Musical Production": el subtítulo
  original fue eliminado y el fondo oscuro se hizo transparente (alpha por
  luminancia). Variantes: `logo-navbar.png` (icono + POST HUMAN, sin
  subtítulo, usado en la barra), `logo-horizontal.png` (con subtítulo
  "Technology", usado en el pie) y `logo-full.png` (og:image).
- La barra de navegación es siempre transparente: única línea visible, la
  barra de progreso de scroll. El logo de la barra es `logo-navbar.png`
  (icono + POST HUMAN, sin subtítulo).
- El hero muestra un halo suave (lima → violeta) bajo el cursor del ratón,
  con inercia; solo puntero fino, se pausa fuera de pantalla y respeta
  prefers-reduced-motion.
- Animaciones detrás de `prefers-reduced-motion`; sin scroll horizontal a 320px.

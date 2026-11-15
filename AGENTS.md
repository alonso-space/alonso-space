# AGENTS.md

Instrucciones para asistentes de IA que trabajen en este repositorio. Si algo de aquí choca con lo que se pide en el chat, manda el chat.

## Comandos (desde `portfolio/`)
- Desarrollo: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Formato: `npm run format` (aplica) y `npm run format:check` (solo revisa)

## Idioma
- Nombres (variables, funciones, archivos, clases CSS, commits) en inglés.
- Comentarios en español.

## Nombres
- Componentes, clases y tipos: PascalCase (`ProjectCard`, `HeroSection`). Los archivos de componentes también (`ProjectCard.tsx`).
- Variables y funciones en JS/TS: camelCase (`userName`, `getProjects`). Nunca con guiones: en JS un guion es una resta, no sirve en un identificador.
- Clases CSS, ids y archivos que no son componentes: kebab-case (`hero-title`, `btn-outline-custom`).
- Python y GDScript: snake_case para variables y funciones, PascalCase para clases. Constantes en UPPER_SNAKE_CASE.
- Nombres claros y completos: `projectList`, no `pl`.

## Formato
- Sin líneas en blanco dentro de un bloque. Las instrucciones van una tras otra.
- Una sola línea en blanco entre bloques de nivel superior (funciones, componentes, reglas CSS). Nunca dos seguidas.
- Una declaración por línea.
- La indentación y el ancho de línea los define Prettier (`portfolio/.prettierrc.json`, 2 espacios). No los cambies a mano: ejecuta `npm run format`.
- Prettier no quita las líneas en blanco entre instrucciones, así que esa regla la cumples tú.

Bien:
```js
function getTotal(items) {
  let total = 0;
  for (const item of items) total += item.price;
  return total;
}
```

Mal:
```js
function getTotal(items) {

  let total = 0;

  for (const item of items) total += item.price;

  return total;

}
```

Lo mismo aplica a CSS: las declaraciones de una regla van juntas, sin línea vacía entre ellas.

## Colores y temas
- Todos los colores viven en `portfolio/src/styles/colors.css` como variables `--color-*`. Hay un bloque para el tema oscuro (por defecto) y otro para el claro, con los mismos tokens.
- En el resto del CSS y en el TSX no escribas hex, rgb ni nombres de color: usa `var(--color-...)`. `transparent` sí se permite.
- Si necesitas un color nuevo, agrégalo en los dos bloques con un nombre por rol (`--color-card-bg`), no por valor (`--color-dark-red`).
- El tema se aplica con el atributo `data-bs-theme` en `<html>` (Bootstrap también lo usa) y se guarda en `localStorage` con la clave `portfolio-theme`.

## Comentarios
- Por defecto, no comentes. El código se explica con buenos nombres.
- Comenta solo el porqué de una decisión no obvia (un hack, una restricción de seguridad, un caso límite).
- Nada de banners decorativos (`/* ===== SECCIÓN ===== */`), ni comentarios que repitan lo que hace la línea, ni código viejo comentado.

## Alcance
- Haz solo lo que se pide. No refactorices, renombres ni reformatees código que no tocas.
- No agregues dependencias sin preguntar, y explica para qué sirven.
- Sigue el estilo del archivo que editas aunque difiera de tus hábitos.

## Seguridad
- Valida toda entrada en el servidor. Consultas SQL siempre parametrizadas.
- Sin credenciales en el código: variables de entorno. Nunca toques ni expongas el `.env`.
- Maneja errores sin filtrar detalles internos al cliente.
- Mínimo privilegio en permisos, roles y contenedores.

## Antes de entregar
- Ejecuta `npm run lint`, `npm run build` y `npm run format:check`, e informa del resultado real.

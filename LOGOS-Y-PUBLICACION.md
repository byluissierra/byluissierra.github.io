# Logos incorporados y publicación

Este paquete incluye los enlaces ya configurados en `script.js` para los ocho empleadores y los iconos técnicos.
No necesitas buscar imágenes ni cambiar el HTML. Se cargan desde sus fuentes online al abrir la página.

- Capgemini, Sofinco, DXC, Indra, Sopra Steria y TCS: imágenes vectoriales de Wikimedia Commons (Special:FilePath).
- Quental: logotipo original facilitado por Luis, integrado localmente como `assets/companies/quental.png`.
- SIA: imagen de la marca publicada en Europa Press (marca posterior al periodo trabajado).
- Tecnologías: Simple Icons (CDN). WebLogic y WebSphere tienen abreviaturas por falta de un icono comprobado.

**Limitación:** sin conexión o si alguna fuente bloquea el acceso, se muestra automáticamente el nombre de la compañía; los recursos externos no se incluyen físicamente en el ZIP. Los logos son marcas de sus titulares. SIA tiene una fuente provisional y pueden requerir reemplazo por originales con permiso.

## Actualizar desde VS Code

1. En tu rama `feature/portfolio-redesign`, sustituye `index.html`, `styles.css`, `script.js` y la carpeta `assets` con los del ZIP.
2. Añade tu fotografía en `assets/img/profile.jpg` y cambia en `index.html` el `src` de `profile-placeholder.svg` a `profile.jpg`.
3. Abre `index.html` en el navegador con conexión para comprobar los logos.
4. En VS Code: Source Control → Stage All → mensaje `feat: add company and technology logos` → Commit → Publish Branch / Push.
5. En GitHub: Compare & pull request → revisa → Merge pull request.
6. En VS Code: cambia a main y haz Pull para sincronizar.

El CV de LaTeX no se ha modificado; lo haremos en otra sesión.

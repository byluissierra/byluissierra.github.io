# Portfolio — actualización completa (29/10/2026)

Incluye diseño ampliado, fotografía, fondo de atardecer, trayectoria con tecnologías, logo original de Quental y logo original de WebLogic.

## Instalar
1. Abre la carpeta local `C:\Proyectos\byluissierra.github.io`.
2. Descomprime el ZIP y copia dentro los archivos `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
3. Confirma el reemplazo de archivos. **No borres `.git` ni tu `README.md`.**
4. Previsualiza: `Start-Process .\index.html`.

## Publicar (interfaz gráfica)
1. Comprueba que estás en tu rama de trabajo. Si no, crea `feature/portfolio-assets` desde `main` actualizado desde VS Code (selector de rama inferior).
2. En Source Control (Ctrl+Shift+G), revisa los archivos; pulsa `+` en Changes para prepararlos.
3. Mensaje del commit: `feat: refresh portfolio design and assets`. Pulsa Commit.
4. Pulsa `Publish Branch` o `Push` / `Sync Changes`.
5. En GitHub: pestaña Pull requests > New pull request, base `main`, compare tu rama. Crea la PR y revisa `Files changed`.
6. Pulsa `Merge pull request` y confirma.
7. En VS Code cambia a `main` y haz `Pull` desde Source Control.
8. Abre `https://byluissierra.github.io/` y fuerza recarga con Ctrl+F5.

## Notas
- Las imágenes de WebLogic, Quental, perfil y atardecer están en `assets/`, localmente.
- Otras marcas siguen cargándose desde fuentes externas; si fallan se muestra texto en su lugar.
- El CV en LaTeX está pendiente; el botón sigue deshabilitado.
- No publiques una fotografía que no quieras que sea accesible públicamente.

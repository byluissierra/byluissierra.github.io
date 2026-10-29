# Actualización móvil y AWS

Cambios: CSS responsive para menú, hero, foto, tarjetas tecnológicas y experiencia; logo AWS guardado localmente en assets/tech/aws.svg. No se modifica la versión de escritorio.

## Instalación
1. Crea una rama desde main actualizada, `feature/mobile-responsive`.
2. Copia `index.html`, `styles.css`, `script.js` y `assets/` a la raíz del repositorio (conserva `.git` y `README.md`).
3. Abre `index.html` y prueba con F12 -> Toggle device toolbar (Ctrl+Shift+M), tamaños 375px, 390px y 768px.
4. Revisa que aparecen AWS, WebLogic, JBoss y Quental.
5. En Source Control realiza Stage, Commit (`feat: improve mobile layout and restore AWS logo`) y Publish Branch.
6. En GitHub abre la Pull Request, revisa Files changed y haz Merge.
7. Vuelve a VS Code, cambia a `main` y ejecuta Pull.

Nota: el logo AWS local es una representación vectorial simplificada de la marca, no un fichero oficial.

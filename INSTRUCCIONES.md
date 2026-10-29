# Instalación (Windows y Visual Studio Code)

1. En tu repositorio local `C:\Proyectos\byluissierra.github.io`, crea una rama de mejora desde `main`: `git switch main`, `git pull origin main`, `git switch -c feature/portfolio-redesign`.
2. Copia `index.html`, `styles.css`, `script.js` y la carpeta `assets` desde este paquete a la raíz del repositorio, sustituyendo archivos anteriores. No reemplaces README.md ni `.git`.
3. Abre la página usando `Start-Process .\index.html`.
4. Sustituye `assets/img/profile-placeholder.svg`: guarda tu foto en `assets/img/profile.jpg` y cambia en `index.html` `assets/img/profile-placeholder.svg` por `assets/img/profile.jpg`. Preferible JPG/WebP de 800 x 900 px y menos de 400 KB. No subas una foto de documento de identidad ni datos privados.
5. Agrega los logos oficiales en `assets/companies` según `assets/companies/README.md`. Sin SVG, se muestran nombres textuales. Los logos tecnológicos se cargan desde Simple Icons (requieren Internet).
6. Verifica la página en navegador.
7. Desde Source Control (Ctrl+Shift+G), Stage Changes, Commit, Publish Branch y crea una Pull Request hacia `main` en GitHub.
8. El PDF del CV aún no está generado: su botón se muestra como próximamente, no como enlace roto.

No se requiere React, Node.js, paquetes npm ni compilación.

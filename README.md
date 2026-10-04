# 🌟 Pokemon-API

Una aplicación web interactiva y responsiva para consultar información sobre Pokémon, consumiendo los datos de la [PokéAPI](https://pokeapi.co/). El proyecto posee arquitectura modular en JavaScript, una interfaz adaptativa y soporte completo para Modo Oscuro.

## ✨ Características Principales

- **Carga Inicial Dinámica:** Al iniciar, la aplicación despliega automáticamente una lista de tarjetas de Pokémon con su información clave (ID, Nombre, Tipo, Peso y Altura).
- **Búsqueda Precisa:** Permite buscar Pokémon específicos ingresando su nombre o su ID numérico.
- **Botón "Lista":** Un control rápido para limpiar la búsqueda y volver a la vista general.
- **Modo Oscuro / Claro:** Un botón de tema ("Tema Oscuro") integrado que cambia tanto los colores de la interfaz como los fondos de pantalla de forma automática.
- **Diseño Responsivo:** Completamente adaptable a dispositivos móviles (celulares y tablets) y pantallas de escritorio, con imágenes de fondo optimizadas para cada orientación.
- **Feedback Visual:** Incorpora un *spinner* de carga durante las peticiones a la API y alertas interactivas (SweetAlert2) para el manejo de errores.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la aplicación.
- **CSS3:** Estilos personalizados, media queries y variables para el manejo de temas.
- **JavaScript (ES6+):** Lógica asíncrona (`async/await`) y uso estricto de **Módulos** para separar responsabilidades.
- **PokéAPI:** Fuente de datos RESTful para la información de los Pokémon.
- **SweetAlert2:** Para notificaciones y manejo de errores.

## 📂 Estructura del Proyecto

El código está organizado de forma modular para garantizar su escalabilidad y fácil mantenimiento:

```text
📦 TP-Pokemon-API
 ┣ 📂 css
 ┃ ┗ 📜 style.css                         # Estilos principales y media queries
 ┣ 📂 img
 ┃ ┣ 🖼️ pokeball-favicon.png              # Ícono de la pestaña
 ┃ ┣ 🖼️ pokemon-background-cell-dark.png  # Fondo celular (Oscuro)
 ┃ ┣ 🖼️ pokemon-background-cell.png       # Fondo celular (Claro)
 ┃ ┣ 🖼️ pokemon-background-dark.png       # Fondo escritorio (Oscuro)
 ┃ ┗ 🖼️ pokemon-background.png            # Fondo escritorio (Claro)
 ┣ 📂 js
 ┃ ┣ 📂 helpers
 ┃ ┃ ┣ 📜 spinner.js              # Lógica del indicador de carga
 ┃ ┃ ┣ 📜 sweetAlert.js           # Configuración de alertas de error/éxito
 ┃ ┃ ┗ 📜 ui.js                   # Renderizado del DOM (Tarjetas, Tema)
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📜 pokemonService.js       # Peticiones Fetch a la PokéAPI
 ┃ ┗ 📜 main.js                   # Script principal (Punto de entrada)
 ┣ 📜 index.html                  # Estructura principal
 ┗ 📜 README.md                   # Documentación del proyecto
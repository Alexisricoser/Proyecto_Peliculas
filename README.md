# Proyecto_Peliculas
🎬 Proyecto: Catálogo de Películas y Series
Objetivo
Desarrollar en equipo una aplicación web para gestionar un catálogo personal de
películas y series, utilizando herramientas colaborativas de GitHub (Issues, Projects, Pull
Requests y ramas). Se aplicarán tecnologías web front-end (HTML, CSS, JavaScript) y
almacenamiento local del navegador (localStorage).
📝 Descripción del proyecto
Crear una aplicación web que permita gestionar un catálogo de películas y series con las
siguientes funcionalidades:
Funcionalidades requeridas:
1. Añadir película/serie al catálogo mediante un formulario
2. Ver catálogo completo con todas las películas/series en tarjetas visuales
3. Buscar por título con filtrado en tiempo real
4. Filtrar por género (Acción, Comedia, Drama, Terror, Ciencia Ficción, etc.)
5. Filtrar por director/creador
6. Eliminar película/serie del catálogo
7. Editar datos de una película/serie existente
8. Ver mejor valoradas (ordenadas por valoración con estrellas visuales)
9. Guardar automáticamente todos los datos en localStorage
10. Cargar automáticamente los datos al abrir la página
Datos de cada película/serie:
 Título
 Director o creador
 Año de estreno
 Género
 Valoración (de 1 a 5 estrellas ⭐)
👥 Organización del equipo
Los grupos serán de 4 personas. Cada miembro será responsable de un módulo
específico del proyecto:
 Miembro 1: HTML y formulario de añadir/visualizar
 Miembro 2: Funcionalidades de búsqueda y filtros
 Miembro 3: Editar, eliminar y ordenar contenido
 Miembro 4: CSS (estilos y responsive), localStorage y documentación
🔧 Trabajo en GitHub
Issues
Crear Issues en GitHub para cada funcionalidad. Cada miembro debe asignarse entre 6-
9 issues. Ejemplos:
 "Crear estructura HTML del formulario"
 "Implementar búsqueda en tiempo real con JavaScript"
 "Crear estilos CSS para las tarjetas de películas"
 "Implementar localStorage para persistencia"
Projects
Organizar las tareas en un tablero con columnas:
 Por hacer
 En progreso
 En revisión
 Hecho
Ramas y Pull Requests
 Cada miembro trabaja en su propia rama (ejemplo: feature/formulario-anadir)
 Al completar una funcionalidad, crear un Pull Request
 Otro compañero debe revisar y aprobar antes de fusionar a main
Commits
Realizar commits frecuentes con mensajes claros que puedan entender los compañeros
y el profesor, por ejemplo:
 ✅ "Añadir estilos CSS para tarjetas de películas"
 ❌ "Cambios" o "Update"
💾 Persistencia de datos (localStorage)
La aplicación debe:
 Guardar automáticamente todos los datos en localStorage del navegador
 Cargar automáticamente los datos al cargar la página
 Utilizar JSON.stringify() para guardar y JSON.parse() para cargar
 Manejar el caso de que no existan datos previos
🎨 Requisitos de diseño
 Responsive: Debe verse bien en móvil, tablet y escritorio
 Interfaz moderna: Usar CSS moderno (flexbox/grid)
 Interactiva: Feedback visual en acciones (hover, clicks, eliminaciones)
 Accesible: Etiquetas semánticas HTML5
 Valoración visual: Mostrar estrellas ⭐ según la puntuación
📁 Estructura del proyecto
catalogo-peliculas-web/
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── peliculas.js
│ ├── formulario.js
│ ├── filtros.js
│ └── storage.js
├── assets/
│ └── (imágenes si las hay)
│
└── README.md
📄 Documentación
El repositorio debe incluir un archivo README.md con:
1. Descripción del proyecto
2. Nombres de los integrantes y su rol en el equipo
3. Tecnologías utilizadas (HTML5, CSS3, JavaScript ES6)
4. Instrucciones para usar la aplicación (abrir index.html)
5. Funcionalidades implementadas (con checkboxes ✅)
6. Capturas de pantalla de la aplicación funcionando
7. Enlace a GitHub Pages (opcional pero recomendado)
🎯 Secciones de la interfaz
1. Formulario de añadir película/serie
 Campos de entrada para todos los datos
 Selector de estrellas para valoración
 Botón "Añadir al catálogo"
2. Barra de búsqueda y filtros
 Input de búsqueda por título (filtrado en tiempo real)
 Dropdown para filtrar por género
 Input para filtrar por director
3. Zona de visualización
 Tarjetas con las películas/series
 Mostrar título, director, año, género y estrellas
 Botones de "Editar" y "Eliminar" en cada tarjeta
4. Controles adicionales
 Botón "Ver mejor valoradas" (ordenar)
 Contador de películas/series en el catálogo
 Botón para limpiar filtros
🚀 Despliegue (Opcional)
Activar GitHub Pages para que la aplicación sea accesible online:
1. En GitHub: Settings → Pages
2. Source: Deploy from branch main
3. Carpeta: / (root)
4. Guardar y obtener URL pública
📅 Entrega
Método de entrega:
 Enlace al repositorio de GitHub (público o con acceso al profesor)
 Enlace a GitHub Pages (si está activado)
🎨 Inspiración de diseño
Podéis inspiraros en plataformas como:
 Netflix
 IMDb
 Letterboxd
 FilmAffinity

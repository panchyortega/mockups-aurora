# mockups-aurora
 Maquetación de los elementos de la skin Aurora en código

Organización general del repositorio:
- Organización modular y atómico del diseño (revisar https://bradfrost.com/blog/post/atomic-web-design/) separando átomos, moléculas, organismos, plantillas y páginas.
- La creación de estos diseños se divide en dos: estilos y estructura
- Los estilos están creados en LESS y se compilan a CSS.
- La estructura está creada en archivos mustache (plantillas), las cuales llaman a los estilos CSS y luego son renderizadas y convertidas en documentos HTML.

Estilos:
- En resources/styles/less se encuentran archivos como variable.less (variables generales de colores y tamaños), typhography.less (estilos de los textos), breakpoints.less (breakpoints de la pantalla) y components.less (importa todos los documentos que se encuentran en resources/styles/less/components).
- En escencia, resources/styles/less contiene los estilos de todo lo atómico.
- En resources/styles/less/components se encuentran los estilos de componentes más complejos (moléculas y organismos) como botones, o input fields, por ejemplo.
- Compilación: Los estilos de LESS son compilados a CSS dentro del documento package.json. Este proceso no es automático, pero dentro de este archivo se explica como realizarlo.
- La compilación de todos los archivos LESS llegan a la carpeta resources/styles/css.

Estructura:
- Dentro de la carpeta templates se ubican componentes específicos que se encuentran dentro de todas las páginas (la barra de navegación, el footer y el header principal)
- Dentro de la carpeta includes/templates/components de encuentran estructurados componentes más genéricos, que se pueden utilizar de distintas maneras, como inputs, menus, tabs, etc.
- Dentro de la carpeta includes/templates/pages se encuentran plantillas de los tipos de página necesarias por visualizar, las cuales son clave para la entrega del proyecto (páginas de inicio, de persona, páginas especiales, etc.).
- Renderización: el archivo render.js se encarga de renderizar estas plantillas en páginas HTML para poder visualizarlas.

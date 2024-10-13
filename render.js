const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");

// Cargar la plantilla de la barra de navegación
let navTemplate = fs.readFileSync("templates/nav.mustache", "utf8");

// Ajustar las rutas de los estilos en la plantilla
const outputDir = path.join(__dirname, 'output');
const cssPathPrefix = path.relative(outputDir, path.join(__dirname, 'resources/styles/css'));

navTemplate = navTemplate.replace(
  /href="resources\/styles\/css\//g,
  `href="${cssPathPrefix.replace(/\\/g, '/')}/`
);

// Definir un ejemplo de datos para la barra de navegación
const navData = {
  userName: "Juan"  // El nombre del usuario
};

// Renderizar la barra de navegación con los datos
const renderedNav = Mustache.render(navTemplate, navData);

// Crear la carpeta output si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Guardar el resultado en un archivo HTML
fs.writeFileSync(path.join(outputDir, 'navbar-example.html'), renderedNav, "utf8");

console.log("Barra de navegación renderizada correctamente.");

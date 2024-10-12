const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");

// Cargar la plantilla de nav-tabs desde la nueva ruta
let navTabsTemplate = fs.readFileSync("includes/templates/components/nav-tabs.mustache", "utf8");

// Ajustar las rutas de los estilos en la plantilla
const outputDir = path.join(__dirname, 'output');
const cssPathPrefix = path.relative(outputDir, path.join(__dirname, 'resources/styles/css'));

navTabsTemplate = navTabsTemplate.replace(
  /href="resources\/styles\/css\//g,
  `href="${cssPathPrefix.replace(/\\/g, '/')}/`
);

// Definir un ejemplo de datos para nav-tabs (fixed)
const navTabsDataFixed = {
  isFixed: true,  // Definir que es fixed
  tabs: [
    { label: "Página", state: "selected" },          // Primer tab, estado selected
    { label: "Discusión", state: "default" },        // Segundo tab, estado default
    { label: "Editar", state: "default", leftIcon: "lapiz.svg" }  // Tercer tab con ícono
  ]
};

// Renderizar las nav-tabs (fixed) con los datos
const renderedNavTabsFixed = Mustache.render(navTabsTemplate, navTabsDataFixed);

// Crear la carpeta output si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Guardar el resultado en un archivo HTML
fs.writeFileSync(path.join(outputDir, 'nav-tabs-fixed-example.html'), renderedNavTabsFixed, "utf8");

console.log("Nav-tabs fixed renderizadas correctamente.");

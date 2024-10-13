const Mustache = require("mustache");
const fs = require("fs");

// Cargar las plantillas
const baseTemplate = fs.readFileSync("includes/templates/base.mustache", "utf8");
const cursoTemplate = fs.readFileSync("includes/templates/pages/curso-page.mustache", "utf8");

// Definir los datos
const data = {
  title: "Página de Curso",
  content: Mustache.render(cursoTemplate)  // Renderizar el contenido dentro de la página base
};

// Renderizar la plantilla
const output = Mustache.render(baseTemplate, data);

// Guardar el archivo renderizado
fs.writeFileSync("output/curso-page.html", output);

console.log("Página de curso renderizada correctamente.");

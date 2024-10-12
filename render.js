const Mustache = require("mustache");
const fs = require("fs");



// Leer la plantilla Mustache del componente
const template = fs.readFileSync("includes/templates/components/button.mustache", "utf-8");


// Datos para renderizar el componente
const data = {
  type: "primary",  // Puedes cambiar entre 'primary', 'secondary', etc.
  text: "Mi Botón Primario",
  iconLeft: "⬅",  // Puedes usar un icono o texto
  iconRight: "➡"  // Icono a la derecha
};


// Renderizar la plantilla Mustache con los datos
const output = Mustache.render(template, data);

// Guardar el resultado como un archivo HTML (puedes cambiar el nombre si lo prefieres)
fs.writeFileSync("rendered-button.html", output, "utf-8");

console.log("Botón renderizado con éxito. Revisa rendered-button.html para ver el resultado.");


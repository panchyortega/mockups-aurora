const fs = require('fs');
const mustache = require('mustache');

// Ruta de los archivos
const templatePath = './includes/templates/components/checkbox.mustache';
const outputPath = './output/checkbox-groups.html';

// Datos para la plantilla
const data = {
  checkboxGroups: [
    {
      groupType: 'vertical',
      padding: 'off',
      checkboxes: [
        { label: 'Option1', disabled: false },
        { label: 'Option2', disabled: true },
      ],
    },
    {
      groupType: 'horizontal',
      padding: 'on',
      checkboxes: [
        { label: 'Option3', disabled: false },
        { label: 'Option4', disabled: false },
      ],
    },
  ],
};

// Leer la plantilla
fs.readFile(templatePath, 'utf-8', (err, template) => {
  if (err) {
    console.error('Error leyendo la plantilla:', err);
    return;
  }

  // Renderizar la plantilla
  const outputHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox Groups</title>
    <link rel="stylesheet" href="../resources/styles/css/breakpoints.css">
    <link rel="stylesheet" href="../resources/styles/css/components.css">
    <link rel="stylesheet" href="../resources/styles/css/icons.css">
    <link rel="stylesheet" href="../resources/styles/css/typography.css">
    <link rel="stylesheet" href="../resources/styles/css/variables.css">
    <link rel="stylesheet" href="../resources/styles/css/grid.css">
</head>
<body>
    ${mustache.render(template, data)}
</body>
</html>`;

  // Escribir el HTML generado en el archivo de salida
  fs.writeFile(outputPath, outputHtml, (err) => {
    if (err) {
      console.error('Error escribiendo el archivo HTML:', err);
      return;
    }
    console.log('HTML generado correctamente en:', outputPath);
  });
});

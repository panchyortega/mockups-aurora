const fs = require('fs');
const mustache = require('mustache');

// Cargar plantilla de la card
const cardTemplate = fs.readFileSync('includes/templates/components/card.mustache', 'utf8');

// Datos directamente en render.js
const data = {
    cardImage: "https://via.placeholder.com/400x200",
    cardHeading: "Título de la Tarjeta",
    cardDescription: "Esta es una descripción breve de la tarjeta. Puedes usarla para mostrar más información relevante.",
    cardLink: "https://www.ejemplo.com"
};

// Renderizar la tarjeta
const renderedCard = mustache.render(cardTemplate, data);

// Crear archivo HTML directamente
const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Example</title>
    <link rel="stylesheet" href="../resources/styles/css/components.css">
</head>
<body>
    ${renderedCard}
</body>
</html>
`;

// Guardar el archivo HTML generado
fs.writeFileSync('output/card-example.html', htmlContent, 'utf8');
console.log('Archivo card-example.html generado correctamente.');

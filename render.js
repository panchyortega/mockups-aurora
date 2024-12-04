const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

// Definir la ruta de la plantilla
const templatePath = path.join(__dirname, 'includes/templates/components/input.mustache');
const outputPath = path.join(__dirname, 'output/input-example.html');

// Leer la plantilla
fs.readFile(templatePath, 'utf8', (err, template) => {
    if (err) {
        console.error(`Error leyendo la plantilla: ${err.message}`);
        return;
    }

    // Definir los datos para renderizar la plantilla
    const data = {
        type: 'fixed',
        state: 'hover',
        width: 'full',
        label: 'Nombre',
        requirement: {
            required: true,
            optional: false
        },
        tooltip: {
            iconName: 'tooltip.svg'
        },
        'text-input': '',
        helptext: 'Por favor, ingresa tu nombre completo.',
        leftIcon: true,
        rightIcon: true
    };

    // Renderizar la plantilla
    const rendered = mustache.render(template, data);

    // Escribir el resultado en un archivo
    fs.writeFile(outputPath, rendered, (writeErr) => {
        if (writeErr) {
            console.error(`Error escribiendo el archivo HTML: ${writeErr.message}`);
            return;
        }
        console.log(`Archivo generado en: ${outputPath}`);
    });
});

    const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

// Definir rutas de las plantillas
const templatesDir = path.join(__dirname, 'includes/templates/components');
const tocTemplatePath = path.join(templatesDir, 'toc.mustache');
const outputPath = path.join(__dirname, 'output/toc-example.html');

// Leer todos los partials necesarios
const partials = {
    tocItemGroup: fs.readFileSync(path.join(templatesDir, 'tocItemGroup.mustache'), 'utf8'),
    tocItem: fs.readFileSync(path.join(templatesDir, 'tocItem.mustache'), 'utf8'),
    tocIndent: fs.readFileSync(path.join(templatesDir, 'tocIndent.mustache'), 'utf8'),
    tocLine: fs.readFileSync(path.join(templatesDir, 'tocLine.mustache'), 'utf8'),
    button: '<button class="button">Botón de ejemplo</button>', // Esto es un ejemplo para el partial "button"
};

// Leer la plantilla principal (toc.mustache)
fs.readFile(tocTemplatePath, 'utf8', (err, tocTemplate) => {
    if (err) {
        console.error(`Error leyendo la plantilla toc.mustache: ${err.message}`);
        return;
    }

    // Definir los datos para renderizar la plantilla
    const tocData = {
        iconLeft: 'menu-icon',  // Nombre del ícono izquierdo, si es necesario

        // Datos de los items en la tabla de contenidos
        tocItems: [
            {
            state: 'default',
            position: 'actual',
            label: 'Capítulo 1: Introducción',
            seccion: 'intro',
            lines: [
                { state: 'selected'}
            ]
            },
            {
            state: 'default',
            position: 'actual',
            label: 'Capítulo 1: Introducción',
            seccion: 'intro',
            lines: [
                { state: 'default'},
                { state: 'selected'}
            ]
            },
            {
            state: 'default',
            position: 'actual',
            label: 'Capítulo 1: Introducción',
            seccion: 'intro',
            lines: [
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'selected'}
            ]
            },
            {
            state: 'default',
            position: 'actual',
            label: 'Capítulo 1: Introducción',
            seccion: 'intro',
            lines: [
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'selected'}
            ]
            },
            {
            state: 'default',
            position: 'actual',
            label: 'Capítulo 1: Introducción',
            seccion: 'intro',
            lines: [
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'default'},
                { state: 'selected'}
            ]
            },
  ]
    };

    // Renderizar la plantilla toc.mustache con los datos y partials
    const renderedToc = mustache.render(tocTemplate, tocData, partials);

    // Escribir el resultado en un archivo HTML
    fs.writeFile(outputPath, renderedToc, (writeErr) => {
        if (writeErr) {
            console.error(`Error escribiendo el archivo HTML: ${writeErr.message}`);
            return;
        }
        console.log(`Archivo generado en: ${outputPath}`);
    });
});

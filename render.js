const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

// Definir la ruta de la plantilla infobox.mustache
const tocTemplatePath = path.join(__dirname, 'includes/templates/components/infobox.mustache');
const outputPath = path.join(__dirname, 'output/infobox-example.html');

// Leer la plantilla infobox.mustache
fs.readFile(tocTemplatePath, 'utf8', (err, tocTemplate) => {
    if (err) {
        console.error(`Error leyendo la plantilla infobox.mustache: ${err.message}`);
        return;
    }

    // Definir los datos para renderizar la plantilla
    const infoboxData = {
        iconLeft: 'resources/icons/cas-flecha.svg',
        fields: [
            {
                infoboxFieldLabel: 'Descripción',
                type: 'Texto',
                fieldType: {
                    texto: 'Ramo lectivo de la asignatura Diseño como Argumento dictada en el semestre primero del 2024.'
                }
            },
            {
                infoboxFieldLabel: 'Docentes',
                type: 'Persona',
                fieldType: {
                    imagen: 'resources/fotoperfil/Pexels Photo by Mohammad Hossein Mirzagol.png',
                    nombre: 'Juan Pérez',
                    enlacepersona: 'juan-perez'
                }
            },
            {
                infoboxFieldLabel: 'Estudiantes',
                type: 'Personas',
                fieldType: {
                    personas: [
                        { imagen: 'resources/fotoperfil/Pexels Photo by Alena Evseenko.png', altText: 'María López' },
                        { imagen: 'resources/fotoperfil/Pexels Photo by Almada Studio.png', altText: 'Carlos González' },
                        { imagen: 'resources/fotoperfil/Pexels Photo by cami.png', nombre: 'María López' },
                        { imagen: 'resources/fotoperfil/Pexels Photo by Daniel Xavier.png', nombre: 'Carlos González' },
                        { imagen: 'resources/fotoperfil/Pexels Photo by Efrem  Efre.png', nombre: 'María López' }
                    ],
                    numero: 16
                }
            }
        ]
    };

    // Renderizar la plantilla infobox.mustache con los datos
    const renderedInfobox = mustache.render(tocTemplate, infoboxData);

    // Escribir el resultado en un archivo HTML
    fs.writeFile(outputPath, renderedInfobox, (writeErr) => {
        if (writeErr) {
            console.error(`Error escribiendo el archivo HTML: ${writeErr.message}`);
            return;
        }
        console.log(`Archivo generado en: ${outputPath}`);
    });
});

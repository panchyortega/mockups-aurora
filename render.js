const navTemplate = fs.readFileSync("templates/nav.mustache", "utf8");

// Datos para renderizar
const navData = {
  userName: "Usuario",
  isFloating: true,
  tabs: [
    { label: "CASIOPEA", state: "default" },
    { label: "Escuela", state: "default", rightIcon: "cas-navabajo.svg" },
    { label: "Wiki", state: "default", rightIcon: "cas-navabajo.svg" },
    { label: "Crear", state: "default", leftIcon: "cas-crear.svg" }
  ]
};

const renderedNav = Mustache.render(navTemplate, navData);

// Guardar el archivo
fs.writeFileSync(path.join(outputDir, 'navbar-example.html'), renderedNav, "utf8");

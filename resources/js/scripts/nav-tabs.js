// Seleccionamos todas las nav-tabs con la clase .nav-tabs.fixed
const fixedNavTabs = document.querySelectorAll('.nav-tabs.fixed');

// Función para manejar el cambio de estado entre tabs
function handleTabClick(event) {
  const clickedTab = event.currentTarget; // Tab que fue clicada
  const navTabs = clickedTab.closest('.nav-tabs'); // Agrupación de tabs

  // Si el tab está en estado disabled, no hacemos nada
  if (clickedTab.classList.contains('disabled')) {
    return;
  }

  // Encontrar el tab que actualmente está seleccionado
  const selectedTab = navTabs.querySelector('.tab.selected');

  // Si hay un tab seleccionado, lo cambiamos a estado default
  if (selectedTab) {
    selectedTab.classList.remove('selected', 'selected-hover', 'selected-clicked');
    selectedTab.classList.add('default');
  }

  // Cambiar el tab clicado a estado selected
  clickedTab.classList.remove('default', 'hover', 'clicked');
  clickedTab.classList.add('selected');
}

// Función para manejar el hover sobre los tabs
function handleTabHover(event) {
  const hoveredTab = event.currentTarget;

  // Si el tab está en estado default y no es disabled, cambiamos a hover
  if (hoveredTab.classList.contains('default') && !hoveredTab.classList.contains('disabled')) {
    hoveredTab.classList.add('hover');
  }

  // Si el tab está en estado selected, cambiamos a selected-hover
  if (hoveredTab.classList.contains('selected')) {
    hoveredTab.classList.add('selected-hover');
  }
}

// Función para quitar el hover cuando el mouse sale del tab
function handleTabUnhover(event) {
  const unhoveredTab = event.currentTarget;

  // Si estaba en hover, volvemos a default
  if (unhoveredTab.classList.contains('hover')) {
    unhoveredTab.classList.remove('hover');
  }

  // Si estaba en selected-hover, volvemos a selected
  if (unhoveredTab.classList.contains('selected-hover')) {
    unhoveredTab.classList.remove('selected-hover');
  }
}

// Función para manejar el click sostenido
function handleTabMouseDown(event) {
  const clickedTab = event.currentTarget;

  // Si está en default o hover, cambiamos a clicked
  if (clickedTab.classList.contains('default') || clickedTab.classList.contains('hover')) {
    clickedTab.classList.add('clicked');
  }

  // Si está en selected-hover, cambiamos a selected-clicked
  if (clickedTab.classList.contains('selected-hover')) {
    clickedTab.classList.add('selected-clicked');
  }
}

// Función para manejar cuando se suelta el clic
function handleTabMouseUp(event) {
  const clickedTab = event.currentTarget;

  // Si estaba en clicked, lo volvemos a default o selected
  if (clickedTab.classList.contains('clicked')) {
    clickedTab.classList.remove('clicked');
  }

  // Si estaba en selected-clicked, lo volvemos a selected
  if (clickedTab.classList.contains('selected-clicked')) {
    clickedTab.classList.remove('selected-clicked');
  }
}

// Añadir eventos a cada tab dentro de cada nav-tabs.fixed
fixedNavTabs.forEach((navTabs) => {
  const tabs = navTabs.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', handleTabClick);
    tab.addEventListener('mouseenter', handleTabHover);
    tab.addEventListener('mouseleave', handleTabUnhover);
    tab.addEventListener('mousedown', handleTabMouseDown);
    tab.addEventListener('mouseup', handleTabMouseUp);
  });
});

// UTIL: aplica color Tailwind o color.css como respaldo
function applyColorAndClasses(el, tipo) {
  const tw = tipo?.color?.Tailwind;
  const css = tipo?.color?.css;

  // si existe Tailwind → agregar clases
  if (tw) {
    tw.split(/\s+/).filter(Boolean).forEach(c => el.classList.add(c));
  }

  // si no existe Tailwind → usar color CSS
  if (css) {
    el.style.backgroundColor = css;
  }
}

// COMPONENTE: BadgeTipo
// Icono + color + nombre del tipo
function BadgeTipo(tipo) {
  const badge = document.createElement("span");
  badge.classList.add(
    "badge",
    "d-inline-flex",
    "align-items-center",
    "px-2",
    "py-1",
    "me-2"
  );

  // aplicar color dinámico
  applyColorAndClasses(badge, tipo);

  // icono dinámico
  const icon = document.createElement("i");
  icon.className = `fa ${tipo.icono?.FontAwesome}`;
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.classList.add("ms-1");
  text.textContent = tipo.nombre;

  badge.appendChild(icon);
  badge.appendChild(text);

  return badge;
}

// COMPONENTE: CardGestor
// Card completa de un gestor
function CardGestor(gestor, empresaTiposCache = []) {

  // Expansión del tipo si viene solo como ID
  let tipo = gestor.empresa_tipo;
  if (typeof tipo === "number" || (tipo?.id && !tipo?.nombre)) {
    tipo = empresaTiposCache.find(t => t.id === (tipo.id ?? tipo));
  }

  // fallback si no existe tipo
  if (!tipo) {
    tipo = {
      nombre: "Sin tipo",
      icono: { FontAwesome: "fa-circle-question" },
      color: { css: "#e0e0e0" }
    };
  }

  // Columna responsiva + clase "tarjeta" para filtros
  const col = document.createElement("div");
  col.classList.add("col-12", "col-md-6", "col-lg-4", "tarjeta");

  col.dataset.nombre = gestor.nombre.toLowerCase();
  col.dataset.tipo = tipo.nombre.toLowerCase();
  
  // Card
  const article = document.createElement("article");
  article.classList.add("card", "p-3", "shadow-sm", "h-100", "text-center");

  // ----- HEADER -----
  const header = document.createElement("header");
  header.classList.add("mb-2");

  // Badge dinámico
  header.appendChild(BadgeTipo(tipo));

  // Nombre
  const h2 = document.createElement("h2");
  h2.classList.add("h5", "mt-2", "mb-3");
  h2.textContent = gestor.nombre;
  header.appendChild(h2);

  article.appendChild(header);

  // ----- ICONOS DE CONTACTO -----
  const icons = document.createElement("div");
  icons.classList.add("d-flex", "justify-content-center", "gap-4", "mt-auto");

  // Web
  if (gestor.web) {
    const aWeb = document.createElement("a");
    aWeb.href = gestor.web;
    aWeb.target = "_blank";
    aWeb.innerHTML = `<i class="bi bi-globe2 fs-3"></i>`;
    icons.appendChild(aWeb);
  }

  // Correo
  if (gestor.correo) {
    const aMail = document.createElement("a");
    aMail.href = `mailto:${gestor.correo}`;
    aMail.innerHTML = `<i class="bi bi-envelope-fill fs-3"></i>`;
    icons.appendChild(aMail);
  }

  // Teléfono
  if (gestor.telefono) {
    const aTel = document.createElement("a");
    aTel.href = `tel:${gestor.telefono}`;
    aTel.innerHTML = `<i class="bi bi-telephone-fill fs-3"></i>`;
    icons.appendChild(aTel);
  }

  article.appendChild(icons);

  col.appendChild(article);
  return col;
}

// RENDER: lista de gestores
function RenderGestores(lista, empresaTiposCache = []) {
  const contenedor = document.getElementById("gestores");
  contenedor.innerHTML = "";

  const frag = document.createDocumentFragment();

  lista.forEach(item => frag.appendChild(CardGestor(item, empresaTiposCache)));

  contenedor.appendChild(frag);
}


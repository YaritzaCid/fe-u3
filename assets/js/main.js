// VARIABLES GLOBALES
let currentPage = 1;
const CARDS_PER_PAGE = 12;
let gestoresFiltrados = [...mockGestores];



// PAGINACIÓN: obtiene gestores por página
function getGestoresByPage(lista, page) {
  const start = (page - 1) * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;
  return lista.slice(start, end);
}



// RENDER PRINCIPAL (cards + paginación)

function renderPagina() {
  const gestoresPagina = getGestoresByPage(gestoresFiltrados, currentPage);
  RenderGestores(gestoresPagina, mockEmpresaTipos);
  renderPaginacion();
}


// RENDER PAGINACIÓN (botones)

function renderPaginacion() {
  const totalPages = Math.ceil(gestoresFiltrados.length / CARDS_PER_PAGE);
  const pagination = document.querySelector(".pagination");

  pagination.innerHTML = "";

  // PREVIOUS
  const prev = document.createElement("li");
  prev.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
  prev.onclick = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderPagina();
    }
  };
  pagination.appendChild(prev);

  // NÚMEROS
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = (e) => {
      e.preventDefault();
      currentPage = i;
      renderPagina();
    };
    pagination.appendChild(li);
  }

  // NEXT
  const next = document.createElement("li");
  next.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
  next.innerHTML = `<a class="page-link" href="#">Next</a>`;
  next.onclick = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderPagina();
    }
  };
  pagination.appendChild(next);
}


//FILTROS: buscador + select (normalizado)
function aplicarFiltros() {
  const texto = document.getElementById("searchInput").value.toLowerCase();
  const tipo = document.getElementById("filtroTipo").value.toLowerCase();

  const normalizar = txt =>
    txt?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

gestoresFiltrados = mockGestores.filter(g => {
  const matchNombre = g.nombre.toLowerCase().includes(texto);

  const matchTipo =
    !tipo || String(
      typeof g.empresa_tipo === "object"
        ? g.empresa_tipo.id
        : g.empresa_tipo.id
    ) === tipo;

  return matchNombre && matchTipo;
});


  currentPage = 1;
  renderPagina();
}

//INICIALIZACIÓN + EVENTOS
document.addEventListener("DOMContentLoaded", () => {

  document
    .getElementById("searchInput")
    .addEventListener("input", aplicarFiltros);

  document
    .getElementById("filtroTipo")
    .addEventListener("change", aplicarFiltros);

  document
    .getElementById("clearSearch")
    .addEventListener("click", () => {
      document.getElementById("searchInput").value = "";
      document.getElementById("filtroTipo").value = "";
      aplicarFiltros();
    });

  renderPagina();
});

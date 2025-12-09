document.addEventListener("DOMContentLoaded", () => {

  // 1) Render inicial
  RenderGestores(mockGestores, mockEmpresaTipos);

  // 2) Seleccionar elementos DEL DOM después del render
  const input = document.getElementById("searchInput");
  const filtroTipo = document.getElementById("filtroTipo");
  const clearBtn = document.getElementById("clearSearch");
  const contenedor = document.getElementById("gestores");

  if (!input || !filtroTipo || !clearBtn || !contenedor) {
    console.error("Main.js: no se encontraron elementos del DOM (input/filtro/clear/gestores).");
    return;
  }

  // Debug: mostrar cuántas tarjetas se crean
  const debugCount = () => {
    const tarjetas = document.querySelectorAll(".tarjeta");
    console.log(`Debug: tarjetas encontradas = ${tarjetas.length}`);
    // mostrar primera tarjeta para revisar dataset
    if (tarjetas.length > 0) {
      const t = tarjetas[0];
      console.log("Debug: primer tarjeta dataset:", { nombre: t.dataset.nombre, tipo: t.dataset.tipo });
    }
  };

  // Espera 50ms y muestra debug (para asegurarnos que render ya terminó)
  setTimeout(debugCount, 50);

  // 3) Listeners
  input.addEventListener("input", filtrar);
  filtroTipo.addEventListener("change", filtrar);
  clearBtn.addEventListener("click", () => {
    input.value = "";
    filtrar();
  });

  // 4) Filtrar función
  function filtrar() {
    const texto = (input.value || "").toLowerCase().trim();
    const tipoFiltro = (filtroTipo.value || "").toLowerCase().trim();

    const tarjetas = document.querySelectorAll(".tarjeta");

    // Si no hay tarjetas → log y salir
    if (!tarjetas || tarjetas.length === 0) {
      console.warn("Filtrar: no se encontraron elementos con la clase .tarjeta");
      return;
    }

    tarjetas.forEach(tarjeta => {
      // Asegurar valores por defecto
      const nombre = (tarjeta.dataset.nombre || "").toLowerCase();
      const tipoTarjeta = (tarjeta.dataset.tipo || "").toLowerCase();

      const coincideNombre = texto === "" ? true : nombre.includes(texto);
      const coincideTipo = tipoFiltro === "" ? true : tipoTarjeta === tipoFiltro;

      const visible = coincideNombre && coincideTipo;

      // Mostrar/ocultar de forma sencilla y confiable
      if (visible) {
        // quitar clase oculto y asegurar display para layout bootstrap
        tarjeta.classList.remove("tarjeta--hidden");
        tarjeta.style.display = ""; // permite que bootstrap grid funcione
      } else {
        // agregar clase oculto para animación y esconder con display:none al final de la transición
        tarjeta.classList.add("tarjeta--hidden");
        // después de la transición (250ms) ponemos display none para quitar del flow
        setTimeout(() => {
          // si sigue oculto, esconderlo del flow
          if (tarjeta.classList.contains("tarjeta--hidden")) {
            tarjeta.style.display = "none";
          }
        }, 260);
      }
    });
  }

  // filtrar al inicio para asegurar estado (muestra todo)
  filtrar();
});

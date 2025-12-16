# Evaluación Unidad 3 – Desarrollo Frontend  
**Proyecto:** Sistema de Gestión ProREP  
**Asignatura:** Desarrollo Frontend  
**Tipo:** Frontend (independiente del Backend) 
**Estudiante: Yaritza Cid 

---

## Descripción del proyecto

Este proyecto corresponde al desarrollo del **Frontend del sistema ProREP**, cuyo objetivo es visualizar, filtrar y navegar un listado de gestores, incorporando **componentes reutilizables**, **interactividad**, **accesibilidad** y **buenas prácticas de desarrollo frontend**.

El desarrollo se realiza utilizando **Bootstrap 5 como framework de interfaz**, junto con **JavaScript nativo**, priorizando una arquitectura modular, escalable y preparada para integrarse posteriormente con un backend en PHP mediante endpoints REST.

---

## Tecnologías utilizadas

- **HTML5** (estructura semántica)
- **CSS3**
- **Bootstrap 5** (framework frontend)
- **JavaScript ES6 (DOM nativo)**
- **Font Awesome** (íconos)
- **Git & GitHub** (control de versiones)

---

## Arquitectura del proyecto

/assets
├── /css
│ └── styles.css
├── /js
│ ├── mock.js
│ ├── components.js
│ └── main.js
└── /img
index.html
README.md


---

## Componentes desarrollados (3.1.1)

El proyecto propone y desarrolla componentes reutilizables mediante JavaScript:

- **CardGestor / CardEmpresa**  
  Renderiza dinámicamente tarjetas usando DOM nativo.

- **BadgeTipo**  
  Componente visual que muestra:
  - Ícono dinámico (`FontAwesome`)
  - Color dinámico (`empresa_tipo.color.Tailwind`)

- **RenderListado**  
  Encargado de renderizar listas completas de elementos.

Estos componentes se encuentran desacoplados y reutilizables dentro del proyecto.

---

## Resolución de problemas complejos (3.1.2)

Se abordan desafíos técnicos avanzados sin uso de plantillas estáticas ni condicionales rígidos:

- Aplicación dinámica de colores desde `empresa_tipo.color.Tailwind`.
- Renderizado dinámico de íconos desde `empresa_tipo.icono.FontAwesome`.
- Construcción completa del DOM mediante JavaScript nativo.
- Manejo de errores:
  - Datos vacíos
  - JSON malformado
  - Endpoint no disponible (preparado)
- Uso de `DocumentFragment` para optimizar el rendimiento.

---

## Accesibilidad y usabilidad (3.1.3)

El proyecto incorpora criterios de accesibilidad y usabilidad:

- Uso de etiquetas HTML semánticas (`nav`, `main`, `section`, `header`, `footer`).
- Implementación de atributos ARIA:
  - `aria-label`
  - `aria-hidden`
  - `role`
- Texto alternativo en imágenes (`alt`).
- Contraste visual adecuado.
- Navegación clara y comprensible.
- Scroll interno accesible mediante navegación fija.

Estas medidas permiten compatibilidad con lectores de pantalla y mejor experiencia de usuario.

---

## Integración y despliegue (3.1.4)

El frontend está diseñado de forma **independiente del backend**, utilizando datos simulados (`mock.js`) para permitir el desarrollo desacoplado.

La estructura del proyecto permite:
- Reemplazar el mock por consumo real de endpoints REST en PHP.
- Integrarse fácilmente en entornos multidisciplinarios.
- Facilitar pruebas y despliegue progresivo.

---

## Buenas prácticas aplicadas (3.1.5)

- Separación de responsabilidades (HTML / CSS / JS).
- Componentes reutilizables.
- Código legible y comentado.
- Uso de framework UI.
- Accesibilidad integrada desde el diseño.
- Datos desacoplados mediante mock.
- Evita hardcoding y duplicación de lógica.
- Organización clara del repositorio.

---

## Control de versiones (3.1.6)

El proyecto utiliza **Git y GitHub** para la gestión del código fuente:

- Repositorio inicializado.
- Commits descriptivos y significativos. - [Repositorio del proyecto](https://github.com/YaritzaCid/fe-u3)
- Seguimiento del historial de cambios.
- Estructura organizada del proyecto.

---

##  Instrucciones de ejecución

1. Clonar el repositorio o descargar el proyecto.
2. Abrir el archivo `index.html` en un navegador web moderno.
3. No requiere servidor para el frontend.

---



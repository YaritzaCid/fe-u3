const mockEmpresaTipos = [
  {
    "id": 1,
    "nombre": "Reciclador de Base",
    "codigo": "R",
    "icono": { "FontAwesome": "fa-recycle" },
    "color": { "Tailwind": "bg-green-100", "css": "rgb(220 252 231)" },
    "activo": true
  },
  {
    "id": 2,
    "nombre": "Valorizador",
    "codigo": "V",
    "icono": { "FontAwesome": "fa-industry" },
    "color": { "Tailwind": "bg-blue-100", "css": "#eff6ff" },
    "activo": true
  },
  {
    "id": 3,
    "nombre": "Consultor",
    "codigo": "C",
    "icono": { "FontAwesome": "fa-user-tie" },
    "color": { "Tailwind": "bg-gray-100", "css": "#f3f4f6" },
    "activo": true
  },
  {
    "id": 4,
    "nombre": "Transportista",
    "codigo": "T",
    "icono": { "FontAwesome": "fa-truck" },
    "color": { "Tailwind": "bg-yellow-100", "css": "rgb(254 249 195)" },
    "activo": true
  },
  {
    "id": 5,
    "nombre": "Gestor Integral",
    "codigo": "G",
    "icono": { "FontAwesome": "fa-globe-americas" },
    "color": { "Tailwind": "bg-purple-100", "css": "rgb(243, 232, 255)" },
    "activo": true
  }
];

const mockGestores = [
  {
    "id": 1,
    "nombre": "Reciclajes Santiago Ltda.",
    "empresa_tipo": { "id": 1 }, 
    "activo": true
  },
  {
    "id": 2,
    "nombre": "Aguilera & Aguilera Ltda..",
    "empresa_tipo": { "id": 2 }, 
    "activo": true
  },
];

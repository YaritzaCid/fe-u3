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
    "empresa_tipo": { "id": 5 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 2,
    "nombre": "Aguilera & Aguilera Ltda.",
    "empresa_tipo": { "id": 4 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 3,
    "nombre": "Agencias de Representaciones Ltda",
    "empresa_tipo": { "id": 3 }, //  ejemplo como id
  },  
  {
    "id": 4,
    "nombre": "Transportes y Comercial Tressa Ltda.",
    "empresa_tipo": { "id": 4 }, //  ejemplo como id
    "activo": true
  },
  {
    "id": 5,
    "nombre": "Tavan Chile S.A",
    "empresa_tipo": { "id": 5 }, // ejemplo como id
    "activo": true
  },
    {
    "id": 6,
    "nombre": "Adizol S.A",
    "empresa_tipo": { "id": 1 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 7,
    "nombre": "Bredenmaster SpA",
    "empresa_tipo": { "id": 4 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 8,
    "nombre": "Ingomar S.A",
    "empresa_tipo": { "id": 3 }, //  ejemplo como id
  },  
  {
    "id": 9,
    "nombre": "Liqui Moly Chile SpA",
    "empresa_tipo": { "id": 4 }, //  ejemplo como id
    "activo": true
  },
  {
    "id": 10,
    "nombre": "Mimet S.A",
    "empresa_tipo": { "id": 5 }, // ejemplo como id
    "activo": true
  },
    {
    "id": 11,
    "nombre": "Raylex Diginet S.A.",
    "empresa_tipo": { "id": 1 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 12,
    "nombre": "Siom SpA",
    "empresa_tipo": { "id": 2 }, // ejemplo como id
    "activo": true
  },
  {
    "id": 13,
    "nombre": "Soquimich Comercial S.",
    "empresa_tipo": { "id": 3 }, //  ejemplo como id
  },  
  {
    "id": 14,
    "nombre": "Quiborax S.A",
    "empresa_tipo": { "id": 4 }, //  ejemplo como id
    "activo": true
  },
  {
    "id": 15,
    "nombre": "Novaproduct SpA",
    "empresa_tipo": { "id": 5 }, // ejemplo como id
    "activo": true
  }
];

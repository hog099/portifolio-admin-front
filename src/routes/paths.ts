const PATHS = {
  index: "/",

  auth: {
    index: "/login",
  },
  dashboard: {
    index: "/dashboard",
  },
  profile: {
    index: "/perfil",
    view: "/perfil/visualizar",
    create: "/perfil/criar",
    edit: "/perfil/editar",
  },
  reports: {
    index: "/relatorios",
  },
  activities: {
    index: "/atividades",
  },
  apps: {
    index: "/apps",
    create: "/apps/criar",
    edit: "/apps/editar",
  },
  users: {
    index: "/usuarios",
    view: "/usuarios/visualizar",
    roles: "/usuarios/permissoes",
    create: "/usuarios/criar",
    edit: "/usuarios/editar",
  },
  error: {
    index: "/nao-encontrado",
  },
};

export default PATHS;

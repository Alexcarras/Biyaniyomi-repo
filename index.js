// Extension Base para Biyaniyomi
export default class Extension {
  async latest(page) {
    // Aquí iría la lógica para obtener las últimas novedades en español
    return [];
  }

  async search(kw, page) {
    // Aquí la lógica de búsqueda
    return [];
  }

  async detail(url) {
    // Aquí la información del manga
    return {};
  }

  async watch(url) {
    // Aquí la extracción de páginas/imágenes del capítulo
    return [];
  }
}

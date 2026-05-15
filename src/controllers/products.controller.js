export default class ProductsController {
    async getProducts(req, res, next) {
      try {
        const products = [
          { id: 1, nome: "Homem-Aranha articulado", disponivel: true },
          { id: 2, nome: "funko pop dexter", disponivel: true },
          { id: 3, nome: "Capa da akatsuki", disponivel: false },
          { id: 4, nome: "Capinha do naruto", disponivel: false },
        ];
  
        res.json({ productsList: products });
      } catch (error) {
        next(error);
      }
    }
  }
import express from 'express';
import routes from './routes';

class App {
  //constructor é um método chamado automaticamente
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// Exportando a instacia do server
export default new App().server;
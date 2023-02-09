import express from 'express';
import { ChattyServer } from './setupServer';
import databaseConnection from './setupDatabase';
import { config } from './config';

class Application {
  public initialize(): void {
    config.validateConfig();
    databaseConnection();
    const app = express();
    const server: ChattyServer = new ChattyServer(app);

    server.start();
  }
}

const application: Application = new Application();
application.initialize();

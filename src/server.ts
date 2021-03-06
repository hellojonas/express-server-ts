import { Server } from 'http';

let server: Server;

process.on('uncaughtException', (err) => {
  console.error(err);
  console.log('UNCAUGHT EXCEPTION, SHUTTING DOWN.');
  server?.close();
});

import dotenv from 'dotenv';

dotenv.config({
  path: './config.env',
});

import app from './app';

const PORT = process.env.PORT ? +process.env.PORT : 3090;

server = app.listen(PORT, () => {
  console.log('Express App Running on Port: ' + PORT);
});

process.on('SIGTERM', () => {
  server?.close();
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error(err);
  console.log('UNHANDLED REJECTION, SHUTTING DOWN.');
  server?.close();
});

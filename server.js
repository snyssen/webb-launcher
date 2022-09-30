import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
app.use(express.static('dist/client/'))
app.use(ssrHandler);

const port = 8080;
app.listen(port);

console.log('Webb launcher version', process.env.LAUNCHER_VERSION ?? 'unkown', 'listening on port:', port);

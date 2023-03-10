/**
 * Import environment variables
 */
import dotenv from 'dotenv';
import path from 'path';

/**
 * Load environment variables
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Import CoreModules
 */
import * as CoreModules from '../../core';
import { launchServer } from '../../server';

/**
 * Import server variables
 */
import { BACKEND_BASE_URL, ALLOWED_DOMAIN, POSTS_DOMAIN, POSTS_PORT } from '../../core/environment';

/**
 * Import dependencies
 */
import express, { Express } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Import routes
 */
import * as Routes from './routes';

/**
 * Create application
 */
const app: Express = express();

/**
 * Application global settings
 */
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(CoreModules.Middlewares.Logger);
app.use(cors({ origin: ALLOWED_DOMAIN, optionsSuccessStatus: 200 }));

/**
 * Import routes
 */
app.use('/v1/posts', Routes.v1.Posts);

/**
 * Handle unmatched routes
 */
app.all('*', CoreModules.Routes.handleUnmatchedRoutes);

/**
 * Start microservice
 */
launchServer(
  app,
  POSTS_PORT,
  POSTS_DOMAIN,
  () => console.debug(`[Posts] Reachable at ${ BACKEND_BASE_URL }/${ POSTS_DOMAIN } on port ${ POSTS_PORT }...`)
);

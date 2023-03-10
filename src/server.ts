import { Express } from 'express';
import http from 'http';

/**
 * @description Launch server
 * @author Simone Gizzi <simonegizzi85@gmail.com>
 * @since 0.0.0
 * @param {Express} app
 * @param {number} port
 * @param {string} domain
 * @param {Function} [cb]
 * @return {Promise<http.Server>}
 */
export const launchServer = async (app: Express, port: number, domain: string, cb?: () => void): Promise<http.Server> => {
  try {
    return app.listen(port, domain, () => cb());
  } catch (e) {
    console.error(e);
    process.exit();
  }
};

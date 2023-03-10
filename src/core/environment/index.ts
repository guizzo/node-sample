const getEnvironmentVariable = (environmentVariable: string, defaultParam: any = null): any => {
  const variable = process.env[ environmentVariable ];
  if (!variable) {
    if (defaultParam) {
      return defaultParam;
    } else {
      throw new Error(`Couldn't find environment variable: "${ environmentVariable }"`);
    }
  } else {
    return variable;
  }
};

// General
export const ENVIRONMENT = getEnvironmentVariable('NODE_ENV');
export const ALLOWED_DOMAIN = getEnvironmentVariable('ALLOWED_DOMAIN');
export const BACKEND_BASE_URL = getEnvironmentVariable('BACKEND_BASE_URL');

// Microservices
export const AUTH_PORT = +getEnvironmentVariable('AUTH_PORT');
export const AUTH_DOMAIN = getEnvironmentVariable('AUTH_DOMAIN', 'auth');
export const POSTS_PORT = +getEnvironmentVariable('POSTS_PORT');
export const POSTS_DOMAIN = getEnvironmentVariable('POSTS_DOMAIN', 'posts');


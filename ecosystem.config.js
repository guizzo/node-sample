module.exports = {
  apps: [
    {
      name: 'auth',
      namespace: 'api',
      cwd: '/path/to/microservice/dist/folder/on/target/machine/auth',
      script: './app.js',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      env: {},
      error_file: '/var/log/pm2/api/auth.err.log',
      out_file: '/var/log/pm2/api/auth.out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      autorestart: true
    },
    {
      name: 'posts',
      namespace: 'api',
      cwd: '/path/to/microservice/dist/folder/on/target/machine/posts',
      script: './app.js',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      env: {},
      error_file: '/var/log/pm2/api/posts.err.log',
      out_file: '/var/log/pm2/api/posts.out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      autorestart: true
    }
  ]
};

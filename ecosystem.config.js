module.exports = {
  apps : [
    {
      name: 'express',
      script: './src/bin/www.js',
      watch: true,
      exec_interpreter: 'babel-node',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      ignore_watch: [              //不需要监听重启
        "node_modules",
        "logs"
      ],
      instances: 1,               // 开多少进程
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ],

  deploy : {
    production : {
      user : 'root',
      host : '47.99.60.91',
      ref  : 'origin/master',
      repo : 'https://github.com/visitor-h/express-template',
      path : '/www/wwwroot',
      ssh_options: 'StrictHostKeyChecking=no',
      "post-deploy" : 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }

};

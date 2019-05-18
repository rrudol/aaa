module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-120-98-206.eu-central-1.compute.amazonaws.com',
      ref  : 'origin/master',
      repo : 'https://github.com/rrudol/aaa.git',
      path : '/tmp/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};

module.exports = {
    apps: [{
      name: 'praveen-inventory',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-54-152-103-51.compute-1.amazonaws.com',
        key: '~/.ssh/ec2-inventory.pem',
        ref: 'origin/master',
        repo: 'git@github.com:rockkura/praveen-inventory.git',
        path: '/home/ubuntu/praveen-inventory',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
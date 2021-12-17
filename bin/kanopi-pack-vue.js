#!/usr/bin/env node

const path = require('path');
const { 
    chalk, 
    standardPackage,
    vue: { development: developmentConfig, production: productionConfig } 
} = require(path.resolve(__dirname, '..', 'index'));
const {
    commands: { standard: program },
    runners: { runDevServer, runWebpack }
} = standardPackage;

program
    .command('vue')
    .description('Run Vue application builds, set environment to develoment for HMR')
    .argument('[environment]', 'Choose production (default) or development')
    .action((environment) => {
        const isDevelopment = 'development' === environment;

        console.log(chalk.greenBright('Package:\tKanopi Pack Vue'))
        console.log(chalk.yellow('Environment:\t' + (isDevelopment ? 'Development' : 'Production')));
        console.log('');
        isDevelopment
            ? runDevServer(developmentConfig)
            : runWebpack(productionConfig);
    });

program.parse(process.argv);

const path = require('path');
const { 
    standardPackage: { 
        configuration: { production: productionConfiguration },
        environment: { standard: { resolver: { requirePackageModule } } }
    }
} = require(path.resolve(__dirname, '..', 'standard-loader'))();
const merge = requirePackageModule('webpack-merge');
const VuePluginLoader = requirePackageModule('vue-loader/lib/plugin');

module.exports = merge.smart(
    productionConfiguration,
    {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new VuePluginLoader(),
        ]
    }
);
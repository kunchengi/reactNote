const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: {
        plugins: [['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            //style为true即是less,设置了主题自定义需要改为true
            style: true,
        }]],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
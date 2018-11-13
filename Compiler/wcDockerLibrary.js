require.config({
    baseUrl: "./node_modules",
    shim: {
        // Libraries
        lodash: {
            exports: '_'
        }
    },
    packages: [
        {
            name: 'dcl',
            location: './dcl'   //points to node_modules/dcl
        },
        {
            name: 'wcDocker',
            location: '../Code'
        },
        {
            name: 'lodash',
            location: './lodash-compat'   //points to node_modules/dcl
        }
    ]
});

require.config({
    config: {}
});

//require docker
require([
    "wcDocker/docker",
    "wcDocker/splitter",
    "wcDocker/tabframe",
    "wcDocker/iframe",
    "wcDocker/ThemeBuilder"
], function (wcDocker, wcSplitter, wcTabFrame, wcIFrame, wcThemeBuilder) {

    //export
    window['wcDocker'] = wcDocker;
    window['wcSplitter'] = wcSplitter;
    window['wcTabFrame'] = wcTabFrame;
    window['wcIFrame'] = wcIFrame;
    window['wcThemeBuilder'] = wcThemeBuilder;
    console.log('exported wcDocker');
}, undefined, true);    // Force synchronous loading so we don't have to wait.
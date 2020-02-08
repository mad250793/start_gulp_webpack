const path = require('path');
const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {


    // mode: 'production',
    mode: 'development',
    devtool: '',
    // devtool: 'source-map',
    //Точка входа по дефу index.js
    // entry: ['babel-polyfill', './app/js/app.js'],
    entry: './app/js/app.js',


    output: {
        // Название итогового файла по дефу bandle.js
        filename: '../build/app.min.js',
    },
    // devServer: {
    //   contentBase: path.join(__dirname, 'app'),
    //   compress: true,
    //   port: 3000
    // },

    module: {


        rules: [

            // {
            //   test: /\.js$/,
            //   include: [
            //     path.resolve(__dirname, 'node_modules', '@dogstudio', 'highway')
            //   ],

            // },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },



        ]
    },


    plugins: [

        // new GenerateSW({


        //   importWorkboxFrom: 'local',
        //   importsDirectory: './app/build/',
        //   swDest: './app/build/sw.js',
        //   skipWaiting: true,
        //   clientsClaim: true,
        //   precacheManifestFilename: 'precache.[manifestHash].js',
        //   offlineGoogleAnalytics: true,
        //   cleanupOutdatedCaches: true,
        //   // importScripts: ['']
        //   // maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        //   include: [/\.html$/, /\.js$/, /\.css$/, /\.svg$/, /\.png$/, /\.jpg$/, /\.jpeg$/, /\.webp$/, /\.wolf2$/]



        // })





        // new BundleAnalyzerPlugin({
        //   analyzerMode: 'static',
        //   analyzerPort: 3000,
        //   openAnalyzer: false,
        // }),


        //   new webpack.ProvidePlugin( {
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'jquery': 'jquery'
        // }),




        // new webpack.ProvidePlugin({
        //   $: "../js/jquery.min.js",
        //   jQuery: "../js/jquery.min.js",
        //   "window.jQuery": "../js/jquery.min.js",
        //   'jquery': '../js/jquery.min.js"'
        // }),

        // new webpack.LoaderOptionsPlugin({
        //   minimize: true,
        //   debug: false,
        //   options: {
        //         eslint: {
        //           formatter: require('eslint-formatter-pretty')
        //         }
        //       }
        // }),


        // new UglifyJsPlugin(),

    ],
    // resolve: {
    //     extensions: ['.js'],
    //     alias: {
    //         mmenu: path.resolve('node_modules', 'jquery.mmenu/dist/jquery.mmenu.all.js'),
    //         TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
    //         TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
    //         TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
    //         TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
    //         ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
    //         'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    //         'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    //     },
    // },






};
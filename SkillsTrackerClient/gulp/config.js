'use strict';

module.exports = {

  'serverport': 35729,

  'scripts': {
    'src': './app/js/**/*.js',
    'dest': './build/js/'
  },

  'images': {
    'src': './app/images/**/*.{jpeg,jpg,png}',
    'dest': './build/images/'
  },

  'styles': {
      //'src': ['./app/styles/**/*.scss', '.\node_modules\bootstrap-sass\assets\stylesheets\*.scss'],
    'src': './app/styles/**/*.scss',
    'dest': './build/css/'
  },

  'sourceDir': './app/',

  'buildDir': './build/'

};
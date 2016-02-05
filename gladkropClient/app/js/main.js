(function () {

  'use strict';
    // test ghgh
  require('angular');
  require('angular-route');
  require('angular-animate');
  require('angular-material');
  var klientforsideCtrl = require('./controllers/klientforsideController');
  var frontpageCtrl = require('./controllers/frontpageController');
  var menuService = require('./services/MenuService');

  angular.module('gladkropApp', ['ngRoute', 'ngAnimate', 'ngMaterial','ngMdIcons'])

  .config([
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider',
    '$mdIconProvider',
    function($locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/klientforside", {
          templateUrl: "./partials/klientForside.html",
          controller: "klientforsideController"
        })
        .otherwise({
           redirectTo: '/klientforside'
        });

        $mdThemingProvider.
            theme('default')
            .primaryPalette('light-blue')
            .accentPalette('red');

        $mdIconProvider
            .defaultIconSet("./images/svg/avatars.svg", 128)
            .icon("menu"       , "./images/svg/menu.svg"        , 24)
            .icon("share"      , "./images/svg/share.svg"       , 24)
            .icon("google_plus", "./images/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./images/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./images/svg/twitter.svg"     , 512)
            .icon("phone"      , "./images/svg/phone.svg"       , 512);

    }
  ])
  //Load controller
     // .('MenuService', ['$q',  menuService])

      .controller('frontpageController', ['$scope', '$mdSidenav' , frontpageCtrl])
  .controller('klientforsideController', ['$scope', '$http',  klientforsideCtrl]);

}());
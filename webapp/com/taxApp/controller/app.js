/**
 * Created by karan on 6/13/2016.
 */
// app.js
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        });


});

myApp.run(function ($location, $rootScope) {
    var postLogInRoute;

    console.log("route change 1");
    $rootScope.$on('$stateChangeStart', function (event, nextRoute, currentRoute) {

        console.log("route change 2");
        //if login required and you're logged out, capture the current path
        /*if (nextRoute.loginRequired && Account.loggedOut()) {
            postLogInRoute = $location.path();
            $location.path('/login').replace();
        } else if (postLogInRoute && Account.loggedIn()) {
            //once logged in, redirect to the last route and reset it
            $location.path(postLogInRoute).replace();
            postLogInRoute = null;
        }*/
    });
});
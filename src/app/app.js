/**
 * Created by shahkar on 8/17/2016.
 */

var myApp = angular.module('myApp', ['ui.router','formData']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/frontPage');
    $stateProvider
        .state('frontPage', {
            url: '/frontPage',
            abtract: true,
            templateUrl: 'view/frontPagesHtml/frontPage.html'
        })
        .state('frontPage.home', {
            url: '/home',
            templateUrl: 'view/frontPagesHtml/home.html'
        })
        .state('frontPage.about', {
            url: '/about',
            templateUrl: 'view/frontPagesHtml/about.html'
        })
        .state('frontPage.login', {
            url: '/login',
            templateUrl: 'view/frontPagesHtml/login.html'
        })
        .state('frontPage.register', {
            url: '/register',
            templateUrl: 'view/frontPagesHtml/register.html'
        })
        .state('mainApp', {
            url: '/mainApp',
            templateUrl: 'view/mainAppPagesHtml/mainApp.html'
        })
        .state('mainApp.dashboard', {
            url: '/dashboard',
            templateUrl: 'view/mainAppPagesHtml/dashboard.html'
        })
        .state('mainApp.appRun', {
            url: '/appRun',
            abstract: true,
            templateUrl: 'view/mainAppPagesHtml/appRun.html'
        })
        .state('mainApp.appRun.first', {
            url: '/first',
            templateUrl: 'directives/formData/formProfile.tpl.html'
        })
        .state('mainApp.appRun.second', {
            url: '/second',
            templateUrl: 'directives/formData/formInterest.tpl.html'
        })
        .state('mainApp.appRun.third', {
            url: '/third',
            templateUrl: 'directives/formData/formFinal.tpl.html'
        })
        ;


});
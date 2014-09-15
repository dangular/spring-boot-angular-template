/**
 * Author: Dan Hayes
 * Company: Chariot Solutions
 * Email: dhayes@chariotsolutions.com
 * Date: 7/29/14
 * Time: 12:30 PM
 */
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/partials/contact.html'
        })

}]);
 
 
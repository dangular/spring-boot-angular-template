/**
 * Author: Dan Hayes
 * Company: Chariot Solutions
 * Email: dhayes@chariotsolutions.com
 * Date: 9/15/14
 * Time: 9:20 AM
 */
'use strict';

var app = angular.module("app", ['ngSanitize', 'ui.router', 'ui.bootstrap', 'angularSpinner', 'alert.services']);

app.run(['$rootScope', 'usSpinnerService', function($rootScope, usSpinnerService) {

    $rootScope.startWorking = function() {
        usSpinnerService.spin('working');
    };

    $rootScope.stopWorking = function() {
        usSpinnerService.stop('working');
    };

}]);

app.controller('AppController',['$scope', function($scope){

}]);

 
 
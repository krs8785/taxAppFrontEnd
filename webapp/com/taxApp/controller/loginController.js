
/**
 * Created by karan on 6/13/2016.
 */
var loginController  = angular.module('loginController', []);



loginController.factory('loginFactory', function(){
    return {
        doUserLogin:function($http,userLoginInformation){
            var url = "http://localhost:9191/login/userAuthenticate";
            return $http({
                method: 'POST',
                url: url,
                data: userLoginInformation
            });
        }
    }
});


loginController.controller('loginFormController', function($http,$scope,$location,loginFactory) {
    $scope.user = {};
    $scope.loginUser = function() {
        loginFactory.doUserLogin($http, $scope.user ).success(function (data, status) {
            console.log("login successfull");
            $scope.greeting = data;
            $location.path('/nraTaxFile/main.html');
        }).error(function (data, status) {
            console.log("Error occured while login");
        });
    }
});
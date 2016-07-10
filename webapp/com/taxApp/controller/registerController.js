/**
 * Created by karan on 6/16/2016.
 */
var registerController  = angular.module('registerController', []);

registerController.factory('registerFactory', function(){
    return {
        doUserRegistration:function($http,userRegisterInformation){
            var url = "http://localhost:9191/register/insertNewUser";
            return $http({
                method: 'POST',
                url: url,
                data: userRegisterInformation
            });
        }
    }
});

registerController.controller('registerFormController', function($http,$scope,$location,registerFactory) {
    console.log($location.absUrl());
    $scope.user = {};
    $scope.registerUser = function() {
        registerFactory.doUserRegistration($http, $scope.user ).success(function (data, status) {
            console.log("Registration successfull");
            $scope.greeting = data;
        }).error(function (data, status) {
            console.log("Error occured while registration");
        });
    }
});
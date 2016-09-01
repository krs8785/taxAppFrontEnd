var formData = angular.module('formData',[]);

formData.directive('formData',function(){
    return {
        restrict: 'EA',
        scope: {},
        replace: true,
        link: function($scope, element, attributes){

        },
        controller: function($scope,$attrs,$http){


            $scope.formData = {};


            $scope.processForm = function(){
                console.log("processFrom");
            }
        },
        templateUrl: 'directives/formData/formData.tpl.html'
    }
});
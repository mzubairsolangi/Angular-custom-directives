/**
 * Created by admin on 5/5/2016.
 */
angular.module('abc')
    .directive('customHeader', function() {
        return {
            restrict: 'AE',
            templateUrl: 'views/header.html',
            link:link
        };
        function link(scope, element,attr){

        }
    });

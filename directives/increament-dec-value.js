/**
 * Created by Muhammad Zubair on 5/5/2016.
 */
angular.module('abc')
    .directive('customIncrementDecrement', function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: false, // Access existing controller scope.
            template: '\
              <div class="btn-group">\
                <button class="btn btn-success" ng-click="inc()">+</button>\
                <button class="btn" disabled>{{spinnerText()}}</button>\
                <button class="btn btn-danger" ng-click="dec()">-</button>\
              </div>',
            link: link
        };

        function link (scope) {
            scope.inc = function() {
                scope.value++;
            };

            scope.dec = function() {
                scope.value--;
            };

            scope.spinnerText = function() {
                return scope.value;
            };
        }
    });

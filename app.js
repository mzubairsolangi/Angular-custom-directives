/**
 * Created by Muhammad Zubair on 5/5/2016.
 */
angular.module('abc',[])
    .controller('ctrl',ctrl);

ctrl.$inject = ['$scope','$window'];

function ctrl ($scope, $window){

    //increment decrement value
    $scope.value = 1;

    // rating stars
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
        console.log('Rating selected - ' + rating);
        $scope.rating = rating
    };
}

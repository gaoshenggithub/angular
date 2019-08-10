angular.module('myApp', [])
    .controller('myInit', ['$scope', function ($scope) {

        $scope.data = [
            {username: 'OK', status: false},
            {username: '好的啦', status: true},
            {username: '没问题', status: false},
        ];
        $scope.add = function () {
            if (!$scope.message) {
                return
            } else {
                $scope.data.unshift({username: $scope.message, status: false});
                $scope.message = ''
            }
        };
        $scope.delete = function () {
            $scope.data = $scope.data.filter(e => !e.status)
        }
    }]);

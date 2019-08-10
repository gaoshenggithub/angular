angular.module('myApp', [])
    .controller('biji', ['$scope', function ($scope) {
        $scope.message = '';
        $scope.getCount = function () {
            if ($scope.message.length > 100) {
                $scope.message = $scope.message.slice(0, 100);
            }
            return 100 - $scope.message.length
        };
        $scope.delete = function () {
            $scope.message = ''
            localStorage.removeItem('note_key', $scope.message)
        };
        $scope.save = function () {
            localStorage.setItem('note_key', $scope.message)
        };
        $scope.read = function () {
            $scope.message = JSON.parse(localStorage.getItem('note_key') || '[]');
        }
    }]);

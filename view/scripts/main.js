var scotchTodo = angular.module('app', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/quotes')
        .success(function(data) {
            $scope.quotes = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createQuote = function() {
        $http.post('/api/quotes', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.quotes = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    /* delete a todo after checking it
    $scope.deleteQuote = function(id) {
        $http.delete('/api/delete_quote/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };*/

}
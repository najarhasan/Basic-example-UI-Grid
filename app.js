var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.myData = [
    {
        "Name": "Najarhasan",
        "Email": "hasnutech@gmail.com",
        "Phone": "xyz",
        "Add": "Mumbai"
    },
    {
        "Name": "test123",
        "Email": "test123@gmail.com",
        "Phone": "test123",
        "Add": "test123"
    },
    {
        "Name": "xyz123",
        "Email": "xyz123@gmail.com",
        "Phone": "xyz123",
        "Add": "xyz123"
    }
];
}]);

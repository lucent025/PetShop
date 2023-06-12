app = angular.module("myApp", []);
app.controller("loginController", function ($scope, $http, $rootScope) {
    $scope.account = [];
    $http.get("./data/account.json").then(function (response) {
        $scope.account = response.data;
    });

    $scope.data = {};
    $scope.loginSubmit = function () {
        var email = $scope.data.emailField;
        var password = $scope.data.passwordField;

        for(a of $scope.account) {
            if(a.email === email && a.password === password) {
                alert('success')
            } else {
                alert('error')
            }
        }
    };

});
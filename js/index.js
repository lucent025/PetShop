app = angular.module("myApp", ["ngRoute"]);

app.controller("productController", function ($scope, $http) {
    $scope.products = [];
    $http.get("./data/data.json").then(function (response) {
        $scope.products = response.data;
    });
});

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./home.html"
    })
        .when("/about", {
            templateUrl: "./about.html"
        })
        .when("/contact", {
            templateUrl: "./contact.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
})

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    })
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    })
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Loi, khong tai duoc trang")
    })
})
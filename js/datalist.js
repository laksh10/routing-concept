var app=angular.module("dataModule", ["ngRoute"]);
           
app.controller("dataCtrl", function($scope, $http){
 $http.get("json/datalist.json")
    .then(function(response) {
      console.log(response);

        $scope.names = response.data.GetCategoryResult;
    }); 
}); 

         app.config(function($routeProvider, $locationProvider){
                  
                  $routeProvider
                  
                  .when("/HTML", {
                  	templateUrl:"html.html",
                     controller : "htmlCtrl"
                  })
                  .when("/CSS", {
                  	templateUrl:"css.html",
                    controller : "cssCtrl"

                  })
                  .when("/Bootstrap", {
                  	templateUrl:"bootstrap.html",
                    controller : "bootstrapCtrl"


                  })
                  .otherwise({
                  	redirectTo:"/css"
                  });

                  $locationProvider.html5Mode(true);



});  

         app.controller("htmlCtrl", function ($scope) {
              $scope.display = "Welcome to HTML tutorial";
});
         app.controller("cssCtrl", function ($scope) {
              $scope.display = "Welcome to CSS tutorial";
});
         app.controller("bootstrapCtrl", function ($scope) {
              $scope.display = "Welcome to BOOTSTRAP tutorial";
});








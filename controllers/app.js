var NC = angular.module('NC', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'templates/lobby.html',   controller: 'LobbyCtrl'}).
      when('/field', {templateUrl: 'templates/field.html', controller: 'FieldCtrl'}).
      otherwise({redirectTo: '/'});
}]);
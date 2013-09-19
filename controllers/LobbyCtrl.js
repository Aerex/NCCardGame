'use strict';

function LobbyCtrl($rootScope,$scope,socket,$location) {

$scope.templates = [{
	name: "tableCreation.html",
	url: "tableCreation.html"
},
{
	name: "tableUserRequest.html",
	url: "tableUserRequest.html"
}];

socket.on('alarm:user', function (message)
{
	$scope.template = $scope.templates[1];	
	document.getElementById("tableMenu").style.display = 'block';
	document.getElementById("lobbypanel").style.opacity = '.1';
	$scope.requestMsg = message.message;
	$scope.newUser = message.newuser;
	$scope.tableId = message.tableId;

	
});

socket.on('changescreen:field', function (message)
{
		if($rootScope.tableId === message.tableId)
		{
			$location.path('/field');
		}
})

$scope.template = $scope.templates[0];

$rootScope.createdTable = false;
	socket.on('send:tables', function (message)
	{	
		document.getElementById("tableMenu").style.display = "none";
		document.getElementById("lobbypanel").style.opacity = "";
 		$scope.tables = message.tables;
  
	});

 $scope.$on('$viewContentLoaded', function () {
 	$rootScope.user = "Shin";
 	$rootScope.id = 1;
 	socket.emit('get:tables');
  

 });
  
  /*Start Ctrl*/
}
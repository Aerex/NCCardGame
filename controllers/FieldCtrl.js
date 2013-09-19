'use strict';
//io.connect("http://54.227.255.85:1222/");
//socket.emit("addPlayer", "Player1");
function FieldCtrl($rootScope,$scope, cardlist, socket) {
 var ctx_handler;
  var black = "#FF000000";
socket.on('send:cardlist', function (data)
{ 
    $scope.shinobiStack = data.shinobiCards[0];
    $scope.shinobiStack_p = $scope.shinobiStack.length;
    $scope.updateStackIndicies($scope.shinobiStack);

    $scope.abilityStack = data.abilityCards[0];
    $scope.abilityStack_p = $scope.abilityStack.length;
    $scope.updateStackIndicies($scope.abilityStack);

    $scope.itemStack = data.itemCards[0];
    $scope.itemStack_p = $scope.itemStack.length;
    $scope.updateStackIndicies($scope.itemStack);

    $scope.eventStack = data.eventCards[0];
    $scope.eventStack_p = $scope.eventStack.length;
    $scope.updateStackIndicies($scope.eventStack);

    $scope.cablStack = data.cablCards[0];
    $scope.cablStack_p = $scope.cablStack.length;
    $scope.updateStackIndicies($scope.cablStack);

    $scope.specialStack = data.specialCards[0];
    $scope.specialStack_p = $scope.specialStack.length;
    $scope.updateStackIndicies($scope.specialStack);

    $scope.jutsuStack = data.jutsuCards[0];
    $scope.jutsuStack_p = $scope.jutsuStack.length;
    $scope.updateStackIndicies($scope.jutsuStack);
    
});


  
  $scope.templates = [{
    name: "shinobi_template.html",
    url: "shinobi_template.html"
  },
  {
    name: "ability_template.html",
    url:  "ability_template.html"
  },
  {
    name: "item_template.html",
    url: "item_template.html"
  },
  {
    name: "event_template.html",
    url: "event_template.html"
  },
  {
    name: "cabl_template.html",
    url: "cabl_template.html"
  },
  {
    name: "special_template.html",
    url: "special_template.html"
  },
  {
    name: "jutsu_template.html",
    url: "jutsu_template.html"
  }];

  //$scope.template = $scope.templates[0];
 $scope.zoomPreviewCard = function (id)
 {
 		socket.emit('send:message', {message: $scope.name});
 };

 $scope.updateStackIndicies = function(stacks)
 {
    for(var i = 0; i < stacks.length; i++)
    {
      stacks[i].stack_index = i;
    }
 }


 $scope.isEmptyJSON = function(ob)
 {
    var isEmpty = true;
    for(keys in ob)
    {
       isEmpty = false;
       break; 
    }
    return isEmpty;
 }

 $scope.peek = function (stack)
 {
      $scope.shinobiStack_p--;
      return stack[$scope.shinobiStack_p];
 };




$scope.$watch('shinobiStack', function () {
    if($scope.shinobiStack.length > 0 && $scope.isEmptyJSON($scope.shinobi_set_one) && $scope.isEmptyJSON($scope.shinobi_set_two) && $scope.isEmptyJSON($scope.shinobi_set_three)){
       $scope.shinobi_set_three = $scope.peek($scope.shinobiStack);
       $scope.shinobi_set_two = $scope.peek($scope.shinobiStack);
       $scope.shinobi_set_one = $scope.peek($scope.shinobiStack);
      }
    }
    , true);

  //TODO: Need to figure out how cards will be dynamically created
  var preview_shinobi = document.getElementsByClassName('preview-shinobi-small')[0];
  ctx_handler = preview_shinobi.getContext("2d");
  ctx_handler.fillStyle = black;
  ctx_handler.fillRect(30,20,230,100);

  var preview_jutsu = document.getElementsByClassName('preview-jutsu-small')[0];
  ctx_handler = preview_jutsu.getContext("2d");
  ctx_handler.fillStyle = black;
  ctx_handler.fillRect(30,20,230,100);

  var preview_event = document.getElementsByClassName('preview-ability-small')[0];
  ctx_handler = preview_event.getContext("2d");
  ctx_handler.fillStyle = black;
  ctx_handler.fillRect(30,20,230,100);

  var preview_special = document.getElementsByClassName('preview-special-small')[0];
  ctx_handler = preview_special.getContext("2d");
  ctx_handler.fillStyle = black;
  ctx_handler.fillRect(30,20,230,100);

  preview_special = document.getElementsByClassName('preview-special-small')[1];
  ctx_handler = preview_special.getContext("2d");
  ctx_handler.fillStyle = black;
  ctx_handler.fillRect(30,20,230,100);


    
 
   /* 
  JavaScript:var ele = document.getElementById('s_2');ele.className+=' flip';
  ctx = ele.childNodes[1].getContext('2d');
  ctx.fillStyle='#FF000000';
  ctx.fillRect(30,20,210,100);
  ele.childNodes[1].className = 'preview-shinobi-small';*/

 $scope.$on('$viewContentLoaded', function () {

  socket.emit("get:cardlist",{tableId: $rootScope.tableId});
  var p;


  $scope.cardlist = cardlist;
  $scope.shinobiStack = [];
  $scope.abilityStack = [];
  $scope.itemStack = [];
  $scope.eventStack = [];
  $scope.cablStack = [];
  $scope.specialStack = [];
  $scope.jutsuStack = [];
  $scope.shinobi_set_one = {};
  $scope.shinobi_set_two = {};
  $scope.cardPreview = {};
  $scope.template = {};

  $scope.Player1 = {};
  $scope.Player2 = {};
  $scope.Player1.hand = [];
  $scope.Player2.hand = [];
  

 });
  /*Start Ctrl*/
};
'use strict';

NC.directive('flip', function flip ()
{
	return {
		restrict: 'A',
		link: function ($scope, element, attrs) {
			$scope.$watch('stack', function(val) {
				var ele;
				var ctx;
				/*TODO: use rootScope to grab fillRect value relative to the screen resolution*/

				if(val.card_type == "shinobi")
				{
					if(val.stack_index == 0)
					{
						//debugger;	
						ele = document.getElementById("#s_0");
						//console.log(ele);
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-shinobi-small';
	  					//$scope.shinobiStack.shift();
			
					}

					else if(val.stack_index == 1)
					{
						ele = document.getElementById("#s_1");
						//console.log(ele);
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(40,20,200,100);
	  					ele.childNodes[1].className = 'preview-shinobi-small';
					}
					else if(val.stack_index == 2)
					{
						ele = document.getElementById('#s_2');
					//	console.log(ele);
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(40,20,200,100);
	  					ele.childNodes[1].className = 'preview-shinobi-small';
					
					}	
				}
				else if(val.card_type == "ability")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById("#a_0");
						console.log(ele);
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-ability-small';
					}

					else if(val.stack_index == 1)
					{
						ele = document.getElementById("#a_1");
						console.log(ele);
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-ability-small';
					}

					else if(val.stack_index == 2)
					{
						ele = document.getElementById("#a_2");
						console.log(ele);
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-ability-small';
					}
				}

				else if(val.card_type == "item")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById("#i_0");
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-item-small';
						
					}

					else if(val.stack_index == 1)
					{
						ele = document.getElementById("#i_1");
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-item-small';
					
					}

					else if(val.stack_index == 2)
					{
						ele = document.getElementById("#i_2");
						console.log(ele);
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-item-small';
					}
				}

				else if(val.card_type == "event")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById('#e_0');
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-event-small';
				

					}
					else if(val.stack_index == 1)
					{
						ele = document.getElementById('#e_1');
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
						ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-event-small';
					}

					else if(val.stack_index == 2)
					{
						ele = document.getElementById('#e_2');
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
						ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-event-small';
					}
				}

				else if(val.card_type == "cabl")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById('#c_0');
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-cabl-small';
				
					}

					else if(val.stack_index == 1)
					{
						ele = document.getElementById('#c_1');
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-cabl-small';
				
					}

					else if(val.stack_index == 2)
					{
						ele = document.getElementById('#c_2');
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-cabl-small';
				
					}
				}

				else if(val.card_type == "special")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById('#x_0');
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-special-small';
				
					}

					else if(val.stack_index == 1)
					{
						ele = document.getElementById('#x_1');
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-special-small';
					}

					else if(val.stack_index == 2)
					{
						ele = document.getElementById('#x_2');
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-special-small';	
					}
				}

				else if(val.card_type == "jutsu")
				{
					if(val.stack_index == 0)
					{
						ele = document.getElementById('#j_0');
						ele.className+= " flip1";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-jutsu-small';	
				
					}
					else if(val.stack_index == 1)
					{
						ele = document.getElementById('#j_1');
						ele.className+= " flip2";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-jutsu-small';	
					}
					else if(val.stack_index == 2)
					{
						ele = document.getElementById('#j_2');
						ele.className+= " flip3";
						ctx = ele.childNodes[1].getContext('2d');
	  					ctx.fillStyle='#FF000000';
	  					ctx.fillRect(45,20,200,100);
	  					ele.childNodes[1].className = 'preview-jutsu-small';	
					}
				}
				
			}, true);
		}	
	};
});
	

NC.directive('updatecard', function ()
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {
				var type = attrs.id.slice(0,1);
				var cardType = attrs.id.slice(1,2);
				var cardIndex = attrs.id.slice(3,4).valueOf();
				var card;
				//scope.cardPreview = {};
				console.log("CARDTYPE: " + cardType);
			//	scope.$apply();

			if(type === "#" && cardIndex < 3)
			{
				if(cardType == "s")
				{
					card = scope.shinobiStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.cardCost = card.cost;
					scope.cardPreview.flavorText = card.flavortext;
					scope.cardPreview.N_acc = card.ninjutsu_acc;
					scope.cardPreview.N_d = card.ninjutsu_dodge;
					scope.cardPreview.T_acc = card.taijutsu_acc;
					scope.cardPreview.T_d = card.taijutsu_dodge;
					scope.cardPreview.G_dc = card.genjutsu_acc;
					scope.cardPreview.G_save = card.genjutsu_save;
					scope.cardPreview.stealth = card.stealth;
					scope.cardPreview.awareness = card.awareness;
					scope.cardPreview.shinobi_group = card.rank;
					scope.cardPreview.blca = card.bl_ca;
					scope.cardPreview.kinjutsu = card.kinjutsu;
					scope.cardPreview.effectText = card.effecttext;
					scope.cardPreview.hp = card.hp;

					scope.template.url = scope.templates[0].url;
					scope.template.name = scope.templates[0].name;
				
					document.getElementById('cardPreview').style.backgroundImage = "url('static/img/shinobi_template.png')";
				} 

				else if(cardType == "a")
				{

					//scope.cardPreview = {};
					card = scope.abilityStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.effect = card.effect;
					scope.cardPreview.prereq = card.prereq;
					scope.cardPreview.type = card.type;
					scope.cardPreview.cardCost = card.cost;
			scope.template.url = scope.templates[1].url;
			scope.template.name = scope.templates[1].name;

						console.log("SCOPE: " + scope.cardPreview.cardName);
					//console.log("TEMPLATE: " + scope.template);
					
					document.getElementById('cardPreview').style.backgroundImage = "url('static/img/ability_template.png')";
				}

				else if(cardType == "i")
				{
					card = scope.itemStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.apCost = card.ap_cost;
					scope.cardPreview.cost = card.cost;
					scope.template.url = scope.templates[2].url;
					scope.template.name = scope.templates[2].name;
					scope.cardPreview.effect = card.effect;

					document.getElementById('cardPreview').style.backgroundImage = "url('static/img/item_template.png')";
				}

				else if(cardType == "e")
				{
					card = scope.eventStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.cost = card.cost;
					scope.template.url = scope.templates[3].url;
					scope.template.name = scope.templates[3].name;
					scope.cardPreview.hp = card.hp;
					scope.cardPreview.effect = card.effect;

					document.getElementById('cardPreview').style.backgroundImage = "url('static/img/event_template.png')";
				}

				else if(cardType == "c")
				{
					card = scope.cablStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.cardCost = card.cost;
					scope.cardPreview.apCost = card.ap_cost;
					scope.template.url = scope.templates[4].url;
					scope.template.name = scope.templates[4].name;
					scope.cardPreview.prereq = card.prereq;
					scope.cardPreview.effect = card.effect;
					scope.cardPreview.cabl = card.cabl;

					document.getElementById("cardPreview").style.backgroundImage = "url('static/img/cabl_template.png')";

				}

				else if(cardType == "x")
				{
					card = scope.specialStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.cardCost = card.cost;
					scope.cardPreview.apCost = card.ap_cost;
					scope.template.url = scope.templates[5].url;
					scope.template.name = scope.templates[5].name;
					scope.cardPreview.prereq  = card.prereq;
					scope.cardPreview.effect = card.effect;

					document.getElementById("cardPreview").style.backgroundImage = "url('static/img/special_template.png')";

				}

				else if(cardType == "j")
				{
					card = scope.jutsuStack[cardIndex];
					scope.cardPreview.cardName = card.name;
					scope.cardPreview.cardCost = card.cost;
					scope.cardPreview.apCost = card.ap_cost;
					scope.template.url = scope.templates[6].url;
					scope.template.name = scope.templates[6].name;
					scope.cardPreview.prereq = card.prereq;
					scope.cardPreview.effect = card.effect;

					document.getElementById("cardPreview").style.backgroundImage = "url('static/img/jutsu_template.png')";
				}


			}
				
				scope.$apply();
				console.log(scope);


			};
			element.bind('click', clickingCallback);
		}
});

NC.directive('highlightbutton', function ()
{
		return function(scope, element, attrs) {
			var HoverInCallback = function() {
			
				var ele = attrs.$$element[0].style.backgroundColor = "#def";
			};

			var HoverOutCallback = function() {
			
				var ele = attrs.$$element[0].style.backgroundColor = "";
			};


			element.bind('mouseenter', HoverInCallback);
			element.bind('mouseleave',HoverOutCallback);
		}
});


NC.directive('opentablemenu', function ($rootScope)
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {
			
			if(!$rootScope.createdTable)
			{
				document.getElementById("tableMenu").style.display = 'block';
				document.getElementById("lobbypanel").style.opacity = '.1';
	
			}
			
		};


			element.bind('click', clickingCallback);
		}
});

NC.directive('killtable', function ()
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {		
				document.getElementById("tableMenu").style.display = "none";
				document.getElementById('lobbypanel').style.opacity = "";
			};


			element.bind('click', clickingCallback);
		}
});

NC.directive('createtable', function ($rootScope,socket)
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {

				socket.emit('send:newtable', {message: scope.tableName, player: $rootScope.user});
				$rootScope.createdTable = true;

			};


			element.bind('click', clickingCallback);
		}
});

NC.directive('jointable', function ($rootScope,socket)
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {
				var tableId = attrs.$$element[0].id
				socket.emit('join:table',{user: $rootScope.user, tableId:tableId});
				$rootScope.tableId = tableId;
			};


			element.bind('click', clickingCallback);
		}
});

NC.directive('acceptuser', function ($rootScope,socket,$location)
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {
				var tableId = scope.tableId;
				socket.emit('join:tableaccepted',{user: scope.newUser, tableId:tableId});
				$rootScope.tableId = tableId;
				socket.emit('table:setup',{tableId:tableId});
			};


			element.bind('click', clickingCallback);
		}
});


NC.directive('denyuser', function ()
{
		return function(scope, element, attrs) {
			var clickingCallback = function() {		
				document.getElementById("tableMenu").style.display = "none";
				document.getElementById('lobbypanel').style.opacity = "";
			};


			element.bind('click', clickingCallback);
		}
});



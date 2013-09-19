
var express = require('express'),
	http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var async = require('async');

var databaseUrl = "NC";
var collections = ["shinobi_cards", "event_cards", "ability_cards", "cabl_cards", "item_cards", "jutsu_cards", "special_cards"];
var table = require("./Table");
var game = require("./Game");
var db = require("mongojs").connect(databaseUrl,collections);
var shinobiCards = [];
var tables = [];
var existingTable = false;
var clients = [];
var socket;
var message;
var o;
var g;

var x = 1;


/*async.series([

	function(callback){
		db.shinobi_cards.find(function(err, cards) {
			callback(null,cards);
		});
	}
],

function(err,results){
	
	shinobiCards = results[0];	


console.log("SF "  + shinobiCards);

});


console.log("SDFSDF "  + shinobiCards);
*/

/*var request = function(callback){

db.shinobi_cards.find(function(err, cards) {
	//console.log(shinobiCards);
	shinobiCards[x] = cards;
	x++;

});

	callback(cards);

}
*/
server.listen(1222);
//var socket = io.listen("1.1.1.1", 1222);
//socket.set("log level", 1);



io.sockets.on('connection', function(client) {
	clients[client.id] = client;

	client.on('addPlayer', function(player) {
		//players[client.id] = player;
		console.log("Player " + player + "with id: " + client.id + "has connected.");
	});

	client.on('disconnect', function() {
		console.log("Player with id: " + client.id + "has disconnected");
	//	delete players[client.id];
	});

	client.on('send:message', function(data){
		client.broadcast.emit('send:message', {
			user: "nana",
			text: data.message
		});
	});

	client.on('send:newtable', function(data){
		existingTable = false;

		for(var k = 0; k < tables.length; k++)
		{
			if(tables[k].name === data.message)
			{
				existingTable = true;
				break;
			}
		}

		if(!existingTable)
		{
			tables.push(new table(data.message,2,x,client.id));
			x = tables.length - 1;
			o = tables[x];
				if(o.getPlayerSize() === 0)
				{
					o.clearPlayers();
				}

				o.addPlayer(data.player);
				o.setDeckType("Traditional");
				tables[x] = o;

				io.sockets.emit('send:tables', {
					tables: tables
			});			
		}
		else
		{

		}
		
	});

	client.on('get:tables', function()
	{
		client.emit('send:tables', {
			tables: tables
		});
	});

	client.on('get:cardlist', function(data)
	{
		o = tables[data.tableId-1];
		g = o.getGame();
		io.sockets.emit('send:cardlist',{
			shinobiCards: g.getShinobiCards(),
			cablCards: g.getCABLCards(),
			eventCards: g.getEventCards(),
			itemCards: g.getItemCards(),
			jutsuCards: g.getJutsuCards(),
			specialCards: g.getSpecialCards(),
			abilityCards: g.getAbilityCards(),
			tableId: data.tableId
		});
	})

	client.on('join:table', function(data)
	{	console.log("joinTable: " + data.user);

			o = tables[data.tableId-1];
			socket = clients[o.getOwner()];

			message = data.user + " wants to join your table!";


		socket.emit('alarm:user',{message: message, newuser: data.user, tableId: data.tableId });

	});

	client.on('join:tableaccepted', function(data)
	{	
			o = tables[data.tableId-1];
			o.addPlayer(data.user);
			socket = clients[o.getOwner()];
			tables[data.tableId-1] = o;
			client.emit('send:tables', {
				tables: tables
		});


	});

	client.on('table:setup', function(data)
	{
			g = new game();
			o = tables[data.tableId-1];
			var x = 0;
			if(o.getDeckType() === "Traditional")
			{		
				db.shinobi_cards.find(function(err, cards) {
					g.addShinobiCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.ability_cards.find(function(err, cards) {
					g.addAbilityCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.cabl_cards.find(function(err, cards) {
					g.addCABLCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.event_cards.find(function(err, cards) {
					g.addEventCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.item_cards.find(function(err, cards) {
					g.addItemCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.jutsu_cards.find(function(err, cards) {
					g.addJutsuCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});

				db.special_cards.find(function(err, cards) {
					g.addSpecialCard(cards);
					o.addGame(g);
					tables[data.tableId-1] = o;

				});




			}
			io.sockets.emit('changescreen:field',{tableId:data.tableId});



	});
});
function Table(name,limit,id, client)
{
		this.name = name;
		this.players = [];
		this.shinobiCards = [];
		this.playerLimit = limit;
		this.playerSize = 0;
		this.tableId = id;
		this.available = true;
		this.clientOwner = client;
}

Table.prototype.addPlayer = function(name)
{
	if(this.playerSize < this.playerLimit)
	{
			this.players.push(name)
			this.playerSize++;
	}
	if(this.playerSize === this.playerLimit)
	{
		this.available = false;
	}

}

Table.prototype.getOwner = function()
{
	return this.clientOwner;
}

Table.prototype.clearPlayers = function(size)
{
	for(var i = 0; i < size; i++)
	{
		this.players[i] = "None";
	}
}

Table.prototype.getPlayerSize = function()
{
	return this.playerSize;
}

Table.prototype.setDeckType = function(name)
{
	this.deckType = name;
}

Table.prototype.getDeckType = function()
{
	return this.deckType;
}

Table.prototype.getPlayerOne = function()
{
	if(typeof(this.players[0]) === "undefined" || this.players[0] === null)
	{
		return -1;
	}
	else
	{
		return this.players[0];
	}	
}

Table.prototype.getPlayerTwo = function()
{
	if(typeof(this.players[1]) === "undefined" || this.players[1] === null)
	{
		return -1;
	}
	else
	{
		return this.players[1];
	}	
}

Table.prototype.getTableId = function()
{
	return this.tableId;
}

Table.prototype.addGame = function(game)
{
	this.game = game;
}

Table.prototype.getGame = function()
{
	return this.game;
}

Table.prototype.addShinobiCard = function(card) {
	this.shinobiCards.push(card);
}

Table.prototype.getShinobiCards = function()
{
	return this.shinobiCards;
}

Table.prototype.addAbilityCard = function(card) {
	this.abilityCards.push(card);
}


Table.prototype.getAbilityCards = function()
{
	return this.abilityCards;
}






module.exports = Table


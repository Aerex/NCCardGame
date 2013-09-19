function Game()
{
		this.shinobiCards = [];
		this.abilityCards = [];
		this.cablCards = [];
		this.eventCards = [];
		this.itemCards = [];
		this.specialCards = [];
		this.jutsuCards = [];
		this.turn = "p1";
		this.phase = "draw";
}

Game.prototype.setTurn = function(turn)
{
	this.turn = turn;
}

Game.prototype.getTurn = function()
{
	return this.turn;
}

Game.prototype.setPhase = function (phase) {
	this.phase = phase;
}

Game.prototype.getPhase = function()
{
	return this.phase;
}

Game.prototype.addShinobiCard = function(card) {
	this.shinobiCards.push(card);
}

Game.prototype.getShinobiCards = function()
{
	return this.shinobiCards;
}

Game.prototype.addAbilityCard = function(card) {
	this.abilityCards.push(card);
}

Game.prototype.getAbilityCards = function()
{
	return this.abilityCards;
}

Game.prototype.addCABLCard = function(card) {
	this.cablCards.push(card);
}

Game.prototype.getCABLCards = function()
{
	return this.cablCards;
}

Game.prototype.addEventCard = function(card) {
	this.eventCards.push(card);
}

Game.prototype.getEventCards = function()
{
	return this.eventCards;
}

Game.prototype.addItemCard = function(card) {
	this.itemCards.push(card);
}

Game.prototype.getItemCards = function()
{
	return this.itemCards;
}

Game.prototype.addJutsuCard = function(card) {
	this.jutsuCards.push(card);
}

Game.prototype.getJutsuCards = function()
{
	return this.jutsuCards;
}

Game.prototype.addSpecialCard = function(card) {
	this.specialCards.push(card);
}

Game.prototype.getSpecialCards = function()
{
	return this.specialCards;
}














module.exports = Game


from mod_python import util
from bson import json_util
import pymongo
import json

conn = pymongo.Connection()
db = conn.NC

def test(req):
	cards = []
	formdata = util.FieldStorage(req, keep_blank_values=1)
	numOfCards = int(formdata.getfirst("numOfCards"))
	typeOfCard = formdata.getfirst("cardType")

	print typeOfCard
	
	if typeOfCard == "shinobi":		
		for x in range(0, numOfCards):
			cards.append(db.shinobi_cards.find().limit(int(numOfCards))[x])
	elif typeOfCard == "ability":
		for x in range(0, numOfCards):
			cards.append(db.ability_cards.find().limit(int(numOfCards))[x]);
	elif typeOfCard == "item":
		for x in range(0, numOfCards):
			cards.append(db.item_cards.find().limit(int(numOfCards))[x]);
	elif typeOfCard == "event":
		for x in range(0, numOfCards):
			cards.append(db.event_cards.find().limit(int(numOfCards))[x]);
	elif typeOfCard == "cabl":
		for x in range(0, numOfCards):
			cards.append(db.cabl_cards.find().limit(int(numOfCards))[x]);
	elif typeOfCard == "special":
		for x in range(0, numOfCards):
			cards.append(db.special_cards.find().limit(int(numOfCards))[x]);
	elif typeOfCard == "jutsu":
		for x in range(0, numOfCards):
			cards.append(db.jutsu_cards.find().limit(int(numOfCards))[x]);
	return json.dumps(cards, sort_keys=True,indent=4, default=json_util.default)
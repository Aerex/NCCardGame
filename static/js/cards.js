var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("NC");
});


exports.obtainCards = function(req, res)
{
    var cards = [];
    var numOfCards = int(req.params.numOfCards);
    var cardType = req.params.type;
    console.log("Retrieving " + numOfCards + " " + cardType + " cards");
    switch(cardType)
    {
        case "shinobi":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.shinobi_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "ability":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.ability_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "item":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.item_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "event":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.event_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "cabl":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.cabl_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "special":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.special_cards.find().limit(int(numOfCards))[x]);
            }
        break;

        case "jutsu":
            for(var i = 0; i < numOfCards; i++)
            {
                cards.append(db.jutsu_cards.find().limit(int(numOfCards))[x]);
            }
        break;

    }

        res.send(cards);
}
 
/*exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
    db.collection('employees', function(err, collection) {
        collection.findOne({'id': id}, function(err, item) {
            console.log(item);
            res.jsonp(item);
        });
    });
};

exports.findByManager = function(req, res) {
    var id = parseInt(req.params.id);
    console.log('findByManager: ' + id);
    db.collection('employees', function(err, collection) {
        collection.find({'managerId': id}).toArray(function(err, items) {
            console.log(items);
            res.jsonp(items);
        });
    });
};*/
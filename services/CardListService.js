'use strict';

NC.service('cardlist', function CardList($http,$q)
{
	var self = this;
	self.grabStack = function(number, cardType)
	{
		var http_promise = $http({url: "/static/py/test.py/test", method: "GET", params: {"numOfCards": number, "cardType": cardType}})
			.success(function(data, status, headers, config){
					for(var i = 0; i < data.length; i++)
					{
						data[i]._id = data[i]._id.$oid;
						data[i].stack_index = i;
					}

					return data;
			})
			.error(function(data, status, headers, config){
				console.log("There was a problem retrieving data: " + status);
			});

			return http_promise;
	}
});
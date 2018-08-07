var request  = require('request');

request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){
    if(!error && response.statusCode == 200 ){
        var json = JSON.parse(body);
        console.log(json.query.results.channel.astronomy.sunset);
    }
});

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

// So everything is exactly the same as Colt explains in the following videos, except you must append &apikey=thewdb to the end of your url.
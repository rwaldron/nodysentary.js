#!/usr/bin/env node
/*
 * nodysentary.js
 * Copyright 2011 Rick Waldron
 * MIT Licensed
 */

var http = require( "http" ), 
	options = {
		host: "search.twitter.com",
		port: 80,
		path: "/search.json?q=poopin&rpp=1",
		method: "GET"
	}, 
	lastId = 0;

function makeRequest() {

  var req = http.request(options, function(res) {

	  res.on("data", function ( chunk ) {

      // If we get a garbled chunk of data, then fuck it, wait til next time
      try {
        var data = JSON.parse( chunk );

        data.results.forEach(function( tweet ) {
          if ( tweet.id > lastId ) {
						
            // Terminal dysentary
            console.log(
              "\n" + 
              tweet.from_user + " says: " +
              tweet.text + 
              "\n (" + tweet.created_at + ")"
            );
						
            // Don't stutter
            lastId = tweet.id;
          }
        });

      } catch(e) {
				//whatevs for now...
      }
    });
  });

  // write out to request body
  req.write("data\n");
  req.write("data\n");
  req.end();	
}

setInterval( makeRequest, 1000 );

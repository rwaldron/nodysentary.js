#!/usr/bin/env node
/*
 * nodysentary.js
 * Copyright 2011 Rick Waldron
 * MIT Licensed
 */

var story = "You have died of ", 
	fates = [ "measles", "snakebite", "dysentery", "typhoid", "cholera", "exhaustion" ];


console.log(

	story + fates[ Math.floor( Math.random() * fates.length - 1 ) ]

);
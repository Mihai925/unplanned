var fs = require('fs')
var path = require('path');

module.exports = () => {
	var nouns = fs.readFileSync(
		path.join(__dirname, './nouns.txt'),
		"utf8")
		.split('\n')
	var adjectives = fs.readFileSync(
		path.join(__dirname, './adjectives.txt'),
		"utf8")
		.split('\n')
	var noun = nouns[Math.floor(Math.random() * nouns.length)]
	var adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
	return adjective + '-' + noun;
		
}
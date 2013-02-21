var config  = require( './config' ).config;
var server  = require( config.FW_PATH );
var util    = require( 'util' );
var utils   = require(config.FW_PATH + '/core/utils.js' );
var Message = require(config.FW_PATH + '/message').Message;

server.createServer( config , function( message, app ){
  app.writeHead(200, { 'Content-Type':'text/html' });
  app.end( util.inspect(app) );
  }); 
});
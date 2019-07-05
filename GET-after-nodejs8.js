var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');


function triggerLogicSync(context, params){

}

function triggerLogicAsync(context, params, callback){

}

module.exports.handler = function(req, resp, context) {
    getRawBody(req, function(err, body) {
      const {context, params} = JSON.parse(decodeURIComponent(body.toString()));
      resp.setHeader('Content-Type', 'application/json')
      
      // triggerLogicAsync(context, params, result=>{
      //  resp.send(JSON.stringify(result));
      //})
      
      // resp.send(JSON.stringify(triggerLogicSync(context, params)));
      
    }); 
}

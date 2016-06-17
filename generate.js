
var fs = require('fs');
var beautify = require('js-beautify').js_beautify
var jsdoc2md = require('jsdoc-to-markdown');

fs.readFile('./server.json', function read(err, data) {
    if (err) {
        throw err;
    }
    var jsfile= 'index.js'
    var file = `var request = require('request');
    var querystring = require('querystring');
    /**
     * Callback for request.
     *
     * @callback callback
     * @param {object} err - An object.
     * @param {object} body - An object.
     */


    /**
     * octopus - description
     *
     * @param  {string} actopusurl - octopus-deploy-url
     * @param  {string} apikey     - apikey
     */
    function octopus(actopusurl,apikey) {
      this.actopusurl = actopusurl;
      this.apikey = apikey;
      var self = this;
    `;
      var links = JSON.parse(data).Links;
    var enpointnames= Object.keys(links)

    enpointnames.forEach(val => {
      var name =val.split('/').join('');
    file +=`
        ${getFunc(links[val],name)}
      };\n`;
    })
    file +=`function get(url,params,callback) {
      url = self.actopusurl + url;
      if (typeof  params == 'function') {
        callback = params;
      }else{
        if (params.id) url += '/'+params.id;
        delete params.id;
        url += querystring.stringify(params);
      }
      request({url, headers: {
          'X-Octopus-ApiKey': self.apikey
        }}, function (error, response, body) {
          callback(error,body)
      })
    }

  }

    module.exports = octopus;      `;
    fs.writeFile(jsfile,beautify(file, { indent_size: 2 }),(err)=>{
      jsdoc2md({ src: jsfile}).pipe(fs.createWriteStream('readme.md'))
    })


});
function geturl(url) {
  id = url.indexOf('{')
  if (id > -1) {
    url = url.slice(0,id)
  }
  return url;
}
function getFunc(url,name) {
  var query = '';
  var getparams = '';
  haveid =false;
  p= false
  id = url.indexOf('{/id}')
  if (id > -1) {
    query+= 'id,';
    haveid =true;
    getparams= ',params'
  }
  var parms = '';
  if (url.indexOf('?') > -1) {
    query+= 'params,';
    p =true;
    getparams= ',params'
    parms = url.split('?')[1]
    parms = parms.slice(0,parms.length-1)
  }
  return `
  /**
   * octopus.prototype.${name} - ${name}
   *${ haveid?'\n  * @param  {string} id    -   id':''}${p?`\n   * @param  {object} params -    extra params {${parms}}`:''}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.${name} = function (${query}callback) {`+
    `${!p?'var params = {};\n':''}`+
    `${ haveid? `typeof id == 'function'? callback = id:params.id = id;`:''}`+
    `${ p? `if(params ==null){params = {}}else{if (typeof params == 'function') {callback = params;}}`:''}`+

    `get('${geturl(url)}'${getparams},callback);`
}


(function() {
  var cache, modules;
  modules = {};
  cache = {};
  this.require = function(alias) {
    var fn, module;
    module = cache[alias];
    if (module) {
      return module.exports;
    }
    fn = modules[alias];
    if (!fn) {
      throw new Error("Module " + alias + " not found");
    }
    module = {
      id: alias,
      exports: {}
    };
    try {
      cache[alias] = module;
      fn(require, module, module.exports);
      return module.exports;
    } catch (err) {
      delete cache[alias];
      throw err;
    }
  };
  return this.require.define = function(aliases, fn) {
    var alias, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = aliases.length; _i < _len; _i++) {
      alias = aliases[_i];
      _results.push(modules[alias] = fn);
    }
    return _results;
  };
})();
// source: /Users/zkelling/play/zeekay.github.com/src/app.js
// modified: Thursday, June 28, 2012 2:52:36 AM
require.define(["/app","d41b78b6c8"], function (require, module, exports) {(function(){
    module.exports = {
      nav: {
        about: function() {
          $.getJSON("https://api.github.com/users/zeekay", function(data) {});
        },
        projects: function() {
          $.getJSON("https://api.github.com/users/zeekay/repos", function(data) {
            data.sort(function(a,b){return b.watchers - a.watchers});
            template = require("996b0244a6");
            $("section").html(template({
              projects: data
            }));
          });
        }
      }
    };
}).call(this)});

// source: /Users/zkelling/play/zeekay.github.com/src/templates/projects.jade
// modified: Thursday, June 28, 2012 2:39:15 AM
require.define(["/templates/projects","996b0244a6"], function (require, module, exports) {(function(){
    module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<ul>');
// iterate projects
;(function(){
  if ('number' == typeof projects.length) {
    for (var $index = 0, $$l = projects.length; $index < $$l; $index++) {
      var project = projects[$index];

buf.push('<li><ul><li><a');
buf.push(attrs({ 'href':(project.homepage) }, {"href":true}));
buf.push('>' + escape((interp = project.name) == null ? '' : interp) + '</a></li><li>watchers: ' + escape((interp = project.watchers) == null ? '' : interp) + '</li><li>forks: ' + escape((interp = project.forks) == null ? '' : interp) + '</li><li>updated: ' + escape((interp = project.updated_at) == null ? '' : interp).split('T')[0] + '</li></ul></li>');
    }
  } else {
    for (var $index in projects) {
      var project = projects[$index];

buf.push('<li><ul><li><a');
buf.push(attrs({ 'href':(project.homepage) }, {"href":true}));
buf.push('>' + escape((interp = project.name) == null ? '' : interp) + '</a></li><li>watchers: ' + escape((interp = project.watchers) == null ? '' : interp) + '</li><li>forks: ' + escape((interp = project.forks) == null ? '' : interp) + '</li><li>updated: ' + escape((interp = project.updated_at) == null ? '' : interp) + '</li></ul></li>');
   }
  }
}).call(this);

buf.push('</ul>');
}
return buf.join("");
}
}).call(this)});

module.exports = {
  nav: {
    about: function(){
      $.getJSON('https://api.github.com/users/zeekay', function(data) {
      });
    },
    projects: function() {
      $.getJSON('https://api.github.com/users/zeekay/repos', function(data) {
        data.sort(function(a,b) { return b.watchers - a.watchers });
        template = require('./templates/projects');
        $('section').html(template({projects: data}));
      });
    }
  }
};

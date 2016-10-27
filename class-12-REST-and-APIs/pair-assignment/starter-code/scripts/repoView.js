'use strict';

(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };
  var render = function(repo) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    // TODO: Remember that new Handlebars template? Let's compile it!
    // Save the result in this `render` variable.
    return template(repo);
  };
  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function(render) {
    ui(render);

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
console.log(repos.with('name'))
    $('#about ul').append(
  repos.with('name').forEach(function(repo){
    render(repo);
  })
    );
  };

  module.repoView = repoView;
})(window);

'use strict';

(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var source = $('#repo-template').html();
  var render = Handlebars.compile(source);
    // TODO: Remember that new Handlebars template? Let's compile it!
    // Save the result in this `render` variable.

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,

    $('#about ul').append(
  repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

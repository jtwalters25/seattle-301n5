'use strict';

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODOne: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner&sort=created',
      type: 'GET',
      headers: {
        Authorization: 'token ' + githubToken
      }
    }).done(function(data) {
      console.log(data)
      data.filter(function(ele) {
        return ele.owner === 'jtwalters25';
      }).forEach(function(repo) {
        var output = '<h2>' + repo.name + '</h2>' +
          '<p>' + repo.description + '</p>';
        $('#repo-template').append(output);
      })
    });
    callback();
  };


  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };


  module.repos = repos;
})(window);

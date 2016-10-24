'use strict';

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.all = [];

Article.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile($(scriptTemplateId).html());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);
  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  console.log('HERE');
  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
};

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Article.fetchAll = function() {
  if (localStorage.articles) {
    // When rawData is already in localStorage,
    // we can load it by calling the .loadAll function,
    Article.loadAll(JSON.parse(localStorage.articles));
    articleView.populateFilters();
    // and then render the index page (using the proper method on the articleView object).
    // Article.loadAll(//TODONE: What do we pass in here to the .loadAll function?
    // );
    // articleView.someFunctionToCall//(); //TODONE: Change this fake method call to the correct one that will render the index page.
  } else {
    $.getJSON('data/hackerIpsum.json')
      .done(function(data) {
        localStorage.articles = JSON.stringify(data);
        Article.loadAll(data);
        articleView.populateFilters();

      });
    // TODONE: When we don't already have the rawData, we need to:
    // 1. Retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),

    // 2. Store the resulting JSON data with the .loadAll method,

    // 3. Cache it in localStorage so we can skip the server call next time,

    // 4. And then render the index page (perhaps with an articleView method?).

  }
};

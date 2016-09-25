'use strict';

// IN-CLASS DONE: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      var $author = $(this).val();
      $('article').fadeOut('slow');
      $('article[data-author="' + $author + '"]').fadeIn('slow');
    } else {
      $('article').fadeIn('slow');
      $('.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      var $category = $(this).val();
      $('article').fadeOut('slow');
      $('article[data-category="' + $category + '"]').fadeIn('slow');
    } else {
      $('article').fadeIn('slow');
      $('.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    var $whereToGo = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $whereToGo).fadeIn();
  })
    /* DONE:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
  ;
  $('.main-nav .tab:first').click();
};

articleView.toggleNavDisplay = function() {
  // DONE: add an event handler to toggle the nav menu's display property
  // in mobile mode when the hamburger menu is clicked
  $('.icon-menu').on('click',function(){
    $('.main-nav > ul').toggle();
  });
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    1. Prevent the defaul action of a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!

    // STRETCH GOAL: change the 'Read On' link to 'Show Less'
  */
};

// TODO: Invoke all of the above methods!:
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.toggleNavDisplay();
articleView.setTeasers();

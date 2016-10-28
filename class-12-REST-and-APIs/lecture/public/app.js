$.ajax({
  url: 'https://api.github.com/user/repos?type=owner&sort=created',
  type: 'GET',
  headers: {
    Authorization: 'token ${githubToken}'
  }
}).done(function(data) {
  console.log(data)
  data.filter(function(ele) {
    return ele.owner.login === 'sjschmidt44';
  }).forEach(function(repo) {
    var output = '<h2>' + repo.name + '</h2>' +
      '<p>' + repo.description + '</p>';
    $('#repos').append(output);
  })
});

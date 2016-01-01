var url = 'http://api.giphy.com';
var path = '/v1/gifs/random';
var tag = '&tag=funny+cat';
var apiKey = '?api_key=dc6zaTOxFJmzC';

var myData;

var useData = function() {
  $('.display').css('background-image', 'url(' + myData.fixed_width_downsampled_url + ')');
};

$.ajax({
  url: this.url + this.path + this.apiKey + this.tag,
  success: function(result) {
    console.log('succes reaching', result);
    myData = result.data;
    useData();
  }
});

$(document).on('click', '.random', function() {
  location.reload(true);
});

// apiKey: '6858557af251cb06f36753ca7bb72941' -- last.fm

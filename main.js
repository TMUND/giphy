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

// input field

var currentTag = $('.textInput').val();

$('.tag').html(currentTag);

$('.textInput').on('keyup', function(){
  $('.tag').html($('.textInput').val());
});

// change ajax call to match input tag

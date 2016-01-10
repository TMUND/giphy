(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      var currentTag = 'funny+cat';

      $('.textInput').on('keyup', function(event) {
        var currentInput = $('.textInput').val();
        $('.tag').html($('.textInput').val());

        if (event.which === 13) {
          self._makeApiCall(currentInput);
        }
      });

      this._makeApiCall(currentTag);

      $(document).on('click', '.random', function() {
        var userInputTag = $('.textInput').val();
        self._makeApiCall(userInputTag);
      });

      $('.contact-link').click(function(event) {
        $(this).modal({
          fadeDuration: 250,
          fadeDelay: 1.5
        });

        return false;
      });
    },

    // ----------
    _makeApiCall: function(tag) {
      var self = this;

      var apiCall = {
        url: 'http://api.giphy.com',
        path: '/v1/gifs/random',
        tag: '&tag=',
        apiKey: '?api_key=dc6zaTOxFJmzC'
      };

      $.ajax({
        url: apiCall.url + apiCall.path + apiCall.apiKey + apiCall.tag + tag,
        success: function(result) {
          console.log('success making initial call', result);
          self._gif = result.data.image_original_url;
          self._displayGif();
        }
      });
    },

    // ----------
    _displayGif: function() {
      $('.display').css('background-image', 'url(' + this._gif + ')');
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();

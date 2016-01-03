(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      var currentText = $('.textInput').val();

      console.log(currentText);

      this._updateText();

      apiCall = {
        url: 'http://api.giphy.com',
        path: '/v1/gifs/random',
        tag: '&tag=',
        currentTag: 'funny+cat',
        apiKey: '?api_key=dc6zaTOxFJmzC'
      };

      this._makeApiCall();

      $(document).on('click', '.random', function() {
        self._makeUserApiCall();
        // location.reload(true);
      });
    },

    // ----------
    _makeApiCall: function() {
      var self = this;

      $.ajax({
        url: apiCall.url + apiCall.path + apiCall.apiKey + apiCall.tag + apiCall.currentTag,
        success: function(result) {
          console.log('success reaching', result);
          self._gif = result.data.image_original_url;
          self._displayGif();
          self._updateText();
        }
      });
    },

    // ----------
    _displayGif: function() {
      $('.display').css('background-image', 'url(' + this._gif + ')');
    },

    // ----------
    _makeUserApiCall: function() {
      var self = this;


      $.ajax({
        url: apiCall.url + apiCall.path + apiCall.apiKey + apiCall.tag + this.currentText,
        success: function(result) {
          console.log('success reaching data for user input', result);
          self._userGif = result.data.image_original_url;
          self._displayUserGif();
          self._updateText();
        }
      });
    },

    // ----------
    _displayUserGif: function() {
      $('.display').css('background-image', 'url(' + this._userGif + ')');
    },

    // ----------
    _updateText: function() {
      $('.tag').html(this.currentText);

      $('.textInput').on('keyup', function(){
        $('.tag').html($('.textInput').val());
      });
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();

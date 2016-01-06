(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      this.apiCall = {
        url: 'http://api.giphy.com',
        path: '/v1/gifs/random',
        tag: '&tag=',
        currentTag: 'funny+cat',
        apiKey: '?api_key=dc6zaTOxFJmzC'
      };

      this._makeApiCall();
      this._updateText();

      $(document).on('click', '.random', function() {
        self._updateText();
        self._makeUserApiCall();
      });
    },

    // ----------
    _makeApiCall: function() {
      var self = this;

      $.ajax({
        url: this.apiCall.url + this.apiCall.path + this.apiCall.apiKey + this.apiCall.tag + this.apiCall.currentTag,
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
    },

    // ----------
    _makeUserApiCall: function() {
      var self = this;

      this.currentText = $('.textInput').val();

      $.ajax({
        url: this.apiCall.url + this.apiCall.path + this.apiCall.apiKey + this.apiCall.tag + this.currentText,
        success: function(result) {
          console.log('success making user call', result);
          self._userGif = result.data.image_original_url;
          self._displayUserGif();
        }
      });
    },

    // ----------
    _displayUserGif: function() {
      $('.display').css('background-image', 'url(' + this._userGif + ')');
    },

    // ----------
    _updateText: function() {
      var self = this;

      $('.textInput').on('keyup', function(event) {
        $('.tag').html($('.textInput').val());

        if (event.which === 13) {
          self._makeUserApiCall();
        }
      });
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();

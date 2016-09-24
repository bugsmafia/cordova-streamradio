var RADIO = {
    initialize: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'RadioPlugin', 'initialize', [ ]);
    },

    play: function(successCallback, failureCallback, url, singerName, songName) {
        cordova.exec(successCallback, failureCallback, 'RadioPlugin', 'play', [ url, singerName, songName ]);
    },
	
	update: function(successCallback, failureCallback, singerName, songName) {
        cordova.exec(successCallback, failureCallback, 'RadioPlugin', 'update', [singerName, songName ]);
    },
	
    stop: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'RadioPlugin', 'stop', [ ]);
    }

};

module.exports = RADIO;

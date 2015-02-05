var viewer = {},

    app = {

        initialize: function() {
            this.bindEvents();

            if (!window.cordova) {  // Is debugging?
                window.device = 'BROWSER';
                app.initializeUstreamApi();
            } else {
                window.device = 'MOBILE';
            }
        },

        bindEvents: function() {
            document.addEventListener (  // On device ready
                'deviceready',
                function() {
                    console.log('Device ready!');
                    app.initializeUstreamApi();
                },
                false
            );
        },

        initializeUstreamApi: function() {
            window.viewer = UstreamEmbed('UstreamFrame');
            console.log('Instance Id: ' + viewer.id);
        },

        uPlay: function() {
            viewer.callMethod('play');
        },

        uPause: function() {
            viewer.callMethod('pause');
        },

        uVolume: function(volume) {
            viewer.callMethod('volume', volume);
        }
    };

app.initialize();
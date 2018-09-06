function Fatzpreloader(settings) {
    'use strict'

    var app = {
        element: '',
        settings: {
            imgPath: '',
            width: '',
            height: '',
            time: ''
        },
        init: function (settings) {
            if (!this.element) {
                if (typeof(settings) == "object") {
                    Object.assign(this.settings, settings)
                }
                var element = $("<div></div>", {
                    class: "fatz-preloader"
                });
                element.append("<div></div>");
                this.element = element;
                $('body').prepend(element);
            }
            return this;
        },
        show: function(path) {
            if (path) {
                this.setPath(path);
            }
            this.element.show();
            return this;
        },
        hide: function() {
            this.element.hide();
            return this;
        },
        setPath: function(path) {
            this.settings.imgPath = path;
        }
    }
    app.init(settings);
    return app;
};

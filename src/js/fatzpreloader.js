module.exports = function Fatzpreloader(settings) {
    'use strict'

    if (typeof($) != "function") {
        throw 'jQuery required';
    }

    var app = {
        element: '',
        settings: {
            path: '',
            width: '',
            height: '',
            time: 0
        },
        init: function(settings) {
            if (!this.element) {
                if (typeof(settings) == "object") {
                    Object.assign(this.settings, settings)
                }
                var element = $("<div></div>", {
                        class: "fatz-preloader-wrap",
                    }),
                    inner = $("<div></div>", {
                        class: "fatz-preloader-inner"
                    }),
                    // img = $(`<img src=${this.settings.path}>`).attr('style', 'width: 100%');
                    img = $(`<img src=${this.settings.path}>`, {
                        class: "fatz-preloader-img"
                    })

                inner.append(img);
                element.append(inner);
                this.element = element;
                $('body').prepend(this.element);
            }
            return this;
        },
        show: function(path) { //TODO: 倒數計時
            this.element.find('img').attr('src', path ? path : this.settings.path);
            this.element.show();
            return this;
        },
        hide: function() {
            this.element.hide();
            return this;
        },
        setPath: function(path) {
            this.settings.path = path;
        }
    }
    app.init(settings);
    return app;
};
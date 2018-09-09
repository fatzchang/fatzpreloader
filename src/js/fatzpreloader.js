export default function Fatzpreloader (settings) {
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
                    img = $(`<img src=${this.settings.path}>`).addClass('fatz-preloader-img');

                inner.append(img);
                element.append(inner);
                this.element = element;
                $('body').prepend(this.element);
            }
            return this;
        },
        show: function(opt) {
            this.element.find('img').attr('src', opt.path ? opt.path : this.settings.path);
            this.element.show();
            if (typeof(opt.time) === "number") {
                setTimeout(function() {
                    app.hide()
                }, opt.time);
            }
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
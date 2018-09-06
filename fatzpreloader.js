function Fatzpreloader(settings) {
    'use strict'

    var app = {
        element: '',
        settings: {
            path: '',
            width: '',
            height: '',
            time: 0
        },
        init: function (settings) {
            if (!this.element) {
                if (typeof(settings) == "object") {
                    Object.assign(this.settings, settings)
                }
                var element = $("<div></div>", {
                    class: "fatz-preloader",
                    style: "width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-color: rgba(200, 200, 200, 0.2)"
                }),
                inner = $("<div></div>", {
                   style: "width: 100px; height: 100px; position: absolute; top: 50%; left: 50%; background-color: transparent; transform: translateX(-50%) translateY(-50%);"  
                }),
                img = $(`<img src=${this.settings.path}>`).attr('style', 'width: 100%');

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

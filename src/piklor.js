(function (root) {

    function Piklor(sel, colors, options) {
        options = options || {};
        options.open = this.getElm(options.open);
        options.openEvent = options.openEvent || "click";
        options.style = Object(options.style);
        options.style.display = options.style.display || "block";
        options.template = options.template || "<div data-col=\"{color}\" style=\"background-color: {color}\"></div>";
        this.elm = this.getElm(sel);
        this.cbs = [];
        this.colors = colors;
        this.options = options;
        this.render();
        if (options.open) {
            options.open.addEventListener(options.openEvent, function (ev) {
                var col = ev.target.getAttribute("data-col");
                if (!col) { return; }
                console.log(col);
            });
        }
    }

    Piklor.prototype.getElm = function (el) {
        if (typeof el === "string") {
            return document.querySelector(el);
        }
        return el;
    };

    Piklor.prototype.render = function () {
        var self = this
          , html = ""
          ;

        self.colors.forEach(function (c) {
            html = self.options.template.replace(/\{color\}/g, c);
        });

        self.elm.innerHTML = html;
    };

    Piklor.prototype.close = function () {
        this.elm.style.display = "none";
    };

    Piklor.prototype.open = function () {
        this.elm.style.display = this.options.style.display;
    };

    Piklor.prototype.colorChosen = function (cb) {
        this.cbs.push(cb);
    };

    Piklor.prototype.set = function (c) {
        var self = this;
        self.color = c;
        self.cbs.forEach(function (cb) {
            cb.call(self, c);
        });
    };

    root.Piklor = Piklor;
})(this);

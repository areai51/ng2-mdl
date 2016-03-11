System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CardComponent = (function () {
                function CardComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CardComponent.prototype, "card", void 0);
                CardComponent = __decorate([
                    core_1.Component({
                        selector: 'mdl-card',
                        template: "\n\n    <div [style.width]=\"card.card_width\" class=\"mdl-card mdl-shadow--2dp\">\n  <div [style.backgroundColor]=\"card.card_background_color\"  class=\"mdl-card__title\">\n    <h2 class=\"mdl-card__title-text\">{{card?.title}}</h2>\n  </div>\n  <div class=\"mdl-card__supporting-text\">\n    {{card?.body}}\n\n  </div>\n  <div class=\"mdl-card__actions mdl-card--border\">\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"{{card.cta_button_link}}\">\n      {{card.cta_button_title}}\n    </a>\n  </div>\n  <div class=\"mdl-card__menu\">\n    <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n      <i class=\"material-icons\">share</i>\n    </button>\n  </div>\n</div>\n\n    ",
                        styles: ["\n      .demo-card-wide.mdl-card {\n      width: {{card?.card_width}};\n    }\n    .demo-card-wide > .mdl-card__title {\n      color: #ccc;\n      height: 176px;\n      background: url('{{card.card_background}}') center / cover;\n    }\n    .demo-card-wide > .mdl-card__menu {\n      color: #fff;\n    }\n  \t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});
//# sourceMappingURL=card.component.js.map
System.register(['angular2/core', './card.component', './tooltip.component'], function(exports_1, context_1) {
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
    var core_1, card_component_1, tooltip_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (tooltip_component_1_1) {
                tooltip_component_1 = tooltip_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.card = {
                        "title": "Hello",
                        "body": "The greatest thing on earth was peace",
                        "card_width": "550px",
                        "card_height": "350px",
                        "card_background_image": "img/welcome_card.jpg",
                        "card_background_color": "#ff6600",
                        "cta_button_title": "start",
                        "cta_button_link": "http://www.yahoo.com"
                    };
                    this.cloudtip = {
                        "icon": "cloud_upload",
                        "message": " Upload your files here"
                    };
                    this.printtip = {
                        "icon": "print",
                        "message": " Click here to Print"
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [card_component_1.CardComponent, tooltip_component_1.TooltipComponent],
                        template: "\n    <h1> MD Lite components for Angular 2</h1>\n\n    <h2>Card</h2>\n<mdl-card [card]=\"card\"> Loading...</mdl-card>\n\n<hr/>\n\n<h2>Tool Tip</h2>\n<mdl-tooltip [tooltip]=\"cloudtip\"></mdl-tooltip>   |  <mdl-tooltip [tooltip]=\"printtip\"></mdl-tooltip>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
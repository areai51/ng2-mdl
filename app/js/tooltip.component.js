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
    var TooltipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TooltipComponent = (function () {
                function TooltipComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TooltipComponent.prototype, "tooltip", void 0);
                TooltipComponent = __decorate([
                    core_1.Component({
                        selector: 'mdl-tooltip',
                        template: "\n    <div id=\"{{tooltip.icon}}\" class=\"icon material-icons\">{{tooltip.icon}}</div>\n    <label class=\"mdl-tooltip\" htmlFor= \"{{tooltip.icon}}\">\n    {{tooltip.message}}\n    </label>\n\n\n    ",
                        styles: ["\n\n  \t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TooltipComponent);
                return TooltipComponent;
            }());
            exports_1("TooltipComponent", TooltipComponent);
        }
    }
});
//# sourceMappingURL=tooltip.component.js.map
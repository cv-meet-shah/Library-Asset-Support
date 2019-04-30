import { __spread } from 'tslib';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-common-footer',
                    template: "<p>\n  footer works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return []; };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-common-card',
                    template: "<div>\n  <p>\n    Display local Image.\n    <img src=\"assets/policy.jpg\" alt=\"policyimage\" />\n  </p>\n\n  <div>\n    Display image from sass.\n    <div class=\"back-img\"></div>\n  </div>\n</div>",
                    styles: [".back-img{height:200px;width:200px;background-image:url(/assets/blackhole.jpg);background-size:cover;background-position:center}"]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [
    FooterComponent,
    CardComponent,
];
var NgCommonModule = /** @class */ (function () {
    function NgCommonModule() {
    }
    NgCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(components),
                    imports: [],
                    exports: __spread(components)
                },] }
    ];
    return NgCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgCommonModule, FooterComponent, CardComponent as ɵa };

//# sourceMappingURL=ng-common.js.map
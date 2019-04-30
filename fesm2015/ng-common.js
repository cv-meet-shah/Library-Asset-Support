import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-common-footer',
                template: "<p>\n  footer works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-common-card',
                template: "<div>\n  <p>\n    Display local Image.\n    <img src=\"assets/policy.jpg\" alt=\"policyimage\" />\n  </p>\n\n  <div>\n    Display image from sass.\n    <div class=\"back-img\"></div>\n  </div>\n</div>",
                styles: [".back-img{height:200px;width:200px;background-image:url(/assets/blackhole.jpg);background-size:cover;background-position:center}"]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    FooterComponent,
    CardComponent,
];
class NgCommonModule {
}
NgCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...components],
                imports: [],
                exports: [...components]
            },] }
];

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
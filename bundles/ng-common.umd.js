(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ng/common', ['exports', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.common = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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

    exports.NgCommonModule = NgCommonModule;
    exports.FooterComponent = FooterComponent;
    exports.ɵa = CardComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-common.umd.js.map
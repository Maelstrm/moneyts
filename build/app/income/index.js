(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mathjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var math = require("mathjs");
    function output(income) {
        var totalIncome = math.sum(income.paychecks);
        console.log("total income: ", totalIncome);
        return totalIncome;
    }
    exports.output = output;
    var myIncome = {
        paychecks: [1500, 1500, 1500]
    };
    output(myIncome);
});
//# sourceMappingURL=index.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var math = __importStar(require("mathjs"));
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
//# sourceMappingURL=index.js.map
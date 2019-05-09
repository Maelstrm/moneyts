import * as math from 'mathjs';
export function output(income) {
    const totalIncome = math.sum(income.paychecks);
    console.log("total income: ", totalIncome);
    return totalIncome;
}
let myIncome = {
    paychecks: [1500, 1500, 1500]
};
output(myIncome);
//# sourceMappingURL=index.js.map
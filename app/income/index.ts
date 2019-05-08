import * as math from 'mathjs'

interface Income {
  paychecks: number[],
  irregularIncome?: number,
  sideHustle?: number,
}

export function output(income: Income) {
  const totalIncome = math.sum(income.paychecks)
  console.log("total income: ", totalIncome)
  return totalIncome
}

let myIncome = {
  paychecks: [1500, 1500, 1500]
}
output(myIncome)
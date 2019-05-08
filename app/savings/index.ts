interface bettermentInvestments {
  emergencyBackup: number,
  retirementTaxable: number,
  retirementRothIRA: number
}

interface bankSavings {
  emergency: number,
  funFund: number
}

interface SavingsAndInvestments {
  bankSavings: bankSavings,
  bettermentInvestments: bettermentInvestments,
  m1FinanceInvestments: number,
  billPayBuffer: number
}
import * as loanUtils from "./utils/loanUtils"

Cypress.Commands.add('setAmountSlider', loanUtils.setAmountSlider)
Cypress.Commands.add('setMonthSlider', loanUtils.setMonthSlider)
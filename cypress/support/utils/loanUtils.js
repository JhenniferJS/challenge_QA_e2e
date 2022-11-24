import { LoanElements } from "../elements/loanElements"

export const setAmountSlider = (value) => {
    cy.get(LoanElements.amountSlider).invoke("val", value).trigger('input')
}

export const setMonthSlider = (month) => {
    resetMonthSlider()
    cy.get(LoanElements.monthSlider).invoke("val", month).trigger('input')
}

export const resetMonthSlider = () => {
    cy.get(LoanElements.monthSlider).invoke("val", 0).trigger('input')
}
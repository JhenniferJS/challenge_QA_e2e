/// <reference types="cypress"/>

import { LoanElements } from "../support/elements/loanElements"
import { loanData } from "../fixtures/loanData"

describe('Loan simulations', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    
    loanData.forEach(data => {
    it(`Loan simulation - ${data.installments} installments`, () => {
            const amountInReal = data.amount.toLocaleString('pt-br', {minimumFractionDigits: 2});
    
            cy.setAmountSlider(data.amount)
            cy.get(LoanElements.amountSliderValue).should('contain.text', `R$ ${amountInReal}`)
        
            cy.setMonthSlider(data.installments)
            cy.get(LoanElements.monthSliderValue).should('contain.text', `${data.installments} meses`)
        
            cy.get(LoanElements.installmentsOutput).should('contain.text',`${data.installments}x`)
            cy.get(LoanElements.installmentValueOutput).should('contain.text', `R$ ${data.installmentsValue}`)
        })
    })
})

/// <reference types="cypress" />

describe('Hangman', () => {
    beforeEach(() => {

      cy.visit('http://127.0.0.1:5500')
    })
  
    it('should input be visible', () => {

        cy.get('[data-stickman]').as('stickman')
        cy.get('.good-answer').as('rightAnswer')
        cy.get('[data-character-guess]').as('characterInput')
        cy.get('[data-submit]').as('submitButton')

        cy.get('@stickman').should('be.visible')
        cy.get('@rightAnswer').should('be.visible')
        cy.get('@characterInput').should('be.visible')
        cy.get('@submitButton').should('be.visible')

        cy.contains('p','Right:')
        cy.contains('p','Guessed:')
    })

    it('should input not have value and attribute disabled', () => {

        cy.get('[data-character-guess]').as('characterInput')
        cy.get('[data-submit]').as('submitButton')
        
        cy.get('@characterInput').should('not.have.value')
        cy.get('@submitButton').should('not.have.attr', 'disabled')
    })

    it('should input and click', () => {

        cy.get('[data-character-guess]').as('characterInput')
        cy.get('[data-submit]').as('submitButton')
        cy.get('[data-reset]').as('resetButton')
        
        cy.get('@characterInput').type('c',{delay: 200});
        cy.get('@submitButton').click();
        cy.get('@characterInput').type('{backspace}',{delay: 200});
        cy.get('@characterInput').type('a',{delay: 200});
        cy.get('@submitButton').click();
        cy.get('@characterInput').type('{backspace}',{delay: 200});
        cy.get('@characterInput').type('t',{delay: 200});
        cy.get('@submitButton').click();
        cy.get('@resetButton').click();
    })


    })
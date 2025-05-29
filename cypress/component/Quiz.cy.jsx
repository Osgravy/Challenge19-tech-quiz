import React from 'react'
import Quiz from '../../client/src/components/Quiz' // Adjust path as needed

describe('Quiz Component', () => {
  it('renders the start screen initially', () => {
    cy.mount(<Quiz />)
    cy.get('h1').should('contain', 'Tech Quiz')
    cy.get('button').should('contain', 'Start Quiz')
  })

  it('starts the quiz when button is clicked', () => {
    cy.mount(<Quiz />)
    cy.get('button').click()
    cy.get('.question-text').should('exist')
    cy.get('.answer-button').should('have.length.at.least', 2)
  })
})
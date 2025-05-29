describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should start the quiz', () => {
      cy.get('button').contains('Start Quiz').click()
      cy.get('.question-text').should('be.visible')
    })
  
    it('should navigate through all questions', () => {
      cy.get('button').contains('Start Quiz').click()
      
      // Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('.answer-button').first().click()
        if (i < 9) {
          cy.get('button').contains('Next Question').click()
        }
      }
      
      // Verify results page
      cy.get('h2').should('contain', 'Quiz Completed!')
      cy.get('.score').should('exist')
      cy.get('button').contains('Start New Quiz').should('exist')
    })
  
    it('should allow starting a new quiz', () => {
      // Complete first quiz
      cy.get('button').contains('Start Quiz').click()
      for (let i = 0; i < 10; i++) {
        cy.get('.answer-button').first().click()
        if (i < 9) {
          cy.get('button').contains('Next Question').click()
        }
      }
      
      // Start new quiz
      cy.get('button').contains('Start New Quiz').click()
      cy.get('.question-text').should('be.visible')
    })
  })
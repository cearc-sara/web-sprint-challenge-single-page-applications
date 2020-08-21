describe('Order App', () => {
    describe('Home page', () => {
        it('can navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include', 'localhost')
        })
    })
    describe('Inputs', () => {
        it('can navigate to http://localhost:3000/PizzaForm', () => {
            cy.visit('http://localhost:3000/PizzaForm')
            cy.url().should('include', '/PizzaForm')
        })
        it('can type something in the "name" input', () => {
            cy.get('input[name="name"]')
            .type('Sam')
            .should('have.value', 'Sam')
        })
 
        it('can select something in the "pizza size" drop down menu', () => {
            cy.get('select')
            .select('Large')
            .should('have.value', 'large')
        })
        it('can check the cheese checkbox', () => {
            cy.get('input[name="cheese"]').click()
        })
        it('can check the pepperoni checkbox', () => {
            cy.get('input[name="pepperoni"]').click()
        })
        it('can click submit button', () => {
            cy.get('#submitBtn').click()
        })
    })
    describe('Validations for empty inputs', () => {
        it('checks for empty field in name input', () => {
            cy.get('input[name="name"]')
            .type(' {enter}')
            .should('have.length', 1)
            .should('not.have.text', ' ')
           
        })
     
        it('checks for empty field in size input', () => {
            cy.get('select')
            .select('Large')
            .should('have.value', 'large')
            .select('--Select a Size--')
            .should('have.value', '')
        })
    })
})
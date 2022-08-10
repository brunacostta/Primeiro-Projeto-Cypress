describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('fazer login de usuario invalido', () => {
        cy.login('bruna', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    });
})
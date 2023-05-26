describe('GX-15907 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Visitar pagina demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('15908 | TC1 Validar doble click en btn "Double Click Me"', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.contains('You have done a double click').should('exist');
	});
	it('15908 | TC2 Validar click con boton derecho en btn "Right Click"', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.contains('You have done a right click').should('exist');
	});
	it('15908 | TC3 Validar click en btn "Click Me"', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.contains('You have done a dynamic click').should('be.visible');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
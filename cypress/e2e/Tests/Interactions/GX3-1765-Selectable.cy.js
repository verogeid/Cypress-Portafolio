describe('ToolsQA | Interactions | Selectable', () => { 
	beforeEach('Go to Demo QA Web, Selectable section', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('1766 | TC1:Check that the "List" and "Grid" tabs are visible by default', () => {
		console.log('I´m in');
	});
});
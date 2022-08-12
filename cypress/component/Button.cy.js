import Counter from '../../src/components/Counter.vue';

describe('<Counter>', () => {
  it('mounts', () => {
    cy.mount(Counter, { propsData: { initial: 100 } });

    cy.get('p').should('have.text', '100');

    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();

    cy.get('p').should('have.text', '103');

    cy.get('button').eq(1).click();
    cy.get('button').eq(1).click();

    cy.get('p').should('have.text', '101');
  });
});

describe('Lotto full test', () => {

  describe('login', () => {
    it('open Login', () => {
      cy.visit('http://localhost:4200');
    });

    it('enter user id', () => {
      cy.get('input[id=TEXTBOX_U]').type('id_4');
    });

    it('enter password and sends {enter} key', () => {
      cy.get('input[id=TEXTBOX_P]').type('pw4{enter}');
      cy.wait(2000);
    });
  });
  
  describe('panel manipulation', () => {
    it('clicks cell 1 on panel/1', () => {
      cy.get('span[id=pnl1num1]').click();
    });
    it('clicks cell 2 on panel/1', () => {
      cy.get('span[id=pnl1num2]').click();
    });
    it('clicks cell 3 on panel/1', () => {
      cy.get('span[id=pnl1num3]').click();
    });
    it('clicks cell 4 on panel/1', () => {
      cy.get('span[id=pnl1num4]').click();
    });
    it('clicks cell 5 on panel/1', () => {
      cy.get('span[id=pnl1num5]').click();
    });
    it('clicks cell 6 on panel/1', () => {
      cy.get('span[id=pnl1num6]').click();
    });
    it('clicks cell 7 on panel/1', () => {
      cy.get('span[id=pnl1num7]').click();
    });

    it('clicks cell 1 on panel/2', () => {
      cy.get('span[id=pnl2num1]').click();
    });

    it('generates random numbers for panel/3', () => {
      cy.get('div[id=randomButton3]').click();
    });
  });

  describe('message checking', () => {
    it('clicks "play" button', () => {
      cy.get('button[id=playButton]').click();
    });

    it('checks the text for panel/1', () => {
      cy.get('span[id=message1]').contains('Error: Please remove 1 mark');
    });

    it('checks the text for panel/2', () => {
      cy.get('span[id=message2]').contains('Error: 5 marks are missing');
    });

    it('checks the text for panel/3', () => {
      cy.get('span[id=message3]').contains(',');
    });

    it('checks the text for panel/4', () => {
      cy.get('span[id=message4]').contains('empty');
    });
  });

});

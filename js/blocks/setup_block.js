Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_setup);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(_do);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('The setup() function is called once when the program starts.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/setup');
  }
};
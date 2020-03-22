Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_draw);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(_do);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
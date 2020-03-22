Blockly.Blocks['translate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_translate);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

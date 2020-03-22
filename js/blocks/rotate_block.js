Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_rotate);
    this.appendValueInput("degree")
        .setCheck("Number")
        .appendField(_degree);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

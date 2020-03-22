Blockly.Blocks['scale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_scale);
    this.appendValueInput("ratio")
        .setCheck("Number")
        .appendField(_ratio);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

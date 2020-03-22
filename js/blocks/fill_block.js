Blockly.Blocks['fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_fill);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField(_colour);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
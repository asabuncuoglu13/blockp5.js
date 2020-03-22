Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_background);
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
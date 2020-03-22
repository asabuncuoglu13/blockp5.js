Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_mY);
    this.setOutput(true, "Number");
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

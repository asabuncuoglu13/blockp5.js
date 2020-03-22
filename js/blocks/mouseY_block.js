Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseY");
    this.setOutput(true, "Number");
    this.setColour(_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

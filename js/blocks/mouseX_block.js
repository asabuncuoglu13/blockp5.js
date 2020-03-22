Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true, null);
    this.setColour(_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

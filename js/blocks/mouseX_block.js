Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_mX);
    this.setOutput(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

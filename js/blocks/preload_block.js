Blockly.Blocks['preload'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_preload);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
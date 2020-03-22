Blockly.Blocks['createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_canvas);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_w);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
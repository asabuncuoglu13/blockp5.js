Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_rect);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_w);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['isotriangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_isotriangle);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_base);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip(_exp_isotriangle);
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};
Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_ellipse);
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
    this.setTooltip(_exp_ellipse);
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};
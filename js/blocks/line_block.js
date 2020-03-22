Blockly.Blocks['line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_line);
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip('Draws a line to the screen. ');
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};
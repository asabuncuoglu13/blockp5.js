Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_background);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("createCanvas");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height");
    this.appendValueInput("canvas")
        .setCheck("String")
        .appendField("canvas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_control);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_control);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ellipse");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("w");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_shape);
    this.setTooltip('Draws an ellipse to the screen. ');
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fill");
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['grid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add grid with size")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_control);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true, null);
    this.setColour(_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
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
Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rect");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("w");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_shape);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_control);
    this.setTooltip('The setup() function is called once when the program starts.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/setup');
  }
};Blockly.Blocks['stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_stroke);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
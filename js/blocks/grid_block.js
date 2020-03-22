Blockly.Blocks['grid'] = {
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
};
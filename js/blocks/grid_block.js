Blockly.Blocks['grid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_grid)
        .appendField(new Blockly.FieldNumber(30, 5, 100), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
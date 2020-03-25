Blockly.Blocks['start_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(_start_video);
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField(_x);
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField(_y);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(_c_ai);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
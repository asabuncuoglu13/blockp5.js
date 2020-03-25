Blockly.Blocks['classify_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(_classify_video);
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField(_do);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
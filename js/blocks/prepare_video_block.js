Blockly.Blocks['prepare_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(_prepare_video);
        this.appendValueInput("width")
            .setCheck("Number")
            .appendField(_w);
        this.appendValueInput("height")
            .setCheck("Number")
            .appendField(_h);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(_c_ai);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
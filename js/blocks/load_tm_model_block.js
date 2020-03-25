Blockly.Blocks['load_tm_model'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck("String")
            .appendField(_load_tm_model);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(_c_ai);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
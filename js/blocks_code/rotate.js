Blockly.JavaScript['rotate'] = function (block) {
    var value_deg = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotate(' + value_deg + ');\n';
    return code;
};

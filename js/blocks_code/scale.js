Blockly.JavaScript['scale'] = function (block) {
    var value_ratio = Blockly.JavaScript.valueToCode(block, 'ratio', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'scale(' + value_ratio + ');\n';
    return code;
};

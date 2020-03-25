Blockly.JavaScript['load_tm_model'] = function (block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'classifier = ml5.imageClassifier(' + value_url + '+ "model.json");\n';
    return code;
};
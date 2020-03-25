Blockly.JavaScript['prepare_video'] = function (block) {
    var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'video = createCapture(VIDEO);\n' +
        'video.size(' + value_w + ', ' + value_h + ');\n' +
        'video.hide();\n' +
        'flipVideo = ml5.flipImage(video);\n';
    return code;
};
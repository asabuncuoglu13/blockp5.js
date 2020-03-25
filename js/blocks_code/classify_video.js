Blockly.JavaScript['classify_video'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '  flipVideo = ml5.flipImage(video);\n' +
        'classifier.classify(flipVideo, function(error, results) {\n' +
        '  if (error) {\n' +
        '    console.error(error);\n' +
        '    return;\n' +
        '  }\n' +
        '  label = results[0].label;\n' +
        '  // Control the snake and classify again!\n' +
        statements_name +
        '  });';
    return code;
};
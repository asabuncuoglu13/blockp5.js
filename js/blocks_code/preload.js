Blockly.JavaScript['preload'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'preload = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.JavaScript['background'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'background(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['createcanvas'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var myCanvas = createCanvas(' + value_width + ',' + value_height +');\n' + 'myCanvas.parent("myContainer");\n';
  return code;
};
Blockly.JavaScript['draw'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'draw = function() {\n' + statements_do + '};\n';
  return code;
};
Blockly.JavaScript['ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ellipse(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
  return code;
};
Blockly.JavaScript['isotriangle'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'simpleTriangle(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
  return code;
};
Blockly.JavaScript['fill'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fill(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['grid'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "  fill(212);\n" +
        "  stroke(232);\n" +
        "  for (var i = 0; i < width; i += " + number_name + ") {\n" +
        "    line(i, 0, i, height);\n" +
        "    text(i, i + 1, 10);\n" +
        "  }\n" +
        "  for (var i = 0; i < height; i += " + number_name + ") {\n" +
        "    line(0, i, width, i);\n" +
        "    text(i, 0, i - 1);\n" +
        "  }\n" +
        " fill(125);\n";
    return code;
};
Blockly.JavaScript['line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'line(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ');\n';
  return code;
};
Blockly.JavaScript['mousex'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.JavaScript['mousey'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.JavaScript['rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'rect(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
  return code;
};
Blockly.JavaScript['rotate'] = function (block) {
    var value_deg = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotate(' + value_deg + ');\n';
    return code;
};
Blockly.JavaScript['scale'] = function (block) {
    var value_ratio = Blockly.JavaScript.valueToCode(block, 'ratio', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'scale(' + value_ratio + ');\n';
    return code;
};
Blockly.JavaScript['setup'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setup = function() {\n' + statements_do + '};\n';
  return code;
};
Blockly.JavaScript['stroke'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'stroke(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['translate'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'translate(' + value_x + ',' + value_y + ');\n';
    return code;
};

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

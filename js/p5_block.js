Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_background);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField(_colour);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['classify_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(_classify_video);
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField(_do);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};Blockly.Blocks['createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_canvas);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_w);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_draw);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(_do);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_ellipse);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_w);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip(_exp_ellipse);
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['isotriangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_isotriangle);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_base);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip(_exp_isotriangle);
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_fill);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField(_colour);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['grid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_grid)
        .appendField(new Blockly.FieldNumber(30, 5, 100), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};Blockly.Blocks['height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_h);
    this.setOutput(true, null);
    this.setColour(_c_shape);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_line);
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip('Draws a line to the screen. ');
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['load_tm_model'] = {
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
};Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_mX);
    this.setOutput(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_mY);
    this.setOutput(true, "Number");
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['preload'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_preload);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['prepare_video'] = {
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
};Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_rect);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(_w);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(_h);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_shape);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_rotate);
    this.appendValueInput("degree")
        .setCheck("Number")
        .appendField(_degree);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['scale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_scale);
    this.appendValueInput("ratio")
        .setCheck("Number")
        .appendField(_ratio);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_setup);
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(_do);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_structure);
    this.setTooltip('The setup() function is called once when the program starts.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/setup');
  }
};Blockly.Blocks['start_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(_start_video);
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField(_x);
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField(_y);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(_c_ai);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};Blockly.Blocks['stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_stroke);
    this.appendValueInput("NAME")
        .setCheck("Colour")
        .appendField(_colour);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['translate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_translate);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(_x);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(_c_motion);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(_w);
    this.setOutput(true, null);
    this.setColour(_c_shape);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

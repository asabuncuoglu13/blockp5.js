export class Blockp5 {
    constructor(workspace) {
        this.p5_obj = {};
        this.workspace = workspace;
        this.init_code =
            "let ghost, asterisk;\n" +
            "let classifier;\n" +
            "let video;\n" +
            "let flipVideo;\n" +
            "let label;\n" +
            "preload = function() {\n" +
            "  ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');\n" +
            "  asterisk = loadAnimation('assets/asterisk_circle0000.png', 'assets/asterisk_circle0002.png');\n" +
            "};\n" +
            "simpleTriangle = function(x,y,w,h){\n" +
            "    triangle(x,y, x+w/2, y-h, x+w, y);\n" +
            "};\n";
    }

    runCode() {
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        let code = this.init_code + Blockly.JavaScript.workspaceToCode(this.workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        try {
            let s = new Function("p", code);
            this.p5_obj = new p5(s);
        } catch (e) {
            alert(e);
        }
    }

    viewCode() {
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        let code = this.init_code + Blockly.JavaScript.workspaceToCode(this.workspace);
        let codeDiv = document.getElementById('codeDiv');
        let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        codeDiv.innerHTML = html;
    }

}

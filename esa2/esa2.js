let canvas = document.getElementById('canvas');
let gl = canvas.getContext('experimental-webgl');

gl.clearColor(1, 1, 1, 1);

// Compile a vertex shader
var vsSource = 'attribute vec2 pos;'+
'void main(){ gl_Position = vec4(pos * 0.2 - 0.5, 0, 1);'+
'gl_PointSize = 10.0; }';
let vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

fsSouce =  'void main() { gl_FragColor = vec4(0, 0, 0, 1); }'; //Farbe der Linie
let fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);

let prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

var vertices = new Float32Array([ 

    0,0,
    0,5,
    5,5,
    5,0,

    1,1,
    1,6,
    6,6,
    6,1,

    2,2,
    2,7,
    7,7,
    7,2,

    3,3,
    3,8,
    8,8,
    8,3,

]);

let vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Bind vertex buffer to attribute variable
let posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

gl.lineWidth(5.0);
gl.drawArrays(gl.LINE_STRIP, 0, 16);
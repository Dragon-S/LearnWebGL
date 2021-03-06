// HelloPoint2.js
var VSHADER_SOURCE = 
    'attribute vec4 a_Position;\n' +
    'void main() {\n' +
    '   gl_Position = a_Position;\n' +
    '   gl_PointSize = 10.0;\n' +
    '}\n';

// 片段着色器
var FSHADER_SOURCE = 
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    // 创建canvas
    var canvas = document.getElementById('webgl');

    //获取WebGL上下文
    var gl = getWebGLContext(canvas, true);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // 初始化shader
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to initialize shaders');
        return;
    }

    // 获取attribute变量的存储位置
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a a_Position');
        return;
    }

    // 将顶点数据传给attribute变量
    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    // 设置canvas颜色为黑色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    //清空canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    //画一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}
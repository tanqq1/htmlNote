function getCanvasNode(){
   return document.querySelector("#canvas").getContext('2d');
}

function addRect(){
    const ctx = getCanvasNode();
    ctx.fillStyle = 'rgba(256,0,0,0.3)';
    ctx.fillRect(10,10,150,100);
    // ctx.strokeStyle = 'rgba(0,256,256)';
    ctx.strokeRect(40,60,100,100);
}

function clearRect(){
    let ctx = getCanvasNode();
    ctx.clearRect(40,40,50,100);
}

function addLineGraph(){
    const ctx = getCanvasNode();
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(230,230);
    // ctx.lineCap = 'round';
    ctx.lineTo(200,260);
    ctx.lineTo(170,230);
    ctx.fillStyle="blue";
    ctx.fill();
    // ctx.stroke();
}

function addArc(){
    const arcUnit = Math.PI / 180;
    const canvas = getCanvasNode();
    canvas.beginPath()
    canvas.arc(300,300,40,0, Math.PI * 2, true);
    // canvas.stroke();
    // canvas.fillStyle = 'pink';
    canvas.fillStyle = '#6ebade';
    canvas.fill();
    canvas.moveTo(280,280);
    canvas.arc(280,280,5, 0, arcUnit * 360, true);
    canvas.stroke();
    canvas.moveTo(320,280);
    canvas.arc(320,280,5,0, arcUnit * 360, true);
    canvas.stroke();
    canvas.moveTo(300,320);
    canvas.beginPath();
    canvas.arc(300,320,10,0,Math.PI, false);
    canvas.stroke();
}

function bezierGraph(){
    const graphNode = getCanvasNode();
    graphNode.beginPath();
    graphNode.moveTo(300,300);
    graphNode.quadraticCurveTo(350,350,380,400);
    // graphNode.strokeStyle = 'blue';
    // graphNode.stroke();
    graphNode.quadraticCurveTo(320, 360, 350,400);
    // graphNode.strokeStyle = 'red';
    // graphNode.stroke();
    graphNode.bezierCurveTo(280,400,320, 360,240,300);
    graphNode.strokeStyle = '#000000';
    // graphNode.rect(260, 260, 50, 60); //绘制矩形
    graphNode.stroke()
}

function bezierGraphRight(){
    const graphNode = getCanvasNode();
    graphNode.beginPath();
    graphNode.moveTo(270,330);
    graphNode.quadraticCurveTo(230, 360, 200,420);
    graphNode.quadraticCurveTo(240, 380, 250, 380);
    graphNode.bezierCurveTo(250, 480, 310, 350, 360, 280);
    graphNode.strokeStyle = '#000000';
    graphNode.stroke()
}

function lineStyleTest(){
    const canvas = getCanvasNode();
    canvas.moveTo(20,20);
    canvas.lineTo(20,200);
    canvas.lineWidth = 20; //线条宽度
    // canvas.lineCap = 'round'; //线条末端样式
    canvas.strokeStyle = 'rgba(234,25,168)'; //填充颜色
    canvas.globalAlpha = 0.2;    //透明度
    // canvas.strokeStyle = 'rgba(234,25,168,0.4)';
    canvas.lineJoin = 'round';
    canvas.setLineDash([8,1])
    canvas.lineTo(100,220);
    const gradient = canvas.createLinearGradient(20,20,20,200);
    gradient.addColorStop(0.1,'black');
    gradient.addColorStop(0.2,'#452367');
    gradient.addColorStop(0.5,'#678956');
    gradient.addColorStop(0.7,'red');
    canvas.strokeStyle = gradient;
    canvas.stroke();
}

function addGradientRadius(){
    const ctx = getCanvasNode();
    const gr = ctx.createRadialGradient(100,100,10,100,100,60);
    gr.addColorStop(0,'rgba(0,256,256,0.3)');
    gr.addColorStop(0,'pink');
    gr.addColorStop(0.5,'#543216');
    gr.addColorStop(0.7,'#ff3216');
    gr.addColorStop(1,'white');
    ctx.arc(100,100,80,0,Math.PI * 2, false);
    ctx.fillStyle = gr;
    ctx.fill();
    // ctx.fillRect(20,20,150,150);
}

function addText(){
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = -2;
    ctx.shadowColor = 'pink';
    ctx.shadowBlur = 2;
    ctx.font = "60px serif";
    // ctx.fillText('hello',30,60);
    ctx.textBaseLine = 'hanging';
    const text = ctx.measureText('hello');
    console.log(text.width)
    ctx.strokeText('kkook',30,60);
}

function handleCanvasStatus(){
    const ctx = document.querySelector('#canvas2').getContext('2d');
    // rect1
    ctx.fillStyle="#768943";
    ctx.fillRect(10,10,80,80);
    ctx.save();

    //rect2
    ctx.fillStyle="#230987";
    ctx.fillRect(20,20,60,60);
    ctx.save();

    //rect3
    ctx.fillStyle="#ff8899";
    ctx.fillRect(30,30,40,40);

    //rect4
    ctx.restore();
    ctx.fillRect(40,40,20,20);

    //rect5
    ctx.restore();
    ctx.fillRect(45,45,10,10)

    ctx.save();

    ctx.translate(100,0);//移动
    ctx.rotate(Math.PI / 6); //旋转
    ctx.scale(0.9,0.9);//缩放
    // ctx.globalCompositeOperation = 'color';

}

function getTransform(){
    const ctx = document.getElementById('canvas2').getContext('2d');
    const sin = Math.sin(Math.PI / 6);
    const cos = Math.cos(Math.PI / 6);
    ctx.fillStyle = 'gray';
    ctx.globalAlpha = 0.4;
    ctx.rect(20,100,100,5);
    ctx.fill();
    ctx.transform(5, sin, 5, -cos, 0, 0);
    ctx.resetTransform();

    // ctx.setTransform(-1, 0, 0, 1, 100, 100)
}

function clipOrigin(){
    const ctx = document.getElementById('canvas2').getContext('2d');
    // ctx.moveTo(20,20);
    ctx.beginPath();
    // ctx.lineTo(30,10);
    // ctx.lineTo(40,20);
    ctx.arc(50,50,40,0,Math.PI*2,false);
    ctx.clip();
}



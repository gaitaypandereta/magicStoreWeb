window.onload = function() {
	
	
	

}
$(document).ready(function(){
    $('.menu').hide();
    $('#ocultar').hide();
    $("#mostrar").click(function(){
        $('.margin_logo').css({'left':'30%'}); 
        $('#target').show(3000);
        $('.menu').show("slow");
        $('#mostrar').hide("swing");
        $('#ocultar').show("swing");
     });
    $("#ocultar").click(function(){
		$('.margin_logo').css({'left':'0%'});
        $('#target').hide(3000);
        $('.menu').hide("swing");
        $('#ocultar').hide("swing");
        $('#mostrar').show("swing");
     });
});
 var stage;
 var CUAD = 50;
 var SIZE = 40;
 var SIZE2 = 30;
 var SIZE3 = 20;
 var RADIO =25;
 var RADIO1 =15;	
 var RADIO2=10;
 var RADIO3=8;	
function init() {
  //resize canvas to full width and height
var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
stage = new createjs.Stage("canvas");

//------------CASITA_FONDO_BASE---------------------

//CASITA/Tejado base 
var tejado=new createjs.Graphics();
tejado.beginStroke("#000");
tejado.setStrokeStyle(5, "square", "round");
tejado.beginFill("red");
tejado.lineTo(180, 220);
tejado.lineTo(480,  0);
tejado.lineTo(780, 220);
tejado.lineTo(180, 220);
tejado.endStroke();
var redTejado=new createjs.Shape(tejado);
redTejado.x=50;
redTejado.y=50;
stage.addChild(redTejado);

//CASITA/Tejado interno
var tejadito=new createjs.Graphics();
tejadito.beginStroke("#000");
tejadito.setStrokeStyle(5, "square", "round");
tejadito.beginFill("red");
tejadito.lineTo(390, 110);
tejadito.lineTo(480,  25);
tejadito.lineTo(570, 110);
tejadito.lineTo(390, 110);
tejadito.endStroke();
var redTejadito=new createjs.Shape(tejadito);
redTejadito.x=50;
redTejadito.y=50;
stage.addChild(redTejadito);

//CASITA/casita
var casita=new createjs.Graphics();
casita.beginStroke("#000");
casita.setStrokeStyle(5, "square", "round");
casita.beginFill("#FFF");
casita.lineTo(400, 110);
casita.lineTo(560, 110);
casita.lineTo(560, 410);
casita.lineTo(400, 410);
casita.lineTo(400, 110);
casita.endStroke();
var miCasita=new createjs.Shape(casita);
miCasita.x=50;
miCasita.y=50;
stage.addChild(miCasita);


//CASITA/casa planta baja

var casa=new createjs.Graphics();
casa.beginStroke("#000");
casa.setStrokeStyle(5, "square", "round");
casa.beginFill("#FFF");
casa.lineTo(200, 220);
casa.lineTo(760, 220);
casa.lineTo(760, 590);
casa.lineTo(200, 590);
casa.lineTo(200, 220);
casa.endStroke();
var miCasa=new createjs.Shape(casa);
miCasa.x=50;
miCasa.y=50;
stage.addChild(miCasa);

for(var i=0; i<30;i++){
  addSquare(canvas.width/15, canvas.height/4.5, CUAD/5, 5, "#0F0");
  addSquare(canvas.width/17, canvas.height/4.5, CUAD/5, 5, "#FFF");
  addSquare(canvas.width/26, canvas.height/4.5, CUAD/5, 5, "#763C28");
  addSquare(canvas.width/19.5, canvas.height/4.5, CUAD/5, 5, "#A5A5A5");
  addSquare(canvas.width/35, canvas.height/4.5, CUAD/5, 5, "#FF0");
  addSquare(canvas.width/21, canvas.height/4.5, CUAD/5, 5, "#F00");
  addSquare(canvas.width/45, canvas.height/4.5, CUAD/5, 5, "#00F");
  addSquare(canvas.width/70, canvas.height/4.5, CUAD/5, 5, "#000");

  addRoundedSquare(canvas.width/40, canvas.height/4.5, CUAD, 5, "#0F0");
  addRoundedSquare(canvas.width/20, canvas.height/4.5, CUAD, 5, "#FFF");
  addRoundedSquare(canvas.width/30, canvas.height/4.5, CUAD, 5, "#763C28");
  addRoundedSquare(canvas.width/20, canvas.height/4.5, CUAD, 5, "#A5A5A5");
  addRoundedSquare(canvas.width/30, canvas.height/4.5, CUAD, 5, "#FF0");
  addRoundedSquare(canvas.width/20, canvas.height/4.5, CUAD, 5, "#F00");
  addRoundedSquare(canvas.width/30, canvas.height/4.5, CUAD, 5, "#00F");
  addRoundedSquare(canvas.width/30, canvas.height/4.5, CUAD, 5, "#763C28");

  addRoundedSquare(canvas.width/30, canvas.height/11,  SIZE * 1.5, 5, "#0F0");
  addRoundedSquare(canvas.width/20, canvas.height/11,  SIZE * 1.5, 5, "#FFF");
  addRoundedSquare(canvas.width/30, canvas.height/11,   SIZE * 2,   5, "#763C28");
  addRoundedSquare(canvas.width/20, canvas.height/11, SIZE * 1.5, 5, "#A5A5A5");
  addRoundedSquare(canvas.width/30, canvas.height/11, SIZE * 1.5, 5, "#FF0");
  addRoundedSquare(canvas.width/20, canvas.height/11,   SIZE * 1.5, 5, "#F00");
  addRoundedSquare(canvas.width/30, canvas.height/11, SIZE * 1.5, 5, "#00F");
  addRoundedSquare(canvas.width/30, canvas.height/11,   SIZE * 1.5, 5, "#763C28");
  
  addStar(canvas.width/40, canvas.height/2.83, SIZE2, "#F00");
  addStar(canvas.width/22, canvas.height/2.83, SIZE2, "#0F0");
  addStar(canvas.width/16, canvas.height/2.83, SIZE2, "#00F");
  addStar(canvas.width/12, canvas.height/2.83, SIZE2, "#F1C40F");
  
  addCircle(canvas.width/44, canvas.height/2.3, RADIO, "#00F");
  addCircle(canvas.width/28, canvas.height/2.3, RADIO, "#0F0");
  addCircle(canvas.width/20, canvas.height/2.3, RADIO, "#FFF");
  addCircle(canvas.width/15, canvas.height/2.3, RADIO, "#F00");
  addCircle(canvas.width/12, canvas.height/2.3, RADIO, "#FF0");
  addCircle(canvas.width/10, canvas.height/2.3, RADIO, "#000");

  
  addCircle(canvas.width/20, canvas.height/1.35, RADIO*2,"#FF0");
  addCircle(canvas.width/25, canvas.height/1.35, RADIO*2,"#0F0");
  addCircle(canvas.width/44, canvas.height/1.35, RADIO*2,"#000");
  addCircle(canvas.width/42, canvas.height/1.35, RADIO*2,"#FFF");
  addCircle(canvas.width/32, canvas.height/1.35, RADIO*2,"#00F");
  addCircle(canvas.width/44, canvas.height/1.35, RADIO*2,"#F00");
  
  addCircle(canvas.width/70, canvas.height/1.9, RADIO1, "#F1C40F");
  addCircle(canvas.width/32, canvas.height/1.9, RADIO1, "#F00");
  addCircle(canvas.width/20, canvas.height/1.9, RADIO1, "#000");
  addCircle(canvas.width/15, canvas.height/1.9, RADIO1, "#FFF");
  addCircle(canvas.width/12, canvas.height/1.9, RADIO1, "#00F");
  addCircle(canvas.width/10, canvas.height/1.9, RADIO1, "#0F0");
      
  addCircle(canvas.width/70, canvas.height/1.6, RADIO2, "#00F");
  addCircle(canvas.width/32, canvas.height/1.6, RADIO2, "#000");
  addCircle(canvas.width/20, canvas.height/1.6, RADIO2, "#F00");
  addCircle(canvas.width/15, canvas.height/1.6, RADIO2, "#FF0");
  addCircle(canvas.width/12, canvas.height/1.6, RADIO2, "#FFF");
  addCircle(canvas.width/10, canvas.height/1.6, RADIO2,  "#0F0");
  
  addCircle(canvas.width/18, canvas.height/1.73, RADIO3, "#0F0");
  addCircle(canvas.width/20, canvas.height/1.73, RADIO3, "#F00");
  addCircle(canvas.width/25, canvas.height/1.73, RADIO3, "#00F");
  addCircle(canvas.width/30, canvas.height/1.73, RADIO3, "#FF0");
  addCircle(canvas.width/40, canvas.height/1.73, RADIO3, "#000");
  addCircle(canvas.width/60, canvas.height/1.73, RADIO3, "#FFF");

  stage.update();
 }
		  
}

function addCircle(x, y, r, fill) {
  var circle = new createjs.Shape();
  circle.graphics.beginFill(fill).beginStroke("#000").drawCircle(0, 0, r);
  circle.x = x;
  circle.y = y;
  circle.name = "circle";
  circle.on("pressmove",drag);
  stage.addChild(circle);
}

function addStar(x, y, r, fill) {
  var star = new createjs.Shape();
  star.graphics.beginFill(fill).beginStroke("#000").drawPolyStar(0, 0, r, 5, 0.6, -90);
  star.x = x;
  star.y = y;
  star.name = "star";
  star.on("pressmove",drag);
  stage.addChild(star);
}

function addRoundedSquare(x, y, s, r, fill) {
    var square = new createjs.Shape();
    square.graphics.beginFill(fill).beginStroke("#000").drawRoundRect(0, 0, s+50, s, r);
    square.x = x - s/2;
    square.y = y - s/2;
    square.name = "square";
    square.on("pressmove",drag);
    stage.addChild(square);
}

function addSquare(x, y, s, r, fill) {
    var square = new createjs.Shape();
    square.graphics.beginFill(fill).beginStroke("#000").drawRoundRect(0, 0, s, s+50, r);
    square.x = x - s/2;
    square.y = y - s/2;
    square.name = "squar";
    square.on("pressmove",drag);
    stage.addChild(square);
}


function drag(evt) {
  // target will be the container that the event listener was added to
  if(evt.target.name == "square") {
    evt.target.x = evt.stageX-SIZE;
    evt.target.y = evt.stageY -SIZE;
  }
  else  {
    evt.target.x = evt.stageX;
    evt.target.y = evt.stageY;
  }
 // make sure to redraw the stage to show the change
  stage.update();   
} 

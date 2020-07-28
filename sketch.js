var tela = 15
var largura = 150
var altura = 50
var xmenu = 42
var xmenu1 = 256
var xmenu2 = 260
var xmenu3 = 35
var ymenu1 = 85
var ymenu2 = 88.5
var ymenu3 = 296.2
var ymenu4 = 298
var xconti = 277.9
var yconti = 301.5
var largura1 = 120
var altura1 = 43
var xopcao1 = 110
var yopcao1 = 235
var xopcao2 = 267
var yopcao2 = 235
var xopcao3 = 110
var yopcao3 = 280
var xopcao4 = 267
var yopcao4 = 280

var anim=[]
var cont = 0
var tempo = 0

let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

let inp;
let inp2;
let inp3;
let inp4;
let inp5;
let inp6;
let inp7;
let inp8;
let inp9;
let inp10;
let inp11;

function preload(){
   anim[0] = loadImage('1.png')
   anim[1] = loadImage('2.png')
   anim[2] = loadImage('3.png')
}


function setup() {
  createCanvas(445, 445);
  img = loadImage('fundo.jpg');
  img1 = loadImage('minhaft.jpg')
  img2 = loadImage ('lousa2.jpg')
  img3 = loadImage ('mateus.jpg')
  img4 = loadImage ('img4.png')
  img5 = loadImage ('img5.PNG')
  img6 = loadImage ('img6.PNG')
  img7 = loadImage ('img7.PNG')
  img8 = loadImage ('img8.PNG')
  img9 = loadImage ('img9.PNG')
  
  
  inp = createInput('');	
  inp.input(tratarRespostas);
  inp.position(-1000, 65);
  inp2 = createInput("")
  inp2.position(-1000, 65);
  inp3 = createInput("")
  inp3.position(-1000, 65);
  inp4 = createInput("")
  inp4.position(-1000, 65);
  inp5 = createInput("")
  inp5.position(-1000, 65);
  inp6 = createInput("")
  inp6.position(-1000, 65);
  inp7 = createInput("")
  inp7.position(-1000, 65);
  inp8 = createInput("")
  inp8.position(-1000, 65);
  inp9 = createInput("")
  inp9.position(-1000, 65);
  inp10 = createInput("")
  inp10.position(-1000, 65);
  inp11 = createInput("")
  inp11.position(-1000, 65);
  
  background(img);
  background(img1)
}

function draw() {
  
  //tela de menu
  
  if (tela == 1) {
    background(img)
    //menu
    
    textAlign(RIGHT);
    textSize(23);
    
    if(mouseX > xmenu && mouseX < xmenu +largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){
    stroke(192,192,192)
    fill(250)
    rect(xmenu, ymenu1, largura, altura, 18);
     if (mouseIsPressed){
       tela = 2;
     }
    }
    fill(0);
    noStroke();
    text("Jogar", 145,119);
    
    //informação do jogo
    
     if(mouseX > xmenu1 && mouseX < xmenu1 +largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xmenu1,ymenu2, largura,altura,18);
    if (mouseIsPressed){
       tela = 3;
    }
     }
    fill(0);
    noStroke();
    text("Informações", 395,122);
    
    //instruções
    if(mouseX > xmenu3 && mouseX < xmenu3 +largura && mouseY > ymenu4 && mouseY < ymenu4 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xmenu3,ymenu4, largura,altura,18);
    if (mouseIsPressed){
       tela = 5;
    }
      
    }
    fill(0);
    noStroke();
    text("Instruções", 164,330);
    
    
    //créditos do jogo
     if  (mouseX > xmenu2 && mouseX < xmenu2 + largura && mouseY >ymenu3 && mouseY < ymenu3 + altura ) {
       stroke(192,192,192)
       fill(250)
       rect(xmenu2, ymenu3, largura, altura, 18)
      if (mouseIsPressed){
       tela= 4;
     }
  }
    
    fill(0);
    noStroke();
    text("Créditos",383,330)
   //jogar

  } else if(tela==2){
    createCanvas(445,445)
    background(img2)
    textSize(16)
    textStyle(BOLD)
    fill(0)
    text("Transforme de Romanos para Numerais Cardinais:", 415,100)
    textStyle(NORMAL)
    text("Pressione ENTER para confirmar as respostas",385,321)
    
    textSize(21)
    textStyle(BOLD)
    text ("V ", 90, 150)
    inp.position(187, 134);
    
    text ("X ", 90, 205)
    inp2.position(187,187)
  
    text ("XV ", 95, 260)
    inp3.position(187,243)

    if(inp.value()==5 && inp2.value()==10 && inp3.value()==15 && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=6;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
    
  }else if (tela==3){
  
    createCanvas(445,445)
    background(img )    
     let s = 'O jogo traz um pouco de algumas tarefas matemáticas de fixação para alunos do 5º ano do ensino fundamental,trablhando  em alguns exercícios práticos que podem ser usados no dia-a-dia, como: números romanos,decimais, fracionarios... ';
fill(0);  
    textStyle(BOLD)
   textSize(18) 
    textAlign(CENTER)
text(s,80,132,300,300); // O texto é agrupado na caixa de texto
    //créditos
  }else if(tela==4){
    createCanvas(445,445)
    background(img)
    image(img1,155,10,135,135)
    textSize(16)
    textStyle(NORMAL)
    textAlign(CENTER)
    fill(0)
    text("Matheus Costa: aluno de Ciências e Tecnologia/ECT",220,172)
    image(img3, 155, 180, 134,134)
    text("Mateus Felipe: Estudante de licenciatura em Informática-IFRN",222,340)
    textSize(16)
   //instruções
    
  }else if (tela==5){
    createCanvas(445,445)
    background(img )    
     let s = 'Para confirmar sua resposta no campo basta que pressione a tecla ENTER e para voltar ao menu inicial pressione a tecla ESC. ';
fill(0);  
    textStyle(BOLD)
   textSize(18) 
    textAlign(CENTER)
text(s,77.5,125,300,300); 
    
  }else if (tela==6){
    createCanvas(445,445)
    background(img2 ) 
    fill(0)
    textSize(16)
    textStyle(NORMAL)
    textStyle(BOLD)
    textAlign(CENTER)
    text("Transforme de Romanos para Numerais Cardinais:", 223,100)
    text("Pressione ENTER para confirmar as respostas",225,321)
    textSize(21)
    
    text ("C", 90, 150)
    inp7.position(187, 134);
    
    text ("D", 90, 250)
    inp8.position(187,187)
    
     if(inp7.value()==100 &&  inp8.value()==500 && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=7;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
   
       
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(187, 134);
  inp8.position(187, 234.5);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
    
}else if(tela==7){
  
  createCanvas(445,445)
    background(img2 ) 
    
    fill(250,20,20)
    textStyle(BOLDITALIC)
    textSize(16)
    textAlign(CENTER)
    text("0,3400 e 0,3 são decimais equivalentes?", 233,181)
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(20)
    fill(0)
    text("São decimais equivalentes:",232,90)
    
    if(mouseX > xopcao1 && mouseX < xopcao1 +largura && mouseY > yopcao1 && mouseY < yopcao1 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao1,yopcao1, 75 ,43,18);
    if(mouseIsPressed){
      print("Tente Novamente.")
       tela = 7;
    }
      
    }
    fill(0);
    noStroke();
    text("Sim", 146,264);
    
    if(mouseX > xopcao2 && mouseX < xopcao2 +largura && mouseY > yopcao2 && mouseY < yopcao2 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao2,yopcao2, 75 ,43,18);
    
    if(mouseIsPressed){
       alert("Muito bem, você acertou")
       tela = 8;
    }
      
    }
    fill(0);
    noStroke();
    text("Não",305,264);
       
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
  
}else if(tela==8){
  createCanvas(445,445)
    background(img2 )  
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(20)
    fill(0)
    text("São decimais Equivalentes:",232,100)
  
    fill(250,20,20)
    textStyle(BOLDITALIC)
    textSize(16)
    textAlign(CENTER)
    text("0,9400 e 0,940 são decimais equivalentes?", 233,200)
  
    if(mouseX > xopcao3 && mouseX < xopcao3 +largura && mouseY > yopcao3 && mouseY < yopcao3 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao3,yopcao3, 75 ,43,18);
    if(mouseIsPressed){
      alert("Muito bem, você acertou")
      tela=9;
            }
    }
    fill(0);
    noStroke();
    text("Sim", 146,310);

  
    if(mouseX > xopcao4 && mouseX < xopcao4 +largura && mouseY > yopcao4 && mouseY < yopcao4 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao4,yopcao4, 75 ,43,18);
    
    if (mouseIsPressed){
       print("Tente Novamente.")
       tela = 8;
    }
      
    }
    fill(0);
    noStroke();
    text("Não",305,310);
  
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
  
}else if(tela==9){
   createCanvas(445,445)
    background(img2 )  
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(20)
    fill(0)
    text("São decimais Equivalentes?",232,100)
  fill(250,20,20)
    textStyle(BOLDITALIC)
    textSize(16)
    textAlign(CENTER)
    text("0,44 e 0,3 são decimais equivalentes?", 233,200)
  
  if(mouseX > xopcao3 && mouseX < xopcao3 +largura && mouseY > yopcao3 && mouseY < yopcao3 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao3,yopcao3, 75 ,43,18);
    if(mouseIsPressed){
      print("Tente Novamente.")
      tela=9;
            }
    }
    fill(0);
    noStroke();
    text("Sim", 146,310);
  
  
   if(mouseX > xopcao4 && mouseX < xopcao4 +largura && mouseY > yopcao4 && mouseY < yopcao4 + altura){
    stroke(192,192,192);
    fill(250);
    rect(xopcao4,yopcao4, 75 ,43,18);
    
    if (mouseIsPressed){
       alert("Muito bem, você acertou")
       tela = 10;
    }
      
    }
    fill(0);
    noStroke();
    text("Não",305,310);
  
  
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
  
}else if(tela==10){
 createCanvas(445,445)
    background(img2 )  
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(18)
    fill(0)
    text("Qual a fração das formas são quadrados?",225,85)
    textSize(13)
    textAlign(CENTER)
    textStyle(BOLDITALIC)
    fill(250,20,20)
    text("Utiliza ' / ' para separar numerador e denominador; Ex: 5/10", 224,285)
    image(img4,100,100,250,160)
  
  
  if(inp4.value()==("6/8") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=11;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
      
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(139, 310);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);

  
} else if(tela==11){
  createCanvas(445,445)
    background(img2 )  
    image(img6,45,108,355,133)
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(18)
    fill(0)
   text("Qual a fração das formas são círculos?",225,85)
    textSize(14)
    textAlign(CENTER)
    textStyle(BOLDITALIC)
    fill(250,20,20)
    text("Utiliza ' / ' para separar numerador e denominador", 224,285)
  
  if(inp5.value()==("4/7") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=12;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
  
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(139, 310);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
  
}else if(tela==12){
  createCanvas(445,445)
    background(img2 )  
    image(img7, 45,108,355,133)
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(18)
    fill(0)
    text("Qual a fração das formas são retângulos?",225,85)
    textSize(14)
    textAlign(CENTER)
    textStyle()
    fill(250,20,20)
    text("Utiliza ' / ' para separar numerador e denominador", 224,285)
  
  if(inp6.value()==("3/5") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=13;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
  
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(139, 310);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);

  
}else if(tela ==13){
    createCanvas(445,445)
    background(img2 )  
    image(img5,45,131,350,118)
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(18)
    fill(0)  
   text("Qual a fração das formas são retângulos?",225,85)
    textSize(14)
    textStyle(BOLDITALIC)
    fill(250,20,20)
    text("Utiliza ' / ' para separar numerador e denominador", 224,285)
  
  if(inp9.value()==("3/5") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=14;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    

  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(139,310);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
  
}else if(tela==14){
 createCanvas(445,445)
    background(img2 )  
    textStyle(BOLDITALIC)
    textAlign(CENTER)
    textSize(18)
  image(img8,60,108,320,145)
  fill(0)
  text("Qual sinal torna verdadeira a fração?",225,85)
    textSize(14)
    textAlign(CENTER)
    fill(250,30,50)
    text("Utiliza ' < (para menor)' e ' > (para maior)' para separar numerador e denominador", 80,262,305,120)
  
  if(inp10.value()==("<") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=15;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
     
  
  inp.position (-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000,65);
  inp10.position(139,310);
  inp11.position(-1000, 65);
  
} else if(tela==15){
  
createCanvas(445,445)
    background(img2 ) 
  image(img9,60,108,320,145)
    textStyle(BOLDITALIC)
    textAlign(CENTER)
    textSize(18)
   fill(0)
    text("Qual sinal torna verdadeira a fração?",225,85)
    textSize(14)
    textAlign(CENTER)
    fill(250,30,50)
    text("Utiliza ' < (para menor)' e ' > (para maior)' para separar numerador e denominador", 80,262,305,120)
  
  if(inp11.value()==("<") && keyIsDown(ENTER)){
      alert("Muito bem,o valor está correto");
      tela=16;
        
  }else if (keyIsDown(ENTER)){
      alert("O valor está incorreto,tente novamente");       
  }    
  inp.position (-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000,65);
  inp10.position(-1000, 65);
  inp11.position(139,310);
  

}else if(tela==16){
  
createCanvas(445,445)
    background(img )  
    textStyle(BOLDITALIC)
    textAlign(CENTER)
    textSize(18)
    fill(60,30,60)
    text("Parabéns você conseguiu concluir todas as fases.",223,130)
  tempo++
  image(anim[cont%3],145,125);
   if(tempo >7){
       cont++;
       tempo = 0;
   }
  

  inp.position (-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000,65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65);
   
}
  
  
  
}

function tratarRespostas() {
  console.log('vc digitou: ', this.value());
}

 //função de apertar ESC e voltar a tela principal.
function keyPressed() {
  if(key=="Escape")
      tela=1;
  inp.position(-1000, 65);
  inp2.position(-1000, 65);
  inp3.position(-1000, 65);
  inp4.position(-1000, 65);
  inp5.position(-1000, 65);
  inp6.position(-1000, 65);
  inp7.position(-1000, 65);
  inp8.position(-1000, 65);
  inp9.position(-1000, 65);
  inp10.position(-1000, 65);
  inp11.position(-1000, 65)
}

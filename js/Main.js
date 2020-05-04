
    var score=0;
    var lifes=10;
    var speed=200;
  
//add function startGame to btn play
let btn=document.getElementById('play');
btn.addEventListener('click',startGame);

let playAgain=document.getElementById('playAgain');
playAgain.addEventListener('click',replay );

//creat score and lifes 
document.getElementById('result').innerHTML=`Score:${score}`;
document.getElementById('lifes').innerHTML=`Lifes:${lifes}`;

var basket=document.getElementById('basket');
    addEventListener('mousemove', function(event){
        basket.style.left=event.clientX;
    })

function startGame(){

   
    let gameMusic=new Audio("sounds/happy chicken.mp3");//game sound source
      gameMusic.play(); 
    
    let scoreSound=new Audio("sounds/score.mp3");
    let eggCrash=new Audio("sounds/fly.mp3");
    
  

    document.getElementById('happyEgg').style.display='none';//to disappear the play window
    
    let egg1=document.getElementById('egg1');
    let egg2=document.getElementById('egg2');
    let egg3=document.getElementById('egg3');
    
    var pos1=0;
    var pos2=0;
    var pos3=0;

    function moveEgg(){
        

        pos1+=20;
        pos2+=20;
        pos3+=20;
        egg1.style.top=pos1;
        egg2.style.top=pos2;
        egg3.style.top=pos3;

        var e1bottom=egg1.getBoundingClientRect().bottom;
        var e2bottom=egg2.getBoundingClientRect().bottom;
        var e3bottom=egg3.getBoundingClientRect().bottom;
        // let e1bottom=egg1.offsetTop+egg1.offsetHeight;
        // let e2bottom=egg2.offsetTop+egg2.offsetHeight;
        // let e3bottom=egg3.offsetTop+egg3.offsetHeight;

        var e1left=egg1.getBoundingClientRect().left;
        var e2left=egg2.getBoundingClientRect().left;
        var e3left=egg3.getBoundingClientRect().left;


        var e1right=egg1.getBoundingClientRect().right;
        var e2right=egg2.getBoundingClientRect().right;
        var e3right=egg3.getBoundingClientRect().right;

        

        var windoHieght=window.innerHeight;
        var basketTop=basket.getBoundingClientRect().top;
        var basketLeft=basket.getBoundingClientRect().left;
        var basketRight=basket.getBoundingClientRect().right;

      
if(e1bottom>basketTop &&  basketLeft<e1right&&e1left<basketRight ||
    (e1bottom>basketTop &&  e1right>basketRight&&e1left<basketRight)){
    pos1=0;   
    score++; 
    document.getElementById('result').innerHTML=`<h4>Score:${score}</h4>`;
    scoreSound.play();
}

if(e2bottom>basketTop &&  basketLeft<e2right&&e2left<basketRight ||
    (e2bottom>basketTop &&  e2right>basketRight&&e2left<basketRight)){
    pos2=0;   
    score++; 
    document.getElementById('result').innerHTML=`<h4>Score:${score}</h4>`;
    scoreSound.play();
}

if(e3bottom>basketTop &&  basketLeft<e3right&&e3left<basketRight ||
    (e3bottom>basketTop &&  e3right>basketRight&&e3left<basketRight)){
    pos3=0;   
    score++; 
    document.getElementById('result').innerHTML=`<h4>Score:${score}</h4>`;
    scoreSound.play();
}
else if(e1bottom>=windoHieght){
    pos1=0;   
    lifes--;
    document.getElementById('lifes').innerHTML=`Lifes:${lifes}`;
    document.getElementById('brokenEgg1').style.opacity=1; 
    var x=setTimeout(brokenEgg,2000);
    eggCrash.play();
}
else if(e2bottom>=windoHieght){
    pos2=0;   
    lifes--;
    document.getElementById('lifes').innerHTML=`Lifes:${lifes}`;
    document.getElementById('brokenEgg2').style.opacity=1; 
    var x=setTimeout(brokenEgg,2000);
    eggCrash.play();
}
else if(e3bottom>=windoHieght){
    pos3=0;   
    lifes--;
    document.getElementById('lifes').innerHTML=`Lifes:${lifes}`;
    document.getElementById('brokenEgg3').style.opacity=1; 
    var x=setTimeout(brokenEgg,2000);
    eggCrash.play();
     
}


 if(lifes<=0){
    //console.log('hello');
    gameMusic.pause();
    clearInterval(setInter);
    GameOver();
    }

    
    if(score>2){
        speed=100;
        console.log(speed);
    }


}


var setInter=setInterval(moveEgg, `${speed}`);
 
    
  

}


function brokenEgg() { 
    document.getElementById('brokenEgg1').style.opacity=0; 
    document.getElementById('brokenEgg2').style.opacity=0; 
    document.getElementById('brokenEgg3').style.opacity=0; 

 }
 
function GameOver() {
    document.getElementById('EndGame').style.display='block';

}

function replay() {  
    document.getElementById('EndGame').style.display='none';
    location.reload();
}


  

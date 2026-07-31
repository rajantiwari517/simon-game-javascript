let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["red","yellow","green","purpole"];
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(started==false){
        // console.log("game started");
        started=true;

        levelup();
    }


})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h4.innerText=`level ${level}`;

    let randomidx =   Math.floor(Math.random()*4);
    let rancolor= btns[randomidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    // console.log(gameseq);
    btnflash(ranbtn);
}
function checkans(idx){
    
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
           setTimeout(levelup,1000);
        }
       
    }
    else{
        h4.innerHTML=`your scoor=${level}<br>Game over!please press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },1500)
        gameseq=[];
        level=0;
        started=false;
    }
}
function btnPress(){
    let btn=this;
    btnflash(btn);
    let usercolour= btn.getAttribute("id");
    userseq.push(usercolour);
    checkans(userseq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
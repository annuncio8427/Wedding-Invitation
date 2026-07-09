
// =======================
// MUSIC
// =======================

// ==========================
// TOGGLE MUSIC (was called by the button but never defined)
// ==========================


function playMusic(){


let music =
document.getElementById(
"bgm"
);


let btn =
document.getElementById(
"musicBtn"
);


if(music.paused){


music.play();


btn.textContent = "⏸";


} else {


music.pause();


btn.textContent = "🎵";


}


}


// ==========================
// OPEN INVITATION
// ==========================


function openInvitation(){


let start =
document.getElementById(
"startScreen"
);


let main =
document.getElementById(
"mainInvitation"
);



start.classList.add(
"open"
);



setTimeout(()=>{


start.style.display="none";


main.classList.remove(
"hidden"
);


},1500);




// MUSIC START


let music =
document.getElementById(
"bgm"
);


let btn =
document.getElementById(
"musicBtn"
);



music.volume=0;



music.play();


btn.textContent = "⏸";



let v=0;


let fade=setInterval(()=>{


v+=0.05;


music.volume=v;


if(v>=0.8){


clearInterval(fade);


}


},200);



}

// =======================
// HEART + FLOWER EFFECT
// =======================
// ===============================
// PREMIUM FLOWER / HEART FALL
// ===============================


function createFlower(){


const flower =

document.createElement("div");



flower.className = "float";



const items = [

"🌸",
"🌹",
"🌺",
"💮",
"❤️",
"💛"

];



flower.innerHTML =

items[
Math.floor(
Math.random()*items.length
)
];




// random horizontal position

flower.style.left =

Math.random()*100 + "vw";




// random size

flower.style.fontSize =

Math.random()*18 + 18 + "px";




// random falling speed

flower.style.animationDuration =

Math.random()*4 + 5 + "s";




// random transparency

flower.style.opacity =

Math.random()*0.5 + 0.5;



document.body.appendChild(flower);



// remove after animation

setTimeout(()=>{


flower.remove();


},9000);



}



// create flowers

setInterval(

createFlower,

650

);


// =======================
// COUNTDOWN TIMER
// =======================


let weddingDate =

new Date(
"August 24, 2026 00:00:00"
).getTime();




setInterval(()=>{


let now =
new Date()
.getTime();



let gap =

weddingDate-now;




let days =

Math.floor(
gap/(1000*60*60*24)
);



let hours =

Math.floor(
(gap%(1000*60*60*24))
/
(1000*60*60)
);



let minutes =

Math.floor(
(gap%(1000*60*60))
/
(1000*60)
);



let countdownEl =
document.getElementById(
"countdown"
);


if(countdownEl){


countdownEl.innerHTML =


days+
" Days "+
hours+
" Hours "+
minutes+
" Min";


}


},1000);

let container = document.getElementById('container');
let wave = document.getElementById('wave');
let about = document.getElementById('about')




function scrollAbout() {
    window.scrollBy(0,1000);
}


function scrollProjects(){
    window.scrollBy(0,1900);
}

function scrollContact(){
    window.scrollBy(0,3700);
}


function startIt(){
    setTimeout(()=>{
        container.style.visibility = 'visible'
        wave.style.visibility = 'hidden'
    },3000)
}
startIt();


function btnfunc1() {
    window.open('https://milltiades.github.io/equalizer-landing-page/')
}


function btnfunc2() {
    window.open('https://milltiades.github.io/typemaster-pre-launch-landing-page/')
}

function btnfunc3() {
    window.open('https://milltiades.github.io/four-card-feature-section-master/')
}


function btnFirst(){
    window.open('https://github.com/Milltiades')
}

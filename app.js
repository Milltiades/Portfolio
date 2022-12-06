let container = document.getElementById('container');
let wave = document.getElementById('wave');
let about = document.getElementById('about')
let barScreen = document.getElementById('barScreen')



function scrollAbout() {
    window.scrollBy(0,800);
}


function scrollProjects(){
    window.scrollBy(0,1770);
}

function scrollContact(){
    window.scrollBy(0,3500);
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


function barFunc(){
    if(barScreen.style.visibility == 'hidden'){
        barScreen.style.visibility = 'visible'
        
    }else{
        barScreen.style.visibility = 'hidden'
    }
}
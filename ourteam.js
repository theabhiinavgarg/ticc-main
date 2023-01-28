// import {councItem } from './ourteamList.js'

document.getElementById("our-counc").addEventListener('click',showCounc);
function showCounc(){
    document.getElementById("counsellors").classList.remove("toggle");
    document.getElementById("ambassadors").classList.add("toggle");
    document.getElementById("stuambassadors").classList.add("toggle");

    document.getElementById("our-counc").classList.add("underline");
    document.getElementById("stu-amb").classList.remove("underline");
    document.getElementById("amb").classList.remove("underline");
}

document.getElementById("stu-amb").addEventListener('click',showAmb);
function showAmb(){
    document.getElementById("ambassadors").classList.remove("toggle");
    document.getElementById("counsellors").classList.add("toggle");
    document.getElementById("stuambassadors").classList.add("toggle");
    
    document.getElementById("stu-amb").classList.add("underline");
    document.getElementById("our-counc").classList.remove("underline");
    document.getElementById("amb").classList.remove("underline");
}

document.getElementById("amb").addEventListener('click',showStuAmb);
function showStuAmb(){
    document.getElementById("stuambassadors").classList.remove("toggle");
    document.getElementById("counsellors").classList.add("toggle");
    document.getElementById("ambassadors").classList.add("toggle");

    document.getElementById("amb").classList.add("underline");
    document.getElementById("stu-amb").classList.remove("underline");
    document.getElementById("our-counc").classList.remove("underline");
}


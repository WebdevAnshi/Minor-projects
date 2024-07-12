let playbtn_img = document.getElementById("play-btn-img");
let playbtn = document.getElementById("play-btn");
playbtn.addEventListener('click', (e)=>{
    if (playbtn_img.src == './img/pause.svg'){
        playbtn_img.src = './img/play-button.svg';
    } else {
        playbtn_img.src = './img/pause.svg';
    }
})
let rightb = document.getElementById('right');
let leftb = document.getElementById('left');
let topb = document.getElementById('top');
let bottomb = document.getElementById('bottom');

let infox = document.getElementById('x');
let infoy = document.getElementById('y');

let ss = 20;

setInterval(() => {
    infox.innerText = `X: ${scrollX}`;
    infoy.innerText = `Y: ${scrollY}`;
}, 0);

let bc = false;

rightb.addEventListener('click', (e)=>{
    bc = true;
    window.scrollBy(ss, 0);
});
leftb.addEventListener('click', (e)=>{
    bc = true;
    window.scrollBy(-ss, 0);
});
topb.addEventListener('click', (e)=>{
    bc = true;
    window.scrollBy(0, -ss);
});
bottomb.addEventListener('click', (e)=>{
    bc = true;
    window.scrollBy(0, ss);
});


rightb.addEventListener('mouseout', (e)=>{
    bc = false;
});
leftb.addEventListener('mouseout', (e)=>{
    bc = false;
});
topb.addEventListener('mouseout', (e)=>{
    bc = false;
});
bottomb.addEventListener('mouseout', (e)=>{
    bc = false;
});

document.body.addEventListener('click', (e)=>{
    if (!bc){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.top = `${e.pageY}px`;
        dot.style.left = `${e.pageX}px`;
        document.body.appendChild(dot);
    }
});
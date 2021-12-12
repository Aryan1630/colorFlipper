let colors = ['green','blue','pink','yellow'];
document.getElementById('clickMe').addEventListener('click', ()=>{
    let color= colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('[class="colorName"]').innerHTML = color;
    document.querySelector('body').style.backgroundColor = color;
})
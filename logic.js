const circle = document.querySelector('.circle')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let r = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    const newColor = `rgb(${r},${b},${g})`;
    if(r < 256 && g < 256 || b < 256)
    circle.style.color = "white";
    else
        circle.style.color = "black";
    circle.style.backgroundColor = newColor;
    circle.style.height = `${r}px`
    circle.style.width = `${r}px`
})
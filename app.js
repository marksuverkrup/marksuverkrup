let line1 = document.querySelector('.Scroll-1');
let line2 = document.querySelector('.Scroll-2');

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line1.style.left = '${pos}px'
    line2.style.right = '${pos}px'

}
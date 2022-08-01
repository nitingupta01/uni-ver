
let index=1;
showslide(index);

function next()
{
    index++;
    showslide(index);
}
function prev(){
    index--;
    showslide(index);
}
function displayslide(n)
{
    index=n;
    showslide(index);
}

function showslide(n)
{
    let total=document.querySelectorAll(".carousel-item").length;
    let slide=document.querySelectorAll(".carousel-item");
    let dot=document.querySelectorAll(".dot");
    if(n>total)
    {
        index=1
    }
    if(n<1)
    {
        index=total;
    }
    for(var i=0;i<total;i++)
    {
        slide[i].style.display = "none";
        dot[i].classList.remove("active");
    }
    slide[index-1].style.display = "block";
    dot[index-1].classList.add("active");
}

function dis1(){
    let x=document.getElementById("stat");

    if(x.style.display==="block")
    {
        x.style.display = "none"
    }
    else{
        x.style.display="block";
    }
}
function dis2(){
    let x=document.getElementById("award");
    if(x.style.display==="block")
    {
        x.style.display = "none"
    }
    else{
        x.style.display="block";
    }
}
let toggle=false;
function show(){
    let x=document.getElementsByClassName("item");
    if(toggle===false)
    {
    for(var i=0;i<x.length;i++)
    {
        x[i].className+=" responsive"
        toggle=true;
    }
    }
    else{
        for(var i=0;i<x.length;i++)
        {
            x[i].className="item";
            toggle=false;
        }
    }
}
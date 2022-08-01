let no=document.querySelectorAll(".question");
for(i=0;i<no.length;i++){
document.querySelectorAll(".question")[i].addEventListener("click",function(){
    let pressed=this.id-1;
    for(var j=0;j<no.length;j++)
    {
        if(pressed===j)
        continue;
        document.querySelectorAll(".content")[j].style.display="none";
    }
    let query=this.id;
    let dis=document.getElementById("answer"+query);
    if(dis.style.display==="none"){
        dis.style.display="block";
    }
    else
    {
        dis.style.display="none";
    }
})
}

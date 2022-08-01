function clearerror(){
    let item=document.querySelectorAll(".error");
    for(let i=0;i<item.length;i++)
    {
        document.querySelectorAll(".error")[i].innerText="";
        document.querySelectorAll("input")[i].style.borderColor="black";
    }
}


function validateform(){
    clearerror();
    let x=document.form.fname.value;
    let y=document.form.email.value;
    let z=document.form.number.value;
    let value=true;
    if(x==="")
    {
        document.getElementById("fname").style.borderColor="red";
        document.querySelector(".error1").innerText="Please fill out your name";
        value=false;
    }
    if(y==="")
    {
        document.getElementById("email").style.borderColor="red";
        document.querySelector(".error2").innerText="Please fill out your email";
        value=false;
    }
    if(z.length!=10)
    {
        document.getElementById("number").style.borderColor="red";
        document.querySelector(".error3").innerText="Please enter correct number";
        value=false;
    }
    return value;
}
var div1 =document.querySelector("#div1");
var div2 =document.querySelector("#div2");
var i1 =document.querySelector("#i1");
var i2 =document.querySelector("#i2");
var i3 =document.querySelector("#i3");
var i4 =document.querySelector("#i4");
var btn=document.querySelector("#btn");

div1.addEventListener('click',function(){
    i1.classList.add('hied');
    i2.classList.remove('hied');
    i4.classList.add('hied');
    i3.classList.remove('hied');
    let lancer ="Create Account As Client";
    btn.innerHTML=lancer;
    btn.classList.add('change');
    btn.setAttribute('href',"clientReg.html");
    div1.classList.add('borc');
    div2.classList.remove('borc');

})

div2.addEventListener('click',function(){
    i3.classList.add('hied');
    i4.classList.remove('hied');
    i2.classList.add('hied');
    i1.classList.remove('hied');
    let lancer ="Create Account As Freelancer"; 
    btn.innerHTML=lancer;
    btn.classList.add('change');
    btn.setAttribute('href',"lancerReg.html");
    div2.classList.add('borc');
    div1.classList.remove('borc');

})
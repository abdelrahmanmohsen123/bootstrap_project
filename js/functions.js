window.addEventListener('load', function () {

    $('.active').css('color','#14a800')
    $('.unactive').on('mouseover', function () {
        
            // $(this).css('color','#14a800')
            $('.active').css('color','#4b4b4b')


        
      
    });

    console.log("i'm Opening");


//this is a listener for @media query screen
let listner = window.matchMedia("(max-width:768px)");
let navItem1 = this.document.querySelector("#collapseOne");
let navItem2 = this.document.querySelector("#collapse2");
let navItem3 = this.document.querySelector("#collapse3");
let navItem4 = this.document.querySelector("#collapse4");

//add this is listener on @media query screen
listner.addEventListener("change",showLsItemsOfAccordion);

//function will be used as callBack function
function showLsItemsOfAccordion(e) {
    console.log("i'm changing screen");
    if (e.matches) {
        navItem1.classList.remove("show");
        navItem2.classList.remove("show");
        navItem3.classList.remove("show");
        navItem4.classList.remove("show");
        console.log(e.matches);

    } else {
        navItem1.classList.add("show");
        navItem2.classList.add("show");
        navItem3.classList.add("show");
        navItem4.classList.add("show");
    console.log(e);

    }
}



});//end Loading



//show more categories btn 
  let   toBeShown = document.getElementsByClassName("toBeShown");
let seeMoreBtn = document.querySelector("#seeMoreCateg");
let togleTxt=true;
seeMoreBtn.addEventListener("click", function () {

    if (togleTxt) {
        seeMoreCateg.textContent="Show less...";
         togleTxt= false;
    console.log(togleTxt);
        }
        else{
            seeMoreCateg.textContent="Show more (4)";
            togleTxt=true;
            console.log(togleTxt);
        }
        toBeShown[0].classList.toggle("d-none");
        toBeShown[1].classList.toggle("d-none");
        toBeShown[2].classList.toggle("d-none");
        toBeShown[3].classList.toggle("d-none");
   
});//onClick button closer

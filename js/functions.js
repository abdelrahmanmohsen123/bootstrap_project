window.addEventListener('load', function () {
    $('.nav-item').on('mouseover', function () {
        // $(this).addClass('dropup text-primary')
    });

});//end Loading

let navItem1 = this.document.querySelector("#collapseOne");
let navItem2 = this.document.querySelector("#collapse2");
let navItem3 = this.document.querySelector("#collapse3");
let navItem4 = this.document.querySelector("#collapse4");

//this is a listener for @media query screen
let listner = window.matchMedia("(max-width: 768px)");

//function will be used as callBack function
function showLsItemsOfAccordion(listnr) {
    if (listnr.matches) {
        navItem1.classList.remove("show");
        navItem2.classList.remove("show");
        navItem3.classList.remove("show");
        navItem4.classList.remove("show");

    } else {
        navItem1.classList.add("show");
        navItem2.classList.add("show");
        navItem3.classList.add("show");
        navItem4.classList.add("show");
    }
}
//add this is listener on @media query screen
showLsItemsOfAccordion(listner);
listner.addListener(showLsItemsOfAccordion);

navItem1 = document.getElementsByClassName("toBeShown");
navItem2 = navItem1[0];
navItem3 = navItem1[1];
navItem4 = navItem1[2];

navItem1 = document.querySelector("#seeMoreCateg");
let togleTxt;
navItem1.addEventListener("click", function () {

    if (togleTxt) {
        navItem1.textContent="show more...";
         togleTxt= false;
    console.log(togleTxt);
        }
        else{
            navItem1.textContent="show less...";
            togleTxt=true;
            console.log(togleTxt);
        }
    navItem2.classList.toggle("d-none");
    navItem3.classList.toggle("d-none");
    navItem4.classList.toggle("d-none");
   
});//onClick button closer

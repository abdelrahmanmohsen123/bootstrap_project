window.addEventListener('load', function () {
    $('.nav-item').on('mouseover', function () {
        // $(this).addClass('dropup text-primary')
    });

});//end Loading

let navItem1 = this.document.querySelector("#collapseOne");
let navItem2 = this.document.querySelector("#collapse2");
let navItem3 = this.document.querySelector("#collapse3");
let navItem4 = this.document.querySelector("#collapse4");


let listner = window.matchMedia("(max-width: 768px)");


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

showLsItemsOfAccordion(listner);
listner.addListener(showLsItemsOfAccordion);
// Select every element in the nav menu
var menuElements = document.querySelectorAll("header nav ul li");

// Add event listeners to each menu element and execute a function to scroll to the corresponding section when clicked.
[...menuElements].forEach(menuElement => {
    menuElement.addEventListener("click", () =>{
        selectElement(menuElement);
        let targetID = menuElement.id.replace("menu-", "");
        scrollToElementVerticalPosition(targetID);
    })
});
/**
 * selectElement function
 * This function removes the selected class from all menu elements and adds it to the element that was clicked.
 * @param {HTMLElement} e 
 */
function selectElement(e) {
    menuElements.forEach(menuElement => {
        menuElement.classList.remove("selected");
    });
    e.classList.add("selected");
}
/**
 * ScrollToElement function
 * This function scrolls to the element with the id that is passed as a parameter.
 * @param {HTMLElement} e 
 */
function scrollToElement(e) {
    document.getElementById(e).scrollIntoView();
}

function scrollToElementVerticalPosition(e){
    let element = document.getElementById(e);
    let elementPosition = element.getBoundingClientRect();
    let elementVerticalPosition = elementPosition.top;
    window.scrollBy({
        top: elementVerticalPosition,
        left: 0,
        behavior: 'smooth'
    });
}
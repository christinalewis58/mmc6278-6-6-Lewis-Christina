//When the `button.hamburger-btn` element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the `show-menu` class on the `.hamburger-menu` element should show/hide the menu.

document.getElementsByClassName("hamburger-btn")[0].addEventListener("click", function(){
    
    var getBTN = document.getElementsByClassName("hamburger-btn")[0];
    if(getBTN.ariaExpanded == "true")
    {
        getBTN.ariaExpanded = "false";
    }
    else
    {

        getBTN.ariaExpanded = "true";
        getBTN.ariaHidden = "false"
    }
    // var getMenu = document.getElementById("main-menu");
    // getMenu.style.display = "block"
    // for(let i = 0; i < getMenu.getElementsByTagName("li").length; i++)
    // {
    //     // alert(getMenu.getElementsByTagName("li")[i].style.visibility)
    // }
})
//Clicking outside of `.hamburger-menu` should close the menu if it is open.
//Clicking inside of `.hamburger-menu` should NOT close the menu.


//Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`.


//Under all circumstances, when the menu is open, `aria-expanded` should be set to `true` on `button.hamburger-btn`, and set to `false` when the menu is closed.

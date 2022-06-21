//When the `button.hamburger-btn` element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the `show-menu` class on the `.hamburger-menu` element should show/hide the menu.
var hamburgerMenu = document.getElementById('main-menu');
var getBTN = document.getElementsByClassName("hamburger-btn")[0];

document.getElementsByClassName("hamburger-btn")[0].addEventListener("click", function(){
    console.log('click')
    
    //var getBTN = document.getElementsByClassName("hamburger-btn")[0];
    //var hamburgerMenu = document.getElementById('main-menu');
    if(getBTN.ariaExpanded == "true")
    {
        console.log('if')
        hamburgerMenu.classList.remove('show-menu')
        getBTN.ariaExpanded = "false";
    }
    else
    {
        console.log('else')
        hamburgerMenu.classList.add('show-menu')
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


document.getElementsByTagName("body")[0].addEventListener("click", function(e){
   
    if (e.target.classList.contains("hamburger-btn")||(hamburgerMenu.contains(e.target))||(e.target.classList.contains('hamburger-menu'))){
        console.log('ignore')
    } else {
        hamburgerMenu.classList.remove('show-menu')
    }
})
function handleKey(e){
    if (e.key == "Escape") {
        hamburgerMenu.classList.remove('show-menu')
        getBTN.focus()
    }
}
document.onkeyup = handleKey
//Clicking outside of `.hamburger-menu` should close the menu if it is open.
//Clicking inside of `.hamburger-menu` should NOT close the menu.


//Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`.


//Under all circumstances, when the menu is open, `aria-expanded` should be set to `true` on `button.hamburger-btn`, and set to `false` when the menu is closed.

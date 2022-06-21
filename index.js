var hamburgerMenu = document.getElementById('main-menu');
var getBTN = document.getElementsByClassName("hamburger-btn")[0];

document.getElementsByClassName("hamburger-btn")[0].addEventListener("click", function(){
    console.log('click')
    
   
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

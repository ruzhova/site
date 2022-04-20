
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropMenu() {
  document.getElementById("dropdownmenu").classList.toggle("show-menu");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-menu')) {
        openDropdown.classList.remove('show-menu');
      }
    }
  }
}

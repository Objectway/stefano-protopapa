document.addEventListener('DOMContentLoaded', function(event) {
    var auto = [];
    auto.push('Ferrari', 'Lamborghini', 'McLaren', 'Audi');
    const popup = document.querySelector(".child");
    const overlay = document.querySelector(".div_overlay");
    const close = document.querySelector(".close");
    var open = false;
  
    document.getElementsByClassName("view_arr")[0].addEventListener("click", myFunction);

    function myFunction() {

        popup.className += " child--isVisible";
        overlay.className += " div_overlay--isVisible";
        
        auto.forEach(function(element) {
            popup.innerHTML += element + "<br>";
        });
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            popup.className = "child";
            overlay.className = "div_overlay";
            popup.innerHTML = "";
        }
    };

    close.onclick = function(){
        popup.className = "child";
        overlay.className = "div_overlay";
        popup.innerHTML = "";
    };

    /*document.onclick = function(event) {
        if(popup.className == "child child--isVisible" && event.target.className != "child_text")
        {
            popup.className = "child";
            overlay.className = "div_overlay";
            popup_text.innerHTML = "";
        }
    };*/
    document.querySelector(".div_overlay").onclick = function(event){
        popup.className = "child";
        overlay.className = "div_overlay";
        popup.innerHTML = "";
    }
  });
  
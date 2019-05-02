document.addEventListener('DOMContentLoaded', function(event) {
    const nome = document.getElementsByName("inputNome")[0];
    const tel = document.getElementsByName("inputTel")[0];
    const mail = document.getElementsByName("inputMail")[0];
    const ym  = document.getElementsByName("inptMsg")[0];

    const popup = document.querySelector(".child");
    const overlay = document.querySelector(".div_overlay");
    const popUpBody = document.querySelector(".popUpBody");
    const close = document.querySelector(".close");
    
    document.getElementById("sub-form").addEventListener("click", myFunction);

    function myFunction() {
        const nome_text = nome.value;
        const tel_text = tel.value;
        const mail_text = mail.value;
        const ym_text = ym.value;
        let validato = true;
        nome.style.border = "1px solid grey";
        mail.style.border = "1px solid grey";
        ym.style.border = "1px solid grey";

        if(nome_text === ""){
            nome.style.border = "1px solid red";
            validato = false;
        }

        if(!validateEmail(mail_text)){
            mail.style.border = "1px solid red";
            validato = false;
        }

        if(ym_text === ""){
            ym.style.border = "1px solid red";
            validato = false;
        }

        if(validato)
        {
            popup.className += " child--isVisible";
            overlay.className += " div_overlay--isVisible";
            popUpBody.innerHTML = "<div><span>Fullname:</span><span>" + nome_text + "</span></div>";
            popUpBody.innerHTML += "<div><span>Telefono:</span><span>" + tel_text + "</span></div>";
            popUpBody.innerHTML += "<div><span>Email:</span><span>" + mail_text + "</span></div>";
        }
    }

    close.onclick = function(){
        popup.className = "child";
        overlay.className = "div_overlay";
        popUpBody.innerHTML = "";
    };

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            popup.className = "child";
            overlay.className = "div_overlay";
            popUpBody.innerHTML = "";
        }
    };

    document.querySelector(".div_overlay").onclick = function(event){
        popup.className = "child";
        overlay.className = "div_overlay";
        popUpBody.innerHTML = "";
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  });
  
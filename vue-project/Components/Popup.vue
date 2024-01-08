<template>
    <div id="popup" class="popup">
        <div id="popupBody" class="popupBody">
            <div class="popupContent">
                <button class="popupClose mt-3 ml-3 mb-2" id="popupClose" type="button">✖</button>
                <form id="popupForm1" class="popupForm d-flex flex-column align-items-stretch" accept-charset="UTF-8">
                    <label class="px-3">
                        <input class="form_elem form_name" id="formName1" name="field_name" placeholder="Ваше имя"
                            required>
                    </label>
                    <label class="px-3">
                        <input class="form_elem form_number" id="formNumber1" name="field_number"
                            placeholder="Ваш номер" required>
                    </label>
                    <label class="px-3">
                        <input class="form_elem form_email" id="formEmail1" name="field_email" type="email"
                            placeholder="Ваш email" required>
                    </label>
                    <label class="px-3">
                        <textarea class="form_elem form_message" id="formMessage1" name="field_review"
                            placeholder="Ваш коментарий" rows="3"></textarea>
                    </label>
                    <label class="mx-3">
                        <input class="form_check" id="formCheck1" name="field_check" type="checkbox">
                        Отправляя заявку, я
                        соглашаюсь на <a href="/privacy-policy">обработку моих персональных данных</a>
                    </label>
                    <input class="btn mx-3 mb-3" type="submit" value="Отправить">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
window.addEventListener("DOMContentLoaded", function () {
    let name = document.getElementById("formName1");
    let number = document.getElementById("formNumber1");
    let email = document.getElementById("formEmail1");
    let message = document.getElementById("formMessage1");


    name.value = localStorage.getItem('formName');
    name.addEventListener("change", event => {
        localStorage.setItem('formName', name.value);
    });

    number.value = localStorage.getItem('formName');
    number.addEventListener("change", event => {
        localStorage.setItem('formNumber', number.value);
    });

    email.value = localStorage.getItem('formEmail');
    email.addEventListener("change", event => {
        localStorage.setItem('formEmail', email.value);
    });

    message.value = localStorage.getItem('formMessage');
    message.addEventListener("change", event => {
        localStorage.setItem('formMessage', message.value);
    });

    let check = document.getElementById("formCheck1");
    let form = document.getElementById("popupForm1");
    form.addEventListener("submit", event => {
        if (check.checked == true) {
            fetch('https://formcarry.com/s/0gxD5E0FYNU', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    formName: name.value,
                    formNumber: number.value,
                    formEmail: email.value,
                    formMessage: message.value
                })
            })
                .then(response => console.log(response))
                .then((data) => {
                    let r = document.getElementById("formAnswer");
                    r.innerHTML = "Success!";
                    r.style.color = "lightgreen";
                    localStorage.removeItem('formName');
                    localStorage.removeItem('formNumber');
                    localStorage.removeItem('formEmail');
                    localStorage.removeItem('formMessage');
                    name.value = localStorage.getItem('formName');
                    number.value = localStorage.getItem('formNumber');
                    email.value = localStorage.getItem('formEmail');
                    message.value = localStorage.getItem('formMessage');
                    check.checked = false;
                })
                .catch((error) => {
                    let r = document.getElementById("formAnswer");
                    r.innerHTML = "Error!";
                    r.style.color = "red";
                });
            event.preventDefault();
        }
        else {
            alert("Дайте свое согласие на отправку");
            event.preventDefault();
        }
    })
});


</script>



<style>
/* popup */

.popup {
    max-width: 500px;
    width: 90%;
    background-color: #394047;
    border: solid 3px #151618;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
}

.popupClose {
    color: #151618;
    background-color: coral;
    border-style: solid;
    border-color: #151618;
    border-radius: 5px;
    border-width: 2px;
}

.popupClose:hover {
    color: coral;
    background-color: transparent;
    border-style: solid;
    border-color: coral;
    border-radius: 5px;
    border-width: 2px;
}
</style>
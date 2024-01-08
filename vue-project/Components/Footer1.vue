<template>
    <footer>
      <div class="footer_block container  py-5">
        <div class="all_footer d-flex flex-wrap my-4">
          <div class="footer_info col-md-6 col-xs-12 col-sm-6 p-0 my-3">
            <div class="footer_wrapper mr-0 mr-md-5">
              <div class="support_text mb-3 ">
                Подать заявку на поддержку или разработку сайта
              </div>
              <div class="support_text2 pb-2 pb-md-5">Вам нужно доработать функционал готового
                Drupal-сайта
                или создать новый? Оценить стоимость разработки под ваши запросы? Просто
                свяжитесь с нами, и наш менеджер поможет вам!
              </div>
              <div class="contacts pt-2 pt-md-5">
                <a href="tel:">+8(988)346-60-**</a> <br>
                <a href="mailto:">swag@mail.sheesh</a>
              </div>
            </div>
          </div>
  
  
          
          <div class="footer_form col-md-6 col-xs-12 col-sm-6 p-0 my-3">
            <div class="footer_wrapper ml-0 ml-md-5">
              <form id="popupForm" class="popupForm d-flex flex-column align-items-stretch" accept-charset="UTF-8">
                <label>
                  <input class="form_elem form_name" id="formName" name="field_name" placeholder="Ваше имя" required>
                </label>
                <label>
                  <input class="form_elem form_number" id="formName" name="field_name" placeholder="Ваш номер" required>
                </label>
                <label>
                  <input class="form_elem form_email" id="formEmail" name="field_email" type="email"
                    placeholder="Ваш email" required>
                </label>
                <label>
                  <textarea class="form_elem form_message" id="formMessage" name="field_review"
                    placeholder="Ваш коментарий" rows="3"></textarea>
                </label>
                <label>
                  <input class="form_check" id="formCheck" name="field_check" type="checkbox">
                  Отправляя заявку, я
                  соглашаюсь на <a href="/privacy-policy">обработку моих персональных данных</a>
                </label>
                <input class="btn" type="submit" value="Отправить">
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="underline">
        <div class="container">
          <div class="lower_part">
            <p>Copyright &copy; Initlab, LLC <br> Drupal is a registered trademark of Dries Buytaert.</p>
          </div>
        </div>
      </div>
      <img class="footer_paw paw1" src="../img/right-quote-sign.svg" alt="paw" />
      <img class="footer_paw paw2" src="../img/right-quote-sign.svg" alt="paw" />
    </footer>
  </template>
  
  <script>
  window.addEventListener("DOMContentLoaded", function () {
      let name = document.getElementById("formName");
      let number = document.getElementById("formNumber");
      let email = document.getElementById("formEmail");
      let message = document.getElementById("formMessage");
  
  
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
  
      let check = document.getElementById("formCheck");
      let form = document.getElementById("popupForm");
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
                      alert("Success!");
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
                  .catch((error) => { alert(error.value); });
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
  
  
  
  
  
  
  /*-------------------FOOTER-----------------------*/
  
  footer {
    position: relative;
    background-color: #394047;
    color: #ffffff;
    overflow: hidden;
    z-index: 2;
  }
  
  .all_footer {
    position: relative;
    z-index: 10;
  }
  
  footer a {
    color: white;
  }
  
  .lower_part {
    padding-bottom: 50px;
    padding-top: 30px;
  }
  
  .underline {
    position: relative;
    border-top: 2px solid gray;
    margin-top: 10px;
    z-index: 10;
  }
  
  input {
    background: transparent;
    border: none;
  }
  
  .footer_paw {
    position: absolute;
    transform: rotate(-40deg);
    z-index: 3;
  }
  
  footer .paw1 {
    top: -10%;
    left: 50%;
  }
  
  footer .paw2 {
    bottom: -10%;
    right: 5%;
    scale: 1.4;
  }
  
  
  /* form */
  form .btn {
    background-color: coral;
    color: black;
  }
  
  form .btn:hover {
    background-color: transparent;
    color: rgb(255, 255, 255);
  }
  
  form a {
    color: coral;
  }
  
  .form_elem {
    padding: 13px 15px;
    color: white;
    position: relative;
    width: 100%;
    border-style: solid;
    border-color: #151618;
    border-radius: 5px;
    border-width: 2px;
    background-color: transparent;
  }
  </style>
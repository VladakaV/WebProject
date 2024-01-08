<template>
    <div>
        <form @submit.prevent="formSubmit" class="popupForm d-flex flex-column align-items-stretch"
            accept-charset="UTF-8">
            <label>
                <!-- <input type="text" class="form_elem form_name form-control" placeholder="Ваше имя" v-model="form.name"> -->
                <input type="text" class="form_elem form_name form-control" placeholder="Ваше имя" v-model="name">
            </label>
            <label>
                <!-- <input type="text" class="form_elem form_number form-control" placeholder="Ваш номер"
                    v-model="form.number"> -->
                <input type="text" class="form_elem form_number form-control" placeholder="Ваш номер" v-model="number">
            </label>
            <label>
                <!-- <input type="email" class="form_elem form_email form-control" placeholder="Ваш email"
                    v-model="form.email"> -->
                <input type="email" class="form_elem form_email form-control" placeholder="Ваш email" v-model="email">
            </label>
            <label>
                <!-- <textarea class="form_elem form_message form-control" placeholder="Ваш коментарий" rows="3"
                    v-model="form.message"></textarea> -->
                <textarea class="form_elem form_message form-control" placeholder="Ваш коментарий" rows="3"
                    v-model="message"></textarea>
            </label>
            <label>
                <input class="form_check" type="checkbox" v-model="checked">
                Отправляя заявку, я
                соглашаюсь на <a href="/privacy-policy">обработку моих персональных данных</a>
            </label>
            <input class="btn" type="submit" value="Отправить">
            <div id="formAnswer" class="px-3 py-3"></div>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            // form: {
            //     name: '',           
            //     number: '',
            //     email: '',
            //     message: ''
            // },

            name: '',
            number: '',
            email: '',
            message: '',
            checked: false
        }
    },

    methods: {
        formSubmit() {
            if (this.checked == true) {
                if (this.checkNumber(this.number)) {
                    fetch('https://formcarry.com/s/0gxD5E0FYNU', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                        body: JSON.stringify({

                            // Name: this.form.name,
                            // Number: this.form.number,
                            // Email: this.form.email,
                            // Message: this.form.message

                            Name: this.name,
                            Number: this.number,
                            Email: this.email,
                            Message: this.message
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
                            this.name = '';
                            this.number = '';
                            this.email = '';
                            this.message = '';
                            this.checked = false;
                        })
                        .catch((error) => {
                            let r = document.getElementById("formAnswer");
                            r.innerHTML = "Error!";
                            r.style.color = "red";
                            console.log(error.value);
                        });;
                }
                else {
                    let r = document.getElementById("formAnswer");
                    r.innerHTML = "Неверный формат номера или недопустимые символы. Попробуйте ввести номер в формате +7(***)***-**-**";
                    r.style.color = "red";
                    this.number = '+7()--'
                }
            }
            else {
                let r = document.getElementById("formAnswer");
                r.innerHTML = "Дайте свое согласие на отправку";
                r.style.color = "coral";
            }

        },

        checkNumber(num) {
            let regexp1 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            if (!regexp1.test(String(num)))
                return false;
            return true;
        }
    },

    mounted() {
        this.name = localStorage.formName;
        this.number = localStorage.formNumber;
        this.email = localStorage.formEmail;
        this.message = localStorage.formMessage;
    },

    watch: {
        // form.name(newName){}
        name(newName) {
            localStorage.setItem('formName', newName);
        },
        number(newNumber) {
            localStorage.setItem('formNumber', newNumber);
        },
        email(newEmail) {
            localStorage.setItem('formEmail', newEmail);
        },
        message(newMessage) {
            localStorage.setItem('formMessage', newMessage);
        }
    }
}
</script>
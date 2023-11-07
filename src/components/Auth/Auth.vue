<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div style="margin: auto;" class="text-center pt-5">
                <img src="@/assets/logo.png" alt="" width="128" class="mt-5 mb-5">
            <!-- <h1 class="mb-5 mt-5">Подключайся к нам</h1> -->
            <div class="box-shadow">
                <div v-if="!showRegisterForm">
                    <h3 class="mb-4">Вход</h3>
                    <form @submit="authorize()">
                        <input type="email" v-model="email" placeholder="Email" class="form-control mb-3" required>
                        <input type="password" v-model="password" placeholder="Пароль" class="form-control mb-3" required>
                        <button type="submit" class="btn btn-outline-primary mb-3">Войти</button>
                    </form>
                </div>
                <div v-else-if="showRegisterForm">
                    <h3 class="mb-4">Регистрация</h3>
                    <form @submit="register()">
                        <input type="text" v-model="fullname" placeholder="ФИО" class="form-control mb-3" required>
                        <input type="email" v-model="email" placeholder="Email" class="form-control mb-3" required>
                        <input type="password" v-model="password" placeholder="Пароль" class="form-control mb-3" required>
                        <button type="submit" class="btn btn-outline-primary mb-3">Регистрация</button>
                    </form>
                </div>
            </div>
            <div style="font-size:14px;" class="mt-5">
                <a href="javascript://;" @click="switchForm">Регистрация</a> | <a href="#">Забыли пароль?</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            fullname: '',
            showRegisterForm: false
        }
    },
    created() {},
    methods: {
        switchForm() {
            this.showRegisterForm = !this.showRegisterForm;
            console.log(this.showRegisterForm)
        },
        authorize() {
            this.$router.replace('/profile');
            return false;
        },
        register() {
            this.$router.replace('/profile');
            return false;
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
}
.box-shadow {
    background-color: #fff;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 0 64px #eee;
}
.position-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
h1, h3 {
    font-weight: bold;
}
h1 {
    font-size:36px;
}
h3 {
    font-size:24px;
}
a {
    text-decoration: none;
}
.btn {
    width: 100%;
}
/* @media (min-width: 720px) {
    .container {
        max-width: 480px;
    }
} */
</style>
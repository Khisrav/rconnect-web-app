<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand montserrat" href="#">RCONNECT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="link in navbarLinks" :key="link" class="nav-item">
                        <RouterLink :to="link.to" :class="($route.path == link.to) ? 'active' : ''" class="nav-link">{{ link.name }}</RouterLink>
                    </li>
                </ul>
                <div class="d-flex">
                    Иванов И.
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "User Navbar",
    data() {
        return {
            navbarLinks: [
                {to: '/profile', name: 'Мой профиль'},
                {to: '/feed', name: 'Лента'},
                {to: '/messenger', name: 'Сообщения'},
                {to: '/friends', name: 'Друзья'},
                {to: '/communities', name: 'Сообщества'},
                {to: '/saved', name: 'Сохраненное'},
                {to: '/settings', name: 'Настройки'},
            ]
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Montserrat', 'Open Sans', sans-serif;
}
.navbar-brand {
    font-weight: bold;
}
@media (max-width:992px) {
    .d-flex {
        display: none !important;
    }
}
</style>